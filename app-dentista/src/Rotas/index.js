import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import PaginaHome from '../Paginas/Home'
import PaginaContato from '../Paginas/Contato'

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaHome />} />
            <Route path='/contato' element={<PaginaContato />} />
        </Routes>
    </BrowserRouter>
)

export default Rotas