import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import AddForm from "./AddForm";

const mockStore = configureStore([]);
let store;

describe("AddForm Component", () => {
  beforeEach(() => {
    store = mockStore({
      message: 'please type message:',
      mode: 'default',
      data: [],
      fdata: []
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <AddForm />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(screen.getByText(/please type message:/)).toBeInTheDocument();
  });

  it("should dispatch an action on form submission", () => {
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: 'New message' } });

    fireEvent.submit(screen.getByText("Add"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'ADD',
      message: 'New message'
    });
  });
});
