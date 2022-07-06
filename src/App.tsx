/** @jsxImportSource @emotion/react */
import React from 'react';
import VoyageProgress from './components/VoyageProgress';
import { css } from '@emotion/react'

const largeScreensOnlyStyle = css`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }`

const App: React.FC = () => {
  return (
    <div css={largeScreensOnlyStyle}>
      <VoyageProgress 
        portOfLoading="Copenhagen" 
        portOfDischarge="Oslo"
        departureTime="Mon, Jul 8 2022 10:00"
        arrivalTime="Mon, Jul 8 2022 19:00"
      />
    </div>
  );
}

export default App;
