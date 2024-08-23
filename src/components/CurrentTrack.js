import React from 'react';
import styled from 'styled-components';

const TrackInfo = styled.div`
  text-align: center;
  padding: 10px;
`;

const CurrentTrack = ({ track }) => {
  return (
    <TrackInfo>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </TrackInfo>
  );
};

export default CurrentTrack;