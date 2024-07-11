import { render } from "@testing-library/react";
import { ShrinkableText } from "./ShrinkableText";

it("does not shrink when rendered in a parent node with no width bounds", async () => {
  const { queryByText } = render(<ShrinkableText />);

  const $element = await queryByText("shrunk");
  expect($element).toBeFalsy();
});

it("shrinks when rendered in a parent node with width bounds", async () => {
  const { queryByText } = render(<ShrinkableText />, {
    wrapper: (ui) => (
      <div style={{ width: 20, maxWidth: 20 }}>{ui.children}</div>
    ),
  });

  const $element = await queryByText("shrunk");
  expect($element).toBeTruthy();
});
