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
        let categorias = ["Botas", "Cascos", "Chaquetas", "Guantes", "Impermeables", "Intercomunicadores", "Manos",
            "Pantalones", "Protecciones", "Ropa termica", "Maletas blandas", "Maletas rigidas", "Antirrobos",
            "Estriberas", "Manillares", "Porta matriculas", "Sistemas de escape", "Neumaticos", "Baterias"]
        for (let i = 0; i < categorias.length; i++) {
            rows.push(<p key={i} className="categoria">{categorias[i]}</p>)
        }
        return rows;
    }
}

class Articulo extends Component {
    render() {
        let rows = []
        for (let i = 0; i < this.props.level; i++) {
            rows.push(<article key={i} className="articleGroup">
                <p className="nombreArticulo">Alpinestars GP Pro</p>
                <img src="https://piratamotos.es/wp-content/uploads/2018/12/Gyre_noir_blanc_rouge_face_1.jpg" alt=""
                    className="imagenArticulo" />
                <div className="opciones">
                    <button className="compra">Comprar</button>
                    <p className="nombreArticulo precio">429,95€</p>
                </div>
            </article>)

        }
        return rows
    }
}

export default Cuerpo;