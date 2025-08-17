import React from 'react';

type GalleryItemProps = {
  webpSrc?: string;
  fallbackSrc: string;
  alt: string;
  aspect: '16/9' | '4/3' | '1/1';
  caption?: string;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ webpSrc, fallbackSrc, alt, aspect, caption }) => {
  const aspectClass =
    aspect === '16/9' ? 'aspect-[16/9]' : aspect === '4/3' ? 'aspect-[4/3]' : 'aspect-square';

  return (
    <figure className={`relative ${aspectClass} rounded-2xl shadow-md ring-1 ring-black/5 overflow-hidden after:absolute after:inset-0 after:bg-blue-900/10 md:hover:after:bg-blue-900/20 after:transition`}> 
      <picture>
        {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
        <img
          src={fallbackSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover saturate-110 contrast-105"
        />
      </picture>
      {caption ? (
        <figcaption className="absolute bottom-2 left-2 right-2 text-[11px] md:text-xs text-gray-600/90 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-md hidden md:block">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

const AboutGallery: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-tr from-blue-50 to-transparent rounded-2xl p-0">
        <GalleryItem
          fallbackSrc="/images/warehouse.jpg"
          alt="Almacén logístico moderno con estanterías y operarios"
          aspect="16/9"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GalleryItem
          fallbackSrc="/images/box.jpg"
          alt="Cajas preparadas para envío en centro de distribución"
          aspect="4/3"
        />
        <GalleryItem
          fallbackSrc="/images/wareman.jpg"
          alt="Pasillo de almacén con racks altos"
          aspect="4/3"
        />
      </div>

      {/* Miniatura opcional (comentada por defecto) */}
      {/*
      <div>
        <GalleryItem
          webpSrc="/images/about/team-brief.webp"
          fallbackSrc="/images/wareman.jpg"
          alt="Plano superior de operativa logística"
          aspect="1/1"
          caption="Personas + tecnología: coordinación operativa"
        />
      </div>
      */}
    </div>
  );
};

export default AboutGallery;


