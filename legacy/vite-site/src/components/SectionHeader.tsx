import React from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  id?: string;
  isSerif?: boolean;
  asH1?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  id,
  isSerif = false,
  asH1 = false,
}) => {
  const HeadingTag = asH1 ? 'h1' : 'h2';

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/15 pb-unit-md mb-unit-xl gap-unit-sm">
      <div>
        <span className="font-label-mono text-label-mono text-[#F05A3C] font-semibold uppercase tracking-widest">
          {kicker}
        </span>
        <HeadingTag 
          id={id}
          className={`mt-1 text-primary ${
            isSerif 
              ? 'font-headline-lg text-headline-lg font-serif tracking-tight' 
              : 'font-headline-md text-headline-md font-bold uppercase tracking-tight'
          }`}
        >
          {title}
        </HeadingTag>
      </div>
      {description && (
        <div className="font-label-mono text-label-mono text-on-surface-variant max-w-md">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
