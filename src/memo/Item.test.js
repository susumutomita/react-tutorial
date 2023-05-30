import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, screen } from "@testing-library/react";
import Item from "./Item";

// 仮のReducer
const reducer = (state = {}, action) => state;

describe("Item Component", () => {
  it("should display the correct index and message", () => {
    const index = 1;
    const message = "test message";
    const created = "2023-05-18";

    // ストアとProviderを追加
    const store = createStore(reducer);
    render(
      <Provider store={store}>
        <Item index={index} value={{ message, created }} />
      </Provider>
    );

    expect(screen.getByText(`No, ${index}`)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(created)).toBeInTheDocument();
  });
});
