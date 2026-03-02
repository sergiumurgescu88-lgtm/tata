import React from 'react';
import { BrandProfile } from '../types';

interface BrandSetupProps {
  brand: BrandProfile;
  setBrand: (brand: BrandProfile) => void;
}

const BrandSetup: React.FC<BrandSetupProps> = ({ brand, setBrand }) => {
  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-xl">
        <h1 className="text-3xl font-bold mb-8">Brand Configuration</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Brand Name</label>
            <input
              type="text"
              value={brand.name}
              onChange={(e) => setBrand({ ...brand, name: e.target.value })}
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-smart-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Brand Tone & Voice</label>
            <textarea
              value={brand.tone}
              onChange={(e) => setBrand({ ...brand, tone: e.target.value })}
              className="w-full p-4 h-32 rounded-xl border border-slate-200 focus:ring-2 focus:ring-smart-500 outline-none resize-none"
              placeholder="e.g. Technical, authoritative, yet approachable for non-technical CEOs."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Target Audience</label>
            <input
              type="text"
              value={brand.targetAudience}
              onChange={(e) => setBrand({ ...brand, targetAudience: e.target.value })}
              className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-smart-500 outline-none"
              placeholder="e.g. CFOs of manufacturing plants"
            />
          </div>

          <div className="pt-6">
            <button className="px-8 py-4 bg-smart-600 text-white font-bold rounded-xl shadow-lg hover:bg-smart-700 transition-all w-full">
              Save AI Persona
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSetup;