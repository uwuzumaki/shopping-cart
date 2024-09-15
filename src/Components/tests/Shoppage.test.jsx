import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ContextProvider from "../ContextProvider";
import { MemoryRouter } from "react-router-dom";
import Shop from "../Shoppage";
import userEvent from "@testing-library/user-event";

describe("Shoppage component", () => {
  it("Cards are rendered", async () => {
    render(
      <MemoryRouter>
        <ContextProvider>
          <Shop />
        </ContextProvider>
      </MemoryRouter>
    );
    await waitFor(() => {
      const cards = screen.queryAllByTestId("card");
      expect(cards).toHaveLength(20);
    });
  });

  it("button is clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ContextProvider>
          <Shop />
        </ContextProvider>
      </MemoryRouter>
    );
    await waitFor(() => {
      const cards = screen.queryAllByTestId("card");
      expect(cards).toHaveLength(20);
    });
    const button = screen.getByTestId("1");
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce;
  });
});
