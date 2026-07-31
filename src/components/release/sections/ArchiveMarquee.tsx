import { archiveItems } from '../../../content/profile';

const repeatedArchiveItems = [...archiveItems, ...archiveItems];

export function ArchiveMarquee() {
  return (
    <section className="archive-section" aria-labelledby="archive-title">
      <div className="container section-heading section-heading--split">
        <div>
          <p className="eyebrow">Life Around The Work</p>
          <h2 id="archive-title">Not just code.</h2>
        </div>
        <p>
          Projects, community work, workshops, entrepreneurship and the quieter evidence of a
          person building in public and in practice.
        </p>
      </div>

      <div className="archive-marquee" aria-label="Visual archive strip">
        <div className="archive-marquee__track">
          {repeatedArchiveItems.map((item, index) => (
            <figure className="archive-tile" key={`${item.label}-${index}`}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
