//import image1 from '../assets/image1.jpg';
import star from '../assets/cardStar.svg';

import '../style/dishCard.scss';

export default function DishCard(props) {
  

  return (  
    
      <div className='dishCard'>
        <img className='cardImg' src={require('../assets/card/'+props.img)} alt='Card hero'/>
        <h5>{props.item}</h5>
        <span>
        <img className='star' src={star} alt='star reating'/>
        <img className='star' src={star} alt='star reating'/>
        <img className='star' src={star} alt='star reating'/>
        <img className='star' src={star} alt='star reating'/>
        <img className='star' src={star} alt='star reating'/>
        </span>
        <p>$ {props.price.toFixed(2)}</p>
        <button>Add to Order</button>
    </div>
  

  );
}

