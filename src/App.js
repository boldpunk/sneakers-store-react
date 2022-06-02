import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{
    fetch ('https://6298043f8d77ad6f750ba4d1.mockapi.io/Items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);


  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]); 
  }

  console.log(cartItems);
  return (
    <div className="wrapper clear">
      
      { cartOpened &&  <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      
      {/* Header */}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="slider d-flex align-center mt-45">
        <div className="slider-content d-flex flex-wrap align-start flex-column pr-10%">
        <p><span>Stan Smith</span>,<br/>Forever!</p>
        <button>Купить</button>
        </div>

      </div>
      {/* Content */}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..."/>
          </div>
        </div>
        {/* Cards */}
        <div className="d-flex flex-wrap">
        
          {items.map((item) => (
            <Card 
            title={item.title}
            price={item.price} 
            imageUrl={item.imageUrl} 
            onFavorite ={() => console.log('Добавили в закладки')}
            onPlus ={(obj) => onAddToCart(obj)}
            />
        ))}
        </div>

      </div>
    </div>
  );
}

export default App;
