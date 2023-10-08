import { send } from "../ai/openai";
import { LLMMessage } from "../orquestrator/orquestrator";

import * as prompts from '../ai/promptSource';

const messagesLlm = [
    {
        "role": "system",
        "message": prompts.promptSource.getMainSystemPrompt()
    },
    {
        "role": "user",
        "message": "I want to send a receipt to get reimbursed from Canada Life. Its url is https://www.canadalife.com."
    },
    {
        "role": "assistant",
        "message": "Sure! I can help you with that. Let's start by opening the Canada Life website. Please wait a moment while I open the website for you.\n\n%%%\nopen_url(\"https://www.canadalife.com\")\n%%%"
    },
    {
        "role": "system",
        "message": "result: [[{type:link,href:#main,children:Skip to main content},[[[{type:link,href:/},[{type:button,children:Search},{type:button,children:Menu}]],[[Search,{id:id1,name:name1,type:search,placeholder:Search},{aria-label:Search,type:submit}],[Quicklinks,[{type:link,href:https://www.canadalife.com/sign-in.html,children:Sign in},{type:link,href:https://my.canadalife.com/sign-in ,children:My Canada Life at Work},{type:link,href:https://www.canadalife.com/contact-us.html#/,children:Contact us},{type:link,href:/support/forms.html,children:Find a form}]]],[[{type:link,href:/insurance.html,children:Insurance},{type:link,href:/investing-saving.html,children:Investing & saving},{type:link,href:/investing-saving/retirement.html,children:Retirement},{type:link,href:/investing-saving/mortgages.html,children:Mortgages},{type:link,href:/business-solutions.html,children:Business solutions}],{type:link,href:/sign-in.html,children:Sign in},[{type:link,href:/support/forms.html,children:Find a form},{type:link,href:/contact-us.html,children:Contact us},{type:link,href:/fr.html,children:FR}]]],[[[{type:link,href:/support/forms.html,children:Find a form},{type:link,href:/contact-us.html,children:Contact us},{type:link,href:/fr.html,children:FR}],{type:link,href:/sign-in.html,children:Sign in}],[{type:link,href:/},[{type:link,href:/insurance.html,children:Insurance},{type:link,href:/investing-saving.html,children:Investing & saving},{type:link,href:/investing-saving/retirement.html,children:Retirement},{type:link,href:/investing-saving/mortgages.html,children:Mortgages},{type:link,href:/business-solutions.html,children:Business solutions}],[[Search,{id:id2,name:name2,type:search,placeholder:Search},{aria-label:Search,type:submit}],[Quicklinks,[{type:link,href:https://www.canadalife.com/sign-in.html,children:Sign in},{type:link,href:https://my.canadalife.com/sign-in ,children:My Canada Life at Work},{type:link,href:https://www.canadalife.com/contact-us.html#/,children:Contact us},{type:link,href:/support/forms.html,children:Find a form}]]],{type:button,children:Search}]]],[[Welcome to Canada Life! You’ve been redirected to our main website.,[The Great-West Life Assurance Company, London Life Insurance Company and The Canada Life Assurance Company have become one company – The Canada Life Assurance Company.,{type:link,href:https://www.canadalife.com/about-us/amalgamation.html,children:Discover the new Canada Life}]],{aria-label:Close,type:button}],[[Welcome to Canada Life! You’ve been redirected to our main website.,[The Great-West Life Assurance Company, London Life Insurance Company and The Canada Life Assurance Company have become one company – The Canada Life Assurance Company.,{type:link,href:https://www.canadalife.com/about-us/amalgamation.html,children:Discover the new Canada Life}]],{aria-label:Close,type:button}],Your web browser is out-of-date. For the best experience, please update to a modern browser like Chrome, Edge, Safari or Mozilla Firefox.,[[Welcome to Canada Life!,Freedom 55 Financial is a division of The Canada Life Assurance Company and the information you requested can be found here.],{aria-label:Close,type:button}],[[Are you a member of the Public Service Health Care Plan (PSHCP) and looking for information about your benefits with Canada Life? Get details on the,{type:link,href:https://welcome.canadalife.com/PSHCP,children:[PSHCP Member Services website.,- Opens in a new window]}],{aria-label:Close,type:button}]],<noscript><div class=\\container\\><p><br>We're sorry, Canadalife.com doesn't work properly without\\n      JavaScript enabled. <br>Please enable it to continue.</p></div></noscript>,[[[[Freedom to Choose™ health and dental insurance,Health and dental coverage when it matters,From routine dentist checkups to physiotherapy sessions, you can build a plan that fits your needs.,{type:link,href:/insurance/health-and-dental-insurance.html,children:Get started}],[Find the right benefit and savings plan for your small business,{type:link,href:/insurance/business-insurance/small-medium-business-benefits.html,children:Learn more about Freedom at Work}],[Make a lasting impact through charitable giving,{type:link,href:/insurance/life-insurance/permanent-life-insurance/participating-whole-life-insurance/my-par-gift.html,children:Learn more about Canada Life My Par Gift}]],[Let’s get started,[[Insurance,You can feel more confident by protecting what’s important to you.,{type:link,href:/insurance.html,children:Explore insurance solutions}],[Investments,Let’s choose the investments to help you live the life you want.,{type:link,href:/investing-saving.html,children:Explore investing options}],[Advice,Read insights to help you make decisions with confidence.,{type:link,href:/blog.html,children:Find articles}]]],[[[We can help you,{id:id3,name:name3,type:SELECT,children:[protect your business,retire your way]}],{type:link,href:/business-solutions/owning-business.html,children:Get started}],[[We can help you,{id:id4,name:name4,type:SELECT,children:[protect your business,retire your way]}],{type:link,href:/business-solutions/owning-business.html,children:Get started}]],[Create a workplace where everyone thrives,Workplace Strategies for Mental Health is a leading source of free tools and resources to help you, your organization and your team protect psychological safety and create a mentally healthy workplace.,{type:link,href:https://www.workplacestrategiesformentalhealth.com/,children:Learn more}],[How to manage a downturn in the market,[[{type:link,href:/blog/investing-saving/how-you-can-deal-with-market-volatility.html,children:How you can deal with market volatility},Learn more],[{type:link,href:/blog/investing-saving/managing-risk-in-volatile-times.html,children:Managing risk in volatile times: you have options},Learn more],[{type:link,href:/blog/investing-saving/how-to-survive-market-downturn-making-investing-less-intimidating.html,children:How to survive a market downturn – lessons to make investing less intimidating},Learn more]]],[Community contributions, employee total, and benefits paid,[[$11.1 million,contributed to communities],[11,763 employees,supporting our customers],[$8.7 billion,in benefits paid]]]],[[[[[Planning and advice,{type:link,href:/blog.html,children:Insights and advice blog}],[{id:id5,type:button,children:Planning and advice},{type:link,href:/blog.html,children:Insights and advice blog}]],[[Advisors,{type:link,href:https://www.canadalife.com/investment-management.html,children:[Canada Life Investment Management Ltd.,- Opens in a new window]}],[{id:id6,type:button,children:Advisors},{type:link,href:https://www.canadalife.com/investment-management.html,children:[Canada Life Investment Management Ltd.,- Opens in a new window]}]]],[[About Canada Life,[{type:link,href:/about-us.html,children:About us},{type:link,href:http://careers.canadalife.com/,children:[Careers,- Opens in a new window]},{type:link,href:/about-us/newsroom.html,children:Newsroom},{type:link,href:/about-us/governance.html,children:Governance},{type:link,href:/about-us/financial-information.html,children:Financial information},{type:link,href:/about-us/community-and-social-responsibility.html,children:Community and social responsibility},{type:link,href:/about-us/sponsorships.html,children:Sponsorships}]],[{id:id7,type:button,children:About Canada Life},[{type:link,href:/about-us.html,children:About us},{type:link,href:http://careers.canadalife.com/,children:[Careers,- Opens in a new window]},{type:link,href:/about-us/newsroom.html,children:Newsroom},{type:link,href:/about-us/governance.html,children:Governance},{type:link,href:/about-us/financial-information.html,children:Financial information},{type:link,href:/about-us/community-and-social-responsibility.html,children:Community and social responsibility},{type:link,href:/about-us/sponsorships.html,children:Sponsorships}]]],[[Support,[{type:link,href:/support/forms.html,children:Find a form},{type:link,href:/insurance/workplace-benefits/eclaims-provider-listing.html,children:Find a provider},{type:link,href:/contact-us/corporate/media-relations.html,children:Media inquiries},{type:link,href:/support/consumer-information.html,children:Customer satisfaction},{type:link,href:https://www.greatwestlifeco.com/investors-analysts/share-information/former-holders-of-clfc-common-shares.html,children:[Former holders of Canada Life Financial Corporation common shares (CLFC),- Opens in a new window]},{type:link,href:/international-operations.html,children:International operations}]],[{id:id8,type:button,children:Support},[{type:link,href:/support/forms.html,children:Find a form},{type:link,href:/insurance/workplace-benefits/eclaims-provider-listing.html,children:Find a provider},{type:link,href:/contact-us/corporate/media-relations.html,children:Media inquiries},{type:link,href:/support/consumer-information.html,children:Customer satisfaction},{type:link,href:https://www.greatwestlifeco.com/investors-analysts/share-information/former-holders-of-clfc-common-shares.html,children:[Former holders of Canada Life Financial Corporation common shares (CLFC),- Opens in a new window]},{type:link,href:/international-operations.html,children:International operations}]]],[{type:link,href:/contact-us.html,children:Contact us},[{type:link,href:https://www.facebook.com/CanadaLifeCo/},{type:link,href:https://twitter.com/canadalifeco?lang=en},{type:link,href:https://ca.linkedin.com/company/canada-life},{type:link,href:https://www.youtube.com/user/canadalifeca},{type:link,href:https://www.instagram.com/canadalifeco/}],{type:link,href:/fr.html,children:FR}]],[[[{type:link,href:#top-of-page},{type:link,href:#top-of-page,children:Back to top}],© The Canada Life Assurance Company 2009 - 2023],[{type:link,href:/site-map.html,children:Sitemap},{type:link,href:/privacy.html,children:Privacy},{type:link,href:/privacy/cookie-policy.html,children:Cookie policy},{type:button,aria-label:Manage cookies},{type:link,href:/terms-of-use.html,children:Terms of use},{type:link,href:/internet-security.html,children:Internet security},{type:link,href:/accessibility.html,children:Accessibility}],[{type:link,href:#top-of-page},{type:link,href:#top-of-page,children:Back to top}]]]],DO NOT REMOVE-CONTENTS PLACED HERE,[{type:button,aria-label:Open Preferences},{type:button,aria-label:Close Preferences,children:?xml version=\\1.0\\ encoding=\\UTF-8\\?}],{type:BUTTON,children:Click to open side panel}]"
    }
    
] as LLMMessage[];

async function execute() {
    const OPENAI_KEY = process.env.OPENAI_KEY as string;
    const result = await send(OPENAI_KEY, messagesLlm);
    return result.choices[0].message;
}

export default execute;