import React from 'react'
import 'react-bootstrap'
<<<<<<< Updated upstream
import 'bootstrap'
=======
import 'ref'
>>>>>>> Stashed changes

export default function Rating({value,text,color}) {
  return (
    <div className='rating'>
        <span>
<<<<<<< Updated upstream
            <i style={{Color:clr}} className={
                value >= 1 ? 'fas fa-star':
                 value >= 0.5 ?'fas fa-star-half-alt' :
                  'far fa-star'
            } ></i>
           <i className='far'></i>
        </span>
        <span>
            <i style={{Color:clr}}  className={
=======
            <i  style={color} className={
                value >=1 ?
                'fas fa-star'
                : value >= 0.5
                ?'fas fa-star-half-alt'
                :'far fa-star'
            }>
            </i>
            <span>{value}</span>
        </span>
        <span>
            <i Style={color} className={
>>>>>>> Stashed changes
                value>=2 ?
                'fas fa-star'
                : value >= 1.5
                ?'fas fa-star-half-alt'
                :'far fa-star'
            }>
            </i>
        </span>
        <span>
            <i Style={color} className={
                value>=3 ?
                'fas fa-star'
                : value >= 2.5
                ?'fas fa-star-half-alt'
                :'far fa-star'
            }>
            </i>
        </span>
        <span>
            <i Style={color} className={
                value>=4 ?
                'fas fa-star'
                : value >= 3.5
                ?'fas fa-star-half-alt'
                :'far fa-star'
            }>
            </i>
        </span>
        <span>
            <i Style={color} className={
                value>=5 ?
                'fas fa-star'
                : value >= 4.5
                ?'fas fa-star-half-alt'
                :'far fa-star'
            }>
            </i>
<<<<<<< Updated upstream
            
         </span>
        
        <span>{value} Rating from {text} Reviews</span>
=======
        </span>
>>>>>>> Stashed changes
    </div>
  )
}
