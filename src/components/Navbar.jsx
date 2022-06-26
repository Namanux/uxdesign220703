import breezeLogo from '../assets/breezeLogo.svg';
import phoneLogo from '../assets/phoneLogo.svg';
import '../style/Navbar.scss';

export default function Navbar() {
  return (
    <div className='header'>
        <span>
            <div></div>
            <div></div>
            <div></div>
        </span>       
        <main>
            <img src={breezeLogo} alt='BreezeLogo' />
            <h1>BREEZE</h1>
          </main>
          <input placeholder='Search'></input>
        <img src={phoneLogo} alt='PhoneLogo'/>
    </div>

  );
}

