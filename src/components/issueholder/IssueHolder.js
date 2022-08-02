import React from 'react'
import styled from 'styled-components'
import { InfoCircleOutlined } from '@ant-design/icons';


const IssueContainer = styled.div`
background: linear-gradient(133.75deg, #393C4B 17.42%, #343844 85.96%);
border-top: 5px solid #616161;
border-radius: 10px;
padding: 10px 15px ;
display:flex ;
justify-content:space-between ;
margin-bottom: 10px ;

h2{
font-weight: 500;
font-size: 20px;
line-height: 29px;
margin-bottom:0 ;
margin-left:5px ;
color:#fff ;
display:inline-block ;
vertical-align: middle ;
}
p{
    margin-bottom: 0;
    font-size: 14px;
    color: #8A8C98;
    margin-left: 20px;
}

:hover{
    border-color:#FA8A1E;
}
`

const ErrorBg = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 17px;
padding: 3px 15px ;
border-radius: 10px;
`
const MinorSpan = styled(ErrorBg).attrs({
    type: 'minor',
})`
background: #FFCF97;
`


const IssueHolder = () => {
    return (
        <>
            <IssueContainer>
                <div>
                    <InfoCircleOutlined style={{ color: "#43AF67" }} /> <h2>SQL Injection</h2>
                    <p>#1761 opened yesterday by bragery</p>
                </div>
                <div>
                    <MinorSpan type='minor'>minor</MinorSpan>
                </div>
            </IssueContainer>
        </>
    )
}

export default IssueHolder