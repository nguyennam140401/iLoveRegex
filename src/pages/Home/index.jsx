import React, { useEffect, useState } from 'react'
import { dataRegex } from '../../utils/initData'
import { Style } from './style'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Container from '@mui/material/Container'
import BoxAddRegex from '../../components/BoxAddRegex'
const Home = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className="">
            <Style id="Home">
                <h1>
                    I <span>Love</span> Regex
                </h1>
                <form>
                    <input type="text" placeholder="Search regex" />
                </form>
                <div className="data-regex">
                    {dataRegex.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <Link to={`expr/${item.id}`}>{item.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </Style>

            {/* <Button
                variant="contained"
                size="medium"
                sx={{
                    borderRadius: '50%',
                    width: 70,
                    height: 70,
                    position: 'fixed',
                    bottom: 15,
                    right: 15,
                }}
                color="primary"
                onClick={handleOpen}
            >
                <AddIcon></AddIcon>
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Container maxWidth="xs" sx={{ backgroundColor: '#fff' }}>
                    <BoxAddRegex></BoxAddRegex>
                </Container>
            </Modal> */}
        </div>
    )
}

export default Home
