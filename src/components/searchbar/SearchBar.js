import React from 'react'
import styled from 'styled-components'
import { Select, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const onChange = (value) => {
    console.log(`selected ${value}`);
};

const onSearch = (value) => {
    console.log('search:', value);
};

const SearchBarContainer = styled.div`
padding: 15px 0 ;
`

const SelectSearch = styled(Select)`
    background-color:#8A8C98;
    border-radius: 10px 0px 0px 10px !important;
    min-width: 199px ;
    /* border: 1px solid #8A8C98 !important; */
.ant-select-selector{
    background-color: transparent !important;
    border: none !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    color: #FFFFFF !important;
}
input{
    font-weight: 400 !important;
    font-size: 16px !important;
    color: #FFFFFF !important;
}

`
const SearchInput = styled.div`
display: inline-block;
vertical-align:top ;
width: calc(100% - 200px);
.ant-input-group-addon{
    background: transparent !important ;
    border-radius: 0 !important ;
    border-color: #8A8C98 !important;
    border-right: 0 !important ;
}
svg{
    fill:#8A8C98 !important;
}
input{
    background: transparent !important ;
    border-radius: 0px 10px 10px 0px !important;
    border-color: #8A8C98 !important;
    color: #fff !important;
    border-left: 0 !important;
    width:100% !important;
}
`

const selectBefore = (
    <>
        <SearchOutlined />
    </>
);

const SearchBar = () => {
    return (
        <>
            <SearchBarContainer>
                <SelectSearch
                    showSearch
                    placeholder="Filters"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="Filter 1">Filter 1</Option>
                    <Option value="Filter 2">Filter 2</Option>
                    <Option value="Filter 3">Filter 3</Option>
                </SelectSearch>

                <SearchInput>
                    <Space
                        style={{
                            width: "100%"
                        }}
                        direction="vertical">
                        <Input
                            style={{
                                width: "100%"
                            }}
                            addonBefore={selectBefore} defaultValue="is:issue is:open" />

                    </Space>
                </SearchInput>
            </SearchBarContainer>
        </>
    )
}

export default SearchBar