import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Wifi, Clock, RefreshCw } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const SubnetValidatorDemo: React.FC = () => {
  const [testIp, setTestIp] = useState<string>('172.16.4.88');
  const [sessionAgeSec, setSessionAgeSec] = useState<number>(45);

  const campusCidrs = ['172.16.4.0/22', '10.0.0.0/16'];

  // Simple CIDR match helper for simulator
  const isIpInCampusSubnet = (ip: string) => {
    return ip.startsWith('172.16.4.') || ip.startsWith('10.0.');
  };

  const isSubnetValid = isIpInCampusSubnet(testIp);
  const isTimeValid = sessionAgeSec <= 90;
  const isAllowed = isSubnetValid && isTimeValid;

  return (
    <div className="bg-[#07080b] border border-white/10 rounded-lg p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00ff66]">
        <span className="font-bold tracking-wider">LIVE TOOL // ATTENDANCE CIDR SUBNET VALIDATOR</span>
        <span className="text-[10px] bg-[#00ff66]/10 px-2 py-0.5 rounded">ATTENDANCE_ENGINE_V2</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Test Controls */}
        <div className="space-y-3 bg-[#0d0f15] p-4 rounded border border-white/10">
          <div>
            <label className="text-slate-400 block mb-1">Simulate Client IP Address:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={testIp}
                onChange={(e) => setTestIp(e.target.value)}
                className="bg-[#07080b] border border-white/20 rounded px-3 py-1.5 text-white font-mono text-xs flex-1 outline-none focus:border-[#00ff66]"
              />
              <button
                onClick={() => {
                  soundFx.playClick();
                  setTestIp('172.16.4.' + Math.floor(Math.random() * 250));
                }}
                className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-slate-300 flex items-center gap-1 cursor-pointer"
                title="Generate Campus IP"
              >
                <RefreshCw className="w-3 h-3" /> Campus
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setTestIp('49.37.' + Math.floor(Math.random() * 250) + '.12');
                }}
                className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-slate-300 flex items-center gap-1 cursor-pointer"
                title="Generate Cellular IP"
              >
                Cellular 4G
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-400 mb-1">
              <span>Session Elapsed Time:</span>
              <span className={sessionAgeSec > 90 ? 'text-[#ff2e54] font-bold' : 'text-[#00ff66]'}>
                {sessionAgeSec} seconds
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="150"
              value={sessionAgeSec}
              onChange={(e) => setSessionAgeSec(Number(e.target.value))}
              className="w-full accent-[#00ff66]"
            />
            <span className="text-[10px] text-slate-500">Hard Decay Invariant: 90 seconds max</span>
          </div>
        </div>

        {/* Validation Result Box */}
        <div
          className={`p-4 rounded-lg border flex flex-col justify-between transition-all ${
            isAllowed
              ? 'bg-[#00ff66]/10 border-[#00ff66]/40 text-[#00ff66]'
              : 'bg-[#ff2e54]/10 border-[#ff2e54]/40 text-[#ff2e54]'
          }`}
        >
          <div>
            <div className="flex items-center space-x-2 mb-2">
              {isAllowed ? <ShieldCheck className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
              <span className="font-bold text-sm">
                {isAllowed ? 'ATTENDANCE VERIFIED // PROXY REJECTED' : 'VERIFICATION REJECTED'}
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 mt-3 font-sans">
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="flex items-center gap-1"><Wifi className="w-3.5 h-3.5" /> Subnet Invariant ({campusCidrs.join(', ')}):</span>
                <span className={isSubnetValid ? 'text-[#00ff66] font-bold' : 'text-[#ff2e54] font-bold'}>
                  {isSubnetValid ? 'PASS' : 'FAIL (Outside Subnet)'}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Time Invariant (&le;90s):</span>
                <span className={isTimeValid ? 'text-[#00ff66] font-bold' : 'text-[#ff2e54] font-bold'}>
                  {isTimeValid ? 'PASS' : 'FAIL (Session Expired)'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] opacity-80 pt-3 border-t border-white/10 font-mono">
            Reasoning: {isAllowed ? 'Student physical presence on campus network confirmed within session window.' : !isSubnetValid ? 'IP rejected. Remote link forwarding detected.' : 'Time expired. Dynamic QR token stale.'}
          </div>
        </div>
      </div>
    </div>
  );
};
