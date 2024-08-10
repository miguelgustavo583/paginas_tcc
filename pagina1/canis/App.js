import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground source={require('./assets/images/fundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Bem-Vindo</Text>
        <Text style={styles.nameText}>Pitico</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 40,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 10,
  },
});

export default WelcomeScreen;
