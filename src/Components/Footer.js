import { Component } from "react"
import '../CSS/style.css';

class Footer extends Component {
    render() {
        return <footer className="footer">
            <nav className="footerMenu">
                <a href="https://www.google.es/" className="enlaceAyuda">Aviso legal</a>
                <a href="https://www.google.es/" className="enlaceAyuda">Politica de Privacidad</a>
                <a href="https://www.google.es/" className="enlaceAyuda">Gastos de envio</a>
                <a href="https://www.google.es/" className="enlaceAyuda">Sistemas de pago</a>
                <a href="https://www.google.es/" className="enlaceAyuda">Plazos de entrega</a>
                <a href="https://www.google.es/" className="enlaceAyuda">Devoluciones</a>
            </nav>
        </footer>
    }
}

export default Footer;