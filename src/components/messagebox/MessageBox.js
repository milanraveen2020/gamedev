import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
background: #2E2F3A;
border-radius: 10px;
padding:15px ;
text-align: center;

h2{
font-weight: 500;
font-size: 24px;
line-height: 29px;
color:#fff ;
}
p{
    font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #8A8C98;

}

`

const MessageBox = () => {
    return (
        <>
            <Message>
                <h2>
                    Want to contribute to org/vulnerable-app?
                </h2>
                <p>If you have a bug or an idea, read the contribution guidelines before opening an issue.
                    If you’re ready to tackle some open issues, we’ve collected some good first issues for you</p>
            </Message>
        </>
    )
}

export default MessageBox