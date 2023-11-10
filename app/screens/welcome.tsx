//import liraries
import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Heading1 from '../components/text/Heading1';
import Paragraph from '../components/text/Paragraph';
import Button from '../components/buttons/Button';

// create a component
const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/screens_assets/coffeeMug.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["transparent", "#000"]}
        locations={[0, 0.3]}
        style={styles.textContainer}

      >
        <Heading1 style={styles.heading1}>
          Coffee so good, {"\n"} your taste buds{"\n"} will love it.
        </Heading1>

        <Paragraph style={styles.subtitle}>
          The best grain, the finest roast, the powerful flavor.
        </Paragraph>

        <Button onPress={() => console.log("hello")}>
          Get Started
        </Button>


      </LinearGradient>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "80%",
    backgroundColor: "#fff"
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "55%",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    paddingHorizontal: 20,


  },
  heading1: {

    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
  },


});

//make this component available to the app
export default Welcome;
