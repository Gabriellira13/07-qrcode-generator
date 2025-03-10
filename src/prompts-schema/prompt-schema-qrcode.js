import chalk from 'chalk';
import prompt from 'prompt';

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QR Code"),
  },
  {
    name:"type",
    description: chalk.yellow.bold(
        "Qual tipo de QR Code você gostaria? (1 - NORMAL ou 2 - TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  }

];

export default promptSchemaQRCode;