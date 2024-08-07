import './prices.css'
import toggle from '../../assets/check.png'
export function Prices() {
    return (
        <section className='prices'>
            <div className='description-prices'>
                <h2>Nossos Planos</h2>
                <p>
                    Inicie hoje mesmo com o plano gratuito, e conforme a sua demanda você pode solicitar um upgrade a qualquer momento!
                </p>
            </div>

            <div className='toggle'>
                <span>Mensal</span>
                <img src={toggle} alt="toggle" />
                <span>Anual</span>
            </div>

            <div className='container-items'>
                <div className='item item-iniciante'>
                    <h3>Iniciante</h3>
                    <p>
                        Gratuito. O plano ideal para um bom início de jornada.
                    </p>

                    <h4>Grátis</h4>
                    <span>Taxa de transação 2%</span>
                    <button>SELECIONAR</button>
                </div>

                <div className='item item-escala'>
                    <h3>Escala</h3>
                    <p>
                        Para você que está escalando com seu negócio.
                    </p>

                    <h4>R$397,<span>00</span><span className='span-mes'>/mês</span></h4>
                    <span>Taxa de transação 1,5%</span>
                    <button>SELECIONAR</button>
                </div>

                <div className='item item-empresarial'>
                    <h3>Empresarial</h3>
                    <p>
                        O melhor plano para quem tem um negócio fluído e constante.
                    </p>

                    <h4>R$597,<span>00</span><span className='span-mes'>/mês</span></h4>
                    <span>Taxa de transação 1%</span>
                    <button>SELECIONAR</button>
                </div>
            </div>
        </section>
    )
}