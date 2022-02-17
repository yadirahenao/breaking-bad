import React from "react";
import ButtonLoading from "../components/buttonLoading";
import { render, screen } from "@testing-library/react";

it('renders okay', () => {
  render(<ButtonLoading />);
  expect(screen.getByTestId('button-loading')).toBeInTheDocument();
});