import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 16px;
`;

const PlaybackControls = ({ isPlaying, onPlayPause, onPrevious, onNext }) => {
  return (
    <ControlsContainer>
      <Button onClick={onPrevious}>Предыдущий</Button>
      <Button onClick={onPlayPause}>
        {isPlaying ? 'Пауза' : 'Воспроизвести'}
      </Button>
      <Button onClick={onNext}>Следующий</Button>
    </ControlsContainer>
  );
};

export default PlaybackControls;