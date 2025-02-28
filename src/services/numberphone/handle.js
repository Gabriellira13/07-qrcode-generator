import chalk from "chalk";

async function handle(result){
    // Pegando o DDD digitado pelo usuário
    const ddd = result.DDD
     // Gerando os 8 dígitos aleatórios (o primeiro sempre será 9)
    let phoneNumber = "9";
    
    for (let i = 0; i < 8; i++) {
        phoneNumber += Math.floor(Math.random() * 10); // Gera um número de 0 a 9
    }
    // Formatando o número (ex: (11) 91234-5678)
    const formattedNumber = `(${ddd}) ${phoneNumber.slice(0, 5)}-${phoneNumber.slice(5)}`;

    // Exibindo o número gerado no console
    console.log(chalk.green.bold("Número de telefone gerado: "), chalk.blue.bold(formattedNumber));

}

export default handle;