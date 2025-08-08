// Informações do Personagem


let nome = "Leitão o Rei"; // Nome do personagem
let classe = "Real"; // Classe atual do personagem
let nivel = 10; // Nível atual do personagem
let vida = 50; // Vida do personagem
let ouro = 100; // Ouro atual do personagem
let xp = 10; // Nível de experiência do personagem



// Equipamentos Mágicos


const NOME_ARMA = "Sabre de Energia Imperial"; // Nome da arma do personagem
let DANO_BASE = 90; // Dano base da arma
const NOME_ARMADURA = "O Manto de Pedra Real"; // Nome da armadura do personagem
const DEFESA_BASE = 10; // Defesa base da armadura



// Valores das variáveis do personagem


xp += 150; // O personagem treinou e ganhou 150 pontos de experiência
ouro -= 30; // Comprou uma poção por 30 moedas de ouro
vida += 40; // Usou a poção e recuperou 40 pontos de vida
DANO_BASE *= 2; // A arma foi encantada, e seu dano foi dobrado


// Cálculo de atributos finais


let ataqueTotal = nivel + DANO_BASE // Ataque total do personagem
let defesaTotal = DEFESA_BASE + (nivel / 2); // Defesa total do personagem


// Avaliação de Prontidão com Operadores Lógicos


let vidaSuficiente = vida > 70 // Cálculo para determinar se o personagem tem vida suficiente
let ataqueForte = ataqueTotal > 60 // Cálculo para determinar se o personagem tem ataque forte
let nivelAvancado = nivel >= 10 // Cálculo para determinar se o personagem está no nível avançado
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado) // Cálculo para determinar se o personagem pode enfrentar o guardião



// Lore do personagem

console.log("Lore do Leitão o Rei👑");
console.log(`${nome}, um nobre de classe ${classe} com ${nivel} de nível de poder se prepara para o desafio final.`);
console.log(`Ele possui uma armadura 🛡️ chamada de "${NOME_ARMADURA}", que possui ${defesaTotal} pontos de defesa.`);
console.log(`Também uma arma chamada de "${NOME_ARMA}", tendo ${ataqueTotal} pontos de ataque total.`);
console.log(`Ele treinava intensamente, então acumulou ${xp} de experiência ✨. Com uma poção, sua vida subiu para ${vida} pontos.`);
console.log(`Porém, sua jornada o custou ${ouro} moedas de ouro. Diante do Guardião, ele sabia que seria uma batalha épica.`);
console.log(`Ele ficou muito empolgado para essa batalha.`);
console.log(`Tem vida suficiente?❤️ ${vidaSuficiente} | Está no nível avançado? ${nivelAvancado} | Tem ataque forte? ${ataqueForte}.`);
console.log(`Pode enfrentar o guardião? ${podeEnfrentarGuardiao}. `);
console.log(`O destino do reino está em suas mãos`);


// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===

let vidaAtual = 100; // Vida atual do personagem
let vidaMaxima = 100; // Vida máxima do personagem
let manaAtual = 100; // Poder atual do personagem
let manaMaxima = 60; // Poder máximo do personagem
let experiencia = 1; // Experiência do personagem


// Novos atributos para batalha
let forca = 30; // Força do personagem
let defesa = 30; // Defesa do personagem
let agilidade = 15; // Agilidade do personagem
let combatesVencidos = 0; // Combates vencidos do personagem

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "Torres Tortas"; // Local atual do personagem
let missaoAtual = "Em busca da Vitória Royale"; // Missão atual do personagem
console.log("");


// CAPÍTULO 1: Condicionais Simples na narrativa
console.log("🌅 CAPÍTULO 1: O Aviso dos Anciões");

// Verificação baseada no poder atual do personagem
if(manaAtual >= 100) { // Se o poder atual do personagem for maior ou igual a 100
    console.log(`Parabéns ${nome}, devido ao seu poder atual você pode prosseguir na sua missão.`)
    
}

// Verificação de experiência
if (experiencia > 0) { // Se a experiência for maior que 0
    console.log(`⚔️Como você ja teve uma batalha, a classe ${classe} está hábita para você.`);
     
}

// Verifição de ouro
if (ouro < 10) { // Se o ouro for menor que 10
    console.log(`Você encerra a sua jornada aqui, por não ter ouro o suficiente para proseguir`);
    
}   

// CAPÍTULO 2: Escolha Estratégica
console.log("");

console.log("🛡️ CAPÍTULO 2: A Encruzilhada do Destino");

// Verificação baseada na sua vida atual
if (vida >= 30) {   // Se a vida for maior ou igual a 30, obter recompensa
    console.log(`❤️Já que você ${nome}, tem a vida maior que 30, você ganha alguns pontos para a sua jornada.`);
    ouro += 30; // Soma 30 de ouro
    ataqueTotal += 20; // Soma 20 de ou
    console.log(`🪙Sua quantidade de ouro aumentou para ${ouro}, junto com seu ataque total para ${ataqueTotal} pontos. `);

} else { // Se não, remover 20 de outro
    console.log(`❤️Como você não esta com a vida maior que 30, você pode enfrentar um inimigo mais forte que você, isso faz você perder 20 de ouro.`);
    ouro -= 20;
    console.log(`🪙Quantidade de ouro agora: ${ouro}`);
    
}

// Verificação baseada no seu nível 
if(nivel >= 5) { // Se o nível for maior ou igual a 5, obter recompensa
    console.log(`👍Parabéns herói, com o seu nível ${nivel} maior ou igual a 5, você ganhou um tesouro que tinha algumas recompensas dentro...`);
    manaMaxima += 50; // Soma 50 de poder
    forca += 50; // Soma 50 força
    defesa += 50; // Soma 50 de defesa
    console.log(`Mana máxima aumentada para ${manaMaxima}. Força aumentada para ${forca}. E Defesa aumentada para ${defesa}.`);
        
} else { 
    console.log(`Procure aumentar o seu nível!!`);
    
}

// CAPÍTULO 3: A Batalha Decisiva
console.log("");
console.log("⚔️ CAPÍTULO 3: A Batalha Decisiva");

let poderInimigo = 15;

// Sistema de combate inteligente baseado na situação
if (ataqueTotal >= 10) { 
    console.log(`Com o seu ataque total sendo bom, ele causou um dano significativo no oponente🫣`);
    
} else if (poderInimigo <= 10) {
    console.log(`${nome} sofre ${poderInimigo} de dano do inimigo, descendo 5 de vida...`);
    vida -= 5;
    
} else if (agilidade >= 10){ 
    console.log(`Com uma boa agilidade, ele consegue acertar um outro ataque `);
    poderInimigo -= forca;
    
} else { 
    console.log(`${nome} prefere uma luta mais calculada e segura!`);
    poderInimigo -= (ataqueTotal / 2) 
    vida += 4 // Batalha mais segura, então recupera um pouco de vida

}

console.log("");
console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nome + " ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 1

console.log("Após os acontecimentos em " + localAtual + ", nosso herói " + nome);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");
 
// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]

// EPÍLOGO - Resultado final    
if(poderInimigo <= 5) { // Se o poder do inimigo for menor ou igual a 5
    console.log(`PARABÉNS!!⚔️✨🥳 ${nome}, você acaba de alcançar a Vitória Royale.`);
    experiencia += 500; // Soma 500 de experiência
    combatesVencidos++; // Soma mais 1 combates vencidos
    console.log(`E o herói chamado ${nome}, continua em crescimento...`);

} else { 
    console.log(`Infelizmente nosso héroi ${nome} perdeu a luta, mas ele consegue escapar e lutar novamente outro dia⚔️⚔️!!`);
    
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!");
console.log("");

// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
// Inventário mágico - primeira coleção arcana
let inventario = ["Poção de Pulo", "Espada do trovão", "Armadura do Homem de Ferro"];
let aliados = ["Mago elétrico", "P.E.K.K.A", "Arqueiro Mágico"];
let inimigosEncontrados = ["Goblin lançeiro", "Cavaleiro sombrio ", "Mago de Fogo"];
let salasCastelo = ["Salão do Trono", "Câmara das Joias", "Torre do Oráculo"];
let tesouroColetado = [];

console.log("🏰 === " + nome + " ADENTRA O CASTELO DOS ARRAYS ===");
console.log("Após as vitórias dos níveis anteriores, nosso herói chegou ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");

// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús Arcanos do Castelo");


// 3.5.1. Declaração e inicialização
let pocoesEncontradas = ["Força em Dobro", "Veneno", "Clone"];
let armadilhasAtiradas = []; // Array vazio - será preenchido na aventura

// 3.5.2. Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

// Modificando elemento específico
inventario[0] = "Pulo Duplo"; // Upgrade da poção!
console.log("✨ " + nome + " aprimorou uma poção!");

// 3.5.3. Métodos de array fundamentais
inventario.push("Arco Mágico"); // Adiciona no final
console.log("🏹 Novo item adicionado! Inventário: " + inventario);

let itemRemovido = inventario.pop(); // Remove do final
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);

// === CAPÍTULO 2: O RITUAL DA EXPLORAÇÃO ===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as Masmorras Malignas");

// Explorando cada sala do castelo usando for tradicional
console.log("🗺️ Começando exploração das " + salasCastelo.length + " salas místicas...");

for (let i = 0; i < salasCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log(nome + " encontra um livro real!");
experiencia += 50;
} else if (i === 1) {
console.log("💎 Jóias ultra raras com grandes poderes!");
tesouroColetado.push("Jóia da Força");
} else {
console.log("⏰ O tempo está se distorcendo ao redor de " + nome + "!");
vidaAtual -= 10; // Pequeno dano temporal
}
}

console.log("📊 Exploração Finalizada! XP: " + experiencia + " | Vida: " + vidaAtual);

// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos");

// Recrutando aliados com for tradicional
console.log("🤴 " + nome + " convoca seus aliados para a grande batalha final:");

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("🙍‍♂️ Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");

// Cada posição no array determina habilidade especial
if (i === 0) { // Primeiro aliado - Líder 
console.log("🔮 Como líder mágico, " + aliado + " multiplica o poder da equipe!");
ouro += 100;
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como cavaleiro, " + aliado + " fortalece a resistência devido a sua armadura pesada!");
vidaMaxima += 50;
} else { // Demais aliados - Suporte
console.log("🏹 Como suporte, " + aliado + " aprimora táticas de combate, com sua ajuda de ataques longos!");
experiencia += 40;
}
}

console.log("🎖️ Equipe completa com sucesso! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);
