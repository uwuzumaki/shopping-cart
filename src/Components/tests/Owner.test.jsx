import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContextProvider from "../ContextProvider";
import { MemoryRouter } from "react-router-dom";
import Owner from "../Owner";

describe("Owner section", () => {
  it("Image is rendered", () => {
    render(
      <ContextProvider>
        <MemoryRouter>
          <Owner />
        </MemoryRouter>
      </ContextProvider>
    );
    expect(screen.getByAltText("Image of Michael")).toBeInTheDocument();
  });

  it("Text is rendered", () => {
    render(
      <ContextProvider>
        <MemoryRouter>
          <Owner />
        </MemoryRouter>
      </ContextProvider>
    );
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
  });
});
