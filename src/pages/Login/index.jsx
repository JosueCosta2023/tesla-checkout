import { useForm } from "react-hook-form"
import "./login.css";
import validator from "validator";



export function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const Entrar = (e) => {
        e.prevenDefault()
    }

    return (
        <div className="container-login">
            <div className="content-form">
                <form>
                    <div className="header-form">
                        <h2>Bem-vindo</h2>
                        <p>Acesse com seu email e senha</p>
                    </div>

                    <div className="input-camp">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder="Seu endereço de Email" 
                            id="email"
                            {...register("email", {required: true, validate: (value) => validator.isEmail(value)})}
                            />
                        {errors?.email?.type === 'required' && <p className='error-message'>Email é obrigatório</p>}

                        {errors?.email?.type === 'validate' && <p className='error-message'>Email invalido</p>}
                    </div>

                    <div className="input-camp">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type="password" 
                            placeholder="Seu endereço de Email" 
                            id="password"
                            {...register("password", {required: "Impossivel entrar sem senha.", minLength: 7 })}
                            />

                    {errors?.password?.type === 'required' && <p className='error-message'>Senha é obrigatório</p>}

                    {errors?.password?.type === 'minLength' && <p className='error-message'>Senha deve conter pelo menos 7 caracteres.</p>}
                    </div>

                    <div className="switchToggleInput">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                        </label>
                        <p>Lembre de mim</p>
                    </div>

                    <button className="sendButton" onClick={handleSubmit(Entrar)}>
                        Acessar
                    </button>
                    <p className="link-created-account">Ainda não possui conta? <a href="/register">Registre-se</a> </p>

                    <p className="copyRight">@ 2024, <span>Tesla Checkout LTDA</span></p>
                </form>

            </div>
            <div className="content-logo">
                <a href="/">
                    <img src="/src/assets/cadastro-white.png" alt="logo" />
                </a>
            </div>
        </div>
    )
}