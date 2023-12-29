import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import NewNotiIcon from '@/assets/icons/bell.svg';
import SettingIcon from '@/assets/icons/gear.svg';
import NotiIcon from '@/assets/icons/noti-icon.svg';
import Button from '@/common/components/button/Button';
import ToastMessage from '@/common/components/toast/ToastMessage';
import useToast from '@/common/hooks/useToast';

const HomeHeader = () => {
  const route = useRouter();
  const { message, isOpen, isNewNoti } = useToast();

  const handleMoveNotification = () => {
    route.push('/notification');
  };

  /**
   * prefetch
   */
  useEffect(() => {
    route.prefetch('/notification');
    route.prefetch('/setting');
    route.prefetch('/search');
  }, [route]);

  return (
    <>
      <HomePageHeader>
        <ToastMessage content={message} onClick={handleMoveNotification} isOpen={isOpen} />
        <Button height={30} handleOnClick={() => route.push('/notification')}>
          {isNewNoti ? <NewNotiIcon /> : <NotiIcon />}
        </Button>
        <Button height={30} handleOnClick={() => route.push('/setting')}>
          <SettingIcon />
        </Button>
      </HomePageHeader>
    </>
  );
};

export default React.memo(HomeHeader);

const HomePageHeader = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  padding-top: 30px;
  width: 100%;
`;
