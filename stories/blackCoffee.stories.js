import React from "react";
import Display from "./Display";
import { blackCoffee as theme } from "../src/index";

export default {
  title: "Black Coffee",
};

export const black_coffee = () => <Display {...{ theme }} />
  