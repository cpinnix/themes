import React from "react";
import Display from "./Display";
import { wenge as theme } from "../src/index";

export default {
  title: "Wenge",
};

export const wenge = () => <Display {...{ theme }} />
  