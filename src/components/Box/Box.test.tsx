import React from "react";
import { render, cleanup } from "@testing-library/react";
import Box from "./Box";

it("should render a component with a text", () => {
  const { getByTestId } = render(<Box />);
});
