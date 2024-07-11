import { render } from "@testing-library/react";
import { ShrinkableText } from "./ShrinkableText";

it("does not shrink when rendered in a parent node with no width bounds", async () => {
  const { queryByText } = render(<ShrinkableText />);

  const $element = await queryByText("shrunk");
  expect($element).toBeFalsy();
});

it("fails to shrink when rendered in a parent node with width bounds in a test environment", async () => {
  const { container, queryByText } = render(<ShrinkableText />, {
    wrapper: (ui) => (
      <div style={{ width: 20, maxWidth: 20 }}>{ui.children}</div>
    ),
  });

  const $element = await queryByText("shrunk");
  expect($element).toBeFalsy();

  // This fails because JSDOM is strictly a DOM API emulation library, not a document renderer
  const $textElement = await container.querySelector("p");
  expect($textElement.clientWidth).toBe(0); // clientWidth is 0 because the thing isn't ever rendered 😛
  expect($textElement.scrollWidth).toBe(0); // scrollWidth is 0 because the thing isn't ever rendered 😛
});
