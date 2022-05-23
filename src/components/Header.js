import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="logo"/>  
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>

            <RightMenu> 
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick= {()=>setBurgerStatus(true)}>Menu</a>
            </RightMenu>

            <BurgerNav show={burgerStatus}>

                    <CloseWrap>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                    </CloseWrap>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Cyber Truck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`

    min-height : 60px;
    position :fixed;
    background : transparent;
    display : flex;
    justify-content : space-between;
    padding : 0 20px;
    align-items : center;
    left : 0;
    top : 0;
    right : 0;
    z-index : 16;

`
const Menu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex : 1;
    
    a{
        font-weight : 600;
        padding : 0 10px;
        flex-wrap : no-wrap;
    }

    @media (max-width : 900px){
        display : none;
    }

`
const RightMenu = styled.div`

    a{
        font-weight : 600;
        padding : 0 10px;
    }

`

const BurgerNav = styled.div`

    position : fixed;
    right : 0;
    top : 0;
    bottom : 0;
    background : white;
    width : 300px;
    z-index : 100;
    list-style : none;
    padding : 20px;
    display : flex;
    flex-direction : column;
    text-align : start;
    transition : transform 0.3s ease-in-out;
    transform : ${props => props.show ? 'translateX(0)': 'translateX(100%)'};

    li{
        padding : 15px 0;
        border-bottom : 1px solid rgba(0,0,0,.2);

        a{
            font-weight : 600;
        }
    }

`

const CloseWrap = styled.div`

    display : flex;
    justify-content : flex-end;

`

const CustomClose = styled(CloseIcon)`

    cursor : pointer;
`