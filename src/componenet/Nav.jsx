import React from 'react'
import './nav.css'
import {styled} from 'styled-components'

const Header=styled.h3`
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 14px;
    background-color: rgb(36, 36, 36);
    padding: 7px;
    border-radius: 7px;
    &:hover{
        transition: transform 1s;
    transform: rotate(10deg);
    }
`

const Navbar=styled.div`
   width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(70, 70, 70);
    padding: 10px;
`

function Nav() {
  return (
    
   
    <Navbar>
        <Header>Profile</Header>
        <Header>Cart</Header>
        <Header>Order</Header>
        <Header>About</Header>
        <Header>Logout</Header>
    
    </Navbar>

  )
}

export default Nav