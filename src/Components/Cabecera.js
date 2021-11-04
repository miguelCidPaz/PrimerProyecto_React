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
            <h1 className="marca">MOTOSHOP &clubs;</h1>
            <nav className="ayuda">
                <MenuSuperiorElement />
            </nav>
        </div>
    }
}

class MenuSuperiorElement extends Component {
    render() {
        let enlaceAyuda = ["Ayuda", "Nuestras Tiendas", "Contacto"];
        let rows = []
        rows = enlaceAyuda.map((element, index) =>
            <a key={index} href={this.props.href} className="enlaceAyuda">{element}</a>)
        return rows
    }
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
        let menu = ["Inicio", "Carretera", "Ciudad", "Off Road", "Trail", "Trial", "Casual", "Accesorios"];
        rows = menu.map((itemMenu, index) =>
            <a key={index++} href={this.props.href} className="enlaceMenu">{itemMenu}</a>)
        return rows;
    }
}

export default Cabecera;