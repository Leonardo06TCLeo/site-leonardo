console.log("Portfólio carregado com sucesso!");

// =============================
// ELEMENTOS PRINCIPAIS
// =============================

const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");

const cardsProjetos = document.querySelectorAll(".projeto-card");

const modal = document.getElementById("modal-projeto");
const fecharModal = document.getElementById("fechar-modal");

const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalObjetivo = document.getElementById("modal-objetivo");
const modalFuncionalidades = document.getElementById("modal-funcionalidades");
const modalTecnologias = document.getElementById("modal-tecnologias");
const modalGithub = document.getElementById("modal-github");

let idiomaAtual = localStorage.getItem("idioma") || "pt";
let projetoAtualAberto = null;

// =============================
// TRADUÇÕES DO SITE
// =============================

const traducoes = {
  pt: {
    navInicio: "Início",
    navSobre: "Sobre",
    navProjetos: "Projetos",
    navContato: "Contato",

    heroTitulo: "Engenharia de Computação | Software | IA | Sistemas Embarcados",
    heroTexto:
      "Sou estudante de Engenharia de Computação e desenvolvo projetos envolvendo programação, sistemas embarcados, automação, desenvolvimento web, back-end, APIs e inteligência artificial aplicada.",
    heroBotao: "Ver projetos",
    curriculoBotao: "Baixar currículo",

    sobreTitulo: "Sobre mim",
    sobreTexto1:
      "Sou estudante de Engenharia da Computação na UNAERP, com interesse em desenvolvimento de software, back-end, full stack, ciência de dados, inteligência artificial aplicada e pesquisa científica.",
    sobreTexto2:
      "Tenho conhecimentos em Java, Python, SQL, JavaScript, Node.js, Express, HTML, CSS, Google Apps Script e integração com Google Sheets. Atualmente, venho desenvolvendo projetos práticos para fortalecer minha base em lógica de programação, APIs REST, sistemas CRUD, manipulação e validação de dados, interfaces web, regras de negócio e soluções aplicadas.",
    sobreTexto3:
      "Meu objetivo é construir uma formação sólida em tecnologia, unindo programação, engenharia, dados e inteligência artificial para desenvolver aplicações úteis, escaláveis e bem estruturadas. No momento, estou organizando meu portfólio no GitHub com projetos web, APIs, automações e projetos acadêmicos, além de iniciar uma trilha de estudos voltada à pesquisa aplicada, análise de dados e machine learning.",

    projetosTitulo: "Principais projetos",
    tecnologiasLabel: "Tecnologias:",
    verDetalhes: "Ver detalhes",

    cardArduinoTitulo: "Mini Console Arduino",
    cardArduinoDescricao:
      "Projeto com Arduino Uno, display OLED, botões físicos e jogos como Pong e Space Invaders.",

    cardEstoqueTitulo: "Sistema de Controle de Estoque",
    cardEstoqueDescricao:
      "Sistema em Java para cadastrar produtos, controlar quantidade, preço e exibir informações do estoque.",

    cardCasasTitulo: "Site de Simulação de Casas",
    cardCasasDescricao:
      "Aplicação web para simular valores, retorno de investimento e amortização de imóveis.",

    cardCotacaoTitulo: "Cotação de Moedas Full-Stack",
    cardCotacaoDescricao:
      "Sistema full-stack para consulta de cotações de moedas, com integração entre backend, frontend e API externa.",

    cardCrmTitulo: "Sistema CRM Full Stack",
    cardCrmDescricao:
      "Sistema CRM full stack com autenticação de usuários, dashboard e CRUD completo para gerenciamento de clientes.",

    cardLoginTitulo: "Sistema de Login e Cadastro",
    cardLoginDescricao:
      "Sistema de autenticação com cadastro de usuários, login, senha criptografada, JWT e dashboard protegido.",

    cardCrudTitulo: "Sistema CRUD de Usuários",
    cardCrudDescricao:
      "Sistema full stack para cadastrar, listar, editar e excluir usuários, com integração entre frontend, backend e banco de dados.",

    cardCaixaTitulo: "Simulador de Caixa Eletrônico em C",
    cardCaixaDescricao:
      "Simulador de caixa eletrônico desenvolvido em C, com login, saldo, depósito, saque, transferência, extrato e validações.",

    contatoTitulo: "Contato",
    githubTexto: "GitHub:",
    linkedinTexto: "LinkedIn:",
    emailTexto: "Email:",

    modalObjetivoTitulo: "Objetivo do projeto",
    modalFuncionalidadesTitulo: "Funcionalidades",
    modalTecnologiasTitulo: "Tecnologias utilizadas",
    modalGithub: "Ver no GitHub",

    temaClaro: "Tema claro",
    temaEscuro: "Tema escuro",

    footerTexto: "© 2026 Leonardo Taleb. Todos os direitos reservados."
  },

  en: {
    navInicio: "Home",
    navSobre: "About",
    navProjetos: "Projects",
    navContato: "Contact",

    heroTitulo: "Computer Engineering | Software | AI | Embedded Systems",
    heroTexto:
      "I am a Computer Engineering student developing projects involving programming, embedded systems, automation, web development, back-end, APIs, and applied artificial intelligence.",
    heroBotao: "View projects",
    curriculoBotao: "Download resume",

    sobreTitulo: "About me",
    sobreTexto1:
      "I am a Computer Engineering student at UNAERP, interested in software development, back-end, full stack development, data science, applied artificial intelligence, and scientific research.",
    sobreTexto2:
      "I have knowledge in Java, Python, SQL, JavaScript, Node.js, Express, HTML, CSS, Google Apps Script, and integration with Google Sheets. I have been developing practical projects to strengthen my foundation in programming logic, REST APIs, CRUD systems, data manipulation and validation, web interfaces, business rules, and applied solutions.",
    sobreTexto3:
      "My goal is to build a solid background in technology, combining programming, engineering, data, and artificial intelligence to develop useful, scalable, and well-structured applications. I am currently organizing my GitHub portfolio with web projects, APIs, automations, and academic projects, while also starting a study path focused on applied research, data analysis, and machine learning.",

    projetosTitulo: "Main projects",
    tecnologiasLabel: "Technologies:",
    verDetalhes: "View details",

    cardArduinoTitulo: "Arduino Mini Console",
    cardArduinoDescricao:
      "Project with Arduino Uno, OLED display, physical buttons, and games such as Pong and Space Invaders.",

    cardEstoqueTitulo: "Inventory Management System",
    cardEstoqueDescricao:
      "Java system to register products, control quantity and price, and display inventory information.",

    cardCasasTitulo: "House Simulation Website",
    cardCasasDescricao:
      "Web application to simulate values, return on investment, and property amortization.",

    cardCotacaoTitulo: "Full-Stack Currency Exchange App",
    cardCotacaoDescricao:
      "Full-stack system for checking currency exchange rates, integrating backend, frontend, and an external API.",

    cardCrmTitulo: "Full Stack CRM System",
    cardCrmDescricao:
      "Full stack CRM system with user authentication, dashboard, and complete CRUD for customer management.",

    cardLoginTitulo: "Login and Registration System",
    cardLoginDescricao:
      "Authentication system with user registration, login, encrypted password, JWT, and protected dashboard.",

    cardCrudTitulo: "User CRUD System",
    cardCrudDescricao:
      "Full stack system to create, list, edit, and delete users, integrating frontend, backend, and database.",

    cardCaixaTitulo: "ATM Simulator in C",
    cardCaixaDescricao:
      "ATM simulator developed in C, with login, balance inquiry, deposit, withdrawal, transfer, statement, and validations.",

    contatoTitulo: "Contact",
    githubTexto: "GitHub:",
    linkedinTexto: "LinkedIn:",
    emailTexto: "Email:",

    modalObjetivoTitulo: "Project objective",
    modalFuncionalidadesTitulo: "Features",
    modalTecnologiasTitulo: "Technologies used",
    modalGithub: "View on GitHub",

    temaClaro: "Light theme",
    temaEscuro: "Dark theme",

    footerTexto: "© 2026 Leonardo Taleb. All rights reserved."
  }
};

// =============================
// DADOS DOS PROJETOS
// =============================

const projetos = {
  arduino: {
    github: "https://github.com/Leonardo06TCLeo/arduino-mini-game-console/tree/main",

    pt: {
      titulo: "Mini Console Arduino",
      descricao:
        "Projeto acadêmico desenvolvido com Arduino Uno, display OLED e botões físicos, criando uma experiência simples de videogame portátil com jogos clássicos.",
      objetivo:
        "Aplicar conceitos de programação, lógica, eletrônica básica, controle de entrada por botões, manipulação de display OLED e desenvolvimento de sistemas embarcados.",
      funcionalidades: [
        "Menu inicial para seleção dos jogos",
        "Jogo Pong com movimentação por botões",
        "Jogo Space Invaders com fases e sistema de vidas",
        "Uso de display OLED 0,96” com comunicação I2C",
        "Alimentação por powerbank",
        "Integração entre hardware e software"
      ],
      tecnologias:
        "Arduino Uno, C/C++, OLED I2C, Adafruit SSD1306, Adafruit GFX e eletrônica básica"
    },

    en: {
      titulo: "Arduino Mini Console",
      descricao:
        "Academic project developed with Arduino Uno, OLED display, and physical buttons, creating a simple portable videogame experience with classic games.",
      objetivo:
        "Apply programming, logic, basic electronics, button input control, OLED display handling, and embedded systems concepts.",
      funcionalidades: [
        "Initial menu for game selection",
        "Pong game controlled by buttons",
        "Space Invaders game with levels and lives",
        "Use of 0.96-inch OLED display with I2C communication",
        "Powerbank-based power supply",
        "Integration between hardware and software"
      ],
      tecnologias:
        "Arduino Uno, C/C++, OLED I2C, Adafruit SSD1306, Adafruit GFX, and basic electronics"
    }
  },

  estoque: {
    github: "https://github.com/Leonardo06TCLeo/stock-control",

    pt: {
      titulo: "Sistema de Controle de Estoque",
      descricao:
        "Sistema desenvolvido em Java para cadastrar, listar e controlar produtos em estoque, utilizando conceitos fundamentais de programação orientada a objetos.",
      objetivo:
        "Fortalecer a base em Java, estruturas de dados, classes, objetos, métodos, entrada de dados e organização de sistemas simples com regras de negócio.",
      funcionalidades: [
        "Cadastro de produtos",
        "Listagem de produtos cadastrados",
        "Controle de preço e quantidade",
        "Uso de ArrayList para armazenar os dados",
        "Entrada de dados com Scanner",
        "Organização do código com classe Produto"
      ],
      tecnologias:
        "Java, ArrayList, Scanner e Programação Orientada a Objetos"
    },

    en: {
      titulo: "Inventory Management System",
      descricao:
        "Java system developed to register, list, and manage products in inventory using fundamental object-oriented programming concepts.",
      objetivo:
        "Strengthen Java fundamentals, data structures, classes, objects, methods, user input, and the organization of simple systems with business rules.",
      funcionalidades: [
        "Product registration",
        "Listing registered products",
        "Price and quantity control",
        "Use of ArrayList to store data",
        "User input with Scanner",
        "Code organization using a Product class"
      ],
      tecnologias:
        "Java, ArrayList, Scanner, and Object-Oriented Programming"
    }
  },

  casas: {
    github: "https://github.com/Leonardo06TCLeo/custos-app-web",

    pt: {
      titulo: "Site de Simulação de Casas",
      descricao:
        "Aplicação web criada para simular valores relacionados a imóveis, retorno de investimento, amortização e organização de dados em planilhas.",
      objetivo:
        "Desenvolver uma aplicação prática envolvendo interface web, lógica de cálculo, integração com Google Sheets e automação com Google Apps Script.",
      funcionalidades: [
        "Interface web para simulação de valores",
        "Cálculo de retorno de investimento",
        "Simulação de amortização",
        "Integração com Google Sheets",
        "Área administrativa",
        "Controle e organização de dados"
      ],
      tecnologias:
        "HTML, CSS, JavaScript, Google Apps Script e Google Sheets"
    },

    en: {
      titulo: "House Simulation Website",
      descricao:
        "Web application created to simulate property-related values, return on investment, amortization, and spreadsheet data organization.",
      objetivo:
        "Develop a practical application involving web interface, calculation logic, Google Sheets integration, and automation with Google Apps Script.",
      funcionalidades: [
        "Web interface for value simulation",
        "Return on investment calculation",
        "Amortization simulation",
        "Google Sheets integration",
        "Administrative area",
        "Data control and organization"
      ],
      tecnologias:
        "HTML, CSS, JavaScript, Google Apps Script, and Google Sheets"
    }
  },

  cotacao: {
    github: "https://github.com/Leonardo06TCLeo/api-cotacao-moedas",

    pt: {
      titulo: "Cotação de Moedas Full-Stack",
      descricao:
        "Projeto full-stack desenvolvido para consultar cotações de moedas por meio da integração com uma API externa.",
      objetivo:
        "Praticar o desenvolvimento de uma aplicação full-stack, integrando backend, frontend e API externa, com foco em consumo de APIs, criação de rotas e manipulação de dados com JavaScript.",
      funcionalidades: [
        "Consulta de cotações de moedas usando API externa",
        "Backend criado com Node.js e Express",
        "Consumo de API pública utilizando Axios",
        "Configuração de CORS",
        "Criação de rotas para fornecer dados ao frontend",
        "Exibição dinâmica dos dados na interface",
        "Separação entre camada de servidor e camada visual"
      ],
      tecnologias:
        "Node.js, Express, Axios, CORS, HTML, CSS e JavaScript"
    },

    en: {
      titulo: "Full-Stack Currency Exchange App",
      descricao:
        "Full-stack project developed to check currency exchange rates through integration with an external API.",
      objetivo:
        "Practice full-stack development by integrating backend, frontend, and an external API, focusing on API consumption, route creation, and data manipulation with JavaScript.",
      funcionalidades: [
        "Currency exchange rate lookup using an external API",
        "Backend built with Node.js and Express",
        "Public API consumption using Axios",
        "CORS configuration",
        "Routes created to provide data to the frontend",
        "Dynamic data display in the interface",
        "Separation between server layer and visual layer"
      ],
      tecnologias:
        "Node.js, Express, Axios, CORS, HTML, CSS, and JavaScript"
    }
  },

  crm: {
    github: "https://github.com/Leonardo06TCLeo/fullstack-crm-system",

    pt: {
      titulo: "Sistema CRM Full Stack",
      descricao:
        "Projeto full stack desenvolvido para gerenciamento de clientes, utilizando React no frontend, Node.js e Express no backend, e MySQL como banco de dados.",
      objetivo:
        "Praticar conceitos importantes de desenvolvimento full stack, incluindo integração entre frontend e backend, conexão com banco de dados, criação de rotas de API, autenticação com JWT e interface responsiva.",
      funcionalidades: [
        "Autenticação de usuários com JWT",
        "Criptografia de senhas com Bcrypt",
        "Rotas protegidas no backend",
        "Dashboard para visualização do sistema",
        "CRUD completo para gerenciamento de clientes",
        "Cadastro, listagem, edição e exclusão de clientes",
        "Integração entre React e API backend com Axios",
        "Conexão com banco de dados MySQL",
        "Interface responsiva"
      ],
      tecnologias:
        "React, Vite, Node.js, Express, MySQL, JWT, Bcrypt, Axios e CSS"
    },

    en: {
      titulo: "Full Stack CRM System",
      descricao:
        "Full stack project developed for customer management, using React on the frontend, Node.js and Express on the backend, and MySQL as the database.",
      objetivo:
        "Practice important full stack development concepts, including frontend/backend integration, database connection, API route creation, JWT authentication, and responsive interface development.",
      funcionalidades: [
        "User authentication with JWT",
        "Password encryption with Bcrypt",
        "Protected backend routes",
        "System dashboard",
        "Complete CRUD for customer management",
        "Customer creation, listing, editing, and deletion",
        "Integration between React and backend API using Axios",
        "MySQL database connection",
        "Responsive interface"
      ],
      tecnologias:
        "React, Vite, Node.js, Express, MySQL, JWT, Bcrypt, Axios, and CSS"
    }
  },

  login: {
    github: "https://github.com/Leonardo06TCLeo/Simple-Login-System",

    pt: {
      titulo: "Sistema de Login e Cadastro",
      descricao:
        "Projeto desenvolvido para praticar o fluxo básico de autenticação em uma aplicação web.",
      objetivo:
        "Praticar autenticação de usuários, integração entre frontend e backend, uso de banco de dados SQLite, criação de rotas com Express, criptografia de senhas e proteção de páginas utilizando JWT.",
      funcionalidades: [
        "Cadastro de usuários",
        "Login com e-mail e senha",
        "Criptografia de senha",
        "Autenticação com JWT",
        "Página de dashboard protegida",
        "Integração entre frontend e backend",
        "Conexão com banco de dados SQLite",
        "Criação de rotas no backend com Express"
      ],
      tecnologias:
        "Node.js, Express, SQLite, JWT, HTML, CSS e JavaScript"
    },

    en: {
      titulo: "Login and Registration System",
      descricao:
        "Project developed to practice the basic authentication flow in a web application.",
      objetivo:
        "Practice user authentication, frontend/backend integration, SQLite database usage, route creation with Express, password encryption, and page protection using JWT.",
      funcionalidades: [
        "User registration",
        "Login with email and password",
        "Password encryption",
        "JWT authentication",
        "Protected dashboard page",
        "Frontend/backend integration",
        "SQLite database connection",
        "Backend route creation with Express"
      ],
      tecnologias:
        "Node.js, Express, SQLite, JWT, HTML, CSS, and JavaScript"
    }
  },

  crudUsuarios: {
    github: "https://github.com/Leonardo06TCLeo/crud-usuarios-node-sqlite",

    pt: {
      titulo: "Sistema CRUD de Usuários",
      descricao:
        "Projeto full stack desenvolvido para praticar o gerenciamento de usuários em uma aplicação web.",
      objetivo:
        "Reforçar conceitos fundamentais de desenvolvimento full stack, incluindo criação de API REST, organização de rotas no backend, manipulação de dados, integração com banco de dados SQLite e consumo da API pelo frontend.",
      funcionalidades: [
        "Cadastro de usuários",
        "Listagem de usuários cadastrados",
        "Edição de dados dos usuários",
        "Exclusão de usuários",
        "Criação de API REST com Node.js e Express",
        "Integração entre frontend e backend",
        "Conexão com banco de dados SQLite",
        "Manipulação de dados com JavaScript",
        "Consumo da API pelo frontend"
      ],
      tecnologias:
        "HTML, CSS, JavaScript, Node.js, Express e SQLite"
    },

    en: {
      titulo: "User CRUD System",
      descricao:
        "Full stack project developed to practice user management in a web application.",
      objetivo:
        "Reinforce fundamental full stack development concepts, including REST API creation, backend route organization, data manipulation, SQLite database integration, and API consumption by the frontend.",
      funcionalidades: [
        "User registration",
        "Listing registered users",
        "Editing user data",
        "Deleting users",
        "REST API creation with Node.js and Express",
        "Frontend/backend integration",
        "SQLite database connection",
        "Data manipulation with JavaScript",
        "API consumption by the frontend"
      ],
      tecnologias:
        "HTML, CSS, JavaScript, Node.js, Express, and SQLite"
    }
  },

  caixaEletronico: {
    github: "https://github.com/Leonardo06TCLeo/simulador-caixa-eletronico",

    pt: {
      titulo: "Simulador de Caixa Eletrônico em C",
      descricao:
        "Projeto desenvolvido em linguagem C para simular operações básicas de um caixa eletrônico.",
      objetivo:
        "Praticar fundamentos importantes da programação, como estruturas condicionais, laços de repetição, validação de dados, manipulação de variáveis, menu interativo e organização lógica do código.",
      funcionalidades: [
        "Login com senha",
        "Limite de tentativas de acesso",
        "Consulta de saldo",
        "Depósito em conta",
        "Saque com validação de saldo",
        "Validação de limite diário para saque",
        "Simulação de notas disponíveis",
        "Transferência entre contas",
        "Registro de extrato",
        "Menu interativo no terminal"
      ],
      tecnologias:
        "Linguagem C, estruturas condicionais, laços de repetição, variáveis, validação de dados e lógica de programação"
    },

    en: {
      titulo: "ATM Simulator in C",
      descricao:
        "Project developed in C to simulate basic ATM operations.",
      objetivo:
        "Practice important programming fundamentals, such as conditional structures, loops, data validation, variable manipulation, interactive menu, and logical code organization.",
      funcionalidades: [
        "Password login",
        "Access attempt limit",
        "Balance inquiry",
        "Account deposit",
        "Withdrawal with balance validation",
        "Daily withdrawal limit validation",
        "Simulation of available banknotes",
        "Transfer between accounts",
        "Statement record",
        "Interactive terminal menu"
      ],
      tecnologias:
        "C language, conditional structures, loops, variables, data validation, and programming logic"
    }
  }
};

// =============================
// SISTEMA DE IDIOMA
// =============================

function aplicarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-i18n]");

  elementos.forEach(function (elemento) {
    const chave = elemento.getAttribute("data-i18n");

    if (traducoes[idioma] && traducoes[idioma][chave]) {
      elemento.textContent = traducoes[idioma][chave];
    }
  });

  document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";

  if (languageToggle) {
    languageToggle.textContent = idioma === "pt" ? "EN" : "BR";
  }

  atualizarTextoBotaoTema();

  localStorage.setItem("idioma", idioma);

  if (modal && modal.classList.contains("ativo") && projetoAtualAberto) {
    abrirModal(projetoAtualAberto);
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", function () {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";
    aplicarIdioma(idiomaAtual);
  });
}

// =============================
// TEMA CLARO / ESCURO
// =============================

function atualizarTextoBotaoTema() {
  if (!themeToggle) {
    return;
  }

  const temaClaroAtivo = body.classList.contains("light-theme");

  if (temaClaroAtivo) {
    themeToggle.textContent = traducoes[idiomaAtual].temaEscuro;
  } else {
    themeToggle.textContent = traducoes[idiomaAtual].temaClaro;
  }
}

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
  body.classList.add("light-theme");
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("light-theme");

    const temaClaroAtivo = body.classList.contains("light-theme");

    if (temaClaroAtivo) {
      localStorage.setItem("tema", "claro");
    } else {
      localStorage.setItem("tema", "escuro");
    }

    atualizarTextoBotaoTema();
  });
}

// =============================
// MODAL DE PROJETOS
// =============================

function abrirModal(chaveProjeto) {
  const projeto = projetos[chaveProjeto];

  if (!projeto) {
    console.error("Projeto não encontrado:", chaveProjeto);
    return;
  }

  const dados = projeto[idiomaAtual] || projeto.pt;

  modalTitulo.textContent = dados.titulo;
  modalDescricao.textContent = dados.descricao;
  modalObjetivo.textContent = dados.objetivo;
  modalTecnologias.textContent = dados.tecnologias;
  modalGithub.href = projeto.github;

  modalFuncionalidades.innerHTML = "";

  dados.funcionalidades.forEach(function (funcionalidade) {
    const item = document.createElement("li");
    item.textContent = funcionalidade;
    modalFuncionalidades.appendChild(item);
  });

  projetoAtualAberto = chaveProjeto;
  modal.classList.add("ativo");
}

function fecharModalProjeto() {
  if (modal) {
    modal.classList.remove("ativo");
  }

  projetoAtualAberto = null;
}

cardsProjetos.forEach(function (card) {
  card.addEventListener("click", function () {
    const projetoSelecionado = card.getAttribute("data-projeto");
    abrirModal(projetoSelecionado);
  });
});

if (fecharModal) {
  fecharModal.addEventListener("click", fecharModalProjeto);
}

if (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      fecharModalProjeto();
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal && modal.classList.contains("ativo")) {
    fecharModalProjeto();
  }
});

// =============================
// INICIALIZAÇÃO
// =============================

aplicarIdioma(idiomaAtual);
atualizarTextoBotaoTema();