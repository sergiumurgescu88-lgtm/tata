import React, { useState, useEffect } from 'react';
import { generateSpeech } from '../services/gemini';

interface TTSButtonProps {
  text: string;
}

const TTSButton: React.FC<TTSButtonProps> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [source, setSource] = useState<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    return () => {
      if (source) source.stop();
      if (audioContext && audioContext.state !== 'closed') audioContext.close();
    };
  }, [source, audioContext]);

  const handlePlay = async () => {
    if (isPlaying) {
      source?.stop();
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);
    try {
      const buffer = await generateSpeech(text);
      
      if (buffer) {
        // Create context with specific sample rate for Gemini (24kHz)
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        setAudioContext(ctx);
        
        // Manual PCM Decoding (16-bit signed integer, 24kHz, mono)
        // Gemini API returns raw PCM data without headers, so native decodeAudioData won't work.
        const pcmData = new Int16Array(buffer);
        const audioBuffer = ctx.createBuffer(1, pcmData.length, 24000);
        const channelData = audioBuffer.getChannelData(0);
        
        for (let i = 0; i < pcmData.length; i++) {
          // Normalize 16-bit integer to [-1.0, 1.0] float
          channelData[i] = pcmData[i] / 32768.0;
        }

        const src = ctx.createBufferSource();
        src.buffer = audioBuffer;
        src.connect(ctx.destination);
        src.onended = () => setIsPlaying(false);
        src.start(0);
        setSource(src);
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Error playing audio", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePlay}
      disabled={isLoading}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
        isPlaying 
          ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
          : 'bg-smart-50 text-smart-700 border-smart-200 hover:bg-smart-100'
      }`}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Se încarcă...
        </span>
      ) : isPlaying ? (
        <>
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" /></svg>
          Stop
        </>
      ) : (
        <>
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.972 7.972 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          Ascultă Descrierea
        </>
      )}
    </button>
  );
};

export default TTSButton;