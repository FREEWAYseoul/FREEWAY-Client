import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useStationContext } from '@/common/context/StationContext';

import StationButtonGroup from './StationButtonGroup';
import StationHeader from './StationHeader';
import StationMap from './StationMap';

const BottomSheet = () => {
  const { station } = useStationContext();
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);
  const prevIsOpen = useRef<boolean>();

  const vh = window.innerHeight;

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onDragEnd = (event: DragEvent, info: { velocity: { y: number }; point: { y: number } }) => {
    const shouldClose = info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      controls.start('hidden');
      onClose();
    } else {
      controls.start('visible');
      onOpen();
    }
  };

  useEffect(() => {
    prevIsOpen.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start('visible');
    } else if (!prevIsOpen && isOpen) {
      controls.start('hidden');
    }
  }, [controls, isOpen, prevIsOpen]);

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
      <StationMap title={station.stationName} line={station.lineId} />
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
