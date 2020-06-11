import React from 'react'

const [SizeButton, Option] = [
    ({size}) => <button className="size">{size}</button>,
    ({name}) => <option>{name}</option>
]

function ListItem ({ image, name, discount_qty, discount_val }) {
    const [n, f] = String((discount_qty * discount_val).toFixed(2)).split('.')
    return (
        <div className="item">
            <img 
                src={ "./images/" + image + '-unsplash.jpg' } 
                alt={ image }
            />
            <p className="caption">
                { name }
            </p>
            <div className="bar"></div>
            <p className="price">
                <small>$</small>
                { n }
                <small>{ '.' + f }</small>
            </p>
            {
                discount_qty && discount_val ?
                <p className="discount">
                    { 'or ' + discount_qty + ' x $' + discount_val }
                </p> : ''
            }
            <button className="add-to-cart">
                Add to cart
            </button>
        </div>
    )
}

function StarButton ({ count }) {
    return (
        <div className="star-stuff">
            <button id="star">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.053" height="12.956" viewBox="0 0 14.053 12.956">
                        <path id="Path_11" data-name="Path 11" d="M14962.708,1720.052l-1.8,4.584h-5.383l3.889,3.688-1.1,4.684,4.391-2.691,4.281,2.691-1-4.684,3.588-3.688h-4.984Z" transform="translate(-14955.528 -1720.051)"/>
                    </svg>
                </span>
                Star
            </button>
            <span id="count">{ count }</span>
        </div>
    )
}


export {
    Option,
    SizeButton,
    StarButton,
    ListItem
}
