import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
text-align:right ;
padding-top: 10px ;
padding-bottom: 10px ;
span{
    width: 30px ;
    height: 30px ;
    display: inline-flex ;
    margin-right: 5px ;
    background: #2E2F3A;
    align-items: center;
    justify-content:center ;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    border-radius: 5px;
}
span:hover{
    cursor: pointer;
}

span[type=active]{
    background:#FA8A1E;
}

span[type=space]{
    background:transparent;
}
`

const Pagination = () => {
    return (
        <>
            <PaginationContainer>
                <span>{`<`}</span>
                <span type='active'>1</span>
                <span>2</span>
                <span>3</span>
                <span type='space'>{`....`}</span>
                <span>10</span>
                <span>11</span>
                <span>{`>`}</span>
            </PaginationContainer>

        </>
    )
}

export default Pagination