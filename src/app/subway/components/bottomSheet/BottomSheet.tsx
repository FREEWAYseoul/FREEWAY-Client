import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStationContext } from '@/common/context/StationContext';

import StationButtonGroup from './StationButtonGroup';
import StationHeader from './StationHeader';
import StationMap from './StationMap';

const BottomSheet = () => {
  const { isShow, isDrag, handleShowController } = useStationContext();
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(true);

  const vh = window.innerHeight;

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  /**
   * velocity : drag 속도
   * delta : 이동한 정도(?)
   */
  const onDragEnd = (e: DragEvent, info: { delta: { y: number }; velocity: { y: number } }) => {
    const { delta, velocity } = info;

    const shouldClose = (() => {
      if (velocity.y > 0) {
        // velocity > 0 아래로 드래그
        return true;
      } else if (velocity.y < 0) {
        // velocity < 0 위로 드래그
        return false;
      } else {
        return !(0 >= delta.y);
      }
    })();

    if (shouldClose) {
      controls.start('hidden');
      onClose();
    } else {
      controls.start('visible');
      onOpen();
      handleShowController(true);
    }
  };

  useEffect(() => {
    if (isDrag) {
      onClose();
    } else {
      onOpen();
    }
  }, [isDrag]);

  useEffect(() => {
    if (isShow) {
      if (isOpen) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    } else {
      controls.start('closed');
    }
  }, [controls, isOpen, isShow, handleShowController]);

  return (
    <StyledBottomSheet
      drag='y'
      onDragEnd={onDragEnd}
      initial='visible'
      animate={controls}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400,
      }}
      variants={{
        visible: { y: vh - 235 },
        hidden: { y: vh - 110 },
        closed: { y: vh },
      }}
      dragConstraints={{ top: 150 }}
      dragElastic={0.4}
    >
      <StationHeader />
      <Divider />
      <StationMap />
      <StationButtonGroup />
    </StyledBottomSheet>
  );
};

export default BottomSheet;

const StyledBottomSheet = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 20px 20px 0 0;
  background-color: #fff;
  box-shadow: 0px 0px 13.3333px rgba(68, 81, 69, 0.1);

  z-index: 99;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  opacity: 0.5;
`;
