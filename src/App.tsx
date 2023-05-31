import { Header } from "Components/Pages/Header";
import { Hero } from "Components/Pages/Hero";
import { UtilityStyles } from "Styles/Utils";
import { LangProvider } from "Context/language";
import "./i18";

function App() {
  return (
    <LangProvider>
      <Header />
      <Hero />
      <UtilityStyles />
    </LangProvider>
  );
}

export default App;
