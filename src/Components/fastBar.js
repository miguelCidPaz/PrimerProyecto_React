import React, { Component } from 'react';
import '../CSS/style.css';

class FastBar extends Component {
    render() {
        return <section className="fastBar">

            <div className="fastBarSuperior">
                <p className="textoNaranja">Articulos destacados</p>
                <p className="textoNaranja">Marcas mas vendidas</p>
            </div>

            <div className="fastBarInferior">
                <Producto level="5" />
            </div>

        </section>
    }
}

class Producto extends Component {
    render() {
        //Se declara el arr y se realiza el bucle metiendo lo que haga falta
        let rows = [];
        for (let i = 0; i < this.props.level; i++) {
            rows.push(<article key={i} className="fastBarGroup">
                <img className="imgFastBar"
                    src="data:image/jpeg;base64,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"
                    alt="producto" />
                <p className="nombreProducto">Casco de moto</p>
            </article>)
        }
        return rows; //retornamos directamente el arr
    }
}

export default FastBar;