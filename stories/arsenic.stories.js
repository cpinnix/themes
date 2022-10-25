import React from "react";
import Display from "./Display";
import { arsenic as theme } from "../src/index";

export default {
  title: "Arsenic",
};

export const arsenic = () => <Display {...{ theme }} />
  