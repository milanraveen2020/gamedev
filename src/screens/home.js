import React from 'react'
import Header from '../components/header/header'
import CodeDetails from '../components/codedetails/CodeDetails'
import MessageBox from '../components/messagebox/MessageBox'
import SearchBar from '../components/searchbar/SearchBar'
import IssuesHeader from '../components/issuesheader/IssuesHeader'
import IssueHolder from '../components/issueholder/IssueHolder'
import Pagination from '../components/pagination/Pagination'
import styled from 'styled-components'

const MainContainer = styled.div`
max-width: 1320px ;
margin: auto;
padding: 15px ;
`

const Home = () => {

    return (
        <>
            <MainContainer>
                <Header />
                <CodeDetails />
                <MessageBox />
                <SearchBar />
                <IssuesHeader />
                <IssueHolder />
                <Pagination />
            </MainContainer>
        </>
    )
}

export default Home
