import prompt from "prompt";
import chalk from "chalk";

const promptSchemaNumberPhone = [
{
  name: "DDD",
  description: chalk.yellow.bold("Digite o DDD do número que deseja gerar:"), 
  pattern: /^\d{2}$/,
  message: chalk.red.italic("digite apenas dois números, ex: 11"),
  required: true,
}
];

export default promptSchemaNumberPhone;

