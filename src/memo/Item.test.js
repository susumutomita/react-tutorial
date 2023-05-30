import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Item from "./Item";

const mockStore = configureStore([]);
let store;

describe("Item Component", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  it("should display the correct index and message", () => {
    const index = 1;
    const message = "test message";
    const created = "2023-05-18";

    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Item index={index} value={{ message, created }} />
          </tbody>
        </table>
      </Provider>,
      document.body
    );

    expect(screen.getByText(`No, ${index}`)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(created)).toBeInTheDocument();
  });
});
