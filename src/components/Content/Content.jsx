import React, { useRef, useState } from 'react';
import './Content.css';
import Button from '../UI/Button/Button'

function Content() {
    const inputProductRef = useRef(null)
    const inputPriceRef = useRef(null)
    const [arrayPurchase, setArrayPurchase] = useState([])

    const addPurchase = () => {
        const copyState = [...arrayPurchase]
        const purchase = {
            product: '',
            price: ''
        }
        if (isNaN(inputProductRef.current.value) && inputPriceRef.current.value > 0) {
            purchase.product = inputProductRef.current.value
            purchase.price = inputPriceRef.current.value
            copyState.push(purchase)
            setArrayPurchase(copyState)
            return
        }
        alert('Некорректный ввод')
    }

    const removePurchase = (index) => {
        const copyState = [...arrayPurchase]
        copyState.splice(index, 1)
        setArrayPurchase(copyState)
    }

    return (
        <div className='content'>
            <div className='container'>
                <div className='content_block'>
                    <div className='content_menu'>
                        <input ref={inputProductRef} className='content_menu_input' type="text" placeholder='Что приобретено?' />
                        <input ref={inputPriceRef} className='content_menu_input' type="text" placeholder='Цена' />
                        <p className='content_menu_currency'>rub</p>
                        <Button
                            text='Добавить'
                            click={addPurchase}
                            backColor='rgb(0, 133, 0)'
                            width='150px'
                        />
                    </div>
                    <div className='content_panel'>
                        {arrayPurchase.map((item, index) => {
                            return (
                                <div className='content_panel_purchase'>
                                    <p>{item.product}</p>
                                    <p>{item.price} RUB</p>
                                    <Button
                                        text='X'
                                        width='75px'
                                        backColor='rgb(165, 0, 0)'
                                        click={() => removePurchase(index)}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content