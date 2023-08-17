import styled from "styled-components";
import { StyledHeader } from "../styles/Header.styled";
import { Section } from "../styles/Section.styled";

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