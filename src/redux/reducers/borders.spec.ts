import store from "../store/configureStore.store";
import {
  modifyLeftBottom,
  modifyLeftTop,
  modifyRightBottom,
  modifyRightTop,
} from "./borders.reducer";

describe("left bottom border", () => {
  let { borderBottomLeftRadius } = store.getState().borders.position;

  it("does return 0", () => {
    expect(borderBottomLeftRadius).toBe(0);
  });

  it("does modify the left bottom border radius to 10", () => {
    store.dispatch(modifyLeftBottom(10));
    borderBottomLeftRadius =
      store.getState().borders.position.borderBottomLeftRadius;
    expect(borderBottomLeftRadius).toBe(10);
  });
});

describe("right bottom border", () => {
  let { borderBottomRightRadius } = store.getState().borders.position;

  it("does return 0", () => {
    expect(borderBottomRightRadius).toBe(0);
  });

  it("does modify the right bottom border radius", () => {
    store.dispatch(modifyRightBottom(10));
    borderBottomRightRadius =
      store.getState().borders.position.borderBottomRightRadius;
    expect(borderBottomRightRadius).toBe(10);
  });
});

describe("left top border", () => {
  let { borderTopLeftRadius } = store.getState().borders.position;

  it("does return 0", () => {
    expect(borderTopLeftRadius).toBe(0);
  });

  it("does modify the bottom left border radius to 10", () => {
    store.dispatch(modifyLeftTop(10));
    borderTopLeftRadius = store.getState().borders.position.borderTopLeftRadius;
    expect(borderTopLeftRadius).toBe(10);
  });
});

describe("top right border", () => {
  let { borderTopRightRadius } = store.getState().borders.position;

  it("does return 0", () => {
    expect(borderTopRightRadius).toBe(0);
  });

  it("does modify the top right border radius to 10", () => {
    store.dispatch(modifyRightTop(10));
    borderTopRightRadius =
      store.getState().borders.position.borderTopRightRadius;
    expect(borderTopRightRadius).toBe(10);
  });
});
