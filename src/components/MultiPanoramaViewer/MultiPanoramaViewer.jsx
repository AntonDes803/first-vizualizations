// 'use client';

// import { useEffect, useRef } from 'react';

// const loadPannellumScript = () => {
//   return new Promise((resolve, reject) => {
//     if (window.pannellum) return resolve();

//     const script = document.createElement('script');
//     script.src = 'https://cdn.pannellum.org/2.5/pannellum.js';
//     script.onload = () => resolve();
//     script.onerror = () => reject('Не вдалося завантажити pannellum.js');
//     document.head.appendChild(script);
//   });
// };

// const loadPannellumCSS = () => {
//   const exists = document.querySelector('link[href="https://cdn.pannellum.org/2.5/pannellum.css"]');
//   if (!exists) {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://cdn.pannellum.org/2.5/pannellum.css';
//     document.head.appendChild(link);
//   }
// };

// const PanoramaViewer = ({ imagePath }) => {
//   const viewerRef = useRef(null);

//   const initializeViewer = () => {
//     if (!window.pannellum) return;
//     viewerRef.current = window.pannellum.viewer('panorama', {
//       type: 'equirectangular',
//       panorama: imagePath,
//       autoLoad: true,
//       showControls: true,
//     });
//   };

//   useEffect(() => {
//     loadPannellumCSS();
//     loadPannellumScript().then(() => {
//       initializeViewer();

//       const handleFullscreenChange = () => {
//         setTimeout(() => {
//           const isFullscreen = document.fullscreenElement !== null;
//           if (!isFullscreen) {
//             // Видаляємо старий контейнер
//             const container = document.getElementById('panorama');
//             if (container) {
//               container.innerHTML = '';
//               initializeViewer();
//             }
//           }
//         }, 300); // Дати трохи часу браузеру вийти з fullscreen
//       };

//       window.addEventListener('fullscreenchange', handleFullscreenChange);

//       return () => {
//         window.removeEventListener('fullscreenchange', handleFullscreenChange);
//       };
//     });
//   }, [imagePath]);

//   return (
//     <div
//       id="panorama"
//       style={{
//         width: '100%',
//         height: '500px',
//         borderRadius: '12px',
//         overflow: 'hidden',
//         backgroundColor: '#000',
//       }}
//     />
//   );
// };

// export default PanoramaViewer;


// todo after preview img

// 'use client';

// import { useEffect, useRef, useState } from 'react';

// const loadPannellumScript = () => {
//   return new Promise((resolve, reject) => {
//     if (window.pannellum) return resolve();
//     const script = document.createElement('script');
//     script.src = 'https://cdn.pannellum.org/2.5/pannellum.js';
//     script.onload = () => resolve();
//     script.onerror = () => reject('Не вдалося завантажити pannellum.js');
//     document.head.appendChild(script);
//   });
// };

// const loadPannellumCSS = () => {
//   const exists = document.querySelector('link[href="https://cdn.pannellum.org/2.5/pannellum.css"]');
//   if (!exists) {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://cdn.pannellum.org/2.5/pannellum.css';
//     document.head.appendChild(link);
//   }
// };

// const PanoramaViewer = ({ imagePath, previewImage }) => {
//   const viewerRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isActive, setIsActive] = useState(false);

//   const initializeViewer = () => {
//     if (!window.pannellum) return;
//     viewerRef.current = window.pannellum.viewer('panorama', {
//       type: 'equirectangular',
//       panorama: imagePath,
//       autoLoad: true,
//       showControls: true,
//     });
//   };

//   useEffect(() => {
//     if (!isActive) return;

//     loadPannellumCSS();
//     loadPannellumScript().then(() => {
//       initializeViewer();
//       setIsLoaded(true);

//       const handleFullscreenChange = () => {
//         setTimeout(() => {
//           const isFullscreen = document.fullscreenElement !== null;
//           if (!isFullscreen) {
//             const container = document.getElementById('panorama');
//             if (container) {
//               container.innerHTML = '';
//               initializeViewer();
//             }
//           }
//         }, 300);
//       };

//       window.addEventListener('fullscreenchange', handleFullscreenChange);

//       return () => {
//         window.removeEventListener('fullscreenchange', handleFullscreenChange);
//       };
//     });
//   }, [isActive, imagePath]);

//   return (
//     <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
//       {!isActive && (
//         <div
//           onClick={() => setIsActive(true)}
//           style={{
//             cursor: 'pointer',
//             position: 'relative',
//             backgroundImage: `url(${previewImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             borderRadius: '12px',
//             height: '400px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <div
//             style={{
//               background: 'rgba(0,0,0,0.5)',
//               padding: '16px 24px',
//               borderRadius: '8px',
//               color: '#fff',
//               fontSize: '18px',
//             }}
//           >
//             🔄 Переглянути 360°
//           </div>
//         </div>
//       )}

//       {isActive && (
//         <div
//           id="panorama"
//           style={{
//             width: '100%',
//             height: '500px',
//             borderRadius: '12px',
//             overflow: 'hidden',
//             backgroundColor: '#000',
//           }}
//         />
//       )}

//       {!isLoaded && isActive && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '500px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: '12px',
//             background: 'rgba(0, 0, 0, 0.5)',
//             color: '#fff',
//             fontSize: '18px',
//             zIndex: 2,
//           }}
//         >
//           Завантаження...
//         </div>
//       )}
//     </div>
//   );
// };

// export default PanoramaViewer;


// todo додавання декілької переходів

// 'use client';

// import { useEffect, useRef, useState } from 'react';

// const loadPannellumScript = () => {
//   return new Promise((resolve, reject) => {
//     if (window.pannellum) return resolve();
//     const script = document.createElement('script');
//     script.src = 'https://cdn.pannellum.org/2.5/pannellum.js';
//     script.onload = () => resolve();
//     script.onerror = () => reject('Не вдалося завантажити pannellum.js');
//     document.head.appendChild(script);
//   });
// };

// const loadPannellumCSS = () => {
//   const exists = document.querySelector('link[href="https://cdn.pannellum.org/2.5/pannellum.css"]');
//   if (!exists) {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://cdn.pannellum.org/2.5/pannellum.css';
//     document.head.appendChild(link);
//   }
// };

// const MultiPanoramaViewer = ({ panoramas, lang = 'uk' }) => {
//   const containerRef = useRef(null);
//   const viewerRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);

//   const getAlt = (panorama) => lang === 'en' ? panorama.altEn : panorama.altUk;

//   const getSceneId = (index) => `scene${index}`;

//   const buildScenes = () => {
//     const scenes = {};

//     panoramas.forEach((p, index) => {
//       const sceneId = getSceneId(index);
//       const nextSceneId = getSceneId((index + 1) % panoramas.length);

//       scenes[sceneId] = {
//         title: getAlt(p),
//         panorama: p.src,
//         hotSpots: [
//           {
//             pitch: 2,
//             yaw: 100,
//             type: 'scene',
//             text: '➤ Наступна сцена',
//             sceneId: nextSceneId,
//           }
//         ],
//       };
//     });

//     return scenes;
//   };

//   useEffect(() => {
//     if (!isActive) return;

//     loadPannellumCSS();
//     loadPannellumScript().then(() => {
//       const scenes = buildScenes();

//       viewerRef.current = window.pannellum.viewer(containerRef.current, {
//         default: {
//           firstScene: getSceneId(0),
//           autoLoad: true,
//           showControls: true,
//         },
//         scenes,
//       });

//       const handleFullscreenChange = () => {
//         setTimeout(() => {
//           if (!document.fullscreenElement) {
//             viewerRef.current.resize();
//           }
//         }, 300);
//       };

//       window.addEventListener('fullscreenchange', handleFullscreenChange);
//       return () => {
//         window.removeEventListener('fullscreenchange', handleFullscreenChange);
//       };
//     });
//   }, [isActive]);

//   return (
//     <div style={{ position: 'relative' }}>
//       {!isActive && panoramas?.[0] && (
//         <div
//           onClick={() => setIsActive(true)}
//           style={{
//             cursor: 'pointer',
//             backgroundImage: `url(${panoramas[0].panoramaPreview})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             borderRadius: '12px',
//             height: '400px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <div
//             style={{
//               background: 'rgba(0,0,0,0.5)',
//               padding: '16px 24px',
//               borderRadius: '8px',
//               color: '#fff',
//               fontSize: '18px',
//             }}
//           >
//             🔄 Переглянути 360° панораму
//           </div>
//         </div>
//       )}

//       {isActive && (
//         <div
//           ref={containerRef}
//           style={{
//             width: '100%',
//             height: '500px',
//             borderRadius: '12px',
//             backgroundColor: '#000',
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default MultiPanoramaViewer;


// ! new finish

'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MultiPanoramaViewer.module.scss';

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

const MultiPanoramaViewer = ({ panoramas, lang = 'uk' }) => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const getAlt = (panorama) => lang === 'en' ? panorama.altEn : panorama.altUk;
  const getSceneId = (index) => `scene${index}`;

  const buildScenes = () => {
    const scenes = {};

    panoramas.forEach((p, index) => {
      const sceneId = getSceneId(index);
      const nextSceneId = getSceneId((index + 1) % panoramas.length);

      const scene = {
        title: getAlt(p),
        panorama: p.src,
      };

      if (panoramas.length > 1) {
        scene.hotSpots = [
          {
            pitch: 2,
            yaw: 100,
            type: 'scene',
            text: lang === 'en' ? 'Next scene' : 'Наступна сцена',
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

      window.addEventListener('fullscreenchange', handleResize);
      window.addEventListener('webkitfullscreenchange', handleResize);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('fullscreenchange', handleResize);
        window.removeEventListener('webkitfullscreenchange', handleResize);
        window.removeEventListener('resize', handleResize);
      };
    });
  }, [isActive]);

  return (
    <div className={styles.viewerWrapper}>
      {!isActive && panoramas?.[0] && (
        <div
          className={styles.previewWrapper}
          style={{ backgroundImage: `url(${panoramas[0].panoramaPreview})` }}
          onClick={() => setIsActive(true)}
        >
          <div className={styles.previewText}>
            🔄 {lang === 'en' ? 'View 360° Panorama' : 'Переглянути 360° панораму'}
          </div>
        </div>
      )}

      {isActive && (
        <div className={`${styles.viewerContainer} ${fade ? styles.fadeOut : ''}`}>
          <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
          {panoramas.length > 1 && (
            <div className={styles.controls}>
              <button
                className={styles.button}
                onClick={() =>
                  switchScene((currentSceneIndex - 1 + panoramas.length) % panoramas.length)
                }
              >
                ⬅️
              </button>
              <button
                className={styles.button}
                onClick={() => switchScene((currentSceneIndex + 1) % panoramas.length)}
              >
                ➡️
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiPanoramaViewer;
