/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useLayoutEffect, useState, useRef } from 'react';
import ShipPin from './ShipPin'

type DotProps = {
  isDark? : boolean,
}
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
`
const Dot = styled.div<DotProps>`
  margin: 0 auto;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #83A2C0;
  ${props => props.isDark && 'background-color: #345370;'}
`
const DotBig = styled.div<DotProps>`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #83A2C0;
  ${props => props.isDark && 'background-color: #345370;'}
`
const portNameStyle = css`
  margin-top: 1rem;
  font-size: calc(10px + 2vmin);
  position: absolute;
  top: 4rem;
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

  const departureTime: number = new Date(props.departureTime).getTime()
  const arrivalTime :number = new Date(props.arrivalTime).getTime()

  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [position, setPosition] = useState(0);
  const [progress, setProgress] = useState(0);
  const unitRef = useRef<HTMLDivElement>(null);
  const shipPinRef = useRef<HTMLDivElement>(null);

  setInterval(() => {
    setCurrentTime(new Date().getTime())
  }, 1000)

  const moreFloor = (n:number) => Math.floor (n / 10) * 10 || n

  const calculateProgress = () => {
    const widthDiff = (shipPinRef.current!.clientWidth - unitRef.current!.clientWidth)
    const pinInitialPosition = widthDiff/2
    if(departureTime < arrivalTime) {
      if(currentTime <= departureTime) {
        setPosition(-pinInitialPosition)
      } else if (currentTime >= arrivalTime) {
        const unit = 10
        setPosition(unit * unitRef.current!.clientWidth -pinInitialPosition)
        setProgress(unit)
      } else if (currentTime > departureTime && currentTime < arrivalTime) {
        const timeDifference = currentTime - departureTime
        const voyageLength = arrivalTime - departureTime
        const percDiffRounded = Math.floor(100 / voyageLength * timeDifference)
        const percDiffRoundedMore = moreFloor(100 / voyageLength * timeDifference)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const unit = percDiffRounded / 10
        setPosition(unit * unitRef.current!.clientWidth - pinInitialPosition)
        setProgress(percDiffRoundedMore / 10)
      }
    }
  }

  useLayoutEffect(() => {
    calculateProgress()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  return (
    <div css={voyageProgressStyle}>
      <div ref={shipPinRef} css={{marginBottom: '4rem', 
              width: 'fit-content', 
              marginLeft: position + 'px',
            }}
      >
        <ShipPin/>
      </div>
      <div css={dotsStyle}>
        <div css={portWrapperStyle}>
        <DotBig isDark/>
          <p css={portNameStyle}>{props.portOfLoading}</p>
        </div>
        {(progress >= 1 && progress < 10) && ([[...Array(progress)].map((e, i) => {
        return <div ref={unitRef} key={i} css={{flex: '1 1 0'}}><Dot isDark/></div>
        }), ...[...Array(9-progress)].map((e, i) => {
          return <div ref={unitRef} key={i} css={{flex: '1 1 0'}}><Dot/></div>
        })])}
        {progress === 10 && [...Array(9)].map((e, i) => {
          return <div ref={unitRef} key={i} css={{flex: '1 1 0'}}><Dot isDark/></div>
        })}
        {progress < 1 && [...Array(9)].map((e, i) => {
          return <div ref={unitRef} key={i} css={{flex: '1 1 0'}}><Dot/></div>
        })}
        <div css={portWrapperStyle}>
        {progress < 10 ? <DotBig/> : <DotBig isDark/>}
          <p css={portNameStyle}>{props.portOfDischarge}</p>
        </div>
      </div>
    </div>
  );
}

export default VoyageProgress;