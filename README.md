# GitHub API Search

O **GitHub API Search** é uma aplicação simples que utiliza a API pública do GitHub para fornecer informações detalhadas sobre um usuário específico. Ao inserir o nome de usuário desejado, o aplicativo retorna uma visão geral do perfil do usuário, incluindo a foto do perfil, a descrição, o número de seguidores, o número de pessoas seguidas, os últimos 10 repositórios do usuário (com informações como número de forks, estrelas, watchers e linguagem predominante) e os últimos 10 eventos de create e push.

## Como Utilizar

1. Acesse o [GitHub API Search](https://ygor-ccarvalho.github.io/GitHub-API/).
2. Insira o nome de usuário do GitHub que você deseja pesquisar no campo de busca.
3. Clique no botão de busca ou pressione "Enter".
4. Aguarde a exibição das informações do perfil do usuário.

##Capturas de tela
<img src="https://raw.githubusercontent.com/ygor-ccarvalho/GitHub-API/2044e851d524b1f41434fed89e08fc44f1c2e604/src/images/git-api.gif">

## Validações

- Se o campo de pesquisa estiver vazio, um alerta será exibido solicitando que você preencha com um usuário válido.

- Se o usuário não tiver uma descrição cadastrada, uma mensagem será exibida informando que não há descrição disponível.

- Se o usuário não tiver um nome cadastrado, uma mensagem será exibida informando que não há nome disponível.

- Se o usuário não existir, uma mensagem será exibida informando que o usuário não foi encontrado.

## Recursos

- **Perfil do Usuário:**
  - Foto do perfil.
  - Descrição do perfil.
  - Número de seguidores.
  - Número de pessoas seguidas.

- **Últimos 10 Repositórios:**
  - Nome do repositório.
  - Número de forks.
  - Número de estrelas.
  - Número de watchers.
  - Linguagem predominante.

- **Últimos 10 Eventos:**
  - Create: exibe os últimos eventos de criação de repositório.
  - Push: exibe os últimos eventos de push para repositórios.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- GitHub API
