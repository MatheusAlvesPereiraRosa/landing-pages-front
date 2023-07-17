import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { NavLinks } from ".";

import mock from "./mock";

describe("<MenuLink />", () => {
  it("should render links", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole("link")).tohaveLength(mock.length);
  });

  it("should not render links", () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).tohaveLength(mock.length);
  });

  it("should render link 10", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/links 10/i).parentElement).toHaveStyleRule(
      "flex-flow",
      "column wrap"
    );
  });

  it("should match snapshot", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole("link")).toMatchSnapshot();
  });
});
