/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React from 'react';

const Pin = styled.div`
  position: relative;
  border-radius: 50px 50px 50px 0px;
  background: #345370;
  padding: 20px;
  width: 100px;
  height: 100px;    
  transform: rotate(-45deg);
`
const Circle = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 50%;
  transform: rotate(45deg);
  overflow:hidden;
  margin: auto;
  &:before{
    position:absolute;
    content: '';
    bottom: 0;
    height: 35%;
    left: 0;
    right: 0;
    background: #83A2C0;
  }
`
const Triangle = styled.div`
	position: absolute;
	background-color: #012B45;
  bottom: 25%;
  left: 25%;
  z-index: -10;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }
  &,
  &:before,
  &:after {
    width:  2rem;
    height: 2rem;
    border-top-right-radius: 30%;
  }
  & {
      transform: rotate(-120deg) skewX(-30deg) scale(1,.866);
  }
  &:before {
      transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
  }
  &:after {
      transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
  }
`

const ShipPin: React.FC = () => {
  return (
    <Pin><Circle><Triangle/></Circle></Pin>
  );
}

export default ShipPin;