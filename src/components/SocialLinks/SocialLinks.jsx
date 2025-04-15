import { socLinks } from "@/data/contactsData";
import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ id, dark }) => {
  return (
    <ul id={id} className={styles.socialList}>
      {socLinks.map((item) => {
        const darkSvgClassname = `${item.name}Dark`;

        return (
          <li key={item.name}>
            <a
              href={item.href}
              className={styles.socLinkItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={
                  dark
                    ? `${styles.iconClass} ${styles[darkSvgClassname]}`
                    : `${styles.iconClass} ${styles[item.name]}`
                }
              >
                <use href={item.icon} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;

// Ivika

// import { socLinks } from '@/data/contactsData';
// import styles from './SocialLinks.module.scss';

// const SocialLinks = ({ id, light, dark }) => {
//   return (
//     <ul id={id} className={styles.socialList}>
//       {socLinks.map((item) => {
//         const isInstagram = item.name === 'instagram';
//         const iconClass = [
//           light && styles.socialIconLight,
//           dark && styles.socialIconDark,
//           isInstagram && light && styles.instagramIconLight,
//           isInstagram && dark && styles.instagramIconDark,
//         ]
//           .filter(Boolean)
//           .join(' ');

//         return (
//           <li key={item.name}>
//             <a
//               href={item.href}
//               className={styles.socLinkItem}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <svg className={iconClass}>
//                 <use href={item.icon} />
//               </svg>
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default SocialLinks;
