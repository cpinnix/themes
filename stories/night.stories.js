import React from "react";
import Display from "./Display";
import { night as theme } from "../src/index";

export default {
  title: "Night",
};

export const night = () => <Display {...{ theme }} />;
