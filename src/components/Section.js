import React from 'react'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImg = {backgroundImg}>

            <Zoom>

            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p> 
            </ItemText>

            </Zoom>

            <Buttons>

            <Zoom>

            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>

                { rightBtnText && 
                <RightButton>{rightBtnText}</RightButton>
                }  
            </ButtonGroup>

            </Zoom>

            <DownArrow src = "/images/down-arrow.svg"/>

            </Buttons>
        </Wrap>
    )
}
                 
export default Section

const Wrap = styled.div`

    width : 100vw;
    height : 100vh;
    background-image : url('/images/model-3.jpg');
    background-position : center;
    background-repeat : no-repeat;
    background-size : cover; 
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    background-image : ${props => `url("/images/${props.bgImg}")`};

`

const ItemText = styled.div`

    padding-top : 15vh;
    text-align : center;

`

const Buttons = styled.div`
`

const ButtonGroup = styled.div`

    display : flex;
    margin-bottom : 30px;
    @media (max-width : 768px){
        flex-direction : column;
    }

`

const LeftButton = styled.div`

    background-color : #393c41;
    height : 40px;
    width : 256px;
    color : #ffffff;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 100px;
    opacity : 0.85;
    text-transform : uppercase;
    font-size : 12px;
    cursor : pointer;
    margin : 8px;
`

const RightButton = styled(LeftButton)`

    background : white;
    opacity : 0.55;
    color : black;

`

const DownArrow = styled.img`

    height : 40px;
    animation : animateDown infinite 1.5s;
    overflow-x : hidden;

`