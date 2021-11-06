import React, { Component } from 'react';
import '../CSS/style.css';

class Cabecera extends Component {
    render() {
        return <header className="header">
            <MenuSuperior href="#" />
            <MenuInferior href="#" />
        </header>
    }
}

class MenuSuperior extends Component {
    render() {
        return <div className="headSuperior">
            <h1 className="marca">{this.props.marca}</h1>
            <nav className="ayuda">
                <MenuSuperiorElement />
            </nav>
        </div>
    }
}
MenuSuperior.defaultProps = {
    marca: 'MOTOSHOP'
}

class MenuSuperiorElement extends Component {
    render() {
        let rows = []
        rows = this.props.content.map((element, index) =>
            <a key={index} href={this.props.href} className="enlaceAyuda">{element}</a>)
        return rows
    }
}

MenuSuperiorElement.defaultProps = {
    content: ["Ayuda", "Nuestras Tiendas", "Contacto"]
}

class MenuInferior extends Component {
    render() {

        return <div className="headInferior">
            <nav className="menuPrincipal">
                <MenuElement />
            </nav>
        </div>
    }
}

class MenuElement extends Component {
    render() {
        let rows = [];
        rows = this.props.content.map((itemMenu, index) =>
            <a key={index} href={this.props.href} className="enlaceMenu">{itemMenu}</a>)
        return rows;
    }
}

MenuElement.defaultProps = {
    content: ["Inicio", "Carretera", "Ciudad", "Off Road", "Trail", "Trial", "Casual", "Accesorios"]
}

export default Cabecera;