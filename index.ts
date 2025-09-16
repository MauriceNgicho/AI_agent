import { generateText } from "ai";
//  Import the google module from the ai-sdk package
import { google } from "@ai-sdk/google";

//  Specify the model to use for generating text and the prompt
const { text } = await generateText({
    model: google("gemini-2.0-flash"),
    prompt: "What is an AI agent?",
});

console.log(text);