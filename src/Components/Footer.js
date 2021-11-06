import { Component } from "react"
import '../CSS/style.css';

class Footer extends Component {

    render() {

        return <footer className="footer">
            <nav className="footerMenu">
                <ElementFooter />
            </nav>
        </footer>
    }
}

class ElementFooter extends Component {
    render() {
        let rows = this.props.content.map((element, index) => {
            return <a key={index} href={this.props.href} className="enlaceAyuda">{element}</a>
        })
        return rows;
    }
}

ElementFooter.defaultProps = {
    href: '#',
    content: ['Aviso legal', 'Politica de privacidad', 'Gastos de envio', 'Sistemas de pago', 'Plazos de entrega', 'Devoluciones']
}

export default Footer;