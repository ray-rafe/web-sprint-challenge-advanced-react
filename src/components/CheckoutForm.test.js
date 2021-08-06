import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const fName = screen.getByLabelText(/First Name/i);
  userEvent.type(fName, "Rafee");

  const lName = screen.getByLabelText(/Last Name/i);
  userEvent.type(lName, "Roberts");

  const address = screen.getByLabelText(/address:/i);
  userEvent.type(address, "123 Lil Ave");

  const city = screen.getByLabelText(/city:/i);
  userEvent.type(city, "Rio Rancho");

  const state = screen.getByLabelText(/state:/i);
  userEvent.type(state, "NM");

  const zip = screen.getByLabelText(/zip:/i);
  userEvent.type(zip, "87144");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const successMsg = screen.getByTestId("successMessage");
  expect(successMsg).toBeInTheDocument();
});
