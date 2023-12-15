import styled from "styled-components";
import { StyledHeader } from "../styles/Header.styled";
import { Section } from "../styles/Section.styled";
import { motion } from "framer-motion";

export const StyledContactUsHeader = styled(StyledHeader)`
  @media(max-width: ${({ theme }) => theme.tablet}) {
    min-height: 350px;

    & img {
      width: 100%;
    }
  }
`

export const StyledContactUsAnytimeSection = styled(Section)`
  padding: 0;
  margin-top: 20px;
  & h1 {
    height: 100px;
  }

  & > div {
    background-color: ${({ theme }) => theme.colors.sec.one};
    padding: 40px 20px;
  }

  & p {
    text-align: center;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & button {
      width: 300px;
    }
  }
`

export const StyledContactUsMessage = styled(Section)`
  background-color: ${({ theme }) => theme.colors.sec.three};
  padding: 0 20px;

  & > div {
    & > div {
      width: 250px;

      & p,
      & h4 {
        padding: 0 30px;
        text-align: center;
      }

      & button {
        font-size: 17px;
      }
    }

    & > div:nth-child(1) {
      border-right: 1px solid ${({ theme }) => theme.colors.sec.five};

      & svg {
        height: 70px;
        width: 70px;
      }
    }
  }

  & svg {
    height: 50px;
    width: 50px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: 700px;

    & > div {
      flex-direction: column;
      width: 100%;
      gap: 40px;

      & > div {
        width: 100%;
        padding: 0;
        border-right: none;
        gap: 20px;

        & > div:nth-child(1) {
          border-right: none;
        }
      }
    }
  }
`

export const StyledContactUsCustomer = styled(Section)`
  & ul {
    width: 80%;

    & li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      list-style: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.sec.eight};
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 20px;
    margin-top: 40px;

    & h2 {
      width: 100%;
      text-align: center;
      font-size: 18px;
    }

    & ul {
    width: 100%;
    padding: 0;

    & li {
      height: 70px;
    }
  }
  }
`

export const EmailForm = styled(motion.form)`
  height: fit-content;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 30px 20px 20px;
  background-color: ${({theme}) => theme.colors.prim.four};
  border-radius: 10px;

  & > div {
    height: fit-content;
    width: 100%;

    & > button {
      &:hover {
        background-color: transparent;
        transform: scale(1.02);
      }
    }
  }

  & svg {
    cursor: pointer;
  }

  & h1 {
    color: white;
    font-size: 25px;
  }

  & label {
    color: white;
    font-size: 20px;
  }

  & input {
    height: 40px;
    width: 100%;
    font-size: 17px;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }

  & span {
    height: 10px;
    font-size: 15px;
    color: red;
  }

  & textarea {
    min-height: 150px;
    max-height: 150px;
    min-width: 100%;
    max-width: 100%;
    font-size: 17px;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
     & > div {
      & button {
        padding: 0;
        width: 80%;
      }
    }
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    width: 300px;
    gap: 15px;
    padding: 10px;

    & > div {
      gap: 10px;
    }

    & h1 {
      font-size: 20px;
    }

    & label {
      font-size: 17px;
    }

    & input {
      height: 30px;
      width: 95%;
      font-size: 15px;
    }

    & textarea {
      min-height: 100px;
      max-height: 100px;
      min-width: 95%;
      max-width: 95%;
      font-size: 15px;
    }
  }
`