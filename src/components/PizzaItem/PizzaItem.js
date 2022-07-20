import Pizza from '../../resources/img/image2.png';

export default function PizzaItem() {
    return (
        <>
            <li className="pizza-block">
                <img className="pizza-block__img" src={Pizza} alt="pizza" />
                <h3 className="pizza-block__title">Чизбургер-пицца</h3>
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
                    <div className="pizza-block__price">от 395 ₽</div>
                    <button className="pizza-block__btn">
                        <p className="pizza-block__text">Добавить</p>
                        <p className="pizza-block__count">4</p>
                    </button>
                </div>
            </li>

        </>
    )
}
