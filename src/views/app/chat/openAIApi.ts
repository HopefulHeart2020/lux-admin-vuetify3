import { Configuration, OpenAIApi } from "openai";
import { useChatStore } from "./chatStore";
const chatStore = useChatStore();

const configuration = new Configuration({
  apiKey: chatStore.apiKey,
});
const openai = new OpenAIApi(configuration);

//
export const createCompletion: any = (keyword: string) => {
  console.log(keyword);
  return openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: keyword }],
  });
};

export const translationApi: any = (content: string, prompt: string) => {
  return openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: prompt },
      { role: "user", content: content },
    ],
  });
};

// openai.listModels
// https://platform.openai.com/docs/api-reference/models/list

// openai.retrieveModel
// GET https://api.openai.com/v1/models/{model}

function generatePrompt(animal: string) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.
  
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`;
}

export const createImageApi: any = () => {
  return openai.createImage({
    prompt:
      "Football club logo. Flat design. Modern. Energetic. Blue and green. White/black stroke.",
    n: 1,
    size: "1024x1024",
  });
};
