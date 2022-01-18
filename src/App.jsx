import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [strRegex, setStrRegex] = useState('')
    const [strTest, setStrTest] = useState([
        {
            text: '+919367788755',
            status: false,
        },
        {
            text: '8989829304',
            status: false,
        },
        {
            text: '123765',
            status: false,
        },
        {
            text: '+982',
            status: false,
        },
    ])
    const checkRegex = (obj, regex) => {
        console.log(obj)
        return { ...obj, status: regex.test(obj.text) }
    }
    useEffect(() => {
        let arrTest = JSON.parse(JSON.stringify(strTest))
        const regex = new RegExp(strRegex)
        arrTest = arrTest.map((x) => checkRegex(x, regex))
        // console.log(arrTest)
        setStrTest(arrTest)
    }, [strRegex])
    const handleChangeInput = (e) => {
        const value = e.target.value
        setStrRegex(value)
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
                        />
                        <button>Copy</button>
                    </div>
                    <div className="result">
                        <textarea name="textMatch"></textarea>
                        {/* <div className="match">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
