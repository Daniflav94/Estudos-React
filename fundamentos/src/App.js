// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

// styles
import './App.css';
import ImagemNatureza from "./assets/jordan-whitt-qGQNmBE7mYw-unsplash.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';


function App() {
  const [username] = useState("Maria")
  return (
    <div className="App">
      <h1 className='titulo'>Fundamentos React</h1>
      <div>
        <img src="/henry-be-IicyiaPYGGI-unsplash.jpg" alt="" />
      </div>
      <div>
        <img src={ImagemNatureza} alt="" />
      </div>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={username}/>
      {/*comentário*/}
    </div>
    
  );
}

export default App;
