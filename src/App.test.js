import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import App from "./App";

const mockStore = configureStore([]);
let store;

beforeAll(() => {
  const div = document.createElement("div");
  div.setAttribute("id", "root");
  document.body.appendChild(div);
});


describe("App Component", () => {
  beforeEach(() => {
    store = mockStore({
      message: '',
      mode: 'default',
      data: [],
      fdata: []
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render the app title", () => {
    expect(screen.getByText(/Memo/)).toBeInTheDocument();
  });

  it("should render the AddForm component", () => {
    expect(screen.getByRole('form', { name: /AddForm/i })).toBeInTheDocument();
  });

  it("should render the FindForm component", () => {
    expect(screen.getByRole('form', { name: /FindForm/i })).toBeInTheDocument();
  });

  it("should render the DelForm component", () => {
    expect(screen.getByRole('form', { name: /DelForm/i })).toBeInTheDocument();
  });

  // Add the following two tests
  it("should render the PersistForm component", () => {
    expect(screen.getByRole('form', { name: /PersistForm/i })).toBeInTheDocument();
  });

  it("should render the Memo component", () => {
    expect(screen.getByText(/Memo component content/i)).toBeInTheDocument();
  });
});
