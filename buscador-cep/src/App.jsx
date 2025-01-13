import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./app.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState("")

  async function handleSearch() {
    if (input) {
      try {
        const response = await api.get(`${input}/json`);
        setCep(response.data)


      } catch {
        alert("OPS, ALGO DEU ERRADO! Tente novamente ou contate o nosso suporte.")
      }
    } else {
      alert("Preencha algum cep");
    }

    setInput("")
  }

  return (
    <div className="container">
      <h1 className="title">BUSCADOR CEP</h1>

      <div className="containerInput">
        <input
          className="inputCep"
          type="text"
          placeholder="Digite o CEP"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep} </h2>

        <span> {cep.logradouro} </span>
        <span>{Object.keys(cep.complemento).length > 0 ? cep.complemento : "Sem complemento"}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
      
    </div>
  );
}

export default App;
