import React from "react";
import {Layout} from "antd";
import MyHeader from "../MyHeader/MyHeader";

const { Content } = Layout;

const Error404 = (props) => {
    return (
        <Layout>
            <MyHeader/>
            <Content style={{marginTop: '40px'}}>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Content>
                        <h1>Error 404</h1>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
};

export default Error404;
