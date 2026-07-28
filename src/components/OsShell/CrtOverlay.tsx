import React from 'react';

interface CrtOverlayProps {
  isCrtEnabled: boolean;
  isBlueprintEnabled: boolean;
}

export const CrtOverlay: React.FC<CrtOverlayProps> = ({ isCrtEnabled, isBlueprintEnabled }) => {
  return (
    <>
      {isCrtEnabled && <div className="crt-scanline pointer-events-none" />}
      {isBlueprintEnabled && (
        <div className="fixed inset-0 blueprint-grid pointer-events-none z-[1] opacity-60" />
      )}
    </>
  );
};
