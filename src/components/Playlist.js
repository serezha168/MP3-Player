import React from 'react';
import styled from 'styled-components';

const PlaylistContainer = styled.div`
  width: 300px;
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
`;

const PlaylistItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Playlist = ({ tracks, onTrackSelect }) => {
  return (
    <PlaylistContainer>
      {tracks.map((track, index) => (
        <PlaylistItem key={index} onClick={() => onTrackSelect(index)}>
          {track.title}
        </PlaylistItem>
      ))}
    </PlaylistContainer>
  );
};

export default Playlist;