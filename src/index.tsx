import { createRoot } from "react-dom/client";

import { SomeComponent } from "./components/SomeComponent/SomeComponent";
import { ShrinkableText } from "./components/ShrinkableText/ShrinkableText";

let $app = document.querySelector("div#app");

if (!$app) {
  $app = document.createElement("div");
  document.body.appendChild($app);
}

const root = createRoot($app);

root.render(
  <div>
    <SomeComponent />
    <ShrinkableText />
    <div style={{ width: 20, maxWidth: 20 }}>
      <ShrinkableText />
    </div>
  </div>
);
