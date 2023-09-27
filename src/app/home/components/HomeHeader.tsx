import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

import NotiIcon from '@/assets/icons/bell.svg';
import SettingIcon from '@/assets/icons/gear.svg';
import Button from '@/common/components/button/Button';
// import ToastMessage from '@/common/components/ToastMessage';

const HeaderIcons = [
  {
    component: <NotiIcon />,
    path: '/notification',
  },
  {
    component: <SettingIcon />,
    path: '/setting',
  },
];

const HomeHeader = () => {
  const route = useRouter();

  useEffect(() => {
    HeaderIcons.forEach((item) => route.prefetch(item.path));
    route.prefetch('/search');
  }, [route]);

  return (
    <>
      <HomePageHeader>
        {/* <ToastMessage
          content='추석 연휴, 지하철 운행 조정 🚇추석연휴기간 열차운행계획이 조정됩니다.'
          onClick={() => console.log(123)}
          isOpen={false}
        /> */}
        {HeaderIcons.map((item, idx) => (
          <Button key={idx} height={30} handleOnClick={() => route.push(item.path)}>
            {item.component}
          </Button>
        ))}
      </HomePageHeader>
    </>
  );
};

export default HomeHeader;

const HomePageHeader = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  padding-top: 30px;
  width: 100%;
`;
