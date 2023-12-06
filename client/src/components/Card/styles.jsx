import styled from "styled-components";
import { FlexColumn, FlexRow } from "../styles/Container.styled";

export const StyledCardFrontView = styled(FlexColumn)`
  // box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.sec.nine};
  height: ${({ $height }) => $height || "60%"};
  width: ${({ $width }) => $width || "70%"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  transition: all .2s ease;
 
  & p {
    font-size: ${({ $psize }) => $psize || "15px"};
  }

  & img {
    height: ${({ $imgsize }) => $imgsize || "35px"};
    width:  ${({ $imgsize }) => $imgsize || "35px"};
  }

  & > div:nth-child(2) {
    gap: 15px;
    width: 100%;
    justify-content: center;
    & h3 {
      font-size: ${({ $h3size }) => $h3size || "20px"};
      font-family: 'Courier New', Courier, monospace;
    }
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & p {
      font-size: 12px;
    }

    & > div:nth-child(2) {
      gap: 7px;
      & h3 {
        font-size: 17px;
      }
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ $m_height }) => $m_height || "60%"};
    width: ${({ $m_width }) => $m_width || "70%"};
    padding: 10px;

    & p {
      font-size: ${({ $m_psize }) => $m_psize || "15px"};
    }

    & img {
      height: ${({ $m_imgsize }) => $m_imgsize || "30px"};
      width:  ${({ $m_imgsize }) => $m_imgsize || "30px"};
    }

    & > div:nth-child(2) {
      gap: 7px;
      width: 100%;
      justify-content: center;
      & h3 {
        font-size: ${({ $m_h3size }) => $m_h3size || "15px"};
      }
    }
  }
`

export const StyledCardBackView = styled(FlexColumn)`
  // box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.sec.nine};
  height: ${({ $height }) => $height || "60%"};
  width: ${({ $width }) => $width || "70%"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  color: #fff;
  transition: all .2s ease;

  & > div {
    color: black;
  }

  & > div:nth-child(1) { // electronic use
    color: #fff;
    font-size: ${({ $electronicsize }) => $electronicsize || "7px"};
  }

   & > div:nth-child(2) { // black space
    background-color: black;
    height: ${({ $blackheight }) => $blackheight || "20px"};
   }

  & > div:nth-child(3) {
    & > div { // Authorize
      color: #fff;
      font-size: ${({ $authorizesize }) => $authorizesize || "10px"};
    }

    & > div:nth-child(2) {
      height: ${({ $cvvheight }) => $cvvheight || "15px"};
    }

    & p {
      color: #fff;
      font-size: ${({ $psize }) => $psize || "7px"};
    }
  }

  & img {
    height: ${({ $imgsize }) => $imgsize || "35px"};
    width:  ${({ $imgsize }) => $imgsize || "35px"};
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ $m_height }) => $m_height || "60%"};
    width: ${({ $m_width }) => $m_width || "70%"};
    & div {
      font-size: 10px;
    }

    & > div:nth-child(1) {
      font-size: ${({ $m_electronicsize }) => $m_electronicsize || "7px"};
    }

    & > div:nth-child(2) {
      height: ${({ $m_blackheight }) => $m_blackheight || "15px"};
    }

    & > div:nth-child(3) {
      padding: 0 10px;
      & div {
        font-size: ${({ $m_authorizesize }) => $m_authorizesize || "10px"};
        height: 25px;
      }

      & > div:nth-child(2) {
        height: ${({ $m_cvvheight }) => $m_cvvheight || "15px"};
      }

      & p {
        font-size: ${({ $m_psize }) => $m_psize || "7px"};
      }
    }

    & img {
      height: ${({ $m_imgsize }) => $m_imgsize || "30px"};
      width:  ${({ $m_imgsize }) => $m_imgsize || "30px"};
    }
  }
`

export const StyledCardDisplay = styled(FlexRow)`
  background-color: ${({theme, $bg}) => $bg || theme.colors.sec.two};
  height: ${({ $height }) => $height || "200px"};
  width: ${({ $width }) => $width || "270px"};
  cursor: pointer;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: ${({ $m_height }) => $m_height || "170px"};
    width: ${({ $m_width }) => $m_width || "240px"};
  }
`