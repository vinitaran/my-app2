import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/home.avif')} // Replace with the actual path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.greetingBox}>
            <Text style={styles.greetings}>Hello Vinita!</Text>
        </View>
        <View style={styles.dataBox}>
            <Text>Inside Fridge</Text>
        </View>
        <View style={styles.dataBox}>
            <Text>Inside Fridge</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  dataBox: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: 100,
    padding: 10,
  },
  greetingBox: {
    fontSize: 40,
    padding: 10,
    height: 300,
  },
  greetings: {
    fontSize: 40,
    paddingTop: 60,
  }
});

export default HomeScreen;
