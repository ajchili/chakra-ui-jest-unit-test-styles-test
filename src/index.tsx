import { createRoot } from "react-dom/client";

import { SomeComponent } from "./components/SomeComponent/SomeComponent";

let $app = document.querySelector("div#app");

if (!$app) {
  $app = document.createElement("div");
  document.body.appendChild($app);
}

const root = createRoot($app);

root.render(<SomeComponent />);
