import React from "react";
import Display from "./Display";
import { opal as theme } from "../src/index";

export default {
  title: "Opal",
};

export const opal = () => <Display {...{ theme }} />
  