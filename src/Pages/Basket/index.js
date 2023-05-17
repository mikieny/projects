import './basket.css'
import CardBasket from '../../components/elements/basket-card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/reducers/products';
const Basket = () => {
    const dispatch = useDispatch()
    const deleteItemFromBasket = (item) => {
        dispatch(deleteItem(item))
    }
    const basket = useSelector(state => state.products.basket)
    const countSumProducts = useSelector(state => state.products.countSumInBasket)
    console.log(basket);
    return (
        <div className='basket' style={{fontFamily: 'Montserrat, sans-serif'}}>
            <header className="basket-header">
                <div className="header-left">
                    <Link to="/products" className="basket_btn"><img src="./basket_icon.svg" alt="" /></Link>
                    <h2 className="basket__title">Корзина с выбранными товарами</h2>
                </div>
                <div className="header-right">
                    <Link to={'/'} className="btn__logout">Выйти</Link>
                </div>
            </header>
            <main className="cards-basket">
                {basket.map(item => {
                    return (
                        <CardBasket 
                        url={item.url}
                        title={item.title}
                        price={item.price}
                        deleteItem={() => deleteItemFromBasket(item)}
                        />
                    )
                })}
                
                
            </main>
            <footer className="basket-footer">
                <div className="footer-left">
                    <p className="footer__description">Заказ на сумму:</p>
                    <p className="basket__price">{countSumProducts} ₽</p>
                </div>
                <a href="" className="basket__button">Оформить заказ</a>
            </footer>
        </div>
    );
};

export default Basket;