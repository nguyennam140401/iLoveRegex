import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    const inputRegex = useRef()

    const [strRegex, setStrRegex] = useState('')
    const [textMatch, setTextMatch] = useState('')
    const [strTest, setStrTest] = useState([])
    const checkRegex = (obj, regex) => {
        return { ...obj, status: regex.test(obj.text) }
    }
    useEffect(() => {
        console.log(strTest)
    })
    useEffect(() => {
        let arrTest = JSON.parse(JSON.stringify(strTest))
        const regex = new RegExp(strRegex)
        arrTest = arrTest.map((x) => checkRegex(x, regex))
        setStrTest(arrTest)
    }, [strRegex])
    useEffect(() => {
        console.log(textMatch)
        const str = textMatch
        const regex = new RegExp(strRegex)
        setStrTest(
            str.split(/\r?\n/).map((x) => {
                return { text: x, status: regex.test(x) }
            })
        )
    }, [textMatch])
    const handleChangeInput = (e) => {
        const value = e.target.value
        setStrRegex(value)
    }
    const handleChangeTextarea = (e) => {
        const value = e.target.value
        setTextMatch(value)
    }
    const copyRegex = () => {
        inputRegex.current.select()
        inputRegex.current.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(inputRegex.current.value)
        alert('Chep thanh cong')
    }
    return (
        <div id="app">
            <div className="regexPage">
                <div className="navBar">
                    <a href="/">I Love Regex</a>
                </div>
                <div className="contain">
                    <h2>This is name of regex</h2>
                    <div className="regexStr">
                        <input
                            type="text"
                            name="strRegex"
                            value={strRegex}
                            onChange={handleChangeInput}
                            autoComplete="off"
                            ref={inputRegex}
                        />
                        <button onClick={copyRegex}>Copy</button>
                    </div>
                    <div className="result">
                        <textarea
                            name="textMatch"
                            value={textMatch}
                            onChange={handleChangeTextarea}
                            spellCheck="false"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                        ></textarea>
                        <div className="match">
                            {strTest.map((_, idx) => {
                                return (
                                    <span
                                        key={idx}
                                        className={_.status ? 'true' : ''}
                                    >
                                        {_.text}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
