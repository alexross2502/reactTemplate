import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.REACT_APP_HF_TOKEN;

const client = new InferenceClient(HF_TOKEN);

export const getAIResponse = async (input) => {
    const out = await client.chatCompletion({
        model: "meta-llama/Llama-3.1-8B-Instruct",
        messages: [{ role: "user", content: input }],
        max_tokens: 512
    });
    return out.choices[0].message
}