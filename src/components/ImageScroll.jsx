import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

import '../style/ImageScroll.scss';

export default function ImageScroll() {
  return (
    <div className='imageScroll'>
        <img src={image1} alt='image01'/>
        <img src={image2} alt='image2'/>
        <img src={image3} alt='image3'/>
        <img src={image4} alt='image4'/>
    </div>

  );
}

