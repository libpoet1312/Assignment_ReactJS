import React from "react";
import MyHeader from "../MyHeader/MyHeader";
import {Layout} from "antd";
import Products from "../Products/Products";


const { Content } = Layout;


const SearchResults = (props) => {
    let products = [];
    if(props.location.params) products = props.location.params.products;

    return (
        <Layout>
            <MyHeader/>
            <Content style={{marginTop: '40px'}}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Content>
                        <Products products={products}/>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
};

export default SearchResults;
