import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyleRule("color", `${theme.colors.primaryColor}`);
    expect(heading).toHaveStyleRule("font-size", `${theme.fonts.sizes.xhuge}`);
    expect(heading).toHaveStyleRule("text-transform", "none");
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(heading).toHaveStyleRule("color", `${theme.colors.white}`);
  });

  it("should render correct font-size when using mobile", () => {
    const { rerender } = renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole("heading", { name: "Texto" });

    expect(screen.getByRole('heading', { name: 'texto'})).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium, 
      }
    );
  });
});
