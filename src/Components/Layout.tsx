import React from 'react'
import Navbar from './Navbar'
import Breadcrumbs from './Breadcrumbs'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='d-flex flex-column gap-2'>
            <Navbar />
            <Breadcrumbs />
            <main className=''>
                {children}
            </main>
        </div>
    )
}

export default Layout