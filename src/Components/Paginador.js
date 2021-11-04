import { Component } from "react"
import '../CSS/style.css'

class Paginador extends Component {
    render() {
        return <div className="paginador">
            <p className="pagina">1</p>
            <p className="pagina">2</p>
            <p className="pagina">3</p>
            <p className="pagina">4</p>
            <p className="pagina">5</p>
            <p className="pagina">6</p>
            <p className="pagina">...</p>
            <p className="pagina">Siguiente</p>
        </div>
    }
}

export default Paginador;