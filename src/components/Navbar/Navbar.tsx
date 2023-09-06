import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>CH company</span>
            </div>
            <div className="icons">
                <img src="search.svg" className='icon' alt="" />
                <img src="app.svg" className='icon' alt="" />
                <img src="expand.svg" className='icon' alt="" />
                <div className='notify'>
                    <img src="notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className='user'>
                    <img src="mee.JPG" alt="" />
                    <span>Chihab</span>
                </div>
                <img src="settings.svg" alt="" />
            </div>
        </div>
    )
}

export default Navbar;