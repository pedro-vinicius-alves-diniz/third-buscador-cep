import { FiSearch } from "react-icons/fi";
import "./app.css"

function App(){
    return(
        <div className="container">
            <h1>BUSCADOR CEP</h1>

            <div className="containerInput">
                <input className="inputCep" type="text" placeholder="Digite o CEP"/>

                <button className="buttonSearch">
                    <FiSearch/>
                </button>
            </div>
        </div>
    )
}

export default App