import prompt from "prompt"
import promptSchemaNumberPhone from "../../prompts-schema/prompt-schema-number.js"
import handle from "./handle.js"


async function getNumberPhone(){
    prompt.start();

    const result = await prompt.get(promptSchemaNumberPhone);

    handle(result);
  
}

export default getNumberPhone;
