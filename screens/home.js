// Tela Inicial

// Boas-vindas e breve introdução ao app. 40%
// Acesso rápido ao treinamento diário.
// Destaques de conquistas recentes ou desafios.

/*
Tela Inicial

- Boas-vindas e Breve Introdução ao App:

    Mensagem de Boas-vindas: Uma saudação calorosa que personaliza a experiência do usuário, como "Bem-vindo de volta, [Nome]!" ou "Olá, [Nome]! Pronto para treinar?" 50%

    Descrição Curta: Um texto curto (uma ou duas frases) que resume o propósito do app. Por exemplo: "FootUp é seu companheiro de treinos, ajudando você a se tornar um atleta melhor com rotinas personalizadas e desafios diários." 75%

    Imagem ou Ilustração: Uma imagem motivacional ou ilustração relacionada ao futebol que pode inspirar os usuários a começarem seus treinos. 50%

- Acesso Rápido ao Treinamento Diário:

    Botão de Acesso ao Treinamento Diário: Um botão destacado, com cores vibrantes, que diz "Iniciar Treino Diário". Esse botão leva diretamente à rotina de treino do dia. 50%

    Resumo do Treino: Abaixo do botão, um resumo ou lista do que o treino do dia envolve, como "Hoje: 30 min de dribles + 15 min de finalizações", para que o usuário saiba o que esperar. 0%

    Dicas Rápidas: Uma pequena seção com dicas úteis ou um lembrete, como "Lembre-se de se aquecer antes do treino!" ou "Tente o novo exercício de finalização hoje!". 0%

- Destaques de Conquistas Recentes ou Desafios:

    Seção de Conquistas:

        Uma área que exibe as conquistas recentes do usuário, como "Você completou 5 treinos esta semana!" ou "Parabéns! Você alcançou o Nível 3!".

        Cada conquista pode ser acompanhada por um ícone ou badge, tornando a seção visualmente atraente.

        Pode haver um botão "Ver Todas as Conquistas" que leva o usuário a uma página dedicada às suas realizações. 50%

    Destaques de Desafios:

        Uma lista de desafios em andamento ou futuros, como "Desafio do Dia: Complete 50 dribles!" ou "Pronto para o desafio semanal? Participe agora!".

        Cada desafio pode ter um botão "Participar" que leva o usuário diretamente à seção do desafio.

        Incluir um contador ou timer para desafios com prazo (se aplicável) pode incentivar a participação.

- Layout Sugerido

01. Cabeçalho: Logo do aplicativo e título "Tela Inicial".

02. Seção de Boas-vindas: Mensagem personalizada + breve descrição + imagem motivacional.

03. Acesso ao Treinamento Diário: Botão grande e destacado + resumo do treino + dicas rápidas.

04. Destaques de Conquistas: Cards ou ícones com conquistas + botão "Ver Todas".

05. Destaques de Desafios: Lista de desafios atuais + botão "Participar".

Considerações Finais: Essa tela inicial deve ser visualmente atraente e motivadora, incentivando os usuários a interagir com o app. Use um design limpo e organizado, com cores que reflitam a identidade do FootUp e que tornem a navegação intuitiva. Elementos visuais, como ícones e imagens, podem ajudar a transmitir informações rapidamente e tornar a experiência mais envolvente.
*/

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Bold': require('../fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../fonts/Roboto-Regular.ttf'),
  });
};

const Home = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando fontes...</Text>
      </View>
    );
  }

  const userName = "Thomas";

  return (
    <View style={styles.container}>
      <Text style={styles.title_auth}>Bem-vindo de volta, {userName}!</Text>
      <Text style={styles.title_unauth}>Olá, {userName}! Pronto para treinar?</Text>
      <Text style={styles.description}>
        FootUp é seu companheiro de treinos, ajudando você a se tornar um atleta melhor com rotinas personalizadas e desafios diários.
      </Text>
      <Image 
        source={require('../assets/logo.png')}
        style={styles.illustration}
      />
      <Button
        title='Iniciar Treino Diário'
        onPress={() => Alert.alert('Indo para a tela de treino diário.')}
        style={styles.daily_training}
      />
        <Button
        title='Ver Todas as Conquistas'
        onPress={() => Alert.alert('Indo para a tela de conquistas.')}
        style={styles.all_achievements}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
  },
  title_auth: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  title_unauth: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  illustration: {
    width: 256,
    height: 256,
  },
  daily_training: {},
  all_achievements: {},
});

export default Home;