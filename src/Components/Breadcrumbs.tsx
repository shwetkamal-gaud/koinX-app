import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcrumbs = () => {
    const router = useRouter()
    const pathArray = router.asPath.split('/').filter((path) => path !== '')

    return (

        <ol className="d-flex align-items-center px-2 px-md-3 breadcrumb mb-3">
            <li className="d-flex align-items-center">
                <Link href="/" className="d-flex align-items-center breadcrumb-item">
                    <svg width={15} className="me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                </Link>
            </li>
            {pathArray.map((item, id) => {
                return (
                    <li key={id}>
                        <div className="d-flex align-items-center text-align-center justify-content-center ">
                            <svg width={10} className="mx-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path fill='#0066ff' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <Link href={`/${item}`} className="ms-1 breadcrumb-item">{item.slice(0, 1).toUpperCase() + item.slice(1,)}</Link>
                        </div>
                    </li>
                )
            })}
        </ol>


    )
}

export default Breadcrumbs