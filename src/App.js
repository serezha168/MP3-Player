import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Playlist from './components/Playlist';
import PlaybackControls from './components/PlaybackControls';
import CurrentTrack from './components/CurrentTrack';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const [tracks] = useState([
    { title: 'Трек 1', artist: 'Исполнитель 1', src: 'path/to/track1.mp3' },
    { title: 'Трек 2', artist: 'Исполнитель 2', src: 'path/to/track2.mp3' },
    { title: 'Трек 3', artist: 'Исполнитель 3', src: 'path/to/track3.mp3' },
  ]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex].src));

  const handleTrackSelect = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    audioRef.current.src = tracks[index].src;
    audioRef.current.play();
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    handleTrackSelect(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    handleTrackSelect(newIndex);
  };

  return (
    <AppContainer>
      <CurrentTrack track={tracks[currentTrackIndex]} />
      <PlaybackControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <Playlist tracks={tracks} onTrackSelect={handleTrackSelect} />
    </AppContainer>
  );
};

export default App;