import React from "react";
import Titulo from '../Titulo'
import ItemLista from '../ItemLista'
import './estilo.css'

export default function ListaDeSignos() {
    return (
        <div>
            <Titulo />

            <div className="lista">
                <ItemLista
                    signo='Aquário'
                    imagem='/assets/aquario.jpg'
                    dataInicio='21/01'
                    dataFim='19/02/'
                />
                <ItemLista
                    signo='Peixes'
                    imagem='/assets/peixes.jpg'
                    dataInicio='20/02'
                    dataFim='20/03'
                />
                <ItemLista
                    signo='Áries'
                    imagem='/assets/aries.jpg'
                    dataInicio='21/03'
                    dataFim='20/04'
                />
                <ItemLista
                    signo='Touro'
                    imagem='/assets/touro.jpg'
                    dataInicio='21/04'
                    dataFim='21/05'
                />
                <ItemLista
                    signo='Gêmeos'
                    imagem='/assets/gemeos.jpg'
                    dataInicio='22/05'
                    dataFim='21/06'
                />
                <ItemLista
                    signo='Câncer'
                    imagem='/assets/cancer.jpg'
                    dataInicio='21/06'
                    dataFim='23/07'
                />
                <ItemLista
                    signo='Leão'
                    imagem='/assets/leao.jpg'
                    dataInicio='24/07'
                    dataFim='23/08'
                />
                <ItemLista
                    signo='Virgem'
                    imagem='/assets/virgem.jpg'
                    dataInicio='24/08'
                    dataFim='23/09'
                />
                <ItemLista
                    signo='Libra'
                    imagem='/assets/libra.jpg'
                    dataInicio='24/09'
                    dataFim='23/10'
                />
                <ItemLista
                    signo='Escorpião'
                    imagem='/assets/escorpiao.jpg'
                    dataInicio='24/10'
                    dataFim='22/11'
                />
                <ItemLista
                    signo='Sagitário'
                    imagem='/assets/sagitario.jpg'
                    dataInicio='23/11'
                    dataFim='21/12'
                />
                <ItemLista
                    signo='Capricórnio'
                    imagem='/assets/capricornio.jpg'
                    dataInicio='22/12'
                    dataFim='20/01'
                />

            </div>
        </div>
    )
}