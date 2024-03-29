import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import { LLMMessage } from "../orquestrator/orquestrator";
import { backOff } from "exponential-backoff";
import _ from "lodash";


async function sendInternal(apiKey: string, messagesLlm: LLMMessage[]): Promise<OpenAI.Chat.Completions.ChatCompletion> {
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

    const messages: ChatCompletionMessageParam[] = messagesLlm.map(message => ({
        role: message.role,
        content: message.message,
    }));

    const gpt4Preview = "gpt-4-turbo-preview";
    const gpt4Model = "gpt-4";
    const gpt3Model = "gpt-3.5-turbo";
    const gpt3_16kModel = "gpt-3.5-turbo-16k";
    const response = await openai.chat.completions.create({
        model: gpt3Model,
        messages,
        temperature: 0,
        max_tokens: 1024,
    });
    return response;
}

export function send(apiKey: string, messagesLlm: LLMMessage[]): Promise<OpenAI.Chat.Completions.ChatCompletion> {
    if (_.isEmpty(apiKey)) {
        throw new Error('No OpenAI API key provided: ' + apiKey);
    }
    return backOff(() => sendInternal(apiKey, messagesLlm),
        { retry: (e: any, attempNumber: number) => { console.log(`Error sending message to OpenAI: ${e}`); return true; } }
    );
}
