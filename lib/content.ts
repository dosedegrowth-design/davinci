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
  { label: "A Clínica", href: "/#atelier" },
  { label: "Tratamentos", href: "/#protocolos" },
  { label: "Resultados", href: "/#galeria" },
  { label: "Dra. Ana", href: "/#ana" },
  { label: "Onde estamos", href: "/#pracas" },
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

export type Protocolo = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  seoDesc: string;
  intro: string[];
  beneficios: string[];
  indicacoes: string[];
  etapas: { t: string; d: string }[];
  faq: { q: string; a: string }[];
};

export const PROTOCOLOS: Protocolo[] = [
  {
    slug: "harmonizacao-facial",
    icon: "icone-01-harmonizacao-facial",
    title: "Harmonização Facial",
    tagline: "O rosto lido como conjunto",
    desc: "Leitura de conjunto. Recuperar o contorno e a proporção do rosto, sem parecer feita.",
    seoDesc:
      "Harmonização facial em São Paulo com leitura de conjunto e proporção áurea. Resultado natural conduzido pela Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "Harmonização facial não é somar procedimentos isolados. É entender o rosto como um todo e devolver equilíbrio entre testa, olhos, nariz, lábios, contorno e mento, respeitando a sua identidade.",
      "Tudo começa por uma avaliação facial detalhada, onde estudamos proporções, ângulos e o que o tempo modificou. Só então definimos quais técnicas combinar, na medida certa para você se reconhecer no espelho.",
    ],
    beneficios: [
      "Contorno e definição devolvidos ao rosto",
      "Equilíbrio entre os terços facial superior, médio e inferior",
      "Aparência descansada, nunca artificial",
      "Plano individual, sem pacote pronto",
    ],
    indicacoes: [
      "Perda de contorno e flacidez inicial",
      "Sensação de rosto cansado ou caído",
      "Desproporções que incomodam há tempos",
      "Quem quer começar a se cuidar de forma preventiva",
    ],
    etapas: [
      { t: "Leitura facial", d: "Avaliação completa das proporções e do que pode ser melhorado, com honestidade sobre o que é possível." },
      { t: "Plano de conjunto", d: "Definimos juntas quais técnicas combinar e em qual ordem, sempre dentro do seu objetivo." },
      { t: "Aplicação", d: "Procedimentos conduzidos pela Dra. Ana, com produtos certificados e técnica precisa." },
      { t: "Acompanhamento", d: "Retorno para avaliar resultado, ajustar detalhes e planejar a manutenção." },
    ],
    faq: [
      { q: "Vou ficar com cara de feita?", a: "Não. O objetivo da harmonização de conjunto é exatamente o contrário: realçar a sua beleza natural respeitando os seus traços." },
      { q: "Preciso fazer tudo de uma vez?", a: "Não. O plano é construído por etapas, no seu tempo e dentro do que faz sentido para o seu rosto e o seu momento." },
    ],
  },
  {
    slug: "toxina-botulinica",
    icon: "icone-02-toxina-botulinica",
    title: "Toxina Botulínica",
    tagline: "A dose certa, no ponto certo",
    desc: "A toxina certa, na dose certa, no ponto certo. Suaviza marcas de expressão preservando o movimento.",
    seoDesc:
      "Aplicação de toxina botulínica (botox) em São Paulo para rugas de expressão, com naturalidade e movimento preservado. Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "A toxina botulínica relaxa a musculatura responsável pelas rugas de expressão da testa, entre as sobrancelhas e ao redor dos olhos, suavizando marcas sem congelar o rosto.",
      "O segredo está na dose e nos pontos. Mapeamos a sua expressão antes de aplicar, para um resultado natural que preserva a sua forma de sorrir e demonstrar emoção.",
    ],
    beneficios: [
      "Suaviza rugas de expressão",
      "Previne o aprofundamento de novas marcas",
      "Aparência descansada, com movimento natural",
      "Procedimento rápido e com retorno imediato à rotina",
    ],
    indicacoes: [
      "Linhas na testa e entre as sobrancelhas",
      "Pés de galinha ao redor dos olhos",
      "Prevenção em pele mais jovem",
      "Ajuste fino dentro de uma harmonização",
    ],
    etapas: [
      { t: "Avaliação da expressão", d: "Mapeamos a sua musculatura e a dinâmica do rosto em movimento." },
      { t: "Definição dos pontos", d: "Marcamos os pontos exatos e calculamos a dose para cada região." },
      { t: "Aplicação", d: "Procedimento rápido, com desconforto mínimo e sem afastamento da rotina." },
      { t: "Retorno", d: "Reavaliação após o efeito completo para eventuais ajustes." },
    ],
    faq: [
      { q: "Quanto tempo dura?", a: "Em média de três a quatro meses, variando conforme o metabolismo e a região tratada." },
      { q: "Fico com o rosto paralisado?", a: "Não quando bem aplicada. O objetivo é suavizar a marca preservando a naturalidade da sua expressão." },
    ],
  },
  {
    slug: "preenchimento",
    icon: "icone-03-preenchimento",
    title: "Preenchimento",
    tagline: "Volume e sustentação onde o tempo levou",
    desc: "Ácido hialurônico para devolver sustentação, volume e definição onde o tempo levou.",
    seoDesc:
      "Preenchimento facial com ácido hialurônico em São Paulo: lábios, olheiras, contorno e sulcos, com resultado natural. Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "Com o tempo, o rosto perde volume e sustentação em pontos estratégicos. O preenchimento com ácido hialurônico devolve estrutura, suaviza sulcos e redefine contornos de forma natural.",
      "Cada região pede um produto e uma técnica específicos. A indicação vem sempre da leitura de conjunto, para que o preenchimento equilibre o rosto em vez de chamar atenção sozinho.",
    ],
    beneficios: [
      "Devolve volume e sustentação ao rosto",
      "Suaviza olheiras, sulcos e bigode chinês",
      "Define contorno facial e lábios com naturalidade",
      "Resultado imediato e ajustável",
    ],
    indicacoes: [
      "Olheiras fundas e perda de volume",
      "Sulcos nasolabiais marcados",
      "Lábios sem definição ou volume",
      "Contorno mandibular e mento",
    ],
    etapas: [
      { t: "Leitura facial", d: "Identificamos onde o volume foi perdido e o que equilibra o conjunto." },
      { t: "Escolha do produto", d: "Selecionamos o ácido hialurônico ideal para cada região e objetivo." },
      { t: "Aplicação", d: "Técnica precisa, com conforto e resultado visível na hora." },
      { t: "Acompanhamento", d: "Retorno para avaliar e refinar, se necessário." },
    ],
    faq: [
      { q: "O preenchimento é reversível?", a: "O ácido hialurônico pode ser ajustado e, quando necessário, dissolvido. Por isso priorizamos sempre a segurança." },
      { q: "Incha muito?", a: "Pode haver inchaço leve nos primeiros dias, que reduz naturalmente. Orientamos todo o pós-procedimento." },
    ],
  },
  {
    slug: "skinboosters-bioestimuladores",
    icon: "icone-04-skinboosters",
    title: "Skinboosters & Bioestimuladores",
    tagline: "Qualidade de pele de dentro para fora",
    desc: "Qualidade de pele de dentro para fora. Firmeza, viço e colágeno estimulado.",
    seoDesc:
      "Skinboosters e bioestimuladores de colágeno em São Paulo para firmeza, viço e qualidade de pele. Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "Nem todo resultado vem de volume. Skinboosters e bioestimuladores trabalham a qualidade da pele por dentro, hidratando profundamente e estimulando a produção natural de colágeno.",
      "É o tratamento ideal para quem busca firmeza, viço e textura, com uma evolução gradual e muito natural ao longo das semanas.",
    ],
    beneficios: [
      "Estimula colágeno e melhora a firmeza",
      "Hidratação profunda e mais viço",
      "Melhora textura e qualidade da pele",
      "Resultado progressivo e natural",
    ],
    indicacoes: [
      "Pele opaca, sem viço",
      "Flacidez inicial de pele",
      "Linhas finas e perda de elasticidade",
      "Manutenção e prevenção do envelhecimento",
    ],
    etapas: [
      { t: "Avaliação da pele", d: "Analisamos textura, firmeza e hidratação para indicar o protocolo certo." },
      { t: "Protocolo", d: "Definimos número de sessões e produto, conforme o seu objetivo." },
      { t: "Aplicação", d: "Sessões confortáveis, com retorno rápido à rotina." },
      { t: "Evolução", d: "Acompanhamos a resposta da pele ao longo das semanas." },
    ],
    faq: [
      { q: "Em quanto tempo aparece o resultado?", a: "A pele melhora de forma gradual, com resultado mais visível a partir de algumas semanas após as sessões." },
      { q: "Quantas sessões preciso?", a: "Depende do protocolo indicado na avaliação. Em geral trabalhamos em pequenas séries com manutenção." },
    ],
  },
  {
    slug: "laser-tecnologias",
    icon: "icone-05-laser",
    title: "Laser & Tecnologias",
    tagline: "Textura, manchas e renovação",
    desc: "Tratamento de textura, manchas e renovação cutânea com protocolos de alta precisão.",
    seoDesc:
      "Tratamentos a laser e tecnologias em São Paulo para manchas, textura e renovação da pele. Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "As tecnologias a laser tratam o que o produto sozinho não alcança: manchas, textura irregular, poros e renovação da superfície da pele.",
      "Cada pele responde de um jeito. Por isso o protocolo é definido na avaliação, respeitando o seu fototipo e o seu objetivo, com segurança em primeiro lugar.",
    ],
    beneficios: [
      "Uniformiza o tom e trata manchas",
      "Melhora textura e poros",
      "Estimula renovação e colágeno",
      "Protocolos ajustados ao seu tipo de pele",
    ],
    indicacoes: [
      "Manchas e melasma",
      "Textura irregular e poros dilatados",
      "Marcas e cicatrizes leves",
      "Renovação e viço da pele",
    ],
    etapas: [
      { t: "Avaliação", d: "Definimos o fototipo, o objetivo e o protocolo mais seguro para você." },
      { t: "Preparo", d: "Quando necessário, orientamos um preparo da pele antes das sessões." },
      { t: "Sessões", d: "Aplicação com tecnologia adequada e cuidado em cada etapa." },
      { t: "Pós e manutenção", d: "Orientação completa de cuidados e fotoproteção." },
    ],
    faq: [
      { q: "Posso fazer em qualquer época do ano?", a: "Alguns protocolos pedem menor exposição solar. Orientamos o melhor momento na avaliação." },
      { q: "Dói?", a: "O desconforto é geralmente leve e gerenciável. Conforto e segurança guiam todo o procedimento." },
    ],
  },
  {
    slug: "emagrecimento-definicao",
    icon: "icone-06-emagrecimento",
    title: "Emagrecimento & Definição",
    tagline: "Contorno corporal integrado ao conjunto",
    desc: "Protocolos corporais para contorno e definição, integrados ao seu objetivo de conjunto.",
    seoDesc:
      "Protocolos de emagrecimento e definição corporal em São Paulo, integrados ao seu objetivo. Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "Cuidar do conjunto também é cuidar do corpo. Os protocolos de definição trabalham contorno e qualidade da pele de forma integrada ao seu objetivo.",
      "A indicação é sempre individual e honesta sobre o que cada protocolo entrega, sem promessas mágicas e sempre com acompanhamento.",
    ],
    beneficios: [
      "Apoio ao contorno e definição corporal",
      "Melhora da qualidade da pele",
      "Protocolos combinados conforme o objetivo",
      "Acompanhamento ao longo do processo",
    ],
    indicacoes: [
      "Incômodo com gordura localizada",
      "Flacidez de pele corporal",
      "Busca por definição de contorno",
      "Complemento a hábitos saudáveis",
    ],
    etapas: [
      { t: "Avaliação", d: "Entendemos o objetivo e mapeamos o que é possível com clareza." },
      { t: "Protocolo", d: "Definimos as técnicas e o número de sessões adequados." },
      { t: "Sessões", d: "Acompanhamento de cada etapa do processo." },
      { t: "Manutenção", d: "Orientação para preservar e evoluir o resultado." },
    ],
    faq: [
      { q: "Substitui dieta e exercício?", a: "Não. Os protocolos são um apoio que potencializa resultados, sempre alinhado a hábitos saudáveis." },
      { q: "Em quanto tempo vejo resultado?", a: "Varia conforme o protocolo e o organismo. Definimos expectativas reais na avaliação." },
    ],
  },
  {
    slug: "harmonizacao-intima",
    icon: "icone-07-tratamentos-intimos",
    title: "Harmonização Íntima",
    tagline: "Discrição, técnica e acolhimento",
    desc: "Procedimentos avançados conduzidos com discrição, técnica e acolhimento.",
    seoDesc:
      "Harmonização íntima em São Paulo conduzida com discrição, segurança e acolhimento. Dra. Ana Carolina, biomédica esteta.",
    intro: [
      "A harmonização íntima reúne procedimentos voltados ao bem-estar, à autoestima e à saúde da região, sempre com total discrição.",
      "O atendimento é individual, acolhedor e baseado em avaliação. Cada indicação respeita o seu objetivo e o seu conforto, sem julgamentos.",
    ],
    beneficios: [
      "Mais conforto e autoestima",
      "Procedimentos com técnica e segurança",
      "Atendimento totalmente discreto",
      "Plano individual e acolhedor",
    ],
    indicacoes: [
      "Busca por bem-estar e autoestima",
      "Incômodos estéticos na região",
      "Cuidado pós gestação",
      "Avaliação para entender o que é indicado",
    ],
    etapas: [
      { t: "Conversa reservada", d: "Um espaço seguro para entender o seu objetivo, sem constrangimento." },
      { t: "Avaliação", d: "Indicação individual do que faz sentido para você." },
      { t: "Procedimento", d: "Conduzido com técnica, discrição e conforto." },
      { t: "Acompanhamento", d: "Retorno e orientação de cuidados." },
    ],
    faq: [
      { q: "O atendimento é discreto?", a: "Totalmente. Privacidade e acolhimento são prioridade em cada etapa." },
      { q: "Como sei o que é indicado?", a: "Tudo parte de uma avaliação individual e honesta sobre o que faz sentido para você." },
    ],
  },
  {
    slug: "protocolo-assinado",
    icon: "icone-08-protocolo-assinado",
    title: "Protocolo Assinado",
    tagline: "Seu plano completo, conduzido pela Dra. Ana",
    desc: "Seu plano completo, customizado e assinado pela Dra. Ana. O resultado não é terceirizado.",
    seoDesc:
      "Protocolo facial personalizado e assinado pela Dra. Ana Carolina em São Paulo: avaliação, plano completo e acompanhamento. Estética avançada.",
    intro: [
      "O Protocolo Assinado é a forma como conduzimos os casos que pedem mais de uma técnica ao longo do tempo. Um plano completo, pensado para o seu rosto e o seu momento.",
      "Da avaliação ao acompanhamento, tudo é conduzido pela própria Dra. Ana. O resultado tem assinatura e não é terceirizado.",
    ],
    beneficios: [
      "Plano completo e personalizado",
      "Combinação inteligente de técnicas",
      "Acompanhamento de ponta a ponta",
      "Previsibilidade de etapas e resultado",
    ],
    indicacoes: [
      "Quem busca um resultado de conjunto",
      "Casos que pedem mais de uma técnica",
      "Quem quer um plano de médio prazo",
      "Quem valoriza acompanhamento próximo",
    ],
    etapas: [
      { t: "Leitura facial completa", d: "Estudo detalhado do rosto e definição clara dos objetivos." },
      { t: "Plano assinado", d: "Um protocolo por etapas, com técnicas, ordem e expectativas reais." },
      { t: "Execução", d: "Cada etapa conduzida pela Dra. Ana, com produtos certificados." },
      { t: "Acompanhamento", d: "Reavaliações para refinar e planejar a manutenção." },
    ],
    faq: [
      { q: "O protocolo é fixo?", a: "Não. Ele é construído para o seu caso e revisado ao longo do caminho, conforme a resposta do seu rosto." },
      { q: "Quem conduz os procedimentos?", a: "A própria Dra. Ana, do início ao fim. Por isso falamos em resultado assinado." },
    ],
  },
];

export function getProtocolo(slug: string): Protocolo | undefined {
  return PROTOCOLOS.find((p) => p.slug === slug);
}

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

// Resultados reais (antes/depois) — otimizados em /public/resultados
// 3 primeiros = destaques (Harmonização 4ml, Labial 22, Rino 3)
export const RESULTADOS: { src: string; label: string }[] = [
  { src: "/resultados/r01.webp", label: "Harmonização facial · 4ml" },
  { src: "/resultados/r02.webp", label: "Preenchimento labial" },
  { src: "/resultados/r03.webp", label: "Rinomodelação" },
  { src: "/resultados/r04.webp", label: "Harmonização facial" },
  { src: "/resultados/r05.webp", label: "Harmonização facial" },
  { src: "/resultados/r06.webp", label: "Harmonização facial · 4ml" },
  { src: "/resultados/r07.webp", label: "Lábios + mento" },
  { src: "/resultados/r08.webp", label: "Preenchimento labial" },
  { src: "/resultados/r09.webp", label: "Preenchimento labial" },
  { src: "/resultados/r10.webp", label: "Preenchimento labial" },
  { src: "/resultados/r11.webp", label: "Preenchimento labial" },
  { src: "/resultados/r12.webp", label: "Preenchimento labial" },
  { src: "/resultados/r13.webp", label: "Preenchimento labial" },
  { src: "/resultados/r14.webp", label: "Preenchimento labial" },
  { src: "/resultados/r15.webp", label: "Preenchimento labial" },
  { src: "/resultados/r16.webp", label: "Preenchimento labial" },
  { src: "/resultados/r17.webp", label: "Preenchimento labial" },
  { src: "/resultados/r18.webp", label: "Preenchimento labial" },
  { src: "/resultados/r19.webp", label: "Preenchimento labial" },
  { src: "/resultados/r20.webp", label: "Preenchimento labial" },
  { src: "/resultados/r21.webp", label: "Preenchimento labial" },
  { src: "/resultados/r22.webp", label: "Preenchimento labial" },
  { src: "/resultados/r23.webp", label: "Preenchimento labial" },
  { src: "/resultados/r24.webp", label: "Preenchimento labial" },
  { src: "/resultados/r25.webp", label: "Preenchimento labial" },
  { src: "/resultados/r26.webp", label: "Preenchimento labial" },
  { src: "/resultados/r27.webp", label: "Preenchimento labial" },
  { src: "/resultados/r28.webp", label: "Preenchimento labial" },
  { src: "/resultados/r29.webp", label: "Preenchimento labial" },
  { src: "/resultados/r30.webp", label: "Preenchimento labial" },
  { src: "/resultados/r31.webp", label: "Preenchimento labial" },
  { src: "/resultados/r32.webp", label: "Preenchimento de olheira" },
  { src: "/resultados/r33.webp", label: "Preenchimento de olheira" },
  { src: "/resultados/r34.webp", label: "Rinomodelação" },
  { src: "/resultados/r35.webp", label: "Rinomodelação" },
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
