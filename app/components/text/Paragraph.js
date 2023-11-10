//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './../../config/colors';

// create a component
const Paragraph = ({ children, style = {}, ...otherprops }) => {
    return (

        <Text style={[paragraphStyles.paragraph, style]}>{children}</Text>

    );
};

// define your styles
const paragraphStyles = StyleSheet.create({
    paragraph: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "300",
        fontFamily: "sora-regular",
    },
});

//make this component available to the app
export default Paragraph;
