import React from "react";
import Display from "./Display";
import { shilo as theme } from "../src/index";

export default {
  title: "Shilo",
};

export const shilo = () => <Display {...{ theme }} />
  