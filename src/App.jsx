import React from 'react';

//CSS
import './assets/css/App.css';

//Components
import Basic from './components/Basic.jsx';
import Props from './components/Props.jsx';
import Children from './components/Children.jsx';
import Card from './components/Card.jsx';
import Repeat from './components/Repeat.jsx';
import Conditional from './components/Conditional.jsx';
import ConditionalIf from './components/ConditionalIf.jsx';

export default () =>
    <div className="App">
        <Card title="#01 - Basic"><Basic /></Card>

        <Card title="#02 - Children">
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

        <Card title="#03 - Props"><Props text="Teste 2" /></Card>

        <Card title="#04 - Repeat"><Repeat /></Card>

        <Card title="#05 - Conditional"><Conditional number={5} /></Card>

        <Card title="#06 - Componentized Conditional"><ConditionalIf number={6} /></Card>
    </div>