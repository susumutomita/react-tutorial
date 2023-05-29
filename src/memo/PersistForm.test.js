import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import PersistForm from "./PersistForm";
import pstore from "../index";

jest.mock("../index", () => ({
  persist: jest.fn(),
  flush: jest.fn(),
  pause: jest.fn(),
}));

const mockStore = configureStore([]);
let store;

describe("PersistForm Component", () => {
  beforeEach(() => {
    store = mockStore({});

    // Reset the mocked methods count
    pstore.persist.mockReset();
    pstore.flush.mockReset();
    pstore.pause.mockReset();

    render(
      <Provider store={store}>
        <PersistForm />
      </Provider>
    );
  });

  it("should call pstore.persist and pstore.flush when checkbox is checked", () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);  // Uncheck the checkbox
    fireEvent.click(checkbox);  // Check the checkbox
    expect(pstore.persist).toHaveBeenCalled();
    expect(pstore.flush).toHaveBeenCalled();
  });

  it("should call pstore.pause when checkbox is unchecked", () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(pstore.pause).toHaveBeenCalled();
  });
});
