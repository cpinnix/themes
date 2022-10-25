export { default as themeNames } from './themeNames.js';
import { map } from 'lodash-es';
import * as colors from '@cpinnix/colors';
import generateTheme from './utils/generateTheme.js';
import dark from './dark.js';
export { default as dark } from './dark.js';
import light from './light.js';
export { default as light } from './light.js';
import burntUmber from './burntUmber.js';
export { default as burntUmber } from './burntUmber.js';
import redOxide from './redOxide.js';
export { default as redOxide } from './redOxide.js';
import mistyRose from './mistyRose.js';
export { default as mistyRose } from './mistyRose.js';
import englishVermillion from './englishVermillion.js';
export { default as englishVermillion } from './englishVermillion.js';
import red from './red.js';
export { default as red } from './red.js';
import coralRed from './coralRed.js';
export { default as coralRed } from './coralRed.js';
import auburn from './auburn.js';
export { default as auburn } from './auburn.js';
import chestnut from './chestnut.js';
export { default as chestnut } from './chestnut.js';
import redwood from './redwood.js';
export { default as redwood } from './redwood.js';
import contessa from './contessa.js';
export { default as contessa } from './contessa.js';
import darkPuce from './darkPuce.js';
export { default as darkPuce } from './darkPuce.js';
import deepTaupe from './deepTaupe.js';
export { default as deepTaupe } from './deepTaupe.js';
import tuscanRed from './tuscanRed.js';
export { default as tuscanRed } from './tuscanRed.js';
import newYorkPink from './newYorkPink.js';
export { default as newYorkPink } from './newYorkPink.js';
import shilo from './shilo.js';
export { default as shilo } from './shilo.js';
import deeporange from './deeporange.js';
export { default as deeporange } from './deeporange.js';
import cinereous from './cinereous.js';
export { default as cinereous } from './cinereous.js';
import brown from './brown.js';
export { default as brown } from './brown.js';
import copper from './copper.js';
export { default as copper } from './copper.js';
import tumbleweed from './tumbleweed.js';
export { default as tumbleweed } from './tumbleweed.js';
import blackCoffee from './blackCoffee.js';
export { default as blackCoffee } from './blackCoffee.js';
import apricot from './apricot.js';
export { default as apricot } from './apricot.js';
import pauBrasil from './pauBrasil.js';
export { default as pauBrasil } from './pauBrasil.js';
import darkTan from './darkTan.js';
export { default as darkTan } from './darkTan.js';
import appleBlossom from './appleBlossom.js';
export { default as appleBlossom } from './appleBlossom.js';
import coconut from './coconut.js';
export { default as coconut } from './coconut.js';
import raindropsOnRoses from './raindropsOnRoses.js';
export { default as raindropsOnRoses } from './raindropsOnRoses.js';
import liverChestnut from './liverChestnut.js';
export { default as liverChestnut } from './liverChestnut.js';
import bisque from './bisque.js';
export { default as bisque } from './bisque.js';
import sepia from './sepia.js';
export { default as sepia } from './sepia.js';
import brownYellow from './brownYellow.js';
export { default as brownYellow } from './brownYellow.js';
import forgetMeNot from './forgetMeNot.js';
export { default as forgetMeNot } from './forgetMeNot.js';
import sandDune from './sandDune.js';
export { default as sandDune } from './sandDune.js';
import orange from './orange.js';
export { default as orange } from './orange.js';
import desertSand from './desertSand.js';
export { default as desertSand } from './desertSand.js';
import beige from './beige.js';
export { default as beige } from './beige.js';
import spanishGray from './spanishGray.js';
export { default as spanishGray } from './spanishGray.js';
import cornsilk from './cornsilk.js';
export { default as cornsilk } from './cornsilk.js';
export { default as amber } from './amber.js';
import flax from './flax.js';
export { default as flax } from './flax.js';
import metallicSunburst from './metallicSunburst.js';
export { default as metallicSunburst } from './metallicSunburst.js';
import bronzeYellow from './bronzeYellow.js';
export { default as bronzeYellow } from './bronzeYellow.js';

var yellow = generateTheme({
  name: "yellow",
  primary: colors.yellow.swatch[500],
  secondary: colors.yellow.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var khaki = generateTheme({
  name: "khaki",
  primary: colors.khaki.swatch[500],
  secondary: colors.khaki.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var cookiesAndCream = generateTheme({
  name: "cookiesAndCream",
  primary: colors.cookiesAndCream.swatch[500],
  secondary: colors.cookiesAndCream.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var lime = generateTheme({
  name: "lime",
  primary: colors.lime.swatch[500],
  secondary: colors.lime.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var darkKhaki = generateTheme({
  name: "darkKhaki",
  primary: colors.darkKhaki.swatch[500],
  secondary: colors.darkKhaki.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var lightgreen = generateTheme({
  name: "lightgreen",
  primary: colors.lightgreen.swatch[500],
  secondary: colors.lightgreen.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var budGreen = generateTheme({
  name: "budGreen",
  primary: colors.budGreen.swatch[500],
  secondary: colors.budGreen.swatch[500],
  text: colors.antiFlashWhite.swatch[100]
});
var grey = generateTheme({
  name: "grey",
  primary: colors.grey.swatch[500],
  secondary: colors.grey.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var fernGreen = generateTheme({
  name: "fernGreen",
  primary: colors.fernGreen.swatch[500],
  secondary: colors.fernGreen.swatch[500],
  text: colors.white.swatch[500]
});
var blackOlive = generateTheme({
  name: "blackOlive",
  primary: colors.blackOlive.swatch[500],
  secondary: colors.blackOlive.swatch[500],
  text: colors.grey.swatch[50]
});
var blackLeatherJacket = generateTheme({
  name: "blackLeatherJacket",
  primary: colors.blackLeatherJacket.swatch[500],
  secondary: colors.blackLeatherJacket.swatch[500],
  text: colors.antiFlashWhite.swatch[100]
});
var green = generateTheme({
  name: "green",
  primary: colors.green.swatch[500],
  secondary: colors.green.swatch[500],
  text: colors.antiFlashWhite.swatch[100]
});
var iguanaGreen = generateTheme({
  name: "iguanaGreen",
  primary: colors.iguanaGreen.swatch[500],
  secondary: colors.iguanaGreen.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var deepAquamarine = generateTheme({
  name: "deepAquamarine",
  primary: colors.deepAquamarine.swatch[500],
  secondary: colors.deepAquamarine.swatch[500],
  text: colors.blackOlive.swatch[1000]
});
var grayAsparagus = generateTheme({
  name: "grayAsparagus",
  primary: colors.grayAsparagus.swatch[500],
  secondary: colors.grayAsparagus.swatch[500],
  text: colors.grey.swatch[200]
});
var opal = generateTheme({
  name: "opal",
  primary: colors.opal.swatch[500],
  secondary: colors.opal.swatch[500],
  text: colors.blackOlive.swatch[700]
});
var mediumAquamarine = generateTheme({
  name: "mediumAquamarine",
  primary: colors.mediumAquamarine.swatch[500],
  secondary: colors.mediumAquamarine.swatch[500],
  text: colors.blackOlive.swatch[800]
});
var antiFlashWhite = generateTheme({
  name: "antiFlashWhite",
  primary: colors.antiFlashWhite.swatch[500],
  secondary: colors.antiFlashWhite.swatch[500],
  text: colors.blackOlive.swatch[600]
});
var illuminatingEmerald = generateTheme({
  name: "illuminatingEmerald",
  primary: colors.illuminatingEmerald.swatch[500],
  secondary: colors.illuminatingEmerald.swatch[500],
  text: colors.antiFlashWhite.swatch[200]
});
var teal = generateTheme({
  name: "teal",
  primary: colors.teal.swatch[500],
  secondary: colors.teal.swatch[500],
  text: colors.antiFlashWhite.swatch[200]
});
var paleRobinEggBlue = generateTheme({
  name: "paleRobinEggBlue",
  primary: colors.paleRobinEggBlue.swatch[500],
  secondary: colors.paleRobinEggBlue.swatch[500],
  text: colors.blackOlive.swatch[600]
});
var cyan = generateTheme({
  name: "cyan",
  primary: colors.cyan.swatch[500],
  secondary: colors.cyan.swatch[500],
  text: colors.antiFlashWhite.swatch[50]
});
var pewterBlue = generateTheme({
  name: "pewterBlue",
  primary: colors.pewterBlue.swatch[500],
  secondary: colors.pewterBlue.swatch[500],
  text: colors.antiFlashWhite.swatch[50]
});
var blizzardBlue = generateTheme({
  name: "blizzardBlue",
  primary: colors.blizzardBlue.swatch[500],
  secondary: colors.blizzardBlue.swatch[500],
  text: colors.blackLeatherJacket.swatch[500]
});
var lightblue = generateTheme({
  name: "lightblue",
  primary: colors.lightblue.swatch[500],
  secondary: colors.lightblue.swatch[500],
  text: colors.antiFlashWhite.swatch[50]
});
var bluegrey = generateTheme({
  name: "bluegrey",
  primary: colors.bluegrey.swatch[500],
  secondary: colors.bluegrey.swatch[500],
  text: colors.antiFlashWhite.swatch[50]
});
var spiroDiscoBall = generateTheme({
  name: "spiroDiscoBall",
  primary: colors.spiroDiscoBall.swatch[600],
  secondary: colors.spiroDiscoBall.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var diamond = generateTheme({
  name: "diamond",
  primary: colors.diamond.swatch[600],
  secondary: colors.diamond.swatch[50],
  text: colors.blackOlive.swatch[800]
});
var lightSkyBlue = generateTheme({
  name: "lightSkyBlue",
  primary: colors.lightSkyBlue.swatch[600],
  secondary: colors.lightSkyBlue.swatch[50],
  text: colors.blackOlive.swatch[800]
});
var blue = generateTheme({
  name: "blue",
  primary: colors.blue.swatch[500],
  secondary: colors.deeppurple.swatch[500],
  text: colors.lightSkyBlue.swatch[50]
});
var unitedNationsBlue = generateTheme({
  name: "unitedNationsBlue",
  primary: colors.unitedNationsBlue.swatch[600],
  secondary: colors.unitedNationsBlue.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var darkElectricBlue = generateTheme({
  name: "darkElectricBlue",
  primary: colors.darkElectricBlue.swatch[600],
  secondary: colors.darkElectricBlue.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var policeBlue = generateTheme({
  name: "policeBlue",
  primary: colors.policeBlue.swatch[600],
  secondary: colors.policeBlue.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var coolGrey = generateTheme({
  name: "coolGrey",
  primary: colors.coolGrey.swatch[500],
  secondary: colors.coolGrey.swatch[50],
  text: colors.antiFlashWhite.swatch[200]
});
var dimGray = generateTheme({
  name: "dimGray",
  primary: colors.dimGray.swatch[600],
  secondary: colors.dimGray.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var blueZodiac = generateTheme({
  name: "blueZodiac",
  primary: colors.blueZodiac.swatch[600],
  secondary: colors.blueZodiac.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var indigo = generateTheme({
  name: "indigo",
  primary: colors.indigo.swatch[600],
  secondary: colors.indigo.swatch[50],
  text: colors.lightSkyBlue.swatch[50]
});
var vodka = generateTheme({
  name: "vodka",
  primary: colors.vodka.swatch[500],
  secondary: colors.vodka.swatch[900],
  text: colors.spaceCadet.swatch[300]
});
var arsenic = generateTheme({
  name: "arsenic",
  primary: colors.arsenic.swatch[500],
  secondary: colors.arsenic.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var spaceCadet = generateTheme({
  name: "spaceCadet",
  primary: colors.spaceCadet.swatch[500],
  secondary: colors.spaceCadet.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var americanBlue = generateTheme({
  name: "americanBlue",
  primary: colors.americanBlue.swatch[500],
  secondary: colors.americanBlue.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var rhythm = generateTheme({
  name: "rhythm",
  primary: colors.rhythm.swatch[500],
  secondary: colors.rhythm.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var liberty = generateTheme({
  name: "liberty",
  primary: colors.liberty.swatch[500],
  secondary: colors.liberty.swatch[900],
  text: colors.white.swatch[500]
});
var lavenderPurple = generateTheme({
  name: "lavenderPurple",
  primary: colors.lavenderPurple.swatch[500],
  secondary: colors.lavenderPurple.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var lightPastelPurple = generateTheme({
  name: "lightPastelPurple",
  primary: colors.lightPastelPurple.swatch[500],
  secondary: colors.lightPastelPurple.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var deeppurple = generateTheme({
  name: "deeppurple",
  primary: colors.deeppurple.swatch[500],
  secondary: colors.deeppurple.swatch[900],
  text: colors.antiFlashWhite.swatch[300]
});
var soap = generateTheme({
  name: "soap",
  primary: colors.soap.swatch[500],
  secondary: colors.soap.swatch[800],
  text: colors.liberty.swatch[800]
});
var purple = generateTheme({
  name: "purple",
  primary: colors.purple.swatch[500],
  secondary: colors.purple.swatch[800],
  text: colors.antiFlashWhite.swatch[500]
});
var vividOrchid = generateTheme({
  name: "vividOrchid",
  primary: colors.vividOrchid.swatch[500],
  secondary: colors.vividOrchid.swatch[800],
  text: colors.antiFlashWhite.swatch[500]
});
var violetBlue = generateTheme({
  name: "violetBlue",
  primary: colors.violetBlue.swatch[500],
  secondary: colors.violetBlue.swatch[800],
  text: colors.antiFlashWhite.swatch[300]
});
var middlePurple = generateTheme({
  name: "middlePurple",
  primary: colors.middlePurple.swatch[500],
  secondary: colors.middlePurple.swatch[800],
  text: colors.halayaUbe.swatch[900]
});
var halayaUbe = generateTheme({
  name: "halayaUbe",
  primary: colors.halayaUbe.swatch[500],
  secondary: colors.halayaUbe.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var queenPink = generateTheme({
  name: "queenPink",
  primary: colors.queenPink.swatch[500],
  secondary: colors.queenPink.swatch[800],
  text: colors.violetBlue.swatch[900]
});
var englishLavender = generateTheme({
  name: "englishLavender",
  primary: colors.englishLavender.swatch[500],
  secondary: colors.englishLavender.swatch[800],
  text: colors.violetBlue.swatch[900]
});
var pinkPearl = generateTheme({
  name: "pinkPearl",
  primary: colors.pinkPearl.swatch[500],
  secondary: colors.pinkPearl.swatch[800],
  text: colors.violetBlue.swatch[900]
});
var gray = generateTheme({
  name: "gray",
  primary: colors.gray.swatch[500],
  secondary: colors.gray.swatch[800],
  text: colors.antiFlashWhite.swatch[100]
});
var mountbattenPink = generateTheme({
  name: "mountbattenPink",
  primary: colors.mountbattenPink.swatch[500],
  secondary: colors.mountbattenPink.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var wenge = generateTheme({
  name: "wenge",
  primary: colors.wenge.swatch[500],
  secondary: colors.wenge.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var folly = generateTheme({
  name: "folly",
  primary: colors.folly.swatch[500],
  secondary: colors.folly.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var pink = generateTheme({
  name: "pink",
  primary: colors.pink.swatch[500],
  secondary: colors.pink.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var roseGold = generateTheme({
  name: "roseGold",
  primary: colors.roseGold.swatch[500],
  secondary: colors.roseGold.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var solidPink = generateTheme({
  name: "solidPink",
  primary: colors.solidPink.swatch[500],
  secondary: colors.solidPink.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var prim = generateTheme({
  name: "prim",
  primary: colors.prim.swatch[500],
  secondary: colors.prim.swatch[800],
  text: colors.solidPink.swatch[900]
});
var redViolet = generateTheme({
  name: "redViolet",
  primary: colors.redViolet.swatch[500],
  secondary: colors.redViolet.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var awesome = generateTheme({
  name: "awesome",
  primary: colors.awesome.swatch[500],
  secondary: colors.awesome.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var watermelonRed = generateTheme({
  name: "watermelonRed",
  primary: colors.watermelonRed.swatch[500],
  secondary: colors.watermelonRed.swatch[800],
  text: colors.antiFlashWhite.swatch[500]
});
var chocolateCosmos = generateTheme({
  name: "chocolateCosmos",
  primary: colors.chocolateCosmos.swatch[500],
  secondary: colors.chocolateCosmos.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var black = generateTheme({
  name: "black",
  primary: colors.black.swatch[500],
  secondary: colors.black.swatch[800],
  text: colors.antiFlashWhite.swatch[600]
});
var themeMap = {
  dark: dark,
  light: light,
  burntUmber: burntUmber,
  redOxide: redOxide,
  mistyRose: mistyRose,
  englishVermillion: englishVermillion,
  red: red,
  coralRed: coralRed,
  auburn: auburn,
  chestnut: chestnut,
  redwood: redwood,
  contessa: contessa,
  darkPuce: darkPuce,
  deepTaupe: deepTaupe,
  tuscanRed: tuscanRed,
  newYorkPink: newYorkPink,
  shilo: shilo,
  deeporange: deeporange,
  cinereous: cinereous,
  brown: brown,
  copper: copper,
  tumbleweed: tumbleweed,
  blackCoffee: blackCoffee,
  apricot: apricot,
  pauBrasil: pauBrasil,
  darkTan: darkTan,
  appleBlossom: appleBlossom,
  coconut: coconut,
  raindropsOnRoses: raindropsOnRoses,
  liverChestnut: liverChestnut,
  bisque: bisque,
  sepia: sepia,
  brownYellow: brownYellow,
  forgetMeNot: forgetMeNot,
  sandDune: sandDune,
  orange: orange,
  desertSand: desertSand,
  beige: beige,
  spanishGray: spanishGray,
  cornsilk: cornsilk,
  flax: flax,
  metallicSunburst: metallicSunburst,
  bronzeYellow: bronzeYellow,
  yellow: yellow,
  khaki: khaki,
  cookiesAndCream: cookiesAndCream,
  lime: lime,
  darkKhaki: darkKhaki,
  lightgreen: lightgreen,
  budGreen: budGreen,
  grey: grey,
  fernGreen: fernGreen,
  blackOlive: blackOlive,
  blackLeatherJacket: blackLeatherJacket,
  green: green,
  iguanaGreen: iguanaGreen,
  deepAquamarine: deepAquamarine,
  grayAsparagus: grayAsparagus,
  opal: opal,
  mediumAquamarine: mediumAquamarine,
  antiFlashWhite: antiFlashWhite,
  illuminatingEmerald: illuminatingEmerald,
  teal: teal,
  paleRobinEggBlue: paleRobinEggBlue,
  cyan: cyan,
  pewterBlue: pewterBlue,
  blizzardBlue: blizzardBlue,
  lightblue: lightblue,
  bluegrey: bluegrey,
  spiroDiscoBall: spiroDiscoBall,
  diamond: diamond,
  lightSkyBlue: lightSkyBlue,
  blue: blue,
  unitedNationsBlue: unitedNationsBlue,
  darkElectricBlue: darkElectricBlue,
  policeBlue: policeBlue,
  coolGrey: coolGrey,
  dimGray: dimGray,
  blueZodiac: blueZodiac,
  indigo: indigo,
  vodka: vodka,
  arsenic: arsenic,
  spaceCadet: spaceCadet,
  americanBlue: americanBlue,
  rhythm: rhythm,
  liberty: liberty,
  lavenderPurple: lavenderPurple,
  lightPastelPurple: lightPastelPurple,
  deeppurple: deeppurple,
  soap: soap,
  purple: purple,
  vividOrchid: vividOrchid,
  violetBlue: violetBlue,
  middlePurple: middlePurple,
  halayaUbe: halayaUbe,
  queenPink: queenPink,
  englishLavender: englishLavender,
  pinkPearl: pinkPearl,
  gray: gray,
  mountbattenPink: mountbattenPink,
  wenge: wenge,
  folly: folly,
  pink: pink,
  roseGold: roseGold,
  solidPink: solidPink,
  prim: prim,
  redViolet: redViolet,
  awesome: awesome,
  watermelonRed: watermelonRed,
  chocolateCosmos: chocolateCosmos,
  black: black
};
var themes = map(themeMap, function (value) {
  return value;
});

export { americanBlue, antiFlashWhite, arsenic, awesome, black, blackLeatherJacket, blackOlive, blizzardBlue, blue, blueZodiac, bluegrey, budGreen, chocolateCosmos, cookiesAndCream, coolGrey, cyan, darkElectricBlue, darkKhaki, deepAquamarine, deeppurple, diamond, dimGray, englishLavender, fernGreen, folly, gray, grayAsparagus, green, grey, halayaUbe, iguanaGreen, illuminatingEmerald, indigo, khaki, lavenderPurple, liberty, lightPastelPurple, lightSkyBlue, lightblue, lightgreen, lime, mediumAquamarine, middlePurple, mountbattenPink, opal, paleRobinEggBlue, pewterBlue, pink, pinkPearl, policeBlue, prim, purple, queenPink, redViolet, rhythm, roseGold, soap, solidPink, spaceCadet, spiroDiscoBall, teal, themes, unitedNationsBlue, violetBlue, vividOrchid, vodka, watermelonRed, wenge, yellow };
//# sourceMappingURL=index.js.map
