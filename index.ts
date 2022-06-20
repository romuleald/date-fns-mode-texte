import type { Duration } from "date-fns";

const regexDateMatch =
  /(?<days>\d+)\sjour|(?<months>\d+)\smois|(?<years>\d+)\san/g;

const regexNotionTemps = /(il y a|dans)/g;

const negOrPos = (groups: Duration, matchNotionTemps: string) => {
  const [notionTemps] = matchNotionTemps.match(regexNotionTemps) ?? [];
  const positifOuNegatif = notionTemps === "dans" ? 1 : -1;
  return Object.entries(groups)
    .filter(([_, v]) => v !== undefined)
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        ...{ [key]: Number(value) * positifOuNegatif },
      }),
      {}
    );
};
export const transformeDate = (typedDate: string): Duration => {
  const dateRelativeMatcher = [...typedDate.matchAll(regexDateMatch)];
  return dateRelativeMatcher.reduce((acc: any, curr) => {
    const { groups } = curr;
    return { ...acc, ...negOrPos(groups as Duration, typedDate) };
  }, {});
};
