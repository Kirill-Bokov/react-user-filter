import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import "./style.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(<App />);
