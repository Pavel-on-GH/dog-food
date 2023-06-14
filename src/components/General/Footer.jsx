import { Link } from "react-router-dom"
const links = [
    { name: "Каталог", src: "/catalog" },
    { name: "Избранное", src: "/favorites" },
    { name: "Корзина", src: "/basket" },
];

const Footer = () => <footer>
    <div className="footer__copy">
        <span>
            <h5>Pavel-on-GH (
                {new Date().getFullYear()})
            </h5>
        </span>
    </div>
    <ul className="footer__nav">
        {links.map(el => <li key={el.name}>
            <Link to={el.src}>{el.name}</Link>
        </li>)}
    </ul>
</footer>

export default Footer;