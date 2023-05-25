import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import DelForm from "./DelForm";

const mockStore = configureStore([]);
let store;

describe("DelForm Component", () => {
  beforeEach(() => {
    store = mockStore({
      message: '',
      mode: 'delete',
      data: [{ message: 'test1' }, { message: 'test2' }, { message: 'test3' }],
      fdata: []
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <DelForm />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(screen.getByText(/test1/)).toBeInTheDocument();
    expect(screen.getByText(/test2/)).toBeInTheDocument();
    expect(screen.getByText(/test3/)).toBeInTheDocument();
  });

  it("should dispatch an action on form submission", () => {
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: '1' } });

    fireEvent.submit(screen.getByText("Del"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'DELETE',
      index: '1'
    });
  });
});
