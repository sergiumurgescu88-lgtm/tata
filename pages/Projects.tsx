import React from 'react';
import { projectsData } from '../data/content';

const Projects: React.FC = () => {
  return (
    <div className="bg-white py-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Portofoliu de Referință</h2>
            <p className="mt-4 text-xl text-slate-500">
              Proiecte care demonstrează capacitatea noastră de a gestiona complexitatea tehnică la scară largă.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             {projectsData.map((project) => (
               <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-slate-200">
                 <div className="flex-shrink-0 h-48 bg-slate-200 relative">
                   {/* Placeholder for project image */}
                   <img 
                      className="h-full w-full object-cover" 
                      src={`https://picsum.photos/400/300?random=${project.id}`} 
                      alt={project.title} 
                   />
                   <div className="absolute top-0 right-0 bg-smart-600 text-white text-xs font-bold px-3 py-1 m-2 rounded">
                     {project.capacity}
                   </div>
                 </div>
                 <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                   <div className="flex-1">
                     <p className="text-sm font-medium text-smart-600">
                       {project.category}
                     </p>
                     <div className="block mt-2">
                       <p className="text-xl font-semibold text-slate-900">
                         {project.title}
                       </p>
                       <p className="mt-3 text-base text-slate-500">
                         {project.description}
                       </p>
                     </div>
                   </div>
                   <div className="mt-6 flex items-center">
                     <div className="flex-shrink-0">
                       <span className="sr-only">{project.client}</span>
                       <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                         </svg>
                       </div>
                     </div>
                     <div className="ml-3">
                       <p className="text-sm font-medium text-slate-900">
                         Client:
                       </p>
                       <p className="text-sm text-slate-500">
                         {project.client}
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Projects;
