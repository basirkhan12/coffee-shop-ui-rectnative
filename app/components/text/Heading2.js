//import liraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const Heading2 = ({ style = {}, children }) => {
    return (
        <Text style={[styles.heading2, style]}>{children}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    heading2: {
        color: "white",
        fontSize: 25,
        fontFamily: "sora-bold",
    }
});

//make this component available to the app
export default Heading2;
