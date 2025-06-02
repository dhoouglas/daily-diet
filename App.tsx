import { Loading } from "@components/Loading";
import { useFonts } from "@expo-google-fonts/nunito";
import { Routes } from "@routes/index";

import theme from "@theme/index";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [isFontsLoaded] = useFonts(["Nunito_400Regular", "Nunito_700Bold"]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {!isFontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
