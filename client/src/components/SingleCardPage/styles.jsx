import styled from "styled-components";
import { Section } from "../styles/Section.styled";
import { FlexColumn, FlexRow } from "../styles/Container.styled";

export const StyledViewOptionsSection = styled(Section)`
  margin-top: 50px;

  & > div {
    & > div:nth-child(1) { // card container
      background-color: ${({theme}) => theme.colors.sec.two};

      & > div { // card
        & img {
          height: 40px;
          width: 50px;
        }
      }
    }

    & > div:nth-child(2) {
      & button {
        border-radius: 5px;
        font-size: 17px;
      }
    }
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    & > div {
      flex-direction: column;
      height: 450px;
      justify-content: flex-start;

      & > div:nth-child(1) { // card container
        width: 60%;

        & > div { // card
          width: 90%;
          & img {
            height: 30px;
            width: 30px;
          }
        }
      }

      & > div:nth-child(2) { // buttons container
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;

        & a {
          width: fit-content;
        }
        & button {
          border-radius: 5px;
          font-size: 17px;
        }
        & button:nth-child(1) {
          width: 150px;
        }
      }
    }
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    & > div {
      & > div:nth-child(1) { // card container
        width: 100%;
      }
      
      & > div:nth-child(2) {
        & button {
          width: 70px;
          font-size: 15px;
        }
      }
    }
  }
`

export const OtherSimilarCommentsSection = styled.section`
  padding: 0 90px;
  display: grid;
  grid-template-columns: 70% 30%;
  row-gap: 60px;
  column-gap: 20px;
  margin-bottom: 40px;

  & section {
    padding: 0;
    border: 1px solid red;
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 10px;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const OtherViewsContainer = styled(FlexColumn)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  & h3 {
    text-decoration: underline;
  }

  & > div {
    & > div {
      border: 1px solid ${({ theme }) => theme.colors.sec.nine};
    }
  }
`

export const CommentsContainer = styled(FlexColumn)`
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  & h3 {
    text-decoration: underline;
  }

  & > div:nth-child(2) {
    margin-bottom: 60px;
  }

  & textarea {
    max-width: 85%;
    min-width: 85%;
    max-height: 50px;
    min-height: 50px;
    padding: 5px 10px;
    font-family: 'Inter';
    font-size: 17px;
    border: 1px solid ${({ theme }) => theme.colors.sec.eight};
  }

  @media(max-width: ${({ theme }) => theme.tablet}) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    margin-bottom: 40px;
  }
`

export const SingleCommentContainer = styled(FlexRow)`
  & span {
    color: ${({ theme }) => theme.colors.prim.seven};
    font-size: 20px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    gap: 10px;

    & img {
      height: 50px;
      width: 50px;
    }

    & span {
      font-size: 17px;
    }
  }
`

export const SimilarDesignsContainer = styled(FlexColumn)`
  grid-column: 2 / 3;
  grid-row: 1 / 3;

  @media(max-width: ${({ theme }) => theme.tablet}) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    & > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      column-gap: 3px;
    }
  }
`