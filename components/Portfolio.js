"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio({ dictionary }) {
  const projects = dictionary.portfolio.projects;
  
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  const activeProject = projects[activeTab];

  useEffect(() => {
    if (lightbox.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightbox.isOpen]);

  const openLightbox = (imgs, idx) => {
    setLightbox({ isOpen: true, images: imgs, index: idx });
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    setTimeout(() => {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }, 300);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightbox.index < lightbox.images.length - 1) {
      setLightbox(prev => ({ ...prev, index: prev.index + 1 }));
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightbox.index > 0) {
      setLightbox(prev => ({ ...prev, index: prev.index - 1 }));
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom(z => Math.min(z + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom(z => {
      const newZ = Math.max(z - 0.5, 1);
      if (newZ === 1) setPan({ x: 0, y: 0 });
      return newZ;
    });
  };

  const onMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const onMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - startPan.x,
        y: e.clientY - startPan.y
      });
    }
  };

  const onMouseUp = () => setIsDragging(false);

  const getGridClass = (index) => {
    const classes = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 md:col-span-1 row-span-1 md:row-span-2",
      "col-span-1 md:col-span-2 row-span-1",
      "col-span-1 row-span-1"
    ];
    return classes[index % classes.length];
  };

  return (
    <section className="w-full py-32 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900 min-h-screen flex flex-col justify-center transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-400 dark:from-white dark:to-zinc-600">
          {dictionary.portfolio.title}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
          {dictionary.portfolio.subtitle}
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-12 flex flex-wrap justify-center gap-3">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-500 border backdrop-blur-md ${
              activeTab === idx 
                ? 'bg-zinc-900 text-zinc-50 border-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                : 'bg-zinc-200/50 text-zinc-500 border-zinc-200 hover:text-zinc-900 hover:border-zinc-400 dark:bg-zinc-900/50 dark:text-zinc-400 dark:border-zinc-800 dark:hover:text-zinc-100 dark:hover:border-zinc-500'
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div key={activeTab} className="w-full animate-[fadeIn_0.7s_ease-out]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 font-medium text-sm tracking-widest uppercase">
                No. 0{activeTab + 1}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {activeProject.title}
              </h3>
            </div>
            <div className="pb-1">
              <span className="px-4 py-1.5 rounded-full border border-zinc-300 bg-zinc-200/80 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 text-xs font-bold tracking-widest uppercase">
                {activeProject.category}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[160px] md:auto-rows-[220px] grid-flow-dense">
            {activeProject.images.map((imgUrl, imgIndex) => (
              <div 
                key={imgIndex}
                onClick={() => openLightbox(activeProject.images, imgIndex)}
                className={`relative rounded-[2rem] overflow-hidden bg-zinc-200 dark:bg-zinc-900 cursor-zoom-in group ${getGridClass(imgIndex)} border border-zinc-300 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-500 transition-colors duration-500`}
              >
                <Image
                  src={imgUrl}
                  alt={`${activeProject.title} - ${imgIndex + 1}`}
                  fill
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white font-bold tracking-widest text-xs uppercase bg-black/40 backdrop-blur-md px-5 py-2 rounded-full whitespace-nowrap">
                    {dictionary.portfolio.view}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-zinc-950/98 backdrop-blur-3xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="absolute top-6 left-6 rtl:right-6 rtl:left-auto flex items-center gap-3 z-50">
            <button 
              onClick={handleZoomIn}
              className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 flex items-center justify-center text-xl hover:bg-zinc-100 hover:text-zinc-900 backdrop-blur-md transition-all"
            >
              +
            </button>
            <button 
              onClick={handleZoomOut}
              className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 flex items-center justify-center text-xl hover:bg-zinc-100 hover:text-zinc-900 backdrop-blur-md transition-all"
            >
              -
            </button>
          </div>
          
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 rtl:left-6 rtl:right-auto px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 hover:text-zinc-900 backdrop-blur-md transition-all z-50"
          >
            Close
          </button>

          {lightbox.index > 0 && (
            <button 
              onClick={handlePrev}
              className="absolute left-6 rtl:right-6 rtl:left-auto top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 flex items-center justify-center text-lg hover:bg-zinc-100 hover:text-zinc-900 backdrop-blur-md transition-all z-50"
            >
              &#10094;
            </button>
          )}

          {lightbox.index < lightbox.images.length - 1 && (
            <button 
              onClick={handleNext}
              className="absolute right-6 rtl:left-6 rtl:right-auto top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 flex items-center justify-center text-lg hover:bg-zinc-100 hover:text-zinc-900 backdrop-blur-md transition-all z-50"
            >
              &#10095;
            </button>
          )}

          <div 
            className={`relative w-[90vw] h-[85vh] flex items-center justify-center ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative w-full h-full transition-transform duration-300 ease-out"
              style={{ 
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)` 
              }}
            >
              <Image
                src={lightbox.images[lightbox.index]}
                alt="Fullscreen Preview"
                fill
                className="object-contain pointer-events-none"
                quality={100}
                unoptimized
              />
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 font-bold tracking-widest text-xs uppercase z-50 bg-zinc-950/50 border border-zinc-800/50 px-4 py-2 rounded-full backdrop-blur-md">
            {lightbox.index + 1} / {lightbox.images.length}
          </div>
        </div>
      )}
    </section>
  );
}