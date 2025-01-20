import Link from "next/link"
import Breadcrumbs from "./Breadcrumbs"


const navigation = [
    { name: 'Crypto List', href: '/cryptocurrency', current: false },
    { name: 'Free Tools', href: '#', current: false },
    { name: 'Resource Cemter', href: '#', current: false },
    { name: 'Get Started', href: '#', current: false },
]

export default function Navbar() {
    return (
        <nav className="navbar blur-filter navbar-expand-lg flex-column align-items-start shadow-lg">
            <div className="container-fluid d-flex">
                <Link className="navbar-brand fs-1 text-white" href="#">Koin<span style={{ color: 'rgb(46, 91, 176)' }}>X</span></Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-end " id="navbarNav">
                    <ul className="navbar-nav">
                        {navigation.map((item, index) => (
                            <li key={index} className='nav-item '>
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={`${navigation.length - 1 === index ? 'nav-btn btn mx-auto' : ''} nav-link text-white`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Breadcrumbs />
        </nav>
    )
}
