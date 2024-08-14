import { useState } from 'react'
import './prices.css'
import { X } from 'lucide-react'

export function Prices() {
    const [ isChecked, setIsChecked ] = useState(false)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    function handleToggle() {
        setIsChecked(!isChecked)
    }

    function handleModalOpen() {
        setIsModalOpen(!isModalOpen)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <section className='prices' id='planos'>
            <div className='description-prices'>
                <h2>Nossos Planos</h2>
                <p>
                    Inicie hoje mesmo com o plano gratuito, e conforme a sua demanda você pode solicitar um upgrade a qualquer momento!
                </p>
            </div>

            <label className='switch'>
                <span className={`switch-text ${!isChecked ? 'active' : ''}`}>Mensal</span>
                <div className='switch-wrapper'>
                    <input type="checkbox" name='watch' checked={isChecked} onChange={handleToggle} />
                    <span className='switch-button'></span>
                </div>
                <span className={`switch-text ${isChecked ? 'active' : ''}`}>Anual</span>
            </label>

            <div className='container-items'>
                <div className='item item-iniciante'>
                    <h3>Iniciante</h3>
                    <p>
                        Gratuito. O plano ideal para um bom início de jornada.
                    </p>

                    <h4>Grátis</h4>
                    <span>Taxa de transação 2%</span>
                    <button onClick={handleModalOpen}>SELECIONAR</button>
                </div>

                <div className='item item-escala'>
                    <h3>Escala</h3>
                    <p>
                        Para você que está escalando com seu negócio.
                    </p>

                    <h4>R$397,<span>00</span><span className='span-mes'>/mês</span></h4>
                    <span>Taxa de transação 1,5%</span>
                    <button onClick={handleModalOpen}>SELECIONAR</button>
                </div>

                <div className='item item-empresarial'>
                    <h3>Empresarial</h3>
                    <p>
                        O melhor plano para quem tem um negócio fluído e constante.
                    </p>

                    <h4>R$597,<span>00</span><span className='span-mes'>/mês</span></h4>
                    <span>Taxa de transação 1%</span>
                    <button onClick={handleModalOpen}>SELECIONAR</button>
                </div>
            </div>

            <div className={`modal ${isModalOpen ? 'active-modal' : ''}`}>
                <button>
                    <X className='' onClick={closeModal}/>
                </button>
                <div className=''>teste</div>
            </div>
        </section>
    )
}
