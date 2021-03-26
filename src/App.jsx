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
import Randomize from './components/randomize/Randomize.jsx';

const pallete = [
    '#DC2742',
    '#83AA30',
    '#5E412F',
    '#FF85CB',
    '#5C2D50',
    '#02D0AC',
    '#D96459',
    '#BCCF02',
    '#AF1523',
    '#cE4ccF',
    '#1E4ccF'
];

const cards = [
    {title:'#01 - Basic', component:<Basic />},
    {title:'#02 - Children', component:<Children>
            <ul>
                <li>Item 1</li>
                <li>Itezm 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </Children>},
    {title:'#03 - Props', component:<Props text="Teste 2" />},
    {title:'#04 - Repeat', component:<Repeat />},
    {title:'#05 - Conditional', component:<Conditional number={5} />},
    {title:'#06 - Componentized Conditional', component:<ConditionalIf number={6} />},
    {title:'#07 - Direct Spread', component:<DirectSpread surname="McClane"/>},
    {title:'#08 - Indirect Spread', component:<IndirectSpread/>},
    {title:'#09 - Input', component:<Input/>},
    {title:'#10 - Counter', component:<Counter pace={10}/>},
    {title:'#11 - Randomize Numbers', component:<Randomize/>}
];

export default () => (
    <div className="App">
    {
        cards.map((card, index) => (
            <Card title={card.title} color={pallete[index]}>{card.component}</Card>
        ))
    }
    </div>
)