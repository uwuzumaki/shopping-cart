import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContextProvider from "../ContextProvider";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("Navbar is rendered", () => {
    render(
      <ContextProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ContextProvider>
    );
    const element = screen.getByText(/home/i);
    expect(element).toBeInTheDocument();
  });
});
