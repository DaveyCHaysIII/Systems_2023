function Nav() {
    const clientName = 'Davey_Trader_01'
    const link = 'www.google.com';
    return (
        <nav className="nav">
            <a href={ link } className="name">{ clientName }</a>
            <span className="links">
                <a href={ link } className="link">My Saved Systems</a>
                <a href={ link } className="link">Roll Again</a>
                <a href={ link } className="linkEnd">Printer-Friendly</a>
            </span>
        </nav>
    );
}

export default Nav;