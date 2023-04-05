import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path= '/' element={<ItemListContainer greeting={'Todos nuestros productos'} />}/> 
        <Route path= '/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
        <Route path= '/item/:productId' element={<ItemDetailContainer />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
