import './card.css'

function Cardtwo({url, title, description, price, weight}) {
    return (
        <div className="card">
            <div className="card-content">
                <img className="card__preview" src={url}></img>
                <h2 className="title">{title}</h2>
                <div className="desc-footer">
                    <p className="card__description1">{description}</p>
                    <div className="card-footer">
                        <div className="card-pricew">
                            <div className="card__price">{price}</div>
                            <div className="card__weight">{weight}</div>
                        </div>
                        <a href="" className="card__btn"><img src="/Group 65.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cardtwo;