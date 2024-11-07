// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

// fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// navigation
import RootNavigation from "./navigation/RootNavigation";
import { fonts } from "./utils/constants";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    // "OpenSans": require("./assets/fonts/Inter-Black.otf"),
    [fonts.OpenSansItalic]: require("./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
