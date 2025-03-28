import "./styles.css";
import Greeter from "./Greeter";
import { Dog } from "./Dog";
import DieRoll from "./DieRoll";
import "./Die.css";

export default function App() {
  return (
    <div className="App">
      <DieRoll />
      <DieRoll />
    </div>
  );
}
