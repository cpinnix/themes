import React from "react";
import Display from "./Display";
import { contessa as theme } from "../src/index";

export default {
  title: "Contessa",
};

export const contessa = () => <Display {...{ theme }} />
  