import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar"
import MainContent from './components/MainContent'


function Page() {
    return(
        <>
            <Navbar />
            <MainContent />
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<Page />)