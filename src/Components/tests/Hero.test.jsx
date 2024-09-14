import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContextProvider from "../ContextProvider";
import { MemoryRouter } from "react-router-dom";
import Hero from "../Hero";

describe("hero section", () => {
  it("Hero images are rendered", () => {
    render(
      <ContextProvider>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </ContextProvider>
    );
    expect(screen.getByAltText("Man leaning on brown wall")).toBeInTheDocument;
    expect(screen.getByAltText("Woman standing near pink wall"))
      .toBeInTheDocument;
    expect(screen.getByAltText("Woman standing near pink wall"))
      .toBeInTheDocument;
  });
});
