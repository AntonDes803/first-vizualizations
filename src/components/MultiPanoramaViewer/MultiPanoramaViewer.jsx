'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MultiPanoramaViewer.module.scss';
import { i18n } from '@/dictionaries/i18n.config';

const loadPannellumScript = () => {
  return new Promise((resolve, reject) => {
    if (window.pannellum) return resolve();
    const script = document.createElement('script');
    script.src = 'https://cdn.pannellum.org/2.5/pannellum.js';
    script.onload = () => resolve();
    script.onerror = () => reject('Не вдалося завантажити pannellum.js');
    document.head.appendChild(script);
  });
};

const loadPannellumCSS = () => {
  const exists = document.querySelector('link[href="https://cdn.pannellum.org/2.5/pannellum.css"]');
  if (!exists) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.pannellum.org/2.5/pannellum.css';
    document.head.appendChild(link);
  }
};

const MultiPanoramaViewer = ({ data, lang }) => {
  const {panoramaUrl} = data;
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isFullscreenFallback, setIsFullscreenFallback] = useState(false);


  // const getAlt = (panorama) => lang === i18n.locales[0] ? panorama.altUk : panorama.altEn;
  const getSceneId = (index) => `scene${index}`;

  const buildScenes = () => {
    const scenes = {};

    panoramaUrl.forEach((el, index) => {
      const sceneId = getSceneId(index);
      const nextSceneId = getSceneId((index + 1) % panoramaUrl.length);

      const scene = {
        // title: getAlt(el),
        panorama: el.src,
      };

      if (panoramaUrl.length > 1) {
        scene.hotSpots = [
          {
            pitch: 2,
            yaw: 100,
            type: 'scene',
            text: lang === i18n.locales[0] ? 'Наступна сцена' : 'Next scene',
            sceneId: nextSceneId,
          },
        ];
      }

      scenes[sceneId] = scene;
    });

    return scenes;
  };

  const switchScene = (index) => {
    setFade(true);
    setTimeout(() => {
      const sceneId = getSceneId(index);
      viewerRef.current?.loadScene(sceneId);
      setCurrentSceneIndex(index);
      setFade(false);
    }, 400);
  };

  useEffect(() => {
    if (!isActive) return;

    loadPannellumCSS();
    loadPannellumScript().then(() => {
      const scenes = buildScenes();

      viewerRef.current = window.pannellum.viewer(containerRef.current, {
        default: {
          firstScene: getSceneId(0),
          autoLoad: true,
          showControls: true,
        },
        scenes,
      });

      const handleResize = () => {
        viewerRef.current?.resize();
      };
      const handleExit = () => {
        setIsFullscreenFallback(false);
      };
    
      window.addEventListener('fullscreenchange', handleExit);
  window.addEventListener('webkitfullscreenchange', handleExit);
      window.addEventListener('fullscreenchange', handleResize);
      window.addEventListener('webkitfullscreenchange', handleResize);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('fullscreenchange', handleExit);
    window.removeEventListener('webkitfullscreenchange', handleExit);
        window.removeEventListener('fullscreenchange', handleResize);
        window.removeEventListener('webkitfullscreenchange', handleResize);
        window.removeEventListener('resize', handleResize);
      };
    });
  }, [isActive]);

  return (
    <div className={styles.viewerWrapper}>
      {!isActive && panoramaUrl?.[0] && (
        <div
          className={styles.previewWrapper}
          style={{ backgroundImage: `url(${panoramaUrl[0].panoramaPreview})` }}
          onClick={() => setIsActive(true)}
        >
          <div className={styles.previewText}>
            🔄 {lang === i18n.locales[0] ? 'Переглянути 360° панораму' : 'View 360° Panorama'}
          </div>
        </div>
      )}

      {isActive && (
        <div
          className={`
            ${styles.viewerContainer}
            ${fade ? styles.fadeOut : ''}
            ${isFullscreenFallback ? styles.fullscreenFallback : ''}
          `}
        >
          <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
            <div className={styles.controls}>
              {/* 🔄 Якщо є більше однієї сцени — показуємо кнопки навігації */}
              {panoramaUrl.length > 1 && (
                <>
                  <button
                    className={styles.button}
                    onClick={() =>
                      switchScene((currentSceneIndex - 1 + panoramaUrl.length) % panoramaUrl.length)
                    }
                  >
                    ⬅️
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => switchScene((currentSceneIndex + 1) % panoramaUrl.length)}
                  >
                    ➡️
                  </button>
                </>
              )}

              {/* 🔳 Fullscreen ON */}
              {!isFullscreenFallback && (
                <button
                  className={styles.button}
                  onClick={() => {
                    const viewerEl = containerRef.current;
                    const openFallback = () => setIsFullscreenFallback(true);

                    if (viewerEl.requestFullscreen) {
                      viewerEl.requestFullscreen().catch(openFallback);
                    } else if (viewerEl.webkitRequestFullscreen) {
                      viewerEl.webkitRequestFullscreen();
                    } else if (viewerEl.mozRequestFullScreen) {
                      viewerEl.mozRequestFullScreen();
                    } else if (viewerEl.msRequestFullscreen) {
                      viewerEl.msRequestFullscreen();
                    } else {
                      openFallback();
                    }
                  }}
                >
                  ⛶
                </button>
              )}

              {/* 🔲 Fullscreen OFF */}
              {isFullscreenFallback && (
                <button
                  className={styles.button}
                  onClick={() => {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    }
                    setIsFullscreenFallback(false);
                  }}
                >
                  🔙
                </button>
              )}
            </div>
        </div>
      )}
    </div>
  );
};

export default MultiPanoramaViewer;

