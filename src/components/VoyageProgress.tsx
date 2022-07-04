/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react';
import ShipPin from './ShipPin'

const voyageProgressStyle = css`
  margin: 200px auto 0;
  width: 80%;
  height: 200px;
`

const dotsStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const portWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Dot = styled.div`
  height: 25px;
  width: 25px;
  background-color: #83A2C0;
  border-radius: 50%;
`
const DotBig = styled.div`
  height: 50px;
  width: 50px;
  background-color: #83A2C0;
  border-radius: 50%;
`
interface Ports {
  portOfLoading: string;
  portOfDischarge: string;
}
interface Times {
  departureTime: string | Date;
  arrivalTime: string | Date;
}
type Props = Ports & Times;

const VoyageProgress: React.FC<Props> = (props) => {
  return (
    <div css={voyageProgressStyle}>
      <div css={{marginBottom: '4rem'}}>
        <ShipPin/>
      </div>
      <div css={dotsStyle}>
        <div css={portWrapperStyle}>
          <DotBig/>
          <p css={{marginTop: '1rem', fontSize: '1.5rem'}}>{props.portOfLoading}</p>
        </div>
        {[...Array(10)].map((e, i) => {
        return <Dot key={i}/>
        })}
        <div css={portWrapperStyle}>
          <DotBig/>
          <p css={{marginTop: '1rem', fontSize: '1.5rem'}}>{props.portOfDischarge}</p>
        </div>
      </div>
    </div>
  );
}

export default VoyageProgress;