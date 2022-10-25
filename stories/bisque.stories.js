import React from "react";
import Display from "./Display";
import { bisque as theme } from "../src/index";

export default {
  title: "Bisque",
};

export const bisque = () => <Display {...{ theme }} />
  