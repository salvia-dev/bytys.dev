import './Header.scss';

function Header() {
    return (
        <div className="Header" id="header">
            <div className="Header__logo">
                <i className="fal fa-code fa-4x"></i>
            </div>
            <button className="Header__hamburger">
                <div className="Header__hamburger-box">
                    <span className="Header__hamburger-inner"></span>
                </div>
            </button>
            <nav className="Header__navigation">
                <ol className="Header__nav-list">
                    <li className="Header__list-item"><span className="Header__item-link" id="about">.about();</span></li>
                    <li className="Header__list-item"><span className="Header__item-link" id="projects">.projects();</span></li>
                    <li className="Header__list-item"><span className="Header__item-link" id="work">.work();</span></li>
                    <li className="Header__list-item"><span className="Header__item-link" id="contact">.contact();</span></li>
                </ol>
                <a href="../../content/cv.pdf" className="Header__cv-btn" download>
                    <span className="Header__btn-name">CV</span>
                    <i className="Header__download-icon far fa-arrow-to-bottom"></i>
                </a>
            </nav>
        </div>
    );
}

export default Header;
