//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from './../../config/colors';

// create a component
const Button = ({ children, style = {}, textStyle = {}, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.bottonText, textStyle]} >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        color: colors.white,
        padding: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    bottonText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "500",
    }
});

//make this component available to the app
export default Button;
