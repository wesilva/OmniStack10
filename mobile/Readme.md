# DevRadar - Mobile

yarn global add expo-cli
npm install -g expo-cli // instala o expo na máquina
Se for rodar com yarn tem que configurar a variavel de ambiente do expo no arquivo de inicialização do sistema => export PATH="$(yarn global bin):$PATH"
Linux (navegar para a pasta do usuario cd ~) pode ser => .bash_profile, .profile, .bashrc, .zshrc ou executar o comando acima
expo init mobile => escolher template blank => usar yarn // cria o projeto mobile
yarn start // sobe a aplicação mobile

http://docs.expo.io/ => documentação do expo


- Instalar React Navigation

https://github.com/react-navigation/react-navigation 

https://reactnavigation.org/docs/en/getting-started.html // 

yarn add react-navigation

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
yarn add react-navigation-stack
yarn add @react-native-community/masked-view

- Recarregar app
 No aparelho chaqualhar
 Emulador de Android - Ctrl + M; Reload R+R
 <> Fragment => componente que não tem efeito visual</> 

- Instalar react-native-maps
expo install react-native-maps
expo install expo-location // modulo de geolocalização do expo

- Instalar web view
expo install react-native-webview

- Instalar axios
yarn add axios