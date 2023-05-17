import './product.css'
import { Link } from 'react-router-dom';
import products from '../../products';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { addBasket } from '../../store/reducers/products';
function Product() {
    const dispatch = useDispatch()
    const add = (item) => {
        item.price = parseFloat(item.price);
        dispatch(addBasket(item))
    }
    const countProducts = useSelector(state => state.products.countProductsInBasket)
    const countSumProducts = useSelector(state => state.products.countSumInBasket)
    const location = useLocation();
    const { url, title, price, weight } = queryString.parse(location.search);
    
    console.log(title, price);
    return (
        <div className="product-page">
            <header className="product-page-header">
                <Link to={'/products'} className="header__btn">
                    <img src="/basket_icon.svg" alt="" />
                </Link>
                <div className="header-right">
                    <div className="basketone">
                        <p className="basket__desc">{countProducts} товара<br />
                        на сумму {countSumProducts} ₽</p>
                        <Link to="/basket" className="basket__btn">
                            <img className="basket__icon" src="/supermarket 1.svg" alt="" />
                        </Link>
                    </div>
                    <Link to={'/'} className="btn__logout">Выйти</Link>
                </div>
            </header>
            <div className="product-content">
                <img src={url} alt="" className="product-content__img"/>
                <div className="product-info">
                    <h2 className="info__title">{title}</h2>
                    <p className="info__desc">Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.</p>
                    <div className="info-footer">
                        <div className="footer-left">
                            <div className="footer-left__price">{price} ₽</div>
                            <div className="footer-left__weight">{weight}</div>
                        </div>
                        <a onClick={() => add({ url, title, price, weight })} className="info-footer__btn">В корзину</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;