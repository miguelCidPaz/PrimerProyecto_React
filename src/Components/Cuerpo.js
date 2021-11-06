import React, { Component } from 'react';
import '../CSS/style.css';

class Cuerpo extends Component {
    render() {
        return <section className="mid">

            <Aside />

            <div className="centro">
                <p className="textoNaranja title">Articulos mas vendidos</p>
                <p className="criterio">Ordenar por: </p>
                <section className="articulos">

                    <Articulo level='12' />

                </section>
            </div>

        </section>
    }
}

class Aside extends Component {
    render() {
        return <aside className="aside">
            <p className="textoNaranja title">Categorias</p>
            <Categoria />
        </aside>

    }
}

class Categoria extends Component {
    render() {
        let rows = [];
        for (let i = 0; i < this.props.content.length; i++) {
            rows.push(<p key={i} className="categoria">{this.props.content[i]}</p>)
        }
        return rows;
    }
}

Categoria.defaultProps = {
    content: ["Botas", "Cascos", "Chaquetas", "Guantes", "Impermeables", "Intercomunicadores", "Manos",
        "Pantalones", "Protecciones", "Ropa termica", "Maletas blandas", "Maletas rigidas", "Antirrobos",
        "Estriberas", "Manillares", "Porta matriculas", "Sistemas de escape", "Neumaticos", "Baterias"]
}

class Articulo extends Component {
    render() {
        let rows = []
        for (let i = 0; i < this.props.level; i++) {
            rows.push(<article key={i} className="articleGroup">
                <p className="nombreArticulo">{this.props.name}</p>
                <img src={this.props.img} alt=""
                    className="imagenArticulo" />
                <div className="opciones">
                    <button className="compra">{this.props.action}</button>
                    <p className="nombreArticulo precio">{this.props.precio}</p>
                </div>
            </article>)

        }
        return rows
    }
}

Articulo.defaultProps = {
    name: 'Alpinestars GP Pro',
    img: 'https://piratamotos.es/wp-content/uploads/2018/12/Gyre_noir_blanc_rouge_face_1.jpg',
    action: 'Comprar',
    precio: '429.95€'
}

export default Cuerpo;