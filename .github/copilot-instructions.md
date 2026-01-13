## Visão rápida

Este repositório é um site estático simples (HTML/CSS/JS). Arquivos-chave:

- `index.html` — página principal, contém a tabela de estatísticas e inclui os CSS em `css/`.
- `css/` — folhas de estilo separadas por responsabilidade: `cabecalho.css` (header), `rodape.css` (footer), `index.css` (página) e `media.css` (responsivo). `reset.css` é referenciado em `index.html` mas não aparece no workspace listado — verifique se existe.
- `js/index.js` — arquivo de script (atualmente vazio).
- `img/` — imagens (ex.: `logo.png`, `logo.jpg` usado como favicon).

Objetivo deste arquivo: dar instruções práticas e específicas para agentes de codificação sobre como trabalhar neste projeto, exemplos de padrões encontrados e pontos de atenção.

## Contrato rápido para alterações automáticas

- Entrada: alterações em `index.html`, CSS em `css/*.css` e JS em `js/index.js`.
- Saída esperada: HTML válido e funcional ao abrir `index.html` localmente; estilos aplicados via os arquivos CSS existentes; scripts carregados corretamente.
- Modos de falha conhecidos: referência a `css/reset.css` inexistente; tag de script malformada (veja abaixo); misturas de `td`/`th` em tabelas que podem gerar HTML inválido.

## Padrões e decisões observadas (específicos deste projeto)

- Separação por responsabilidade no CSS: header/footer/layout/responsive têm arquivos separados. Mantenha esse padrão ao adicionar estilos.
  - Ex.: usar `cabecalho.css` para classes do header (`.cabecalho`, `.logo_imagem`), `rodape.css` para `.rodape`.
- Arquivo de JS único: scripts devem ser colocados em `js/index.js`. Antes de editar, corrija a inclusão em `index.html` (veja problemas).

## Problemas e pontos a corrigir (e como um agente deve tratá-los)

- Tag de script incorreta em `index.html`:
  - Encontrado: `<script> href="js/index.js"</script>` — isso não carrega o script.
  - Correção segura: substituir por `<script src="js/index.js"></script>`.
  - Aplique mudança automática somente se houver testes manuais ou verificação visual local (abrir `index.html`) para confirmar comportamento.
- Verificar `css/reset.css`: `index.html` referencia `css/reset.css` no head. Se o arquivo não existir, remover a referência ou adicioná-lo (opção preferível: copiar um reset simples e commitar como `css/reset.css`).
- Tabela HTML: algumas linhas usam `</th>` para fechar células que foram abertas como `<td>` (inconsistência). Corrija fechamentos para manter HTML semântica (`<th>` apenas para células de cabeçalho na primeira linha).

## Fluxo de trabalho para mudanças comuns

1. Corrigir inclusão de JS (se necessário) e confirmar que `js/index.js` carrega — abra `index.html` no navegador local.
2. Para novo estilo, adicione regras ao arquivo CSS correto (p.ex. `cabecalho.css` para header) e teste em desktop + mobile (usar `media.css` onde aplicável).
3. Para adicionar imagens, coloque em `img/` e atualize referências relativas (ex.: `img/logo.png`).

## Comandos e debugging (práticos)

- Não há build step: para testar localmente, abra `index.html` diretamente no navegador. Se preferir um servidor local para evitar problemas de CORS em futuros recursos, rode um servidor HTTP simples na raiz do projeto (ex.: `python -m http.server 8000` no diretório do projeto) — execute localmente, não altere o repositório.
- Debug rápido: usar as DevTools do navegador (Console/Network) para checar carregamento de CSS/JS/imagens.

## Exemplos concretos a usar como referência

- Corrigir script: editar `index.html` e substituir a linha de script pela forma correta (veja seção problemas).
- CSS por responsabilidade: ao adicionar um novo componente de página, crie classes semânticas e coloque regras em `index.css` ou num arquivo já existente que represente a área (header/footer/media).

## Notas finais e limites

- Evite reformatar todos os arquivos — faça alterações pequenas e focadas.
- Documente mudanças não triviais no commit message (por exemplo: "Corrige carregamento de JS e adiciona reset.css").
- Se algo depende de ferramentas externas (build, bundlers), não há evidência no repo; informe no PR que não há pipeline configurado.

Se algo aqui estiver incompleto ou você quiser que eu adicione exemplos de commits/PR templates, diga quais partes quer detalhar que eu atualizo o arquivo.
