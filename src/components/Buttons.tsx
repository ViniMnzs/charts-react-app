import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Buttons.css';

export default function Buttons(){
    return(
        <div id='buttons'>
            <Link to='/'>Upload de Imagens</Link>
            <Link to='/globe'>Globo com linhas</Link>
            <Link to='/graph3'>Gráfico 3</Link>
            <Link to='/graph1'>Gráfico 4</Link>
        </div>
    )
}