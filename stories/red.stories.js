import React from "react";
import Display from "./Display";
import { red as theme } from "../src/index";

export default {
  title: "Red",
};

export const red = () => <Display {...{ theme }} />
  