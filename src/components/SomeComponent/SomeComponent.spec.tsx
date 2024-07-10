import { render } from "@testing-library/react";
import { SomeComponent } from "./SomeComponent";

it("works", async () => {
  const { findByText } = render(<SomeComponent />);

  const $element = await findByText("SOME TEXT");
  expect($element.style.background).toBe("red");
});
