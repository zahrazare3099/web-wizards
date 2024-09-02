import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  test("#1-renders a default button", () => {
    const { getByText } = render(<Button>click</Button>);
    expect(getByText("click")).toBeInTheDocument();
  });
  test("#2-disable the button when isDisable is active", () => {
    render(<Button isDisable={true}>click</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
  test("#3-applies the current css class for diffrent button varients", () => {
    const { rerender } = render(<Button variant="primary">click</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">click</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
});
