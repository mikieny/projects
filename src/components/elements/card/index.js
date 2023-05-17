// Native css
import './card.css'
import { Link } from 'react-router-dom';
import products from '../../../products';


function Card({key, id, url, title, description, price, weight, add, link}) {
    const handleSelect = () => {
        add()
    }

    return (
        <Link to={`/products/${id}?url=${url}&title=${title}&price=${price}`} className="card">
            <div className="card-content">
                <img className="card__preview" src={url}></img>
                <div className="title">{title}</div>
                <div className="desc-footer">
                    <p className="card__description">{description}</p>
                </div>
                <div className="card-footer">
                        <div className="card-pricew">
                            <div className="card__price">{price}₽</div>
                            <div className="card__weight">{weight}</div>
                        </div>
                        <Link onClick={handleSelect} href="" className="card__btn"><img src="/Group 65.svg" alt="" /></Link>
                </div>
            </div>
        </Link>
        
    )
}


export default Card;


