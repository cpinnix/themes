import React from "react";
import Display from "./Display";
import { awesome as theme } from "../src/index";

export default {
  title: "Awesome",
};

export const awesome = () => <Display {...{ theme }} />
  