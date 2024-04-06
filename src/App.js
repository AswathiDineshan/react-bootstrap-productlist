import './App.css';
import Nav from "./components/Navbar/nav";
import ProductCardList from './components/Product-list/ProductCardList.js';
function App() {
  return (
    <div className="App">
      <Nav/>
      { <ProductCardList/>}
    </div>
  );
}
export default App;
