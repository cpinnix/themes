import React from "react";
import Display from "./Display";
import { coconut as theme } from "../src/index";

export default {
  title: "Coconut",
};

export const coconut = () => <Display {...{ theme }} />
  