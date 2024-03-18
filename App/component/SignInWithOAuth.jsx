import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./../../hooks/useWarmUpBrowser"
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity
          onPress={onPress}
          style={{
            padding: 13,
            backgroundColor: "blue",
            margin: 10,
            borderRadius: 99,
            left: 0,
            right: 0,
            marginBottom: 10,
            zIndex: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "outfit-semibold",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
  );
}
export default SignInWithOAuth;