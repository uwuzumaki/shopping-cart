import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContextProvider from "../ContextProvider";
import { MemoryRouter } from "react-router-dom";
import Shop from "../Shoppage";

describe("Shoppage component", () => {
  it("Cards are rendered", async () => {
    render(
      <MemoryRouter>
        <ContextProvider>
          <Shop />
        </ContextProvider>
      </MemoryRouter>
    );
    screen.debug();
    await waitFor(() => {
      const cards = screen.queryAllByTestId("card");
      expect(cards).toHaveLength(20);
    });
  });
});
