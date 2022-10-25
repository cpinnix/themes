import React from "react";
import Display from "./Display";
import { copper as theme } from "../src/index";

export default {
  title: "Copper",
};

export const copper = () => <Display {...{ theme }} />
  