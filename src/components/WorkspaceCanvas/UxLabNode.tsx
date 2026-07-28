import React, { useState } from 'react';
import { UX_LAB_ITEMS } from '../../data/workspaceData';
import type { UxLabItem } from '../../data/workspaceData';
import { CheckSquare, Sliders } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const UxLabNode: React.FC = () => {
  const [selectedLabId] = useState<string>(UX_LAB_ITEMS[0].id);
  const [sliderVal, setSliderVal] = useState<number>(UX_LAB_ITEMS[0].defaultValue);

  const labItem: UxLabItem = UX_LAB_ITEMS.find((item) => item.id === selectedLabId) || UX_LAB_ITEMS[0];
  const outcome = labItem.getOutcome(sliderVal);

  return (
    <div id="node-uxlab" className="w-full py-12 px-4 max-w-6xl mx-auto">
      <div className="bg-[#ffffff] border border-black/10 rounded-xl p-8 sm:p-10 shadow-xl relative overflow-hidden font-sans">
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6 font-mono text-xs text-slate-500">
          <div className="flex items-center space-x-2 text-[#00c2ff]">
            <CheckSquare className="w-4 h-4" />
            <span className="font-bold tracking-tight text-[#1a1a1e]">FRAME 04 // UX DECISION LAB</span>
          </div>
        </div>

        <div className="bg-[#f0eeeb] border border-black/10 p-6 rounded-lg font-mono text-xs space-y-6">
          <div className="bg-[#ffffff] p-4 rounded border border-black/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-600 flex items-center gap-1 font-bold">
                <Sliders className="w-3.5 h-3.5 text-[#ff5a36]" /> {labItem.paramName}:
              </span>
              <span className="text-[#1a1a1e] font-bold">{sliderVal}</span>
            </div>

            <input
              type="range"
              min={labItem.minValue}
              max={labItem.maxValue}
              value={sliderVal}
              onChange={(e) => {
                soundFx.playKeypress();
                setSliderVal(Number(e.target.value));
              }}
              className="w-full accent-[#ff5a36] cursor-pointer"
            />
          </div>

          <div className="bg-[#ffffff] p-5 rounded border border-black/10 font-sans">
            <div className="font-mono text-lg font-bold text-[#ff5a36]">{outcome.metric}</div>
            <p className="text-slate-700 text-xs leading-relaxed mt-2">{outcome.rationale}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
