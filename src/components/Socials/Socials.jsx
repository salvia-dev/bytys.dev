import './Socials.scss';

function Socials() {
    return (
        <div className="Socials" id="socials">
            <div className="Socials__wrapper">
                <ul className="Socials__list">
                    <li className="Socials__list-item">
                        <a href="mailto:salviadev@protonmail.com" aria-label="Mail">
                            <i className="Socials__icon fas fa-paper-plane fa-lg"></i>
                        </a>
                    </li>
                    <li className="Socials__list-item">
                        <a href="https://github.com/salvia-dev/" aria-label="GitHub">
                            <i className="Socials__icon fab fa-github fa-lg"></i>
                        </a>
                    </li>
                    <li className="Socials__list-item">
                        <a href="https://linkedin.com/dawidbytys" aria-label="LinkedIn">
                            <i className="Socials__icon fab fa-linkedin fa-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Socials;
