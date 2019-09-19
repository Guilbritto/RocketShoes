import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({
      products: data,
    });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };
  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(element => (
          <li key={element.id}>
            <img src={element.image} />
            <strong>{element.title}</strong>
            <span>{element.priceFormatted} </span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(element)}
            >
              <div>
                <MdAddShoppingCart color="#FFF" size={16} />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
