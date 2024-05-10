import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './App/Navigations/Tabnavigation';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import LoginScreen from './App/Screens/LoginScreen';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit-bold': require('./assets/Fonts/Outfit-Bold.ttf'),
    'outfit-black': require('./assets/Fonts/Outfit-Black.ttf'),
    'outfit-medium': require('./assets/Fonts/Outfit-Medium.ttf'),
    'outfit-regular': require('./assets/Fonts/Outfit-Regular.ttf'),
    'outfit-semibold': require('./assets/Fonts/Outfit-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ClerkProvider publishableKey='pk_test_c3VwZXJiLWJlZS00NC5jbGVyay5hY2NvdW50cy5kZXYk'>
     <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
        <LoginScreen/>
        </SignedIn>
        <SignedOut>
        <NavigationContainer>
          <Tabnavigation/>
        </NavigationContainer>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
//
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    width:'100%',
    height:'97%',
  },
});
