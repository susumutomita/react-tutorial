import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import App from "./App";

const mockStore = configureStore([]);
let store;

describe("App Component", () => {
  beforeEach(() => {
    store = mockStore({
      counter: 0,
      message: "COUNTER",
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(screen.getByText(/COUNTER/)).toBeInTheDocument();
    expect(screen.getByText(/0/)).toBeInTheDocument();

  });

  it("should dispatch an action on button click", () => {
    fireEvent.click(screen.getByText("click"));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({ type: "INCREMENT" });
  });

  it("should dispatch an action on button click with shift key", () => {
    fireEvent.click(screen.getByText("click"), { shiftKey: true });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({ type: "DECREMENT" });
  });
});
