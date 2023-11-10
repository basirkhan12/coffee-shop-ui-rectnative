import { StyleSheet, Text, View } from 'react-native';
import Welcome from './app/screens/welcome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Home from './app/screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();
export default function App() {

  const [fontsLoaded] = useFonts({
    "sora-bold": require("./app/assets/fonts/Sora-Bold.ttf"),
    "sora-extrabold": require("./app/assets/fonts/Sora-ExtraBold.ttf"),
    "sora-regular": require("./app/assets/fonts/Sora-Regular.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
