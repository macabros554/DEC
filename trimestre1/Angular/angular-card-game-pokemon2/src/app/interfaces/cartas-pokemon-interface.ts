// To parse this data:
//
//   import { Convert, CartasPokemonInterface } from "./file";
//
//   const cartasPokemonInterface = Convert.toCartasPokemonInterface(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CartasPokemonInterface {
  data:       Datum[];
  page:       number;
  pageSize:   number;
  count:      number;
  totalCount: number;
}

export interface Datum {
  id:                     string;
  name:                   string;
  supertype:              Supertype;
  subtypes:               Subtype[];
  level?:                 string;
  hp:                     string;
  types:                  RetreatCost[];
  evolvesFrom?:           string;
  abilities?:             Ability[];
  attacks?:               Attack[];
  weaknesses?:            Resistance[];
  resistances?:           Resistance[];
  retreatCost?:           RetreatCost[];
  convertedRetreatCost?:  number;
  set:                    Set;
  number:                 string;
  artist:                 string;
  rarity?:                Rarity;
  nationalPokedexNumbers: number[];
  legalities:             Legalities;
  images:                 DatumImages;
  tcgplayer:              Tcgplayer;
  cardmarket:             Cardmarket;
  evolvesTo?:             string[];
  flavorText?:            string;
  rules?:                 string[];
  regulationMark?:        string;
}

export interface Ability {
  name: string;
  text: string;
  type: Type;
}

export enum Type {
  Ability = "Ability",
  PokéBody = "Poké-Body",
  PokéPower = "Poké-Power",
  PokémonPower = "Pokémon Power",
}

export interface Attack {
  name:                string;
  cost:                RetreatCost[];
  convertedEnergyCost: number;
  damage:              null | string;
  text:                string;
}

export enum RetreatCost {
  Colorless = "Colorless",
  Darkness = "Darkness",
  Dragon = "Dragon",
  Fighting = "Fighting",
  Fire = "Fire",
  Grass = "Grass",
  Lightning = "Lightning",
  Metal = "Metal",
  Psychic = "Psychic",
  Water = "Water",
}

export interface Cardmarket {
  url:       string;
  updatedAt: UpdatedAt;
  prices:    { [key: string]: number };
}

export enum UpdatedAt {
  The20211215 = "2021/12/15",
}

export interface DatumImages {
  small: string;
  large: string;
}

export interface Legalities {
  unlimited: Expanded;
  expanded?: Expanded;
  standard?: Expanded;
}

export enum Expanded {
  Legal = "Legal",
}

export enum Rarity {
  Common = "Common",
  Promo = "Promo",
  Rare = "Rare",
  RareHolo = "Rare Holo",
  RareHoloEX = "Rare Holo EX",
  RareHoloGX = "Rare Holo GX",
  RareHoloV = "Rare Holo V",
  RareUltra = "Rare Ultra",
  Uncommon = "Uncommon",
}

export interface Resistance {
  type:  RetreatCost;
  value: string;
}

export interface Set {
  id:           string;
  name:         string;
  series:       Series;
  printedTotal: number;
  total:        number;
  legalities:   Legalities;
  ptcgoCode?:   string;
  releaseDate:  string;
  updatedAt:    string;
  images:       SetImages;
}

export interface SetImages {
  symbol: string;
  logo:   string;
}

export enum Series {
  Base = "Base",
  BlackWhite = "Black & White",
  DiamondPearl = "Diamond & Pearl",
  ECard = "E-Card",
  Ex = "EX",
  Gym = "Gym",
  HeartGoldSoulSilver = "HeartGold & SoulSilver",
  Neo = "Neo",
  Other = "Other",
  Platinum = "Platinum",
  Pop = "POP",
  SunMoon = "Sun & Moon",
  SwordShield = "Sword & Shield",
  Xy = "XY",
}

export enum Subtype {
  Basic = "Basic",
  Ex = "EX",
  Gx = "GX",
  Mega = "MEGA",
  Restored = "Restored",
  Stage1 = "Stage 1",
  Stage2 = "Stage 2",
  TagTeam = "TAG TEAM",
  V = "V",
}

export enum Supertype {
  Pokémon = "Pokémon",
}

export interface Tcgplayer {
  url:       string;
  updatedAt: UpdatedAt;
  prices?:   Prices;
}

export interface Prices {
  holofoil?:             The1_StEditionHolofoil;
  reverseHolofoil?:      The1_StEditionHolofoil;
  normal?:               The1_StEditionHolofoil;
  "1stEditionHolofoil"?: The1_StEditionHolofoil;
}

export interface The1_StEditionHolofoil {
  low:        number;
  mid:        number;
  high:       number;
  market:     number;
  directLow?: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCartasPokemonInterface(json: string): CartasPokemonInterface {
      return cast(JSON.parse(json), r("CartasPokemonInterface"));
  }

  public static cartasPokemonInterfaceToJson(value: CartasPokemonInterface): string {
      return JSON.stringify(uncast(value, r("CartasPokemonInterface")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
      throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue("array", val);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue("Date", val);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue("object", val);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, prop.key);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "CartasPokemonInterface": o([
      { json: "data", js: "data", typ: a(r("Datum")) },
      { json: "page", js: "page", typ: 0 },
      { json: "pageSize", js: "pageSize", typ: 0 },
      { json: "count", js: "count", typ: 0 },
      { json: "totalCount", js: "totalCount", typ: 0 },
  ], false),
  "Datum": o([
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "supertype", js: "supertype", typ: r("Supertype") },
      { json: "subtypes", js: "subtypes", typ: a(r("Subtype")) },
      { json: "level", js: "level", typ: u(undefined, "") },
      { json: "hp", js: "hp", typ: "" },
      { json: "types", js: "types", typ: a(r("RetreatCost")) },
      { json: "evolvesFrom", js: "evolvesFrom", typ: u(undefined, "") },
      { json: "abilities", js: "abilities", typ: u(undefined, a(r("Ability"))) },
      { json: "attacks", js: "attacks", typ: u(undefined, a(r("Attack"))) },
      { json: "weaknesses", js: "weaknesses", typ: u(undefined, a(r("Resistance"))) },
      { json: "resistances", js: "resistances", typ: u(undefined, a(r("Resistance"))) },
      { json: "retreatCost", js: "retreatCost", typ: u(undefined, a(r("RetreatCost"))) },
      { json: "convertedRetreatCost", js: "convertedRetreatCost", typ: u(undefined, 0) },
      { json: "set", js: "set", typ: r("Set") },
      { json: "number", js: "number", typ: "" },
      { json: "artist", js: "artist", typ: "" },
      { json: "rarity", js: "rarity", typ: u(undefined, r("Rarity")) },
      { json: "nationalPokedexNumbers", js: "nationalPokedexNumbers", typ: a(0) },
      { json: "legalities", js: "legalities", typ: r("Legalities") },
      { json: "images", js: "images", typ: r("DatumImages") },
      { json: "tcgplayer", js: "tcgplayer", typ: r("Tcgplayer") },
      { json: "cardmarket", js: "cardmarket", typ: r("Cardmarket") },
      { json: "evolvesTo", js: "evolvesTo", typ: u(undefined, a("")) },
      { json: "flavorText", js: "flavorText", typ: u(undefined, "") },
      { json: "rules", js: "rules", typ: u(undefined, a("")) },
      { json: "regulationMark", js: "regulationMark", typ: u(undefined, "") },
  ], false),
  "Ability": o([
      { json: "name", js: "name", typ: "" },
      { json: "text", js: "text", typ: "" },
      { json: "type", js: "type", typ: r("Type") },
  ], false),
  "Attack": o([
      { json: "name", js: "name", typ: "" },
      { json: "cost", js: "cost", typ: a(r("RetreatCost")) },
      { json: "convertedEnergyCost", js: "convertedEnergyCost", typ: 0 },
      { json: "damage", js: "damage", typ: u(null, "") },
      { json: "text", js: "text", typ: "" },
  ], false),
  "Cardmarket": o([
      { json: "url", js: "url", typ: "" },
      { json: "updatedAt", js: "updatedAt", typ: r("UpdatedAt") },
      { json: "prices", js: "prices", typ: m(3.14) },
  ], false),
  "DatumImages": o([
      { json: "small", js: "small", typ: "" },
      { json: "large", js: "large", typ: "" },
  ], false),
  "Legalities": o([
      { json: "unlimited", js: "unlimited", typ: r("Expanded") },
      { json: "expanded", js: "expanded", typ: u(undefined, r("Expanded")) },
      { json: "standard", js: "standard", typ: u(undefined, r("Expanded")) },
  ], false),
  "Resistance": o([
      { json: "type", js: "type", typ: r("RetreatCost") },
      { json: "value", js: "value", typ: "" },
  ], false),
  "Set": o([
      { json: "id", js: "id", typ: "" },
      { json: "name", js: "name", typ: "" },
      { json: "series", js: "series", typ: r("Series") },
      { json: "printedTotal", js: "printedTotal", typ: 0 },
      { json: "total", js: "total", typ: 0 },
      { json: "legalities", js: "legalities", typ: r("Legalities") },
      { json: "ptcgoCode", js: "ptcgoCode", typ: u(undefined, "") },
      { json: "releaseDate", js: "releaseDate", typ: "" },
      { json: "updatedAt", js: "updatedAt", typ: "" },
      { json: "images", js: "images", typ: r("SetImages") },
  ], false),
  "SetImages": o([
      { json: "symbol", js: "symbol", typ: "" },
      { json: "logo", js: "logo", typ: "" },
  ], false),
  "Tcgplayer": o([
      { json: "url", js: "url", typ: "" },
      { json: "updatedAt", js: "updatedAt", typ: r("UpdatedAt") },
      { json: "prices", js: "prices", typ: u(undefined, r("Prices")) },
  ], false),
  "Prices": o([
      { json: "holofoil", js: "holofoil", typ: u(undefined, r("The1_StEditionHolofoil")) },
      { json: "reverseHolofoil", js: "reverseHolofoil", typ: u(undefined, r("The1_StEditionHolofoil")) },
      { json: "normal", js: "normal", typ: u(undefined, r("The1_StEditionHolofoil")) },
      { json: "1stEditionHolofoil", js: "1stEditionHolofoil", typ: u(undefined, r("The1_StEditionHolofoil")) },
  ], false),
  "The1_StEditionHolofoil": o([
      { json: "low", js: "low", typ: 3.14 },
      { json: "mid", js: "mid", typ: 3.14 },
      { json: "high", js: "high", typ: 3.14 },
      { json: "market", js: "market", typ: 3.14 },
      { json: "directLow", js: "directLow", typ: u(undefined, 3.14) },
  ], false),
  "Type": [
      "Ability",
      "Poké-Body",
      "Poké-Power",
      "Pokémon Power",
  ],
  "RetreatCost": [
      "Colorless",
      "Darkness",
      "Dragon",
      "Fighting",
      "Fire",
      "Grass",
      "Lightning",
      "Metal",
      "Psychic",
      "Water",
  ],
  "UpdatedAt": [
      "2021/12/15",
  ],
  "Expanded": [
      "Legal",
  ],
  "Rarity": [
      "Common",
      "Promo",
      "Rare",
      "Rare Holo",
      "Rare Holo EX",
      "Rare Holo GX",
      "Rare Holo V",
      "Rare Ultra",
      "Uncommon",
  ],
  "Series": [
      "Base",
      "Black & White",
      "Diamond & Pearl",
      "E-Card",
      "EX",
      "Gym",
      "HeartGold & SoulSilver",
      "Neo",
      "Other",
      "Platinum",
      "POP",
      "Sun & Moon",
      "Sword & Shield",
      "XY",
  ],
  "Subtype": [
      "Basic",
      "EX",
      "GX",
      "MEGA",
      "Restored",
      "Stage 1",
      "Stage 2",
      "TAG TEAM",
      "V",
  ],
  "Supertype": [
      "Pokémon",
  ],
};
