import React from 'react'
import { List, } from 'antd';

const Products = (props) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.products}
            style={{margin: 20}}
            renderItem={item => (
                <List.Item
                    extra={
                        <img
                            width={200}
                            height={200}
                            alt="logo"
                            src={item.image}
                        />
                    }
                >
                    <List.Item.Meta
                        title={item.name}
                        description={item.description}

                    />
                    <span style={{margin: 25, fontWeight: 'bold'}}>{item.price}$</span>
                </List.Item>
            )}
        />
    )
};

export default Products
