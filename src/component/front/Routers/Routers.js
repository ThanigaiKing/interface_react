import React from 'react'
import Products from '../Products/Products'
import  {Route,Routes} from 'react-router-dom'
import Signup from '../Signup/signup'
const Routers = (productItems) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact>
          <Products productItems={productItems}/>
        </Route>
        <Route path="/signup" exact>
          <Signup/>
        </Route>
        <Route path="/cart exact" exact>
          <Cart/>
        </Route>
      </Routes>
    </div>
  )
}

export default Routers