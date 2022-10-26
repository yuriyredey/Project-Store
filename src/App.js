import Cart from './components/Cart';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
     <Drawer />
    <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Our Sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"/>
          <input placeholder="Search..."/>
        </div>
       </div>
       <div className="d-flex">
        <Cart />
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
          <h5>Nike Air Max 270</h5>
          <div className="d-flex justify-betwen align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>179.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-betwen align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>189.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
          <h5>Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-betwen align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>139.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/5.jpg" alt="Sneakers"/>
          <h5>Under Armor Curry B</h5>
          <div className="d-flex justify-betwen align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>219.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
