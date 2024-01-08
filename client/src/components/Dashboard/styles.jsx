import { FlexRow } from "../styles/Container.styled";
import styled from "styled-components";

export const DashboardContainer = styled(FlexRow)`
  margin-top: 70px;

  & section {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const StyledSidebar = styled.nav`
  padding: 0;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & ul {
    padding: 0;
    width: 100%;
    height: 100%;
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
`