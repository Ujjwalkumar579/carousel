import React from 'react'
import './Card.css'
import car_img from '../../assets/public/images/s60_recharge.jpg'
const Card = (props) => {
    console.log(props.image);
  return (
    <li className="card">
      <span>{props.type}</span>
      <p>
        {props.copy} {" "}
        <span>{props.model}</span>
      </p>
      <img src={props.image} alt="" />
      {/* <p>{props.copy}</p> */}
      <div className="btn_more">
      <button>Learn </button>
      <button>Shop </button>

      </div>
    </li>
  );
}

export default Card