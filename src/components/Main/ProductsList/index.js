import React, { Component } from 'react'
import api from '../../../services/api';
import ProductItem from './ProductItem';

export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productInfo: {},
            page: 1
        }
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
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

    

    render() {
        const products = this.state.products;
        return (
            <div>
                <ul className="productList">
                    {
                        this.state.products.map(product => (
                            <ProductItem key={product._id} product={product} />
                        ))
                    }
                </ul>
                <div className="pagination">
                    <a className="btn">Previous</a>
                    <a className="btn btn-primary">Next</a>
                </div>
            </div>
        )
    }
}
