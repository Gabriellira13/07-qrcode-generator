import prompt from 'prompt'
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from './services/qr-code/create.js';
import createPassword  from './services/password/create.js';
import createNumberPhone from "./services/numberphone/create.js"

async function main(){
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
        if(choose.select == 3) await createNumberPhone();
    } )

    prompt.start();
}


main();

