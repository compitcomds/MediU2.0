export default function calculatePercentage(
  num: number | string,
  deno: number | string,
  toFixed: number = 0,
) {
  if (typeof num === "string") num = parseFloat(num);
  if (typeof deno === "string") deno = parseFloat(deno);
  return ((num * 100) / deno).toFixed(toFixed);
}
