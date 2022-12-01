import React from 'react'
import data from './components/back/data/data'
import Header from './components/front/header/header'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/front/Routers/Routers'
const App = () => {
 const {productItems}=data;
  return (
    <div>
      
      <Router>
        <Header/>
        <Routes productItems={productItems} />
      </Router>
      
    </div>
  )
}

export default App