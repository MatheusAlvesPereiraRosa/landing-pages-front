import { Dummy } from ".";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";

describe("<Dummy />", () => {
  it("should render", () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole("heading", {name: "Children"})).toBeinTheDocument();
  });
});
