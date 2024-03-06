import chalk from "chalk";
import { Iniciar } from './connect.js';

const conectado = "Status "+chalk.greenBright("Conectado");
const desconectado = "Status "+chalk.redBright("Desconectado");
const tempo = new Promise(resolve => setTimeout(resolve, 2000));

function DadosDeLocalização(){
    const ip = chalk.yellow("IP")+" = 158.587.848.87";
    const Local = chalk.yellow("Local")+" = Brazil";
    const usuario = chalk.yellow("User")+" = Arthur Henrique";
    console.log(ip)
    console.log(Local)
    console.log(usuario)
    Iniciar()

}
async function VerificacaoDeRede(Rede){
     await console.log("Verificando conexão da rede ...")
     await tempo

    if(Rede == 200){
        await console.log(conectado)
        await tempo
        await DadosDeLocalização()

    }else{
        await console.log(desconectado)
        
    }   
} 
VerificacaoDeRede(200)