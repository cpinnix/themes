import themeNames from "./themeNames";
import { map } from "lodash-es";
import * as colors from "@cpinnix/colors";
import { generateTheme as generate } from "./utils";

import dark from "./dark";
import light from "./light";
import burntUmber from "./burntUmber";
import redOxide from "./redOxide";
import mistyRose from "./mistyRose";
import englishVermillion from "./englishVermillion";
import red from "./red";
import coralRed from "./coralRed";
import auburn from "./auburn";
import chestnut from "./chestnut";
import redwood from "./redwood";
import contessa from "./contessa";
import darkPuce from "./darkPuce";
import deepTaupe from "./deepTaupe";
import tuscanRed from "./tuscanRed";
import newYorkPink from "./newYorkPink";
import shilo from "./shilo";
import deeporange from "./deeporange";
import cinereous from "./cinereous";
import brown from "./brown";
import copper from "./copper";
import tumbleweed from "./tumbleweed";
import blackCoffee from "./blackCoffee";
import apricot from "./apricot";
import pauBrasil from "./pauBrasil";
import darkTan from "./darkTan";
import appleBlossom from "./appleBlossom";
import coconut from "./coconut";
import raindropsOnRoses from "./raindropsOnRoses";
import liverChestnut from "./liverChestnut";
import bisque from "./bisque";
import sepia from "./sepia";
import brownYellow from "./brownYellow";
import forgetMeNot from "./forgetMeNot";
import sandDune from "./sandDune";
import orange from "./orange";
import desertSand from "./desertSand";
import beige from "./beige";
import spanishGray from "./spanishGray";
import cornsilk from "./cornsilk";
import amber from "./amber";
import flax from "./flax";
import metallicSunburst from "./metallicSunburst";
import bronzeYellow from "./bronzeYellow";

const yellow = generate({
  name: "yellow",
  primary: colors.yellow.swatch[500],
  secondary: colors.yellow.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const khaki = generate({
  name: "khaki",
  primary: colors.khaki.swatch[500],
  secondary: colors.khaki.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const cookiesAndCream = generate({
  name: "cookiesAndCream",
  primary: colors.cookiesAndCream.swatch[500],
  secondary: colors.cookiesAndCream.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const lime = generate({
  name: "lime",
  primary: colors.lime.swatch[500],
  secondary: colors.lime.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const darkKhaki = generate({
  name: "darkKhaki",
  primary: colors.darkKhaki.swatch[500],
  secondary: colors.darkKhaki.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const lightgreen = generate({
  name: "lightgreen",
  primary: colors.lightgreen.swatch[500],
  secondary: colors.lightgreen.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const budGreen = generate({
  name: "budGreen",
  primary: colors.budGreen.swatch[500],
  secondary: colors.budGreen.swatch[500],
  text: colors.antiFlashWhite.swatch[100],
});

const grey = generate({
  name: "grey",
  primary: colors.grey.swatch[500],
  secondary: colors.grey.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const fernGreen = generate({
  name: "fernGreen",
  primary: colors.fernGreen.swatch[500],
  secondary: colors.fernGreen.swatch[500],
  text: colors.white.swatch[500],
});

const blackOlive = generate({
  name: "blackOlive",
  primary: colors.blackOlive.swatch[500],
  secondary: colors.blackOlive.swatch[500],
  text: colors.grey.swatch[50],
});

const blackLeatherJacket = generate({
  name: "blackLeatherJacket",
  primary: colors.blackLeatherJacket.swatch[500],
  secondary: colors.blackLeatherJacket.swatch[500],
  text: colors.antiFlashWhite.swatch[100],
});

const green = generate({
  name: "green",
  primary: colors.green.swatch[500],
  secondary: colors.green.swatch[500],
  text: colors.antiFlashWhite.swatch[100],
});

const iguanaGreen = generate({
  name: "iguanaGreen",
  primary: colors.iguanaGreen.swatch[500],
  secondary: colors.iguanaGreen.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const deepAquamarine = generate({
  name: "deepAquamarine",
  primary: colors.deepAquamarine.swatch[500],
  secondary: colors.deepAquamarine.swatch[500],
  text: colors.blackOlive.swatch[1000],
});

const grayAsparagus = generate({
  name: "grayAsparagus",
  primary: colors.grayAsparagus.swatch[500],
  secondary: colors.grayAsparagus.swatch[500],
  text: colors.grey.swatch[200],
});

const opal = generate({
  name: "opal",
  primary: colors.opal.swatch[500],
  secondary: colors.opal.swatch[500],
  text: colors.blackOlive.swatch[700],
});

const mediumAquamarine = generate({
  name: "mediumAquamarine",
  primary: colors.mediumAquamarine.swatch[500],
  secondary: colors.mediumAquamarine.swatch[500],
  text: colors.blackOlive.swatch[800],
});

const antiFlashWhite = generate({
  name: "antiFlashWhite",
  primary: colors.antiFlashWhite.swatch[500],
  secondary: colors.antiFlashWhite.swatch[500],
  text: colors.blackOlive.swatch[600],
});

const illuminatingEmerald = generate({
  name: "illuminatingEmerald",
  primary: colors.illuminatingEmerald.swatch[500],
  secondary: colors.illuminatingEmerald.swatch[500],
  text: colors.antiFlashWhite.swatch[200],
});

const teal = generate({
  name: "teal",
  primary: colors.teal.swatch[500],
  secondary: colors.teal.swatch[500],
  text: colors.antiFlashWhite.swatch[200],
});

const paleRobinEggBlue = generate({
  name: "paleRobinEggBlue",
  primary: colors.paleRobinEggBlue.swatch[500],
  secondary: colors.paleRobinEggBlue.swatch[500],
  text: colors.blackOlive.swatch[600],
});

const cyan = generate({
  name: "cyan",
  primary: colors.cyan.swatch[500],
  secondary: colors.cyan.swatch[500],
  text: colors.antiFlashWhite.swatch[50],
});

const pewterBlue = generate({
  name: "pewterBlue",
  primary: colors.pewterBlue.swatch[500],
  secondary: colors.pewterBlue.swatch[500],
  text: colors.antiFlashWhite.swatch[50],
});

const blizzardBlue = generate({
  name: "blizzardBlue",
  primary: colors.blizzardBlue.swatch[500],
  secondary: colors.blizzardBlue.swatch[500],
  text: colors.blackLeatherJacket.swatch[500],
});

const lightblue = generate({
  name: "lightblue",
  primary: colors.lightblue.swatch[500],
  secondary: colors.lightblue.swatch[500],
  text: colors.antiFlashWhite.swatch[50],
});

const bluegrey = generate({
  name: "bluegrey",
  primary: colors.bluegrey.swatch[500],
  secondary: colors.bluegrey.swatch[500],
  text: colors.antiFlashWhite.swatch[50],
});

const spiroDiscoBall = generate({
  name: "spiroDiscoBall",
  primary: colors.spiroDiscoBall.swatch[600],
  secondary: colors.spiroDiscoBall.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const diamond = generate({
  name: "diamond",
  primary: colors.diamond.swatch[600],
  secondary: colors.diamond.swatch[50],
  text: colors.blackOlive.swatch[800],
});

const lightSkyBlue = generate({
  name: "lightSkyBlue",
  primary: colors.lightSkyBlue.swatch[600],
  secondary: colors.lightSkyBlue.swatch[50],
  text: colors.blackOlive.swatch[800],
});

const blue = generate({
  name: "blue",
  primary: colors.blue.swatch[500],
  secondary: colors.deeppurple.swatch[500],
  text: colors.lightSkyBlue.swatch[50],
});

const unitedNationsBlue = generate({
  name: "unitedNationsBlue",
  primary: colors.unitedNationsBlue.swatch[600],
  secondary: colors.unitedNationsBlue.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const darkElectricBlue = generate({
  name: "darkElectricBlue",
  primary: colors.darkElectricBlue.swatch[600],
  secondary: colors.darkElectricBlue.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const policeBlue = generate({
  name: "policeBlue",
  primary: colors.policeBlue.swatch[600],
  secondary: colors.policeBlue.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const coolGrey = generate({
  name: "coolGrey",
  primary: colors.coolGrey.swatch[500],
  secondary: colors.coolGrey.swatch[50],
  text: colors.antiFlashWhite.swatch[200],
});

const dimGray = generate({
  name: "dimGray",
  primary: colors.dimGray.swatch[600],
  secondary: colors.dimGray.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const blueZodiac = generate({
  name: "blueZodiac",
  primary: colors.blueZodiac.swatch[600],
  secondary: colors.blueZodiac.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const indigo = generate({
  name: "indigo",
  primary: colors.indigo.swatch[600],
  secondary: colors.indigo.swatch[50],
  text: colors.lightSkyBlue.swatch[50],
});

const vodka = generate({
  name: "vodka",
  primary: colors.vodka.swatch[500],
  secondary: colors.vodka.swatch[900],
  text: colors.spaceCadet.swatch[300],
});

const arsenic = generate({
  name: "arsenic",
  primary: colors.arsenic.swatch[500],
  secondary: colors.arsenic.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const spaceCadet = generate({
  name: "spaceCadet",
  primary: colors.spaceCadet.swatch[500],
  secondary: colors.spaceCadet.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const americanBlue = generate({
  name: "americanBlue",
  primary: colors.americanBlue.swatch[500],
  secondary: colors.americanBlue.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const rhythm = generate({
  name: "rhythm",
  primary: colors.rhythm.swatch[500],
  secondary: colors.rhythm.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const liberty = generate({
  name: "liberty",
  primary: colors.liberty.swatch[500],
  secondary: colors.liberty.swatch[900],
  text: colors.white.swatch[500],
});

const lavenderPurple = generate({
  name: "lavenderPurple",
  primary: colors.lavenderPurple.swatch[500],
  secondary: colors.lavenderPurple.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const lightPastelPurple = generate({
  name: "lightPastelPurple",
  primary: colors.lightPastelPurple.swatch[500],
  secondary: colors.lightPastelPurple.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const deeppurple = generate({
  name: "deeppurple",
  primary: colors.deeppurple.swatch[500],
  secondary: colors.deeppurple.swatch[900],
  text: colors.antiFlashWhite.swatch[300],
});

const soap = generate({
  name: "soap",
  primary: colors.soap.swatch[500],
  secondary: colors.soap.swatch[800],
  text: colors.liberty.swatch[800],
});

const purple = generate({
  name: "purple",
  primary: colors.purple.swatch[500],
  secondary: colors.purple.swatch[800],
  text: colors.antiFlashWhite.swatch[500],
});

const vividOrchid = generate({
  name: "vividOrchid",
  primary: colors.vividOrchid.swatch[500],
  secondary: colors.vividOrchid.swatch[800],
  text: colors.antiFlashWhite.swatch[500],
});

const violetBlue = generate({
  name: "violetBlue",
  primary: colors.violetBlue.swatch[500],
  secondary: colors.violetBlue.swatch[800],
  text: colors.antiFlashWhite.swatch[300],
});

const middlePurple = generate({
  name: "middlePurple",
  primary: colors.middlePurple.swatch[500],
  secondary: colors.middlePurple.swatch[800],
  text: colors.halayaUbe.swatch[900],
});

const halayaUbe = generate({
  name: "halayaUbe",
  primary: colors.halayaUbe.swatch[500],
  secondary: colors.halayaUbe.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const queenPink = generate({
  name: "queenPink",
  primary: colors.queenPink.swatch[500],
  secondary: colors.queenPink.swatch[800],
  text: colors.violetBlue.swatch[900],
});

const englishLavender = generate({
  name: "englishLavender",
  primary: colors.englishLavender.swatch[500],
  secondary: colors.englishLavender.swatch[800],
  text: colors.violetBlue.swatch[900],
});

const pinkPearl = generate({
  name: "pinkPearl",
  primary: colors.pinkPearl.swatch[500],
  secondary: colors.pinkPearl.swatch[800],
  text: colors.violetBlue.swatch[900],
});

const gray = generate({
  name: "gray",
  primary: colors.gray.swatch[500],
  secondary: colors.gray.swatch[800],
  text: colors.antiFlashWhite.swatch[100],
});

const mountbattenPink = generate({
  name: "mountbattenPink",
  primary: colors.mountbattenPink.swatch[500],
  secondary: colors.mountbattenPink.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const wenge = generate({
  name: "wenge",
  primary: colors.wenge.swatch[500],
  secondary: colors.wenge.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const folly = generate({
  name: "folly",
  primary: colors.folly.swatch[500],
  secondary: colors.folly.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const pink = generate({
  name: "pink",
  primary: colors.pink.swatch[500],
  secondary: colors.pink.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const roseGold = generate({
  name: "roseGold",
  primary: colors.roseGold.swatch[500],
  secondary: colors.roseGold.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const solidPink = generate({
  name: "solidPink",
  primary: colors.solidPink.swatch[500],
  secondary: colors.solidPink.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const prim = generate({
  name: "prim",
  primary: colors.prim.swatch[500],
  secondary: colors.prim.swatch[800],
  text: colors.solidPink.swatch[900],
});

const redViolet = generate({
  name: "redViolet",
  primary: colors.redViolet.swatch[500],
  secondary: colors.redViolet.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const awesome = generate({
  name: "awesome",
  primary: colors.awesome.swatch[500],
  secondary: colors.awesome.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const watermelonRed = generate({
  name: "watermelonRed",
  primary: colors.watermelonRed.swatch[500],
  secondary: colors.watermelonRed.swatch[800],
  text: colors.antiFlashWhite.swatch[500],
});

const chocolateCosmos = generate({
  name: "chocolateCosmos",
  primary: colors.chocolateCosmos.swatch[500],
  secondary: colors.chocolateCosmos.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const black = generate({
  name: "black",
  primary: colors.black.swatch[500],
  secondary: colors.black.swatch[800],
  text: colors.antiFlashWhite.swatch[600],
});

const themeMap = {
  dark,
  light,
  burntUmber,
  redOxide,
  mistyRose,
  englishVermillion,
  red,
  coralRed,
  auburn,
  chestnut,
  redwood,
  contessa,
  darkPuce,
  deepTaupe,
  tuscanRed,
  newYorkPink,
  shilo,
  deeporange,
  cinereous,
  brown,
  copper,
  tumbleweed,
  blackCoffee,
  apricot,
  pauBrasil,
  darkTan,
  appleBlossom,
  coconut,
  raindropsOnRoses,
  liverChestnut,
  bisque,
  sepia,
  brownYellow,
  forgetMeNot,
  sandDune,
  orange,
  desertSand,
  beige,
  spanishGray,
  cornsilk,
  amber,
  flax,
  metallicSunburst,
  bronzeYellow,
  yellow,
  khaki,
  cookiesAndCream,
  lime,
  darkKhaki,
  lightgreen,
  budGreen,
  grey,
  fernGreen,
  blackOlive,
  blackLeatherJacket,
  green,
  iguanaGreen,
  deepAquamarine,
  grayAsparagus,
  opal,
  mediumAquamarine,
  antiFlashWhite,
  illuminatingEmerald,
  teal,
  paleRobinEggBlue,
  cyan,
  pewterBlue,
  blizzardBlue,
  lightblue,
  bluegrey,
  spiroDiscoBall,
  diamond,
  lightSkyBlue,
  blue,
  unitedNationsBlue,
  darkElectricBlue,
  policeBlue,
  coolGrey,
  dimGray,
  blueZodiac,
  indigo,
  vodka,
  arsenic,
  spaceCadet,
  americanBlue,
  rhythm,
  liberty,
  lavenderPurple,
  lightPastelPurple,
  deeppurple,
  soap,
  purple,
  vividOrchid,
  violetBlue,
  middlePurple,
  halayaUbe,
  queenPink,
  englishLavender,
  pinkPearl,
  gray,
  mountbattenPink,
  wenge,
  folly,
  pink,
  roseGold,
  solidPink,
  prim,
  redViolet,
  awesome,
  watermelonRed,
  chocolateCosmos,
  black,
};

const themes = map(themeMap, (value) => value);

export {
  themeNames,
  themes,
  dark,
  light,
  burntUmber,
  redOxide,
  mistyRose,
  englishVermillion,
  red,
  coralRed,
  auburn,
  chestnut,
  redwood,
  contessa,
  darkPuce,
  deepTaupe,
  tuscanRed,
  newYorkPink,
  shilo,
  deeporange,
  cinereous,
  brown,
  copper,
  tumbleweed,
  blackCoffee,
  apricot,
  pauBrasil,
  darkTan,
  appleBlossom,
  coconut,
  raindropsOnRoses,
  liverChestnut,
  bisque,
  sepia,
  brownYellow,
  forgetMeNot,
  sandDune,
  orange,
  desertSand,
  beige,
  spanishGray,
  cornsilk,
  amber,
  flax,
  metallicSunburst,
  bronzeYellow,
  yellow,
  khaki,
  cookiesAndCream,
  lime,
  darkKhaki,
  lightgreen,
  budGreen,
  grey,
  fernGreen,
  blackOlive,
  blackLeatherJacket,
  green,
  iguanaGreen,
  deepAquamarine,
  grayAsparagus,
  opal,
  mediumAquamarine,
  antiFlashWhite,
  illuminatingEmerald,
  teal,
  paleRobinEggBlue,
  cyan,
  pewterBlue,
  blizzardBlue,
  lightblue,
  bluegrey,
  spiroDiscoBall,
  diamond,
  lightSkyBlue,
  blue,
  unitedNationsBlue,
  darkElectricBlue,
  policeBlue,
  coolGrey,
  dimGray,
  blueZodiac,
  indigo,
  vodka,
  arsenic,
  spaceCadet,
  americanBlue,
  rhythm,
  liberty,
  lavenderPurple,
  lightPastelPurple,
  deeppurple,
  soap,
  purple,
  vividOrchid,
  violetBlue,
  middlePurple,
  halayaUbe,
  queenPink,
  englishLavender,
  pinkPearl,
  gray,
  mountbattenPink,
  wenge,
  folly,
  pink,
  roseGold,
  solidPink,
  prim,
  redViolet,
  awesome,
  watermelonRed,
  chocolateCosmos,
  black,
};
