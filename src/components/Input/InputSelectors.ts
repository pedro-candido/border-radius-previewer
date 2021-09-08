import { RootState } from "src/redux/store/configureStore.store";

export const selectBorderPosition = (state: RootState) =>
  state.borders.position;
