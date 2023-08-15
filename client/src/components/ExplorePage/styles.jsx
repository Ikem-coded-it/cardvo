import { Section } from "../styles/Section.styled";
import { FlexRow, Container, FlexColumn } from "../styles/Container.styled";
import styled from "styled-components";

// EXPLORE HEADER STYLES
export const ExploreHeaderSection = styled(Section)`
  & h1 {
    font-size: 50px;
  }

  & p {
    color: ${({theme}) => theme.colors.sec.nine};
    font-size: 25px;
  }

  & > div {
    border: 1px solid ${({theme}) => theme.colors.sec.ten};

    & > div {
      border-right: 1px solid ${({theme}) => theme.colors.sec.ten};
      position: relative;

      & > div {
        cursor: pointer;
      }

      & .show {
        opacity: 1;
        pointer-events: auto;
        top: 15px;
      }

      & ul {
        opacity: 0;
        position: absolute;
        top: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px 10px;
        pointer-events: none;
        transition: all .1s ease-out;
      }

      & ul li {
        list-style: none;
        cursor: pointer;
        font-weight: bold;
      }

      & ul li:hover {
        background-color:  ${({theme}) => theme.colors.sec.two};
      }
    }

    & input {
      border: none;
      outline: none;
      height: 100%;
      width: clamp(200px, 400px, 500px);
      font-size: 17px;
      padding: 0 10px;
      letter-spacing: 1px;
    }

    & button {
      height: 100%;
    }
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 50px;
    text-align: center;
    gap: 20px;

    & h1 {
      font-size: 25px;
    }

    & p {
      font-size: 15px;
    }

    & > div { 
      & > div {
        display: none;
      }

      & input {
        height: 100%;
        width: 300px;
        font-size: 15px;
      }

      & button {
        width: 150px;
      }
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    & > div { 
      & input {
        height: 100%;
        width: 200px;
        font-size: 15px;
      }

      & button {
        width: 100px;
      }
    }
  }
`

















// EXPLORE HUNDREDS STYLES
export const ExploreHundredsSection = styled(Section)`
  & h2 {
    width: 100%;
    text-align: left;
    font-size: 30px;
    letter-spacing: -1px;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    & h2 {
      font-size: 25px;
    }
  }
`

export const Slider = styled(FlexRow)`
  & > div:nth-child(2) {
    position: relative;

    & img {
      position: absolute;
    }

    & img:nth-child(1) {
      top: 0;
      left: 0;
    }

    & img:nth-child(2) {
      bottom: 0;
      right: 0;
    }
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    width: fit-content;
  }
`















// EXPLORE CARDS STYLES

export const ExploreCardsSection = styled(Section)`
  gap: 33px;
  & h2 {
    width: 100%;
    text-align: left;
    font-size: 30px;
    letter-spacing: -1px;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    gap: 80px;
  }
`

export const CardsGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  grid-auto-rows: 300px;
  gap: 30px;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(auto-fill, 320px);
    grid-auto-rows: 250px;
    row-gap: 150px;
    margin-bottom: 100px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    gap: 190px;
  }
`

export const CardDisplay = styled(FlexColumn)`
  background-color: ${({theme}) => theme.colors.sec.two};
  position: relative;
  overflow-y: hidden;

  & button {
    color: #fafafa;
    border: 3px solid #fafafa;
    width: 50px;
    border-radius: 0;
  }

  & button:active {
    background-color: rgba(0, );
  }

  & > div:nth-child(1) {
    transform: translateY(-130%);
    transition: all .2s ease;
    z-index: 1;
  }

  & > div:nth-child(3) {
    transform: translateY(130%);
    transition: all .2s ease;
    z-index: 1;
  }


  & > div:nth-child(4) {
    transition: all .2s ease;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: -300px;
    pointer-events: none;
    z-index: 0;
  }

  @media(hover: hover) {
    & button:hover {
      background-color: transparent;
    }

     &:hover > div:nth-child(1) {
      transform: translateY(0);
    }

    &:hover > div:nth-child(2) {
      transform: rotate(10deg) scale(1.1);
    }

     &:hover > div:nth-child(3) {
      transform: translateY(0);
    }

     &:hover > div:nth-child(4) {
      bottom: 0;
    }
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    overflow-y: visible;
    border-radius: 5px;
    & button {
      border: 1px solid ${({ theme }) => theme.colors.sec.nine}; 
      color: ${({ theme }) => theme.colors.sec.nine};
      border-radius: 5px;
    }

    & > div:nth-child(1) {
      transform: translateY(-115%);
      padding: 0;
    }

    & > div:nth-child(3) {
      transform: translateY(115%);
      padding: 0;
    }

    & > div:nth-child(4) {
      display: none;
    }
    
     @media(hover: none) {
      & button:hover {
        background-color: transparent;
      }

      &:hover > div:nth-child(1) {
        transform: translateY(-115%);
      }

      &:hover > div:nth-child(2) {
        transform: rotate(10deg) scale(1.2);
      }

      &:hover > div:nth-child(3) {
        transform: translateY(115%);
      }

      &:hover > div:nth-child(4) {
        bottom: 0;
      }
    }
  }
`

export const StyledExploreCard = styled(FlexColumn)`
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.sec.nine};
  height: 60%;
  width: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  color: #fff;
  transition: all .2s ease;
 
  & p {
    font-size: 15px;
  }

  & img {
    height: 35px;
    width: 35px;
  }

  & > div:nth-child(2) {
    gap: 15px;
    width: 100%;
    justify-content: center;
    & h3 {
      font-size: 20px;
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
    padding: 10px;

    & p {
      font-size: 15px;
    }

    & img {
      height: 30px;
      width: 30px;
    }

    & > div:nth-child(2) {
      gap: 7px;
      width: 100%;
      justify-content: center;
      & h3 {
        font-size: 20px;
      }
    }
  }
`