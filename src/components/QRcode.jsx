// import {  React,useState, useEffect } from 'react';
// import { QRCodeCanvas } from 'qrcode.react'; 
// import { isMobile } from '../utils/isMobile';


// const QRCodeComponent = () => {
//     const [showQRCode, setShowQRCode] = useState(false);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setShowQRCode(isMobile());
//       };
  
//       // Initial check
//       handleResize();
  
//       // Add event listener for window resize
//       window.addEventListener('resize', handleResize);
      
//       // Cleanup event listener on component unmount
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);
  
//     return (
//       <div className="fixed bottom-2 right-2 w-24 h-24">
//         {showQRCode && (
//           <QRCodeCanvas value="https://shoaib3-dportfolio.netlify.app/" size={96} />
//         )}
//       </div>
//     );
//   };

// export default QRCodeComponent;
