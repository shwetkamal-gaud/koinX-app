import React from 'react'
import Navbar from './Navbar'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='d-flex flex-column'>
            <Navbar />
            <main >
                {children}
            </main>
        </div>
    )
}

export default Layout