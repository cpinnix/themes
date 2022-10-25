import React from "react";
import Display from "./Display";
import { chestnut as theme } from "../src/index";

export default {
  title: "Chestnut",
};

export const chestnut = () => <Display {...{ theme }} />
  