import { useContext } from "react";
import { NavContext } from "./App";

function useNavigation() {
  const navigation = useContext(NavContext);
  return navigation;
}

export default useNavigation;
