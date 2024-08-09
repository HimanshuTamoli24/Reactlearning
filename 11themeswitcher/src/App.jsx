import react from "react";
import { ThemeProvider } from "./contexts/theme";
import { useState } from "react";
import { useEffect } from "react";
import ThemeBtn from "./components/Button";
import Cards from "./components/Cards";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light");
  };
  const darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(() => {
    let themeChanger = document.querySelector("html");
    themeChanger.classList.remove("light", "dark");
    themeChanger.classList.add(themeMode);
  }, [themeMode]);
  
  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
<ThemeBtn/>
          <div className="w-full max-w-sm mx-auto"></div>
          <Cards/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
