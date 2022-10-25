import React from "react";
import Display from "./Display";
import { prim as theme } from "../src/index";

export default {
  title: "Prim",
};

export const prim = () => <Display {...{ theme }} />
  