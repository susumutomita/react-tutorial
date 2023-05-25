import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import FindForm from "./FindForm";

const mockStore = configureStore([]);
let store;

describe("FindForm Component", () => {
  beforeEach(() => {
    store = mockStore({
      message: '',
      mode: 'default',
      data: [],
      fdata: []
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <FindForm />
      </Provider>
    );
  });

  it("should dispatch an action on form submission", () => {
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: 'test' } });

    fireEvent.submit(screen.getByText("Find"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'FIND',
      find: 'test'
    });
  });
});
