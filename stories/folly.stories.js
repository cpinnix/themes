import React from "react";
import Display from "./Display";
import { folly as theme } from "../src/index";

export default {
  title: "Folly",
};

export const folly = () => <Display {...{ theme }} />
  