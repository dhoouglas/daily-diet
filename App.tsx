import { Loading } from "@components/Loading";
import { useFonts } from "@expo-google-fonts/nunito";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [isFontsLoaded] = useFonts(["Nunito_400Regular", "Nunito_700Bold"]);

  return (
    <ThemeProvider theme={theme}>
      {!isFontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
