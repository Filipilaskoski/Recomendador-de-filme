// Banco de dados completo de filmes por gênero e classificação etária
const filmesPorGeneroEIdade = {
  acao: {
    livre: ["Homem-Aranha: No Aranhaverso", "Os Incríveis", "Kung Fu Panda"],
    10: ["Homem-Aranha", "Super-Homem", "Os Vingadores"],
    12: ["Missão Impossível", "Indiana Jones", "Jurassic Park"],
    14: ["John Wick", "Mad Max: Estrada da Fúria", "Duro de Matar"],
    16: ["Matrix", "Gladiador", "Django Livre"],
    18: ["Cidade de Deus", "O Protetor", "Dia de Treinamento"],
    "18+": ["O Massacre da Serra Elétrica", "Rambo", "Os Mercenários"]
  },
  comedia: {
    livre: ["Minions", "Shrek", "Toy Story"],
    10: ["Escola de Rock", "As Patricinhas de Beverly Hills", "Jumanji"],
    12: ["Gente Grande", "Se Eu Fosse Você", "Debi & Lóide"],
    14: ["As Branquelas", "Todo Mundo em Pânico", "American Pie"],
    16: ["O Grande Lebowski", "Hangover", "Superbad"],
    18: ["Borat", "Ted", "O Lobo de Wall Street"],
    "18+": ["Sausage Party", "Orgazmo", "O Ditador"]
  },
  drama: {
    livre: ["O Rei Leão", "Procurando Nemo", "Wall-E"],
    10: ["A Viagem de Chihiro", "Up: Altas Aventuras", "O Menino do Pijama Listrado"],
    12: ["Divertidamente", "Sociedade dos Poetas Mortos", "A Culpa é das Estrelas"],
    14: ["Titanic", "Forrest Gump", "O Sol é para Todos"],
    16: ["Clube da Luta", "Cidadão Kane", "A Lista de Schindler"],
    18: ["O Poderoso Chefão", "Scarface", "Cisne Negro"],
    "18+": ["Seven: Os Sete Crimes Capitais", "Requiem for a Dream", "Trainspotting"]
  },
  ficcao: {
    livre: ["E.T.", "Jumanji: Bem-Vindo à Selva", "De Volta para o Futuro"],
    10: ["Star Wars: Episódio IV", "Perdido no Espaço", "Zathura"],
    12: ["O Quinto Elemento", "Minority Report", "Jogador Nº 1"],
    14: ["Blade Runner 2049", "Inception", "O Exterminador do Futuro"],
    16: ["Matrix", "Blade Runner", "2001: Uma Odisseia no Espaço"],
    18: ["Alien: O Oitavo Passageiro", "O Predador", "A Origem"],
    "18+": ["O Homem Bicentenário", "A Ilha", "Ex Machina"]
  },
  terror: {
    livre: ["Monstros S.A.", "Hotel Transilvânia", "A Noiva Cadáver"],
    10: ["Coraline", "Os Fantasmas de Scrooge", "Os Caça-Fantasmas"],
    12: ["It: A Coisa", "O Chamado", "Atividade Paranormal"],
    14: ["Invocação do Mal", "Corra!", "A Bruxa"],
    16: ["O Iluminado", "O Exorcista", "Hereditário"],
    18: ["Psicose", "O Silêncio dos Inocentes", "Invocação do Mal 2"],
    "18+": ["O Bebê de Rosemary", "O Albergue", "Inferno"]
  },
  animacao: {
    livre: ["Frozen", "Moana", "Os Pinguins de Madagascar"],
    10: ["A Bela e a Fera", "Tangled", "Encanto"],
    12: ["Your Name", "O Castelo Animado", "Kubo e as Cordas Mágicas"],
    14: ["Persépolis", "Akira", "Heavy Metal"],
    16: ["Túmulo dos Vagalumes", "O Estranho Mundo de Jack", "Sausage Party"],
    18: ["Waltz with Bashir", "Loving Vincent", "Anomalisa"],
    "18+": ["Fritz the Cat", "Heavy Traffic", "Cool World"]
  },
  romance: {
    livre: ["A Princesa e o Sapo", "Encanto", "Frozen"],
    10: ["A Bela e a Fera", "Tangled", "High School Musical"],
    12: ["Para Todos os Garotos que Já Amei", "A Barraca do Beijo", "10 Coisas que Eu Odeio em Você"],
    14: ["Diário de uma Paixão", "Simplesmente Acontece", "A Cinco Passos de Você"],
    16: ["Titanic", "Orgulho e Preconceito", "Brokeback Mountain"],
    18: ["Blue Valentine", "Ela", "Amor à Flor da Pele"],
    "18+": ["Nove Semanas e Meia", "Secretary", "Eyes Wide Shut"]
  },
  fantasia: {
    livre: ["Harry Potter e a Pedra Filosofal", "A Fantástica Fábrica de Chocolate", "O Pequeno Príncipe"],
    10: ["Percy Jackson", "Jumanji: Bem-Vindo à Selva", "O Labirinto do Fauno"],
    12: ["Jogos Vorazes", "Divergente", "Cidade dos Ossos"],
    14: ["O Senhor dos Anéis", "Game of Thrones", "O Hobbit"],
    16: ["Conan, o Bárbaro", "Willow", "Stardust"],
    18: ["Pan's Labyrinth", "Legend", "The Dark Crystal"],
    "18+": ["Solomon Kane", "Conan, o Destruidor", "Red Sonja"]
  }
};

let selectGenero;
let selectIdade;
let botaoRecomendar;
let resultadoRecomendacao;

function setup() {
  createCanvas(600, 400);
  
  // Fundo gradiente
  setGradient(0, 0, width, height, color(40, 40, 90), color(20, 20, 50));
  
  // Título
  fill(255);
  textSize(20);
  text('RECOMENDADOR DE FILMES AVANÇADO', 50, 40);
  
  // Dropdown de gêneros
  textSize(14);
  text('Selecione um gênero:', 50, 80);
  selectGenero = createSelect();
  selectGenero.position(50, 100);
  selectGenero.size(250);
  
  // Adicionando todos os gêneros
  let generos = Object.keys(filmesPorGeneroEIdade);
  generos.forEach(genero => {
    // Capitaliza a primeira letra
    let generoFormatado = genero.charAt(0).toUpperCase() + genero.slice(1);
    selectGenero.option(generoFormatado);
  });
  
  // Dropdown de classificação etária
  text('Selecione a classificação:', 50, 150);
  selectIdade = createSelect();
  selectIdade.position(50, 170);
  selectIdade.size(250);
  selectIdade.option('Livre');
  selectIdade.option('10 anos');
  selectIdade.option('12 anos');
  selectIdade.option('14 anos');
  selectIdade.option('16 anos');
  selectIdade.option('18 anos');
  selectIdade.option('18+');
  
  // Botão de recomendação
  botaoRecomendar = createButton('RECOMENDAR FILME');
  botaoRecomendar.position(50, 220);
  botaoRecomendar.size(250);
  botaoRecomendar.style('background-color', '#ff6600');
  botaoRecomendar.style('color', 'white');
  botaoRecomendar.mousePressed(recomendarFilme);
  
  // Área de resultado
  resultadoRecomendacao = createDiv('');
  resultadoRecomendacao.position(50, 270);
  resultadoRecomendacao.size(500, 100);
  resultadoRecomendacao.style('color', '#ffffff');
  resultadoRecomendacao.style('font-family', 'Arial');
  resultadoRecomendacao.style('font-size', '18px');
  resultadoRecomendacao.style('background-color', 'rgba(0,0,0,0.3)');
  resultadoRecomendacao.style('padding', '15px');
  resultadoRecomendacao.style('border-radius', '8px');
}

function recomendarFilme() {
  const generoSelecionado = selectGenero.value().toLowerCase();
  const idadeSelecionada = selectIdade.value().split(' ')[0].toLowerCase(); // Pega o número ou "livre"
  
  // Validações
  if (!generoSelecionado) {
    resultadoRecomendacao.html('Por favor, selecione um gênero válido.');
    return;
  }
  
  if (!idadeSelecionada) {
    resultadoRecomendacao.html('Por favor, selecione uma classificação etária.');
    return;
  }
  
  // Ajusta a chave para o formato do objeto
  let chaveIdade = idadeSelecionada;
  if (idadeSelecionada === 'livre') {
    chaveIdade = 'livre';
  } else if (idadeSelecionada === '18+') {
    chaveIdade = '18+';
  } else {
    chaveIdade = idadeSelecionada; // já está no formato correto (10, 12, etc)
  }
  
  // Obtém os filmes para a classificação selecionada
  const filmes = filmesPorGeneroEIdade[generoSelecionado]?.[chaveIdade];
  
  if (!filmes || filmes.length === 0) {
    resultadoRecomendacao.html('Nenhum filme encontrado para esta combinação.');
    return;
  }
  
  // Seleciona um filme aleatório
  const filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)];
  
  // Exibe o resultado
  resultadoRecomendacao.html(`
    <div style="font-weight:bold; color:#ffcc00">
      Recomendação para ${selectGenero.value()} (${selectIdade.value()}):
    </div>
    <div style="font-size:22px; margin-top:10px;">
      🎬 ${filmeAleatorio}
    </div>
  `);
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function draw() {
  // Atualiza o fundo
  setGradient(0, 0, width, height, color(40, 40, 90), color(20, 20, 50));
  
  // Desenha estrelas no fundo
  drawStars();
}

function drawStars() {
  fill(255, 255, 255, random(100, 200));
  noStroke();
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);
    ellipse(x, y, size, size);
  }
}