import React from "react";
import Display from "./Display";
import { vodka as theme } from "../src/index";

export default {
  title: "Vodka",
};

export const vodka = () => <Display {...{ theme }} />
  