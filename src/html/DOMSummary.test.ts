import { summarize } from "./DOMSummary";

import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

describe("summary", () => {
    it("happy path", () => {
        const canadaLifeHTML = fs.readFileSync(path.resolve(__dirname, "../test_resources/canada_life.html"), "utf8");
        // create a JSDOM object from the HTML
        const dom = new JSDOM(canadaLifeHTML);
        const { summary, extractor } = summarize(dom.window.document);
        console.log(JSON.stringify(summary, null, 2));
        expect(summary).toBe(15);
    });
});
