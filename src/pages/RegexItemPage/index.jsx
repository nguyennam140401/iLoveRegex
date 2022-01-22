import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dataRegex } from '../../utils/initData'
const ReactItemPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { exprid } = params
    const inputRegex = useRef()
    const [strRegex, setStrRegex] = useState('')
    const [textMatch, setTextMatch] = useState('')
    const [strTest, setStrTest] = useState([])
    const checkRegex = (obj, regex) => {
        return { ...obj, status: regex.test(obj.text) }
    }
    useEffect(() => {
        let find = false
        dataRegex.forEach((x) => {
            if (x.id === exprid) {
                console.log(x)
                setStrRegex(x.strRegex)
                setTextMatch(x.textMatch)
                find = true
            }
        })
        if (!find) {
            navigate('/404')
        }
    }, [])
    useEffect(() => {
        let arrTest = JSON.parse(JSON.stringify(strTest))
        const regex = new RegExp(strRegex)
        arrTest = arrTest.map((x) => checkRegex(x, regex))
        setStrTest(arrTest)
    }, [strRegex])
    useEffect(() => {
        const str = textMatch
        const regex = new RegExp(strRegex)
        setStrTest(
            str.split(/\r?\n/).map((x) => {
                return { text: x.trim(), status: regex.test(x.trim()) }
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
                        <div className="back">
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
                        <textarea
                            name="textMatch"
                            value={textMatch}
                            onChange={handleChangeTextarea}
                            spellCheck="false"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactItemPage
