import React from "react";
import Display from "./Display";
import { tumbleweed as theme } from "../src/index";

export default {
  title: "Tumbleweed",
};

export const tumbleweed = () => <Display {...{ theme }} />
  