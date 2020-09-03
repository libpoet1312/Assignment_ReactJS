import React, { Component } from 'react';

import {Layout, Menu, Spin,} from 'antd';
import './Home.css';
import {API_URL, TOKEN} from "../../config";
import axios from "axios";
import MyHeader from "../../Components/MyHeader/MyHeader";
import Tags from "../../Components/Tags/Tags";
import Products from "../../Components/Products/Products";

import { LoadingOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;



class Home extends Component {


    state = {
        categories: [],
        products: [],
        categoryId: 'all',
        tags: [],
        order: 'random',
        selectedTags : [],
    };

    componentDidMount() {
        this.fetchCategories();
        this.fetchProducts();
    }

    fetchCategories = () => {
        let config = {
            headers: {
                'Authorization': TOKEN,
            }
        };

        axios.get(API_URL+'/categories', config).then( response => {
            const categories = response.data.sort((a, b) => a.index - b.index); //sorting categories by index
            this.setState({categories: categories})
        }).catch( error => console.error(error))
    };

    fetchProducts = () => {
        let config = {
            headers: {
                'Authorization': TOKEN,
            }
        };

        axios.get(API_URL+'/products', config).then( response => {
            // we firstly store the received products
            // with no ordering!
            this.setState({products: response.data});

            // figure out which products include tags
            let productsWithTags = response.data.filter(prod => prod.tags.length>0);

            let tags=[];

            // iterate through products with tags, and if it is not included in tags array, add it!
            productsWithTags.map( prod => {
                prod.tags.map( ta => {
                    if(!tags.includes(ta))tags.push(ta);
                    return true;
                });
                return true;
            });

            this.setState({tags}) // store the tags in state

        }).catch( error => console.error(error))
    };

    renderCategories = () => {
        let cat1 = [<Menu.Item onClick={() => this.setProductsByCategory('all')} key="0">Όλα τα προιόντα</Menu.Item>,];
        const cat = this.state.categories.map(cat=> {
            return <Menu.Item onClick={() => this.setProductsByCategory(cat.id)} key={`${cat.index}`}>{cat.name}</Menu.Item>
        });

        return cat1.concat(cat);
    };

    setProductsByCategory = (categoryId) => {
        this.setState({categoryId})
    };

    setOrder = (order) => {
        // console.log(order);
        this.setState({order: order})
    };

    setTags = (selectedTags) => {
        if(selectedTags.length===0) this.setState({selectedTags: []}); // if no tags selected, reset state
        this.setState({selectedTags})
    };

    searchHandler = value => {
        // value received from search form

        let products = [...this.state.products];

        // search through products for given value
        products = products.filter(prod => {
            return prod.name.toLowerCase().includes(value.toLowerCase()) ||
                prod.description.toLowerCase().includes(value.toLowerCase()) ||
                prod.id.includes(value);
        });

        // redirect to result page!
        this.props.history.push({
            pathname: '/results',
            params: {
                products
            }
        });
    };

    // function that will handle all filtering/ordering of products,
    // based on our selections (tags/category/order).
    filterProducts = () => {
        let products = [...this.state.products]; // immutable copy

        // order by
        if(this.state.order==='ascending'){
            // ascending
            products = products.sort((a, b) => a.price - b.price);
        }else if(this.state.order==='descending'){
            // descending
            products = products.sort((a, b) => b.price - a.price);
        }else{
            products = this.state.products;
        }

        // filter by Tags
        // if the user doesnt select any tags,
        // all products will be shown

        if(this.state.selectedTags.length>0){


            products = products.filter( prod => {

                let inc;
                // iterate through the selected tags
                // if selected tags includes in the tags of a product
                // we return true
                // otherwise we return false
                for(let i=0; i<this.state.selectedTags.length; i++){
                    inc = prod.tags.includes(this.state.selectedTags[i]);
                    if(inc) return true; // if found exit for and return true!
                }
                return false;

            });
        }






        // filter by Category
        const categoryId = this.state.categoryId;
        if(categoryId==='all') return products;
        else {
            products = products.filter( prod => {
                return categoryId === prod.categoryId
            });
            console.log(products);

            return products;
        }


    };



    render() {
        const antIcon = <LoadingOutlined style={{ fontSize: 55 }} spin />;

        if(!this.state.categories.length>0 || !this.state.products.length>0) return (
            <div className="spinnerContainer">
                <Spin indicator={antIcon} />
            </div>
        );

        let menu = (
            <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                style={{ height: '100%' }}
            >
                {this.renderCategories()}
            </Menu>
        );

        let products = this.filterProducts();

        return (
            <Layout>

                <MyHeader  searchHandler={(value)=>this.searchHandler(value)} props={this.props}/>

                <Content style={{marginTop: '40px'}}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider style={{
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                               className="site-layout-background" >
                            {menu}
                        </Sider>


                        <Content className="Content">

                            <Tags
                                tags={this.state.tags}
                                setTags={selectedTags=>this.setTags(selectedTags)}
                                setOrder={(order)=> this.setOrder(order)}
                            />



                            <Products products={products}/>

                        </Content>
                    </Layout>
                </Content>

                <Footer style={{ textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default Home;
