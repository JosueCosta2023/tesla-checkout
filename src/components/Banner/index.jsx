import './banner.css'
import placas from '../../assets/placas.png'

export function Banner() {
    return (
        <section className='ranking'>
            <div className='rank-info'>
                <h2>Ranking de prêmios</h2>
                <p>
                    Premiações exclusivas que proporcionam uma experiência única para quem bater as metas de faturamento da plataforma. Além das tradicionais placas teremos premiações supresas.
                </p>
            </div>

            <img src={placas} alt="placas" />
            <div className='img-background'>
            </div>
        </section>
    )
}