export default function ifStringMakeArray(
  variable: string[] | string | null | undefined
) {
  if (Array.isArray(variable)) return variable;
  else if (!!variable) return [variable];
  else return [];
}
