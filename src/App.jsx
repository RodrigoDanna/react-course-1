import React from 'react';

//CSS
import './assets/css/App.css';

//Components
import Basico from './components/Basico.jsx';
import Parametros from './components/Parametros.jsx';
import Filhos from './components/Filhos.jsx';
import Card from './components/Card.jsx';
import Repeticao from './components/Repeticao.jsx';
import Condicional from './components/Condicional.jsx';
import CondicionalIf from './components/CondicionalIf.jsx';

export default () =>
    <div className="App">
        <Card title="#01 - Básico"><Basico /></Card>

        <Card title="#02 - Filhos">
            <Filhos>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </Filhos>
        </Card>

        <Card title="#03 - Parametros"><Parametros text="Teste 2" /></Card>

        <Card title="#04 - Repetição"><Repeticao /></Card>

        <Card title="#05 - Condicional"><Condicional number={5} /></Card>

        <Card title="#06 - Condicional componentizada"><CondicionalIf number={6} /></Card>
    </div>