# Da Vinci Aesthetic — Site Institucional

Site institucional + conversão do **Da Vinci Aesthetic**, atelier de estética
avançada e harmonização facial em São Paulo (Dra. Ana Carolina Martins).

Construído pela **Dose de Growth** a partir do Brand Manual Vol.01 e do
Planejamento Estratégico DG.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** (CSS-first, design tokens em `app/globals.css`)
- Fontes: **Bodoni Moda** (display Didone), **Archivo Narrow** (acento/labels),
  **Inter** (corpo) — via `next/font`
- 100% estático, pronto pra Vercel

## Identidade (lei 70/20/10)

| Token | Cor | Uso |
|---|---|---|
| Negro Renascença | `#0a0d13` | 70% — base, a noite do Cinquecento |
| Creme Tela | `#faf8f3` | 20% — substitui o branco |
| Dourado Florença | `#c9a14c` | 10% — detalhes, headlines, regras |

Aresta "street": grafismos neon/spray + malha hexagonal + vitruviano, sobre a
base renascentista.

## Estrutura da página

Hero · Manifesto · Pilares · Protocolos (8 serviços) · Galeria obra-primas ·
Dra. Ana · Depoimentos · Praças (Conceição + Santa Cruz) · CTA · Footer.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## ⚠️ Antes de publicar

- **WhatsApp**: trocar `WHATSAPP_NUMBER` em `lib/content.ts` pelo número oficial
  da clínica (o número do planejamento é da coordenação DG).
- **Fotografia**: os slots de retrato (Ana) e antes/depois usam placeholders
  on-brand. Substituir pelas fotos da captação profissional.
- **Endereços/CRBM**: confirmar dados finais (endereço completo, nº CRBM) e o
  domínio `davinciestetica.com.br`.

## Assets

Todos os assets de marca vivem em `public/brand/` (logos, ícones, grafismos,
decorativos) e `public/aplicacoes/` (instagram, anúncios, ambiente, paleta),
extraídos do kit oficial Da Vinci Aesthetic.
