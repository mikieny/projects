import Card from '../../components/elements/card';
import './products.css'
import './reset.css'
import { addBasket } from '../../store/reducers/products';
import products from '../../products.js';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';



function Products() {

    const dispatch = useDispatch()
    const add = (item) => {
        dispatch(addBasket(item))
    }
    const countProducts = useSelector(state => state.products.countProductsInBasket)
    const countSumProducts = useSelector(state => state.products.countSumInBasket)
    return (
        
        <div className="container" style={{fontFamily: 'Montserrat, sans-serif'}}>
            <div className="products">
                <header className="header">
                    <h1 className='title-page'>Наша продукция</h1>
                    <div className="basket-right">
                        <div className="basketone">
                            <p className="basket__desc">{countProducts} товара<br />
                            на сумму {countSumProducts} ₽</p>
                            <Link to="/basket" className="basket__btn">
                                <img className="basket__icon" src="./supermarket 1.svg" alt="" />
                            </Link>
                        </div>
                        <Link to={'/'} href="" className="btn__logout">Выйти</Link>
                    </div>
                </header>
                <div className="cards">
                    {products.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                url={item.url}
                                title = {item.title}
                                description = {item.description}
                                price= {item.price}
                                weight= {item.weight}
                                add={() => add(item)}
                                link={{
                                    pathname: `/product/${item.id}`,
                                    state: {
                                        url: item.url,
                                        title: item.title,
                                        price: item.price,
                                        weight: item.weight
                                    }
                                    }}
                            />
                        )
                    })}
                    
                </div>
            </div>
            
        </div>

        
    )
}

export default Products;
