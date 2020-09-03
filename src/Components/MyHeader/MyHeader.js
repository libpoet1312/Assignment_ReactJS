import React from 'react'
import {Layout, Input} from "antd";

import {Link} from 'react-router-dom';


import 'antd/dist/antd.css';
import './MyHeader.css';

const { Search } = Input;
const { Header } = Layout;

const MyHeader = props => {

    const onSearch = value => {
        if(!props.searchHandler) return; // disable search button if we reached the results page by typing 'SITE_URL/results'
        if(value)props.searchHandler(value); // disable search button if no input is given
    };



    return (
        <Header className="myheader">
            <div><Link to={'/'}>Nikolaos Pappas</Link></div>
            <Search
                placeholder="Αναζήτηση..."
                onSearch={onSearch}
                style={{ width: 200, height: 50 }}
                allowClear={true}
            />
        </Header>
    )
};

export default MyHeader;
