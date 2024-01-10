import Layout from "../../components/Dashboard/Layout";
import { LoggedInNav } from "../../components/Nav";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";

const Dashboard = () => {
  const context = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    context.setCurrentPage(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <LoggedInNav/>
    <Layout/>
    </>
  )
}

export default Dashboard