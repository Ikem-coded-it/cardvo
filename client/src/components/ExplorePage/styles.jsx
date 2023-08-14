import { Section } from "../styles/Section.styled";
import styled from "styled-components";

const ExploreHeaderSection = styled(Section)`
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
        transition: all .2s ease-out;
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
        width: 200px;
        font-size: 15px;
      }
    }
  }
`

export default ExploreHeaderSection;