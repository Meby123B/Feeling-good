import { Component, createSignal } from "solid-js";
import styles from './Counter.module.css';
const { screen, btn, inc, dec, counterBody, buttonsHolder } = styles

const Counter: Component = () => {

    const [mode, setMode] = createSignal(1)
    const [count, setCount] = createSignal(new Array(5).fill(0))

    function updateCount(amount: number) {
        setCount(prev => (
            prev.map((x, i) => {
                if (i === mode() - 1) return x += amount
                return x
            })
        ))
    }

    const updateMode = () => setMode(prev => prev === 5 ? 1 : prev + 1)
    const increase = () => updateCount(+1)
    const decrease = () => updateCount(-1)
    return <>
        <div class={counterBody}>
            <div class={screen}>
                <code >{count()[mode() - 1]}</code>
            </div>
            {mode()}
            <div class={buttonsHolder}>
                <button class={`${btn} ${inc}`} onClick={increase}>+</button>
                <button onClick={updateMode}>mode</button>
                <button class={`${btn} ${dec}`} onClick={decrease}>-</button>
            </div>
        </div>
    </>
}

export default Counter