import React from 'react';

// "category": "Sporting Goods",
// "price": "$49.99",
// "stocked": true,
// "name": "Football"


class ProductRow extends React.Component {


    render() {
        return (

                 <tr>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.price}</td>
                </tr>

        )

    }
}

export default ProductRow;