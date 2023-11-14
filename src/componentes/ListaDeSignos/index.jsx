import React from "react"
import Titulo from "../Titulo"
import ItemLista from '../ItemLista'
import './style.css'

export default function ListaDeSignos() {

    return (
        <div>
            <Titulo />
            <div>
                <div className="lista">
                    <ItemLista

                        signo="Aquário" dataInicio="22/01"
                        dataFim="19/02" imagem="../../imagens/aquario.jpg" />

                    <ItemLista

                        signo="Aquário" dataInicio="22/01"
                        dataFim="19/02" imagem= "../../imagens/aquario.jpg" />


                    <ItemLista

                        signo="Aquário" dataInicio="22/01"
                        dataFim="19/02" imagem="../../imagens/aquario.jpg" />
                </div>



            </div>
        </div>
    )
};