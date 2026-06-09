// ============================================================
// Da Vinci Aesthetic - conteúdo central da marca
// Fonte: Brand Manual Vol.01 + Planejamento Estratégico DG
// ============================================================

// ⚠️ Substituir pelo WhatsApp oficial da clínica antes de publicar.
// (o número do planejamento é da coordenação DG, não da Da Vinci)
export const WHATSAPP_NUMBER = "5511000000000";
export const WHATSAPP_MSG =
  "Olá! Gostaria de agendar minha avaliação facial na Da Vinci Aesthetic.";
export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MSG
)}`;

export const INSTAGRAM = "https://instagram.com/davinci.aesthetic";
export const INSTAGRAM_HANDLE = "@davinci.aesthetic";

export const NAV = [
  { label: "A Clínica", href: "#atelier" },
  { label: "Tratamentos", href: "#protocolos" },
  { label: "Resultados", href: "#galeria" },
  { label: "Dra. Ana", href: "#ana" },
  { label: "Onde estamos", href: "#pracas" },
];

export const PILARES = [
  {
    n: "i",
    title: "Autoridade",
    body: "Ciência, técnica, estudo e protocolo. Cada milímetro do rosto é lido antes de ser tocado.",
  },
  {
    n: "ii",
    title: "Segurança",
    body: "Biomédica registrada, produto certificado, transparência total. Sem o medo do artificial.",
  },
  {
    n: "iii",
    title: "Resultado",
    body: "Antes e depois real, naturalidade e longevidade. O conjunto do rosto, nunca a parte isolada.",
  },
  {
    n: "iv",
    title: "Personalidade",
    body: "Tratamento exclusivo. Leitura individual de cada rosto, com a assinatura da Dra. Ana.",
  },
];

export const PROTOCOLOS = [
  {
    icon: "icone-01-harmonizacao-facial",
    title: "Harmonização Facial",
    desc: "Leitura de conjunto. Recuperar o contorno e a proporção do rosto, sem parecer feita.",
  },
  {
    icon: "icone-02-toxina-botulinica",
    title: "Toxina Botulínica",
    desc: "A toxina certa, na dose certa, no ponto certo. Suaviza marcas de expressão preservando o movimento.",
  },
  {
    icon: "icone-03-preenchimento",
    title: "Preenchimento",
    desc: "Ácido hialurônico para devolver sustentação, volume e definição onde o tempo levou.",
  },
  {
    icon: "icone-04-skinboosters",
    title: "Skinboosters · Bioestimuladores",
    desc: "Qualidade de pele de dentro para fora. Firmeza, viço e colágeno estimulado.",
  },
  {
    icon: "icone-05-laser",
    title: "Laser & Tecnologias",
    desc: "Tratamento de textura, manchas e renovação cutânea com protocolos de alta precisão.",
  },
  {
    icon: "icone-06-emagrecimento",
    title: "Emagrecimento · Definição",
    desc: "Protocolos corporais para contorno e definição, integrados ao seu objetivo de conjunto.",
  },
  {
    icon: "icone-07-tratamentos-intimos",
    title: "Harmonização Íntima",
    desc: "Procedimentos avançados conduzidos com discrição, técnica e acolhimento.",
  },
  {
    icon: "icone-08-protocolo-assinado",
    title: "Protocolo Assinado",
    desc: "Seu plano completo, customizado e assinado pela Dra. Ana. O resultado não é terceirizado.",
  },
];

export const DEPOIMENTOS = [
  {
    quote:
      "Eu queria me reconhecer no espelho de novo, e foi exatamente o que aconteceu. Natural, sem exagero.",
    author: "Paciente · Harmonização Facial",
    local: "Vila Mariana",
  },
  {
    quote:
      "A avaliação facial mudou tudo. Entendi o porquê de cada ponto antes de qualquer aplicação.",
    author: "Paciente · Avaliação + Preenchimento",
    local: "Conceição",
  },
  {
    quote:
      "Profissionalismo do início ao fim. Segurança é a palavra. Voltei e indiquei.",
    author: "Paciente · Protocolo Assinado",
    local: "São Judas",
  },
];

export const PRACAS = [
  {
    nome: "Conceição",
    sub: "São Judas · Itaú",
    body: "Bairro residencial, vínculo de proximidade e recorrência. Acolhimento de quem mora e trabalha por perto.",
  },
  {
    nome: "Santa Cruz",
    sub: "Vila Mariana · Polo Hospitalar",
    body: "Região de fluxo intenso e alcance amplo, no coração do polo hospitalar de São Paulo.",
  },
];

export const FRASES = [
  "Realce a sua beleza natural.",
  "Harmonização facial com leitura de conjunto.",
  "Resultado natural não é sorte. É protocolo.",
  "A proporção áurea aplicada ao seu rosto.",
  "Antes do procedimento, vem o estudo.",
];
