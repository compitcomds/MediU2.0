export default function toggleElement<T>(arr: T[], element: T): T[] {
  const index = arr.indexOf(element);

  if (index > -1) {
    arr.splice(index, 1);
  } else {
    arr.push(element);
  }

  return arr;
}
