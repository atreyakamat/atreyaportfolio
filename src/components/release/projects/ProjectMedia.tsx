import type { MediaAsset } from '../../../content/types';

interface ProjectMediaProps {
  media: MediaAsset;
  title: string;
  priority?: boolean;
  className?: string;
}

export function ProjectMedia({ media, title, priority = false, className = '' }: ProjectMediaProps) {
  if (media.type === 'image' && media.src) {
    return (
      <figure className={`project-media ${className}`}>
        <img
          src={media.src}
          alt={media.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        {media.caption ? <figcaption>{media.caption}</figcaption> : null}
      </figure>
    );
  }

  if (media.type === 'video' && media.src) {
    return (
      <figure className={`project-media ${className}`}>
        <video
          src={media.src}
          poster={media.poster}
          preload="metadata"
          controls
          playsInline
          aria-label={media.alt}
        />
        {media.caption ? <figcaption>{media.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <div className={`project-media project-media--placeholder ${className}`} role="img" aria-label={media.alt}>
      <div className="project-media__grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div>
        <span className="eyebrow">Media Needed</span>
        <strong>{title}</strong>
        <p>Add screenshots, a poster image or a short demo video when the project asset is ready.</p>
      </div>
    </div>
  );
}
