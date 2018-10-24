import React from 'react';

const ProductItem = (props) => {

    const { title, description, url } = props.product;
    return (
        <li>        
            <h3>{title}</h3>
            <p>{description}</p>
            <a target="_blank" rel="noopener noreferrer" href={url}> Visit</a> 
        </li>
    );
}

export default ProductItem;
