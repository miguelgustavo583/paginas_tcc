import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Bem-Vindo</Text>
      <Text style={styles.nameText}>Pitico</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B0000', 
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





