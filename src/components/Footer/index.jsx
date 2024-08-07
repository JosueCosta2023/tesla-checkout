import './footer.css'
import logo from '../../assets/logo-footer.png'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'


export function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={logo} alt="logo tesla checkout" />
                    <a to='/'>
                        <h3>Tesla Checkout</h3>
                    </a>
                </div>

                <div className='links'>
                    <div className='container-link links-suporte'>
                        <h3>Suporte</h3>
                        <a href="#">FAQ</a>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                    </div>

                    <div className="container-link links-about">
                        <h3>Sobre</h3>
                        <a href="#">Planos</a>
                        <a href="#">Checkout</a>
                        <a href="#">Contato</a>
                    </div>

                    <div className="container-link links-social">
                        <a href="#">
                            <img className='icon-face' src={face} alt="facebook" />
                        </a>
                        <a href="#">
                            <img src={insta} alt="instagram" />
                        </a>
                        <a href="#">
                            <img className='icon-yt' src={youtube} alt="Youtube" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='copy'>
                <p>&copy; 2024 Tesla Checkout 54.089.489/0001-49</p>
            </div>
        </footer>
    )
}