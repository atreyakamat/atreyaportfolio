import React, { useState } from 'react';
import { LIVING_PROJECT_FILES } from '../../data/workspaceData';
import type { DesignFileProject } from '../../data/workspaceData';
import { FileText, Layers, Code2, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const LivingProjectFileNode: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(LIVING_PROJECT_FILES[0].id);
  const [activeStage, setActiveStage] = useState<'SKETCH' | 'WIREFRAME' | 'PROTOTYPE' | 'SHIPPED'>('SKETCH');
  const [isLayerPeeled, setIsLayerPeeled] = useState<boolean>(false);

  const project: DesignFileProject = LIVING_PROJECT_FILES.find((p) => p.id === selectedProjectId) || LIVING_PROJECT_FILES[0];

  return (
    <div id="node-projects" className="w-full py-12 px-4 max-w-6xl mx-auto">
      <div className="bg-[#ffffff] border border-black/10 rounded-xl p-8 sm:p-10 shadow-xl relative overflow-hidden font-sans">
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6 font-mono text-xs text-slate-500">
          <div className="flex items-center space-x-2 text-[#ff5a36]">
            <FileText className="w-4 h-4" />
            <span className="font-bold tracking-tight text-[#1a1a1e]">FRAME 03 // LIVING PROJECT FILES</span>
          </div>
          <span className="bg-[#f0eeeb] px-2.5 py-1 rounded text-[#1a1a1e] font-bold">Figma Design File</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1a1a1e] mb-3">
          Projects behave like living design files.
        </h2>

        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar font-mono text-xs">
          {LIVING_PROJECT_FILES.map((p) => {
            const isSelected = p.id === selectedProjectId;
            return (
              <button
                key={p.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedProjectId(p.id);
                  setActiveStage('SKETCH');
                  setIsLayerPeeled(false);
                }}
                className={`px-4 py-2.5 rounded border whitespace-nowrap cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#1a1a1e] text-white font-bold shadow-md'
                    : 'bg-[#f0eeeb] border-black/5 text-slate-600 hover:text-[#1a1a1e]'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        <div className="bg-[#f0eeeb] border border-black/10 rounded-lg overflow-hidden shadow-inner">
          <div className="p-4 bg-[#ffffff] border-b border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div>
              <span className="text-[#ff5a36] font-bold text-[10px] block uppercase">CATEGORY: {project.category}</span>
              <span className="text-[#1a1a1e] font-bold font-sans text-lg">{project.name}</span>
            </div>

            <div className="flex items-center gap-1 bg-[#f0eeeb] p-1 rounded border border-black/5">
              {(['SKETCH', 'WIREFRAME', 'PROTOTYPE', 'SHIPPED'] as const).map((stage, idx) => (
                <button
                  key={stage}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStage(stage);
                  }}
                  className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                    activeStage === stage
                      ? 'bg-[#1a1a1e] text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-[#1a1a1e]'
                  }`}
                >
                  0{idx + 1}. {stage}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-[#ffffff] border-b border-black/10 flex items-center justify-between font-mono">
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest">HERO IMPACT METRIC</div>
              <div className="text-4xl md:text-5xl font-bold font-display text-[#ff5a36]">{project.heroMetric.value}</div>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                setIsLayerPeeled(!isLayerPeeled);
              }}
              className={`px-4 py-2 rounded font-mono text-xs cursor-pointer transition-all flex items-center gap-2 ${
                isLayerPeeled
                  ? 'bg-[#00c2ff] text-white font-bold'
                  : 'bg-[#f0eeeb] border border-black/10 text-[#1a1a1e] hover:bg-[#e2e0db]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{isLayerPeeled ? 'Hide Underlying Architecture' : 'Peel Layer'}</span>
            </button>
          </div>

          <div className="p-6 font-mono text-xs space-y-6">
            {activeStage === 'SKETCH' && (
              <div className="space-y-4">
                <div className="text-sm font-bold text-[#1a1a1e] font-sans">{project.stages.sketch.title}</div>
                <p className="font-sans text-slate-700 text-sm leading-relaxed">{project.stages.sketch.description}</p>
              </div>
            )}

            {activeStage === 'PROTOTYPE' && (
              <div className="space-y-4">
                <div className="text-sm font-bold text-[#1a1a1e] font-sans">{project.stages.prototype.title}</div>
                <div className="bg-[#1a1a1e] text-white p-4 rounded overflow-x-auto">
                  <div className="flex justify-between text-slate-400 mb-2 border-b border-white/10 pb-2">
                    <span className="text-[#00c2ff] font-bold flex items-center gap-1"><Code2 className="w-4 h-4" /> EXECUTABLE CODE</span>
                  </div>
                  <pre className="text-xs text-[#00c2ff]">{project.stages.prototype.codeSnippet}</pre>
                </div>
              </div>
            )}

            {activeStage === 'SHIPPED' && (
              <div className="space-y-4">
                <div className="text-sm font-bold text-[#1a1a1e] font-sans">{project.stages.shipped.title}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                  {project.stages.shipped.productionMetrics.map((pm, i) => (
                    <div key={i} className="bg-[#ffffff] p-3 rounded border border-black/10 text-slate-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5a36]" /> {pm}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
