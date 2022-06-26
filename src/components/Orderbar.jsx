import takeAwayLogo from '../assets/takeAwayLogo.svg';
import dineInLogo from '../assets/dineInLogo.svg';
import '../style/Orderbar.scss';

export default function Orderbar() {
  return (
    <div className='orderbarHeader'>
        <span>
            <h4>START YOUR ORDER</h4>
        </span>       
        <main>
            <div className='takeAway'>
                <img src={takeAwayLogo} alt='take away logo'/>
                <h4>TAKE AWAY</h4>
            </div>
            <div className='or'>
                
                <h4>OR</h4>
            </div>
            <div className='dineIn'>
                <img src={dineInLogo} alt='dine in logo'/>
                <h4>DINE INN</h4>
            </div>
            
        </main>
        
    </div>

  );
}

