import React from "react";
import Display from "./Display";
import { flax as theme } from "../src/index";

export default {
  title: "Flax",
};

export const flax = () => <Display {...{ theme }} />
  