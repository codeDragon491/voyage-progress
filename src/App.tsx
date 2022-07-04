/** @jsxImportSource @emotion/react */
import VoyageProgress from './components/VoyageProgress';
import { css } from '@emotion/react'

function App() {
  const largeScreensOnlyStyle = css`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }`
  return (
    <div css={largeScreensOnlyStyle}>
      <VoyageProgress 
        portOfLoading="Copenhagen" 
        portOfDischarge="Oslo"
        departureTime="Mon, Jul 9 2022 05:00"
        arrivalTime="Mon, Jul 9 2022 10:00"
      />
    </div>
  );
}

export default App;
