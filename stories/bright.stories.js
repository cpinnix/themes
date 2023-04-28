import React from "react";
import Display from "./Display";
import { bright as theme } from "../src/index";

export default {
  title: "Bright",
};

export const bright = () => <Display {...{ theme }} />;
