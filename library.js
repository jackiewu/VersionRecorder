/**
 * Get next version string
 * min: 1.1.1
 * max: 99.99.99
 */
export const nextVersion = (current, plus = 1) => {
  if (current.lastIndexOf(".") < 0) {
    current = +current + plus;
    return current >= 100 ? 1 : current;
  }
  const nvs = [];
  for (const n of current.split(".").reverse()) {
    const nv = nextVersion(n, plus);
    plus = nv === 1 ? plus : 0;
    nvs.push(nv);
  }
  return nvs.reverse().join(".");
};
