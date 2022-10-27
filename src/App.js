import Cart from './components/Cart';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Nike Blazer Mid Suede', price: 129.99, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Nike Air Max 270', price: 179.99, imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Nike Mid Blazer Suede', price: 129.99, imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Puma X Aka Boku Future Rider', price: 119.99, imageUrl: '/img/sneakers/4.jpg'},
];

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
        
        {arr.map((obj) => (
          <Cart 
          title={obj.title}
          price={obj.price}
          imageUrl={obj.imageUrl}
        />
        ))}
       </div>
      </div>
    </div>
  );
}

export default App;
