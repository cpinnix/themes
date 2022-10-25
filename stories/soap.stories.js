import React from "react";
import Display from "./Display";
import { soap as theme } from "../src/index";

export default {
  title: "Soap",
};

export const soap = () => <Display {...{ theme }} />
  