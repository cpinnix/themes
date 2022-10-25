import React from "react";
import Display from "./Display";
import { redwood as theme } from "../src/index";

export default {
  title: "Redwood",
};

export const redwood = () => <Display {...{ theme }} />
  