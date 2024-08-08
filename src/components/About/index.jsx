import './about.css'

import track from '../../assets/track.svg'
import pizza from '../../assets/pizza.svg'
import cart from '../../assets/cart.svg'
import code from '../../assets/code.svg'


export function About() {
    return (
        <section className='about'>
            <div className="title-about">
                <h2>Solução Para Seu E-Commerce</h2>
                <p className='about-description'>Soluções pensadas para facilitar e inovar a sua experiência como empreendedor digital.</p>
            </div>

            <div className='container-about'>
                <div className='item-about'>
                    <img src={track} alt="simbolo trackeamento" />
                    <h3 className='item-name'>Trackeamento</h3>
                    <p className='item-description'>
                        Saiba seu investimento em anúncios, faturamento e lucro com nosso sistema próprio de trackeamento de vendas.
                    </p>
                </div>

                <div className='item-about'>
                    <img src={pizza} alt="simbolo Relatorio" />
                    <h3 className='item-name'>Relatórios</h3>
                    <p className='item-description'>
                        Relatórios detalhados para você poder identificar os dados de seus clientes para remarketing.
                    </p>
                </div>

                <div className='item-about'>
                    <img src={cart} alt="simbolo carrinho" />
                    <h3 className='item-name'>Lojas</h3>
                    <p className='item-description'>
                        Múltiplas lojas para venda em diferentes nichos em um mesmo lugar.
                    </p>
                </div>

                <div className='item-about'>
                    <img src={code} alt="simbolo de integração" />
                    <h3 className='item-name'>Integrações</h3>
                    <p className='item-description'>
                        Faça integrações para emissão de NF-e, recuperação de vendas e remarketing.
                    </p>
                </div>
            </div>
        </section>
    )
}