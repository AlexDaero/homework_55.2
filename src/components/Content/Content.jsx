import React, { useEffect, useRef, useState } from 'react';
import './Content.css';
import Button from '../UI/Button/Button'

function Content() {
    const inputProductRef = useRef(null)
    const inputPriceRef = useRef(null)
    const [arrayPurchase, setArrayPurchase] = useState([])
    const [totalSum, setTotalSum] = useState({ result: 0 })

    const addPurchase = () => {
        const copyState = [...arrayPurchase]
        const purchase = {
            product: '',
            price: 0
        }
        if (isNaN(inputProductRef.current.value) && inputPriceRef.current.value > 0) {
            purchase.product = inputProductRef.current.value
            purchase.price = Number(inputPriceRef.current.value)
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

    useEffect(() => {
        const copyState = { ...totalSum }
        const sum = arrayPurchase.reduce((sum, current) => sum + current.price, 0)
        copyState.result = sum
        setTotalSum(copyState)
    }, [arrayPurchase])

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
                                <div key={`${item}_${index}`} className='content_panel_purchase'>
                                    <p className='content_panel_purchase_text'>{item.product}</p>
                                    <p className='content_panel_purchase_text'>{item.price} RUB</p>
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
                <div className='content_totalSum'>
                    <p className='content_totalSum_text'>Сумма: {totalSum.result}</p>
                </div>
            </div>
        </div>
    )
}

export default Content