import styled from "styled-components"
import { FlexColumn, FlexRow, Container } from "../styles/Container.styled";


// CARD PREVIEW STYLES
export const CardFront = styled(FlexColumn)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 30px;
  color: #fff;
  height: 300px;
  min-width: 520px;
  max-width: 520px;
  transition: all .2s ease;

  & h3 {
    font-size: 35px;
    font-family: 'Courier New', Courier, monospace;
  }

  & p {
    font-size: 19px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    padding: 10px;
    height: 200px;
    min-width: 300px;
    max-width: 300px;

    & p {
      font-size: 15px;
    }

    & img {
      height: 40px;
      width: 40px;
    }

    & > div:nth-child(2) {
      gap: 15px;
      width: 100%;
      justify-content: center;
      & h3 {
        font-size: 25px;
      }
    }
  }
`

export const CardBack = styled(FlexColumn)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  color: #fff;
  height: 300px;
  min-width: 520px;
  max-width: 520px;
  transition: all .2s ease;

  & p {
    font-size: 13px;
  }

  & > div:nth-child(3) {
    & p {
      font-size: 15px;
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: 200px;
    min-width: 300px;
    max-width: 300px;

    & div {
      font-size: 10px;
    }

    & > div:nth-child(2) {
      height: 30px;
    }

    & > div:nth-child(3) {
      padding: 0 10px;
      & div {
        font-size: 12px;
        height: 25px;
      }

      & p {
        font-size: 10px;
      }
    }

    & img {
      height: 40px;
      width: 40px;
    }
  }
`

export const CardPreviewContainer = styled(FlexColumn)`
  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

export const PreviewNavContainer = styled(FlexRow)`
  & > div {
    background-color: #d1d5db;
    position: relative;
    padding: 0 10px;
    cursor: pointer;

    & > div {
      position: absolute;
      left: 0;
      transition: all .2s ease;
    }
  }

  & p {
    z-index: 1;
    color: #fff;
  }
`

export const PreviewContainerWrapper = styled(FlexRow)`
  border: 1px solid ${({ theme }) => theme.colors.sec.five};
  padding: 10px;
  height: 85%;
  margin-left: 20px;
  position: relative;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
    border: none;
  }
`

export const PreviewContainer = styled(FlexRow)`
  height: 100%;
  position: absolute;
  left: 0;
  transition: all .2s ease;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 12px;
    width: 650px;
  }
`

















// CONTROL PANEL STYLES
export const ControlPanelContainer = styled(FlexColumn)`
  border: 1px solid ${({ theme }) => theme.colors.sec.five};

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & button {
      width: 150px;
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 70%;

    & button {
      width: 200px;
    }
  }
`

export const BackBtnContainer = styled(FlexRow)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.sec.five};
  & button {
    border: none;
  }
`

export const Controls = styled(FlexColumn)`
  & input[type="file"] {
    height: 40px;
  }

  & input[type="text"] {
    height: 30px;
    box-sizing: border-box;
    padding-left: 10px;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & input[type="file"] {
      width: 150px;
    }

    & input[type="text"] {
      width: 50px;
    }

    & input[name="name"] {
      width: 150px;
    }
  }
`

export const NumberInputContainer = styled(FlexRow)`
  & input {
    width: 50px;

    &::-webkit-inner-spin-button {
      display: none;
    }
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    grid-auto-rows: 30px;
  }
`

export const ColorsGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  grid-auto-rows: 30px;
  gap: 10px;

  & div {
    cursor: pointer;
  }
`