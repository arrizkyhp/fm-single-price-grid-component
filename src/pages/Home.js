import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Subscription from 'layouts/Subscription'
import Why from 'layouts/Why'
import React from 'react'

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Subscription />
            <Why />
            <Footer />
        </div>
    )
}
