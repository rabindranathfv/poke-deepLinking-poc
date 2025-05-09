/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import '../styles/Main.css';

const detectOS = (): string => {
  const ua = navigator.userAgent || navigator.vendor;
  console.log(`User Agent: ${ua}`);

  if (/windows phone/i.test(ua)) {
    return 'windows';
  } else if (/android/i.test(ua)) {
    return 'android';
  } else if (/iPad|iPhone|iPod/.test(ua) && (!window as any).MSStream) {
    return 'ios';
  } else {
    return 'unknown';
  }
};

const getTargetPath = (): string => {
  const params = new URLSearchParams(window.location.search);
  console.log('🚀 ~ getTargetPath ~ params:', params);
  return params.get('target') || '/';
};

const DeepLinking: React.FC = () => {
  useEffect(() => {
    const targetPath = getTargetPath();
    console.log('🚀 ~ DeepLinking ~ targetPath:', targetPath);
    const appLink = `https://poke-deeplinking-poc.up.railway.app${targetPath}`;

    // Attempt to open the app
    window.location.href = appLink;

    const timeout = setTimeout(() => {
      const os = detectOS();
      if (os === 'android') {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.ikea.lhp';
      } else if (os === 'ios') {
        window.location.href = 'https://apps.apple.com/app/ikea-home/id6476172259';
      } else {
        document.querySelector('section p')!.innerHTML = '<strong>Please use a mobile device to install the app.</strong>';
      }
    }, 100000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to the Pokémon World, you will see it soon</h1>
      </header>
      <section style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Redirecting</h2>
        <p>Please wait while we take you to your destination...</p>
      </section>
      <footer>
        <p>
          Powered by{' '}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            PokéAPI
          </a>
        </p>
      </footer>
    </div>
  );
};

export default DeepLinking;