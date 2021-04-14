function Header(props) {
    return (
        <header>
            <nav>
                <ul>
                    <li>{props.menu1}</li>
                    <li>{props.menu2}</li>
                    <li>{props.menu3}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;