import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Starting application mount...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Application mount successful.");
  } catch (error) {
    console.error("Error mounting React application:", error);
    container.innerHTML = `
      <div style="color: #ef4444; padding: 20px; font-family: system-ui; max-width: 800px; margin: 0 auto;">
        <h2 style="font-size: 20px; font-weight: bold;">Render Error</h2>
        <pre style="background: #fef2f2; padding: 15px; border-radius: 8px; margin-top: 10px; overflow: auto;">${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
} else {
  console.error("Failed to find root container");
}