import { useEffect, useState } from 'react'
import { ReactDOM } from 'react';
import './App.css'
import Card from './Components/Card/Card'
import items from './assets/public/api/cars.json';
// import image from '/src/assets/public/images/s60_recharge.jpg'
function App() {

  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);
  
  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems])
  
  const handleAnimationEnd = () => {
    if(moveClass === 'prev'){
      shiftNext([...carouselItems]);
    }else if(moveClass === 'next'){
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }
  
  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }
  
  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }

  console.log(carouselItems[0].imageUrl);

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass("next")} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass("prev")} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {carouselItems.map((t, index) => (
          <Card
            key={t.copy + index}
            icon={t.icon}
            copy={t.modelName}
            image={`/src/assets/public${t.imageUrl}`}
            type ={t.bodyType}
            model ={t.modelType}
          />
        ))}
      </ul>
    </div>
  );
  
}

export default App
