import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import "./global.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
