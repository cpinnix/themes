import React from "react";
import Display from "./Display";
import { dark as theme } from "../src/index";

export default {
  title: "Dark",
};

export const dark = () => <Display {...{ theme }} />
  