
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logo2.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Cor de fundo vermelho
  },
  logo: {
    width: 50,
    height: 41, 
    marginBottom: 10,
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
