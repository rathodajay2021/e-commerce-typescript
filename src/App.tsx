//CUSTOM
import { Header } from "Components/Pages/Header";
import { Hero } from "Components/Pages/Hero";
import { LangProvider } from "Context/language";
import { Slider } from "Components/Pages/Slider";
import { UtilityStyles } from "Styles/Utils";
import "./i18";

function App() {
  return (
    <LangProvider>
      <Header />
      <Hero />
      <Slider />
      <UtilityStyles />
    </LangProvider>
  );
}

export default App;
