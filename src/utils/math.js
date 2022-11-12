import { all, create } from "mathjs";
import isString from "lodash/isString";
import toFinite from "lodash/toFinite";

const config = {
  number: "BigNumber",
};

const math = create(all, config);

/**
 * 计算函数
 * @example evaluate('1 + 2 + 3 + 4') => 10
 * @param {*} expr
 * @param  {...any} args
 * @returns number
 */
export function evaluate(expr, ...args) {
  try {
    if (isString(expr)) {
      expr = expr.replace(/\s/g, "");
    }
    return Number(math.evaluate(expr, ...args));
  } catch (e) {
    console.error(e);
  }
}

/**
 * 加法函数
 * @example add(1, 2, 3, 4) => 10
 * @param  {...any} args
 * @returns number
 */
export function add(...args) {
  if (args.length === 0) {
    return 0;
  }
  return evaluate([...args.map((item) => toFinite(item))].join("+"));
}

/**
 * 减法函数
 * @example minus(4, 1, 1) => 2
 * @param  {...any} args
 * @returns number
 */
export function minus(...args) {
  if (args.length === 0) {
    return 0;
  }
  return evaluate([...args.map((item) => toFinite(item))].join("-"));
}

/**
 * 除法函数
 * @example div(4, 2, 1) => 2
 * @param  {...any} args
 * @returns
 */
export function div(...args) {
  const exisZero = [...args].some((item) => item == 0);
  if (args.length === 0 || exisZero) {
    return 0;
  }
  return evaluate([...args.map((item) => toFinite(item))].join("/"));
}

export default math;
