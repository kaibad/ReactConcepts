import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
function App() {
  const [themeMod, setThemeMod] = useState("light");
  const lightTheme = () => {
    setThemeMod("light");
  };
  const darkTheme = () => {
    setThemeMod("dark");
  };
  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMod, "dark:bg-black");
  }, [themeMod]);
  return (
    <ThemeProvider value={{ themeMod, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
