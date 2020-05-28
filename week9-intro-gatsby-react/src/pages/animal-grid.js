import React, {useState} from "react"
import Layout from "../components/layout"

export default function AnimalGrid() {
    const [animationClass, setAnimationClass] = useState('')
    const [buttonPressedClass, setButtonPressedClass] = useState(false)

    const animate = (className) => {
        setAnimationClass(className)
        setButtonPressedClass(className)
    }
    const reset = () => {
        setAnimationClass('')
        setButtonPressedClass('')
    }
    return (
        <Layout>
            <div className="animal-grid-page">
                <fieldset className="grid-controls">
                    <legend>
                        <h2>
                            Emoji grid controls
                        </h2>
                    </legend>
                    <button
                        id="btn-scale"
                        aria-pressed={buttonPressedClass === 'scale' ? true : false}
                        onClick={() => { animate('scale') }}
                    >
                        Scale
                    </button>
                    <button
                        id="btn-translate"
                        aria-pressed={buttonPressedClass === 'translate' ? true : false}
                        onClick={() => { animate('translate') }}
                    >
                        Translate
                    </button>
                    <button
                        id="btn-rotate"
                        aria-pressed={buttonPressedClass === 'rotate' ? true : false}
                        onClick={() => { animate('rotate') }}
                    >
                        Rotate
                    </button>
                    <button
                        id="btn-rumble"
                        aria-pressed={buttonPressedClass === 'rumble' ? true : false}
                        onClick={() => { animate('rumble') }}
                    >
                        Rumble
                    </button>
                    <button id="btn-reset" onClick={reset}>
                        Reset
                    </button>
                </fieldset>
                <h3>
                Carnivores
                </h3>
                <ul className={`grid carnivores ${animationClass}`}>
                    <li className="grid-item">
                        <span role="img" aria-label="eagle">🦅</span>
                    </li>
                    <li className="grid-item" id="owl">
                        <span role="img" aria-label="owl">🦉</span>
                    </li>
                    <li className="grid-item" id="penguin">
                        <span role="img" aria-label="penguin">🐧</span>
                    </li>
                    <li className="grid-item" id="fox">
                        <span role="img" aria-label="fox">🦊</span>
                    </li>
                    <li className="grid-item" id="bear">
                        <span role="img" aria-label="bear">🐻</span>
                    </li>
                    <li className="grid-item" id="wolf">
                        <span role="img" aria-label="wolf">🐺</span>
                    </li>
                    <li className="grid-item" id="alligator">
                        <span role="img" aria-label="alligator">🐊</span>
                    </li>
                    <li className="grid-item" id="tiger">
                        <span role="img" aria-label="tiger">🐯</span>
                    </li>
                    <li className="grid-item" id="lion">
                        <span role="img" aria-label="lion">🦁</span>
                    </li>
                </ul>
                
                <h3>
                Herbivores
                </h3>
                <ul className={`grid herbivores ${animationClass}`}>
                    <li className="grid-item" id="mouse">
                        <span role="img" aria-label="mouse">🐭</span>
                    </li>
                    <li className="grid-item" id="hamster">
                        <span role="img" aria-label="hamster">🐹</span>
                    </li>
                    <li className="grid-item" id="bunny">
                        <span role="img" aria-label="bunny">🐰</span>
                    </li>
                    <li className="grid-item" id="cow">
                        <span role="img" aria-label="cow">🐮</span>
                    </li>
                    <li className="grid-item" id="horse">
                        <span role="img" aria-label="horse">🐴</span>
                    </li>
                    <li className="grid-item" id="panda">
                        <span role="img" aria-label="panda">🐼</span>
                    </li>
                    <li className="grid-item" id="koala">
                        <span role="img" aria-label="koala">🐨</span>
                    </li>
                    <li className="grid-item" id="sheep">
                        <span role="img" aria-label="sheep">🐑</span>
                    </li>
                    <li className="grid-item" id="zebra">
                        <span role="img" aria-label="zebra">🦓</span>
                    </li>
                </ul>
            </div>
        </Layout>
    )
  }