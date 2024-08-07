import './hero.css'
import dashboard from '../../assets/dashboard.png'

export function Hero() {
    return (
        <section className='hero'>
            <div className='container-hero'>
                <h2>Empreendedor Digital<span className='span-h2'>?</span> Sua nova <span className='span-h2'>solução</span> está aqui!</h2>
                <p>
                    Afaste-se do convencional e do pouco lucrativo. Utilize ferramentas exclusivas para aumentar suas conversões e oferecer experiências únicas aos clientes através do seu novo checkout transparente, com menos burocracia. 📊
                </p>
            </div>
            
            <button className='button-hero'>Começar agora gratuitamente</button>
            <img className='hero-image' src={dashboard} alt="dashboard" />
        </section>
    )
}