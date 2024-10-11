// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher: React.FC = () => {
//   const { i18n } = useTranslation();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//     setIsDropdownOpen(false); // Close the dropdown after selecting a language
//   };

//   return (
//     <div className="fixed top-4 right-4 z-50">
//       <div className="relative">
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="flex items-center px-2 py-1 bg-gray-200 rounded"
//         >
//           <img
//             src={i18n.language === 'en' ? "https://flagcdn.com/gb.svg" : "https://flagcdn.com/ae.svg"}
//             alt={i18n.language === 'en' ? "UK Flag" : "UAE Flag"}
//             className="w-5 h-5 rounded-full mr-2"
//           />
//           {i18n.language.toUpperCase()}
//         </button>
//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
//             <button
//               onClick={() => changeLanguage('en')}
//               className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
//             >
//               <img
//                 src="https://flagcdn.com/gb.svg"
//                 alt="UK Flag"
//                 className="w-5 h-5 rounded-full mr-2"
//               />
//               EN
//             </button>
//             <button
//               onClick={() => changeLanguage('ar')}
//               className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
//             >
//               <img
//                 src="https://flagcdn.com/ae.svg"
//                 alt="UAE Flag"
//                 className="w-5 h-5 rounded-full mr-2"
//               />
//               عربي
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LanguageSwitcher;