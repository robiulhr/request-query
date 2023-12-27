// check the value is an object or not
export const isObject = function (value: unknown) {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    // 👇️ this runs
    return true;
  }
  return false;
};

// check is the value is a function or not
export function isFunction(value: unknown) {
  return value instanceof Function ? true : false;
}
