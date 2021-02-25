import React from 'react';
import ProductRow from './ProductRow';
import { v4 as uuid } from "uuid";

// "category": "Sporting Goods",
// "price": "$49.99",
// "stocked": true,
// "name": "Football"

class ProductTable extends React.Component {


    render() {
        const tableRows = this.props.products.map(product => {
            product.id = uuid();
            return <ProductRow key={product.id} product={product} />
        })

        return (

            <div> 
                <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
                </table>
            </div>
        )

    }
}

export default ProductTable;