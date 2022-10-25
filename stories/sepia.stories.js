import React from "react";
import Display from "./Display";
import { sepia as theme } from "../src/index";

export default {
  title: "Sepia",
};

export const sepia = () => <Display {...{ theme }} />
  