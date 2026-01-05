import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { useContext } from 'react'

// ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.png'
import BrazilLogo from '../../assets/brazil.svg'
import UsaLogo from '../../assets/usa.svg'
import FacebookIco from '../../assets/ico-facebook.svg'
import InstagramIco from '../../assets/ico-instagram.svg'
import TwitterIco from '../../assets/ico-twitter.svg'
import LinkedinIco from '../../assets/ico-linkedin.svg'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo"/>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="#" target="_blank">
                                <img src={FacebookIco} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={InstagramIco} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={TwitterIco} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={LinkedinIco} />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey1-color">suporte@escoladnc.com.br</p>
                            <p className="grey1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-coler">Copyright © DNC - 2025</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={BrazilLogo} height="29px"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={UsaLogo} height="29px"/>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer