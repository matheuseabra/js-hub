import React, { Component } from 'react'
import api from '../../../services/api';
import ProductItem from './ProductItem';
import ProductsDetail from '../ProductsDetail';

export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            products: [],
            productInfo: {},
            page: 1,
        }
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?limit=${page}`);
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const currentPage = page - 1;
        this.loadProducts(currentPage);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;
        const currentPage = page + 1;
        this.loadProducts(currentPage);
    }

    showModal = () => {
        
    }

    hideModal = () => {
        
    }

    render() {
        return (
            <div>
                <ul className="productList">
                    {
                        this.state.products.map(product => (
                            <ProductItem key={product._id} product={product} />
                        ))
                    }
                    {
                     this.state.showModal ? <ProductsDetail />: null    
                    }
                </ul>
                <div className="pagination">
                    <button className="btn">Previous</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        )
    }
}
