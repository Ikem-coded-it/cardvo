import { Section } from "../styles/Section.styled"
import { Outlet } from "react-router-dom";
import { DashboardContainer } from "./styles";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <DashboardContainer $height="calc(100vh - 80px)" $gap="0">
      <Section
      $width="20%"
      $height="100%">
        <Sidebar />
      </Section>

      <Section
      $width="80%"
      $height="100%"
      $bg={({theme}) => theme.colors.sec.two}>
        <Outlet />
      </Section>
    </DashboardContainer>
  )
}

export default Layout