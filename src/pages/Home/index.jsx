import React from 'react'
import { dataRegex } from '../../utils/initData'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div id="Home">
            <h1>
                I <span>Love</span> Regex
            </h1>
            <form>
                <input type="text" placeholder="Search regex" />
            </form>
            {dataRegex.map((item, idx) => {
                return (
                    <span key={idx}>
                        <Link to={`expr/${item.id}`}>{item.name}</Link>
                    </span>
                )
            })}
        </div>
    )
}

export default Home
