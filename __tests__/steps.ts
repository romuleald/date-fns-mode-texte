import { defineFeature, loadFeature } from "jest-cucumber";
import { transformeDate } from "../index";

const feature = loadFeature("./index.feature", { loadRelativePath: true });
defineFeature(feature, (test) => {
  test("Transformation <useCase>", ({ when, then }) => {
    let result: unknown;
    when(/^La date est (.*)$/, (arg0: string) => {
      result = transformeDate(arg0)
    });

    then(/^Elle est transformé en (.*)$/, (arg0: string) => {
      expect(result).toEqual(JSON.parse(arg0))
    });
  });
});
