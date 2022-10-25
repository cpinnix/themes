import React from "react";
import Display from "./Display";
import { light as theme } from "../src/index";

export default {
  title: "Light",
};

export const light = () => <Display {...{ theme }} />
  