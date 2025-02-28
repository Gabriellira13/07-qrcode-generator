import chalk from 'chalk';

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("escolha a ferramenta (1 - QRCODE / 2 - PASSWORD ou 3 - NumberPhone):"),
        pattern: /^[1-3]$/,
        message: chalk.red.italic("escolha entre 1, 2 ou 3"),
        required: true,
    }
]

export default promptSchemaMain;