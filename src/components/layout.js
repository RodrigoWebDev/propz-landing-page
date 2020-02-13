import React from 'react'
import '../assets/scss/main.scss'
import Divider from './Divider'
import Header from './Header'
import Footer from './Footer'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div className="App">
                <Header />
                <Divider/>
                {children}
                <Footer/>
            </div>
        )
    }
}

export default Template
