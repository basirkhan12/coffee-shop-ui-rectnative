//import liraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
const Heading3 = ({ style = {}, children }) => {
    return (
        <Text style={[styles.heading3, style]}>{children}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    heading3: {
        color: "white",
        fontSize: 20,
        fontFamily: "sora-bold",
    }
});

//make this component available to the app
export default Heading3;
