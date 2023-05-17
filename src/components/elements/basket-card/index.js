import { Link } from 'react-router-dom';
import './card.css'

const CardBasket = ({url, title, price, deleteItem}) => {
    return (
        <div className='card-basket'>
            <img className='card__img' src={url} alt="" />
            <div className="card__title">{title}</div>
            <div className="card-right">
                <p className="card-basket__price">{price}</p>
                <Link onClick={deleteItem} href="" className="card-basket__btn"><img className='card-right__img' src='./card_icon.svg' alt="" /></Link>
            </div>
        </div>
    );
};

export default CardBasket;