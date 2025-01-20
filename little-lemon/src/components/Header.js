import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="/"><img src="/img/logo.svg" alt="Home"></img></a>
            <Nav />
        </header>
    );
};

export default Header;