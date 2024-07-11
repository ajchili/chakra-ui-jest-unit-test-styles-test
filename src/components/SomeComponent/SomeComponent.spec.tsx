import { render } from "@testing-library/react";
import { SomeComponent } from "./SomeComponent";

it("fails to resolve class styles when accessing styles directly", async () => {
  const { findByText } = render(<SomeComponent />);

  const $element = await findByText("SOME TEXT");
  expect($element.style.background).not.toBe("red");
});

it("resolve class styles when accessing styles through getComputedStyles", async () => {
  const { findByText } = render(<SomeComponent />);

  const $element = await findByText("SOME TEXT");
  expect(getComputedStyle($element).background).toBe("red");
});
