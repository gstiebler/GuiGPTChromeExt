import { summarize, HtmlExtraction } from "./DOMSummary";

type TSummarizedHtml = {
    summary: any;
    extractor: HtmlExtraction;
}
export function getSummarizedHtmlFromDocument(): TSummarizedHtml {
    const { summary, extractor } = summarize(document);
    console.log('Summary');
    console.log(summary);
    return { summary, extractor };
}

export function setInputValue(id: string, value: string, extractor?: HtmlExtraction) {
    if (!extractor) {
        throw Error('localExtractor is not defined');
    }
    const input = extractor.getElementFromId(id) as HTMLInputElement;
    console.log(`Setting the value ${value} to the input ${id}`);
    input.value = value;
}

export function openLink(url: string) {
    console.log(`Opening the link ${url}`);
    window.location.href = url;
}

export function clickButton(id: string, extractor?: HtmlExtraction) {
    if (!extractor) {
        throw Error('localExtractor is not defined');
    }
    const button = extractor.getElementFromId(id) as HTMLButtonElement;
    console.log(`Clicking the button ${id}`);
    button.click();
}
