//import liraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const Heading1 = ({ style = {}, children }) => {
    return (
        <Text style={[styles.heading1, style]}>{children}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    heading1: {
        color: "white",
        fontSize: 30,
        fontFamily: "sora-bold",
    }
});

//make this component available to the app
export default Heading1;
