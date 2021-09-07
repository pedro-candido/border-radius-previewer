import { useSelector } from "react-redux";
import { RootState } from "src/redux/store/configureStore.store";
import { InputProps } from "./InputInterfaces";

export const selectBorderPosition = (state: RootState) =>
  state.borders.position;
