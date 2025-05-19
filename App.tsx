import { useFonts } from "@expo-google-fonts/nunito";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [isFontsLoaded] = useFonts(["Nunito_400Regular", "Nunito_700Bold"]);

  return (
    <ThemeProvider theme={theme}>
      {!isFontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
