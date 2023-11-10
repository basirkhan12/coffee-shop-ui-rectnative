//import liraries
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

// create a component
const Home = () => {
    const angleToCoordinate = (angle: number) => {
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians);
        const y = Math.sin(radians);
        return { x, y };
    };

    // Usage
    const gradientAngle = 241;
    const startCoordinate = angleToCoordinate(gradientAngle);
    const endCoordinate = { x: 0, y: 1 }; // This is the bottom of the screen

    console.log(startCoordinate, endCoordinate)

    return (

        <View style={styles.container}>
            <StatusBar hidden={false} backgroundColor={colors.dark} style='light' />

            <LinearGradient
                style={styles.TopBox}
                colors={['#131313', '#313131']}
                start={startCoordinate}
                end={endCoordinate}
            >
                <View style={styles.userBox}>
                    <View>
                        <Text style={styles.userDetails}>Location</Text>
                        <Text style={styles.userName}>Bilzen, Tanjungbalai</Text>
                    </View>
                    <Image style={styles.profileImage} source={require('../assets/profile_.png')} />
                </View>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" size={24} color="white" style={styles.searchIcon} />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={colors.text}
                        style={styles.searchInput}
                    />
                    <FontAwesome name="sliders" size={24} color="white" style={styles.filterIcon} />
                </View>
            </LinearGradient>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    TopBox: {
        width: "100%",
        height: "40%",
        backgroundColor: colors.dark,
        paddingHorizontal: 30
    },
    userBox: {
        flexDirection: "row",
        paddingTop: 50,
        justifyContent: "space-between",
        alignItems: "center"
    },
    profileImage: {
        width: 44,
        height: 44,
        borderRadius: 14,
    },
    userDetails: {
        color: '#B7B7B7',
        fontFamily: 'sora-regular',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: 0.12,
    },
    userName: {
        color: '#DDD',
        fontFamily: 'sora-bold',
        fontSize: 18,
        fontStyle: 'normal',
        // lineHeight: 'normal',
    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: "#313537",
        padding: 5,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'sora-regular',
        fontWeight: '400',
        color: colors.text
    },
    searchIcon: {
        marginHorizontal: 10

    },
    filterIcon: {
        marginLeft: 10,
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5
    }
});

//make this component available to the app
export default Home;
