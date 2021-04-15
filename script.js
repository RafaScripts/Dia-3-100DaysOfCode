/** Estruturas de Controle
 * 
 * No javaScript é nescessario o uso de estruturas para controle do fluxo de codigo,
 * nesse sentido, temos algum comandos com os quais podemos fazer verificações do tipo
 * boolean para averigar se tal ação deve ser executada ou não.
 * 
 * neste codigo será apresentada 3 delas. São:
 * 
 * If (se)
 * 
 * Else (senão)
 * 
 * Else if(se-senão)
 * 
 * Veja o funcionamento delas a seguir:
 * 
 */

const usuario = prompt("Diga seu nome: ");

const idade = prompt(usuario + " Agora sua idade: ");

const robo = prompt(usuario + "agora prove que você não é um robo, quanto é 37 + 3 = ");

if (idade >= 13 && robo == 40) {
    alert("idade permitida, você está liberado")
}else {
    alert("idade não permitida, acesso bloqueado")
} 

const seguidor = prompt("Você segue o RafaScript em Alguma rede Social ? (Y = sim ) ( N = Não )");

if (seguidor == "Y" || seguidor == "y") {
    alert("muito obrigado por acompanhar meu conteudo!");
} else if(prompt("Gostaria de Acompanhar ? (Y = sim ) ( N = Não )") == "Y" || "y") {
    alert("Minhas Redes Sociais São: Instagram - @rafascripts | tiktok - @rafascripts | youtube - RafaScripts");
} else {
    alert("muito obrigado por testar esse codigo!");
}

