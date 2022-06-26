import Navbar from './components/Navbar';
import Orderbar from './components/Orderbar';
import DishCard from './components/DishCard';
//import ImageScroll from './components/ImageScroll';
import './style/App.scss';
//import Card from './components/Card';
import data from './components/data';

function App() {
  const carddata=data.map(value =>{
    return <DishCard
    key={value.id}
    img={value.img}
    item={value.item}
    price={value.price}
    />
  })
  
  

  return (
    <div className="App">
      <Navbar />
      <Orderbar />
      <section className='dishCards'>
        {carddata}
        
      </section><section className='dishCards'>
        {carddata}
      </section>
      
    
      {/* <ImageScroll /> */}
        
    </div>
  );
}

export default App;
