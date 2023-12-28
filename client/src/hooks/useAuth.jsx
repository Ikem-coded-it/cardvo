import { useContext } from "react";
import { AppContext } from "../App";

export default function useAuth() {
  const { user, setUser } = useContext(AppContext);

  return{user, setUser};
}