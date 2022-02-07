import styled from 'styled-components'
export const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    h1 {
        font-size: 2.5rem;
        span {
            color: rgba(224, 53, 40);
        }
    }
    form {
        margin: 2rem 0;
        input {
            outline: none;
            background: #ccc;
            border: none;
            font-size: 1.5rem;
            border-radius: 5px;
            padding: 0.5rem 1rem;
            width: 400px;
        }
    }
    .data-regex {
        display: flex;
        flex-wrap: wrap;

        div {
            width: 33%;
            text-align: center;
            margin-bottom: 1rem;
            a {
                color: #6b5e5d;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`
