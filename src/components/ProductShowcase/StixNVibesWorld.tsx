import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, ShoppingCart, Compass, Code2 } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const StixNVibesWorld: React.FC = () => {
  const [isStickerPeeled, setIsStickerPeeled] = useState<boolean>(false);
  const [finish, setFinish] = useState<'Matte' | 'Holographic' | 'Glitter'>('Holographic');
  const [quantity, setQuantity] = useState<number>(50);
  const [showDepth, setShowDepth] = useState<boolean>(false);
  const [holoAngle, setHoloAngle] = useState<number>(45);

  const pricePerUnit = finish === 'Holographic' ? 1.45 : finish === 'Glitter' ? 1.65 : 1.0;
  const totalPrice = Math.round(quantity * pricePerUnit * 10);

  const handlePeelSticker = () => {
    soundFx.playClick();
    setIsStickerPeeled(!isStickerPeeled);
  };

  const handleStickerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const angle = Math.round((x / rect.width) * 180);
    setHoloAngle(angle);
  };

  return (
    <section id="project-stixnvibes" className="py-24 px-6 max-w-6xl mx-auto select-none">
      
      {/* World Art-Direction Banner */}
      <div className="bg-gradient-to-r from-[#ff5a36]/10 via-[#ffaa00]/10 to-transparent p-4 rounded-t-xl border-t border-x border-black/10 font-mono text-xs flex justify-between items-center text-[#1a1a1e]">
        <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#ff5a36]">
          <Sparkles className="w-4 h-4" /> WORLD 01 // STIX 'N' VIBES (TACTILE COMMERCE)
        </span>
        <span className="bg-[#ffffff] px-2.5 py-1 rounded border border-black/10 font-bold shadow-xs">
          Paper & Holographic Packaging
        </span>
      </div>

      {/* Main World Container */}
      <div className="bg-[#ffffff] border border-black/10 rounded-b-xl p-8 sm:p-12 shadow-2xl relative font-sans">
        
        {/* First Layer: Problem & Hook */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-[#ff5a36] font-bold tracking-widest block uppercase mb-2">
            FIRST LAYER // EXPERIENCE & OUTCOME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-[#1a1a1e] tracking-tight mb-4">
            What if ordering custom merchandise took one tap?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Traditional sticker quotes required manual messaging and static tables, causing high customer drop-off. We built a single-tap WhatsApp payload generator that calculates area surcharges instantly.
          </p>
        </div>

        {/* Interactive Tactile Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left: Peelable Vinyl Sticker Component */}
          <div className="lg:col-span-6 bg-[#f9f8f6] border border-black/10 p-8 rounded-xl flex flex-col items-center justify-center relative overflow-hidden shadow-inner min-h-[340px]">
            <div className="text-[10px] font-mono text-slate-400 absolute top-4 left-4 uppercase tracking-widest">
              TACTILE OBJECT // TAP TO PEEL // MOVE FOR HOLO SHEEN
            </div>

            {/* Interactive Sticker Object */}
            <motion.div
              onClick={handlePeelSticker}
              onMouseMove={handleStickerMouseMove}
              animate={{
                rotate: isStickerPeeled ? -8 : 0,
                scale: isStickerPeeled ? 1.05 : 1
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="w-60 h-60 rounded-3xl p-6 text-white shadow-2xl cursor-pointer relative flex flex-col justify-between overflow-hidden border-2 border-white"
              style={{
                background: finish === 'Holographic'
                  ? `linear-gradient(${holoAngle}deg, #ff5a36, #ffaa00, #00c2ff, #a855f7)`
                  : finish === 'Glitter'
                  ? `radial-gradient(circle at center, #ffaa00, #ff5a36, #1a1a1e)`
                  : '#1a1a1e'
              }}
            >
              <div className="flex justify-between items-start font-mono text-xs z-10">
                <span className="font-bold tracking-wider">STIX 'N' VIBES</span>
                <span className="bg-white/25 px-2 py-0.5 rounded text-[10px] backdrop-blur-xs font-bold">{finish}</span>
              </div>

              <div className="text-center my-auto z-10">
                <div className="text-3xl font-bold font-display tracking-tight">CUSTOM VINYL</div>
                <div className="text-xs opacity-90 font-mono mt-1">Waterproof // Die-Cut</div>
              </div>

              <div className="flex justify-between items-end font-mono text-[10px] opacity-80 z-10">
                <span>GOA, INDIA</span>
                <span>PEEL ME ↑</span>
              </div>

              {/* Peel Back Flap Effect */}
              {isStickerPeeled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-0 right-0 w-28 h-28 bg-white/95 backdrop-blur-md rounded-tl-full shadow-2xl border-t border-l border-black/10 p-4 text-[#1a1a1e] font-mono text-[10px] flex items-end justify-end font-bold z-20"
                >
                  PEELED!
                </motion.div>
              )}
            </motion.div>

            <span className="text-xs font-mono text-slate-500 mt-6">
              {isStickerPeeled ? '✨ Sticker peeled! Substrate area matrix revealed.' : '👉 Tap sticker to peel vinyl sheet off paper backing'}
            </span>
          </div>

          {/* Right: Live Material Matrix Configurator */}
          <div className="lg:col-span-6 bg-[#f0eeeb] border border-black/10 p-8 rounded-xl flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-6 font-mono text-xs">
                <span className="font-bold text-[#1a1a1e]">LIVE MATERIAL MATRIX</span>
                <span className="text-[#ff5a36] font-bold">SUB-10MS CALCULATOR</span>
              </div>

              {/* Finish Selector */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                <label className="text-slate-600 block">Select Material Finish:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Matte', 'Holographic', 'Glitter'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => {
                        soundFx.playClick();
                        setFinish(f);
                      }}
                      className={`py-2 rounded border transition-all cursor-pointer text-xs font-bold ${
                        finish === f
                          ? 'bg-[#1a1a1e] text-white border-[#1a1a1e] shadow-xs'
                          : 'bg-[#ffffff] text-slate-700 border-black/10 hover:border-black/30'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-2 mb-6 font-mono text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Quantity:</span>
                  <span className="font-bold text-[#1a1a1e]">{quantity} Vinyl Stickers</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={quantity}
                  onChange={(e) => {
                    soundFx.playKeypress();
                    setQuantity(Number(e.target.value));
                  }}
                  className="w-full accent-[#ff5a36] cursor-pointer"
                />
              </div>
            </div>

            {/* Price & WhatsApp Payload Button */}
            <div className="bg-[#ffffff] p-4 rounded-lg border border-black/10 flex items-center justify-between font-mono">
              <div>
                <div className="text-[10px] text-slate-500 uppercase">CALCULATED TOTAL</div>
                <div className="text-2xl font-bold font-display text-[#1a1a1e]">₹{totalPrice}</div>
              </div>

              <button
                onClick={() => {
                  soundFx.playSuccess();
                  alert(`Opening pre-filled WhatsApp checkout payload for ${quantity} ${finish} stickers at ₹${totalPrice}!`);
                }}
                className="px-4 py-2.5 bg-[#1a1a1e] text-white font-sans font-bold text-xs rounded hover:bg-[#2d2d34] transition-all flex items-center space-x-2 cursor-pointer shadow-md"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#00c2ff]" />
                <span>1-Tap WhatsApp Checkout</span>
              </button>
            </div>
          </div>

        </div>

        {/* Outcome Metric */}
        <div className="bg-[#f9f8f6] p-6 rounded-xl border border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
          <div>
            <span className="text-slate-500 uppercase block text-[10px]">VERIFIED OUTCOME</span>
            <span className="text-3xl font-bold font-display text-[#ff5a36]">+34% Cart Conversion</span>
          </div>
          <div className="text-slate-600 font-sans max-w-md text-xs">
            1,500+ custom stickers shipped across Goa. Single-tap pre-formatted WhatsApp payload eliminated traditional registration form drop-off.
          </div>
        </div>

        {/* Progressive Disclosure Toggle */}
        <button
          onClick={() => {
            soundFx.playClick();
            setShowDepth(!showDepth);
          }}
          className="text-xs font-mono text-slate-500 hover:text-[#1a1a1e] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-[#00c2ff]" />
          <span>{showDepth ? 'Hide Progressive Disclosure Layers' : 'Inspect Design & Engineering Layers'}</span>
        </button>

        {/* Progressive Disclosure Layers (Second & Third) */}
        <AnimatePresence>
          {showDepth && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 space-y-4 font-mono text-xs"
            >
              {/* SECOND LAYER: Design Decisions */}
              <div className="bg-[#f9f8f6] border border-black/10 p-6 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#ff5a36] font-bold">
                  <Compass className="w-4 h-4" /> SECOND LAYER // DESIGN DECISIONS & REJECTED APPROACHES
                </div>
                <p className="text-slate-700 font-sans leading-relaxed text-xs">
                  • <strong>Rejected Approach:</strong> Multi-step shopping cart with user account creation. Buyers ordering quick venue/event stickers dropped out when asked to create passwords.<br />
                  • <strong>Chosen Approach:</strong> Direct 1-tap pre-filled WhatsApp payload with calculated area pricing, allowing instant checkout in 5 seconds.
                </p>
              </div>

              {/* THIRD LAYER: Engineering & Implementation */}
              <div className="bg-[#1a1a1e] text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#00c2ff] font-bold">
                  <Code2 className="w-4 h-4" /> THIRD LAYER // ZUSTAND MATERIAL MATRIX ENGINE
                </div>
                <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`export function calculateMaterialMatrix(items: CartItem[]): number {
  return items.reduce((subtotal, item) => {
    const areaSqCm = (item.w * item.h) / 100;
    return subtotal + areaSqCm * 0.45 * MATERIAL_SURCHARGE[item.finish] * item.qty;
  }, 0);
}`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

