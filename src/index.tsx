// Facebook Pixel Code
(function(f: any, b: any, e: string, v: string) {
  const n: any = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  const t = b.createElement(e);
  t.async = true;
  t.src = v;
  const s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

(window as any).fbq('init', '1165039268822754');
(window as any).fbq('track', 'PageView');

import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { AppRouter } from './AppRouter';

render(<AppRouter />, document.getElementById('root'));
import { AppRouter } from './AppRouter';

render(<AppRouter />, document.getElementById('root'));