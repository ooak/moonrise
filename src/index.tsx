// Facebook Pixel
(function(f: any,b: any,e: any,v: any,n?: any,t?: any,s?: any){
  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)
})(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

declare global {
  interface Window {
    fbq: any;
  }
}

window.fbq('init', '844531991375402');
window.fbq('track', 'PageView');

import React from 'react';
import './index.css';
// ... rest of your imports
import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { AppRouter } from './AppRouter';
render(<AppRouter />, document.getElementById('root'));