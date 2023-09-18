const NaverMapScriptLoader = () => {
  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const NAVER_MAP_SCRIPT_ID = 'naverMapScript';

  return (
    <>
      <script
        id={NAVER_MAP_SCRIPT_ID}
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`}
        async
      />
    </>
  );
};

export default NaverMapScriptLoader;
