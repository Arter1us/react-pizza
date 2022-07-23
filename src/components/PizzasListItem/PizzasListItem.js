export default function PizzasListItem({ title, imageUrl, price }) {
    return (
        <>
            <li className="pizza-block">
                <img className="pizza-block__img" src={imageUrl} alt="pizza" />
                <h3 className="pizza-block__title">{title}</h3>
                <div className="pizza-block__selectors">
                    <div className="pizza-block__types">
                        <div className="pizza-block__type pizza-block__type_active">тонкое</div>
                        <div className="pizza-block__type">традиционное</div>
                    </div>
                    <div className="pizza-block__size">
                        <div className="pizza-block__type">26 см.</div>
                        <div className="pizza-block__type pizza-block__type_active">30 см.</div>
                        <div className="pizza-block__type">40 см.</div>
                    </div>
                </div>
                <div className="pizza-block__footer">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button className="pizza-block__btn">
                        <p className="pizza-block__text">Добавить</p>
                        <p className="pizza-block__count">4</p>
                    </button>
                </div>
            </li>
        </>
    )
}
