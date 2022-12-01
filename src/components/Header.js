import React from 'react'
import { Container,Navbar,FormControl } from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Navbar>
        <Container>
           <Navbar.Brand>
            <a href="/">Shopping cart</a>
           </Navbar.Brand>
           <Navbar.Text className="search">
             <FormControl style={{width:500}} placeholder="Search a product" className="m-auto"/>
           </Navbar.Text>
        </Container>
    </Navbar>
    </Navbar>
  )
}

export default Header