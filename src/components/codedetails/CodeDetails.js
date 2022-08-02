import React from 'react'
import styled from 'styled-components'
import { LeftOutlined, RightOutlined, InfoCircleOutlined, PullRequestOutlined } from '@ant-design/icons';

const Code = styled.div`
display:inline-block ;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #8A8C98;
margin-right: 20px ;
`
const CodeContainer = styled.div`
padding: 10px 0 ;
`

const Span = styled.span`
background: #2E2F3A;
border-radius: 8px;
font-weight: 400;
font-size: 16px;
color:#fff ;
padding: 2px 5px ;
`

const CodeDetails = () => {
    return (
        <>
            <CodeContainer>
                <Code>
                    <LeftOutlined />
                    <RightOutlined />Code
                </Code>
                <Code>
                    <InfoCircleOutlined /> Issues <Span>889</Span>
                </Code>
                <Code>
                    <PullRequestOutlined /> Pull requests <Span>349</Span>
                </Code>
            </CodeContainer>
        </>
    )
}

export default CodeDetails