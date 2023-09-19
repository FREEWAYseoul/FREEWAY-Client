'use client';

import { useEffect, useState } from 'react';

const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const NAVER_MAP_SCRIPT_ID = 'naverMapScript';

interface NaverMapScriptLoaderProps {
  children: React.ReactNode;
}

const NaverMapScriptLoader = ({ children }: NaverMapScriptLoaderProps) => {
  const [isSetMapScript, setIsMapScript] = useState<boolean>(false);

  useEffect(() => {
    const mapScript = document.getElementById(NAVER_MAP_SCRIPT_ID);

    if (mapScript) {
      setIsMapScript(true);
      return;
    }

    const script = document.createElement('script');
    script.id = NAVER_MAP_SCRIPT_ID;
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;

    script.onload = () => {
      setIsMapScript(true);
    };

    script.onerror = () => {
      setIsMapScript(false);
    };

    document.querySelector('body')?.appendChild(script);
  }, []);

  if (!isSetMapScript) {
    return <></>;
  }

  return <>{children}</>;
};

export default NaverMapScriptLoader;
