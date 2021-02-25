import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// "category": "Sporting Goods",
// "price": "$49.99",
// "stocked": true,
// "name": "Football"

class FilterableProductTable extends React.Component {

    state = {
        products: this.props.products,
        search: '',
        checkBox: false
    }

    setQuery = (name, value) => {
        this.setState(() => ({
            [name]: value,
          }));
      };

    filterProducts() {
    return this.props.products.filter((product) => {
        return (  
        product.name.toLowerCase().includes(this.state.search.toLowerCase()) &&
        (this.state.checkBox ? product.stocked : true)
        );
    });
    }

    render() {

        const displayProducts = this.filterProducts();

        return (

            <div> 
                <SearchBar 
                    setQuery={this.setQuery} 
                    search={this.state.search} 
                    checkBox={this.state.checkBox}
                    />
                <ProductTable 
                    products={displayProducts}
                />
            </div>
        )

    }
}

export default FilterableProductTable;