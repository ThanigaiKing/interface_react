import React from 'react'

const Products = (productItems) => {
  return (
    <div className="products">
       { productItems.map((productItem)=>{ return(
    <div className="card">
        <div>
            <img className="product-image" 
            src={productItem.image} 
            alt={productItem.name}/>
        </div>
        <div>
            <h3 className={productItem.name}>
                {productItem.name}
            </h3>
        </div>
        <div className="product-price">
              {productItem.price}
        </div>
        <div>
            <button className="product-add-button">Add to cart</button>
        </div>
    </div>
       )})}
    </div>
  )
}

export default Products