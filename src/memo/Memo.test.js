import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Memo from "./Memo";

const mockStore = configureStore([]);
let store;

describe("Memo Component", () => {
  it("should render with given state from Redux store", () => {
    store = mockStore({
      mode: 'default',
      data: [{ message: 'test1' }, { message: 'test2' }, { message: 'test3' }],
      fdata: []
    });

    render(
      <Provider store={store}>
        <Memo />
      </Provider>
    );

    expect(screen.getByText(/test1/)).toBeInTheDocument();
    expect(screen.getByText(/test2/)).toBeInTheDocument();
    expect(screen.getByText(/test3/)).toBeInTheDocument();
  });

  it("should render with filtered data when mode is 'find'", () => {
    store = mockStore({
      mode: 'find',
      data: [{ message: 'test1' }, { message: 'test2' }, { message: 'test3' }],
      fdata: [{ message: 'test2' }]
    });

    render(
      <Provider store={store}>
        <Memo />
      </Provider>
    );

    expect(screen.queryByText(/test1/)).toBeNull();
    expect(screen.getByText(/test2/)).toBeInTheDocument();
    expect(screen.queryByText(/test3/)).toBeNull();
  });

  it("should render with original data when mode is 'delete'", () => {
    store = mockStore({
      mode: 'delete',
      data: [{ message: 'test1' }, { message: 'test2' }, { message: 'test3' }],
      fdata: []
    });

    render(
      <Provider store={store}>
        <Memo />
      </Provider>
    );

    expect(screen.getByText(/test1/)).toBeInTheDocument();
    expect(screen.getByText(/test2/)).toBeInTheDocument();
    expect(screen.getByText(/test3/)).toBeInTheDocument();
  });
});
