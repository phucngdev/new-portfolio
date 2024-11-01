import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span class="xl:text-7xl animate-gradient bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.500),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.200),theme(colors.green.300))] bg-[length:200%_auto] bg-clip-text text-3xl font-bold tracking-tighter text-transparent">
        Frontend Development
      </span>
    </>
  );
}

export default App;
