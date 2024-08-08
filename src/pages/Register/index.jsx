import './register.css'
import background from '../../assets/cadastro.png'
import { useForm } from "react-hook-form"

export function Register() {

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <img src={background} alt="lOGO da Tesla Checkout" />
            
            <div className="">
                <h2>Registre-se agora</h2>

                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />
                    <button>Acessar</button>
                </form>

                <p>Já é usuário do Tesla?<span> Entrar</span></p>
            </div>

            <p></p>
        </div>
    )
}