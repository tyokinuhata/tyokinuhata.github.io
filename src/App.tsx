import "./App.css";
import Top from "./pages/Top";
import { useKonamiCommand } from "./utils/konamiCommand";

function App() {
  const konamiActivated = useKonamiCommand();

  return (
    <div className={konamiActivated ? "konami-activated" : ""}>
      <Top />
    </div>
  );
}

export default App;
