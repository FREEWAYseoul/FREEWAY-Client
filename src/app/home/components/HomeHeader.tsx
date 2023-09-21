import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

import NotiIcon from '@/assets/icons/bell.svg';
import SettingIcon from '@/assets/icons/gear.svg';
import Button from '@/common/components/button/Button';

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
  }, [route]);

  return (
    <>
      <HomePageHeader>
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
