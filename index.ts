import type { Duration } from 'date-fns';

const regexDateMatch =
  /(?:(?<jours>\d+)\sjour)|(?:(?<mois>\d+)\smois)|(?:(?<ans>\d+)\san)/g;

const translateType = (date: string) =>
  ({ an: "years", mois: "months", jour: "days" }[date] ?? '');

export const transformeDate = (typedDate: string): Duration => {
  const dateRelativeMatcher = typedDate.match(regexDateMatch) ?? [];
  return dateRelativeMatcher.reduce((acc: any, curr) => {
    const [nb, type] = curr.split(" ");
    acc[translateType(type)] = nb;
    return acc;
  }, {});
};
