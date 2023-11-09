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

export function setInputValue(id: string, value: string, extractor: HtmlExtraction) {
    const realId = extractor.getRealId(id);
    const input = document.getElementById(realId) as HTMLInputElement;
    input.value = value;
}

export function openLink(url: string) {
    window.location.href = url;
}

export function clickButton(id: string, extractor: HtmlExtraction) {
    const realId = extractor.getRealId(id);
    const button = document.getElementById(realId) as HTMLButtonElement;
    button.click();
}
