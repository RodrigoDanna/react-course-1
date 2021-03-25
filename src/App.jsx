import React from 'react';

//CSS
import './assets/css/App.css';

//Components
import Basic from './components/basic/Basic.jsx';
import Props from './components/basic/Props.jsx';
import Children from './components/basic/Children.jsx';
import Card from './components/Card.jsx';
import Repeat from './components/basic/Repeat.jsx';
import Conditional from './components/basic/Conditional.jsx';
import ConditionalIf from './components/basic/ConditionalIf.jsx';
import DirectSpread from './components/spread/direct/Parent.jsx';
import IndirectSpread from './components/spread/indirect/Parent.jsx';
import Input from './components/form/Input.jsx';
import Counter from './components/counter/Counter.jsx';

const pallete = ['#DC2742', '#83AA30', '#5E412F', '#FF85CB', '#5C2D50', '#02D0AC', '#D96459', '#BCCF02', '#AF1523', '#cE4ccF'];

export default () =>
    <div className="App">
        <Card title="#01 - Basic" color={pallete[0]}><Basic /></Card>

        <Card title="#02 - Children" color={pallete[1]}>
            <Children>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </Children>
        </Card>

        <Card title="#03 - Props" color={pallete[2]}><Props text="Teste 2" /></Card>

        <Card title="#04 - Repeat" color={pallete[3]}><Repeat /></Card>

        <Card title="#05 - Conditional" color={pallete[4]}><Conditional number={5} /></Card>

        <Card title="#06 - Componentized Conditional" color={pallete[5]}><ConditionalIf number={6} /></Card>

        <Card title="#07 - Direct Spread" color={pallete[6]}><DirectSpread surname="McClane"/></Card>

        <Card title="#08 - Indirect Spread" color={pallete[7]}><IndirectSpread/></Card>

        <Card title="#09 - Input" color={pallete[8]}><Input/></Card>

        <Card title="#10 - Counter" color={pallete[9]}><Counter pace={10}/></Card>
    </div>