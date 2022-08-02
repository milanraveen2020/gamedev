import React from 'react'
import styled from 'styled-components'
import { Select } from 'antd';

const { Option } = Select;

const onChange = (value) => {
    console.log(`selected ${value}`);
};

const onSearch = (value) => {
    console.log('search:', value);
};

const SelectSearch = styled(Select)`
    background-color:transparent;
    border-radius: 10px 0px 0px 10px !important;
    /* border: 1px solid #8A8C98 !important; */
.ant-select-selector{
    background-color: transparent !important;
    border: none !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    color: #FFFFFF !important;
}
svg{
    fill:#fff !important;
}
`

const IssuesHeaderContainer = styled.div`
display:flex;
justify-content: space-between;
padding-bottom:15px ;
align-items:center ;
`
const OpenLabel = styled.label`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #FA8A1E;
margin-right: 15px ;
`

const ClosedLabel = styled.label`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #43AF67;
margin-right: 15px ;
`

const IssuesHeader = () => {
    return (
        <>
            <IssuesHeaderContainer>
                <div className="labels">
                    <OpenLabel>30 Open </OpenLabel>
                    <ClosedLabel>531 Closed</ClosedLabel>
                </div>
                <div className="filters">
                    <SelectSearch
                        showSearch
                        placeholder="Author"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="Filter 1">Filter 1</Option>
                        <Option value="Filter 2">Filter 2</Option>
                        <Option value="Filter 3">Filter 3</Option>
                    </SelectSearch>
                    <SelectSearch
                        showSearch
                        placeholder="Label"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="Filter 1">Filter 1</Option>
                        <Option value="Filter 2">Filter 2</Option>
                        <Option value="Filter 3">Filter 3</Option>
                    </SelectSearch>
                    <SelectSearch
                        showSearch
                        placeholder="Assignee"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="Filter 1">Filter 1</Option>
                        <Option value="Filter 2">Filter 2</Option>
                        <Option value="Filter 3">Filter 3</Option>
                    </SelectSearch>
                    <SelectSearch
                        showSearch
                        placeholder="Sort"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                        <Option value="Filter 1">Filter 1</Option>
                        <Option value="Filter 2">Filter 2</Option>
                        <Option value="Filter 3">Filter 3</Option>
                    </SelectSearch>
                </div>
            </IssuesHeaderContainer>
        </>
    )
}

export default IssuesHeader