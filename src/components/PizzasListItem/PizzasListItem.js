export default function PizzasListItem({ handleClick, imageUrl, title, types, sizes, price }) {

    const typeNames = ['тонкое', 'традиционное'];

    return (
        <>
            <li className="pizza-block">
                <div className="pizza-block__wrapper">
                    <img className="pizza-block__img" src={imageUrl} alt="pizza" />
                    <h3 className="pizza-block__title">{title}</h3>
                    <div className="pizza-block__selectors">
                        <ul className="pizza-block__types">
                            {types.map((type) => {
                                return <li
                                    key={type}
                                    className="pizza-block__type">{typeNames[type]}</li>
                            })}
                        </ul>
                        <ul className="pizza-block__size">
                            {sizes.map((size) => {
                                return <li
                                    key={size}
                                    className="pizza-block__type">{size} см.</li>
                            })}
                        </ul>
                    </div>
                    <div className="pizza-block__footer">
                        <div className="pizza-block__price">от {price} ₽</div>
                        <button
                            className="pizza-block__btn"
                            onClick={handleClick}>
                            <p className="pizza-block__text">Добавить</p>
                            <p className="pizza-block__count">4</p>
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}
