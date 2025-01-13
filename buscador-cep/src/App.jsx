import { FiSearch } from "react-icons/fi";
import "./app.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">BUSCADOR CEP</h1>

      <div className="containerInput">
        <input className="inputCep" type="text" placeholder="Digite o CEP" />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 00000000</h2>

        <span>Rua Teste Algum</span>
        <span>Complemento</span>
        <span>Vila</span>
        <span>Natal/RN</span>
      </main>
    </div>
  );
}

export default App;
