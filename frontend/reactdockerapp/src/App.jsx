import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./style.css";

export default function App() {
  return (
    <div>
      <header className="app-header">
        <h1>React Docker App</h1>
      </header>

      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
