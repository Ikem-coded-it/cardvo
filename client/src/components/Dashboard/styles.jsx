import { FlexRow } from "../styles/Container.styled";
import styled from "styled-components";

export const DashboardContainer = styled(FlexRow)`
  & section {
    padding: 0;
    justify-content: flex-start;
  }

   & > section:nth-child(2) {
      justify-content: center;
    }

  @media(max-width: ${({theme}) => theme.tablet}) {
    display: block;

    & > section:nth-child(1) {
      position: fixed:
      bottom: 20px;
      left: 0;
      z-index: 2;
      width: 100vw;
      min-height: 50px;
      max-height: 50px;
    }

    & > section:nth-child(2) {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const DynamicPageContainer = styled(FlexRow)`
  box-sizing: border-box;

   @media(max-width: 1200px) {
    width: 900px;
  }

  @media(max-width: 1100px) {
    width: 800px;
  }

  @media(max-width: 1000px) {
    width: 700px;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    width: 800px;
  }

  @media(max-width: 750px) {
    width: 600px;
  }

  @media(max-width: 600px) {
    width: 550px;
  }

  @media(max-width: 550px) {
    width: 500px;
  }

  @media(max-width: 500px) {
    width: 400px;
  }

  @media(max-width: 400px) {
    width: 330px;
  }
`

export const StyledSidebar = styled.nav`
  padding: 0;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;

  & > ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    height: 50px;
    flex-direction: row;
    margin-bottom: 20px;

    & > ul {
      height: 50px;
      flex-direction: row;
      width: 75%;
      margin-bottom: 20px;
    }

    & > div {
      width: 25%;

      & button {
        width: 100%;
        margin: 0 0 20px 0;
        border: none;

        & p {
        display: none;
      }
    }
  }
`

export const SidebarListItem = styled.li`
  padding: 0;
  list-style: none;
  height: fit-content;
  width: 100%;

  i {
    height: 20px;
    width: 20px;
  }

  i, span, div {
    transition: all .2s ease;
  }

  & a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 70%;
    height: 70%;

    & > span {
      display: flex;
      justify-content: flex-start;
      font-size: 17px;
      font-weight: 600;
    }
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    width: 33.33%;
    height: 100%;

    & > div {
      height: 100%;

      & > div {
        display: none;
      }
    }

    & a {
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      & > span {
        display: none;
      }
    }
  }
`