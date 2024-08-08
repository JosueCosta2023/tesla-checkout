import { useForm } from "react-hook-form"

export function Login() {

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <div className="">
                <div>
                    <h2>Bem-vindo</h2>
                    <p>Acesse com seu email e senha</p>
                </div>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />
                    <button>Acessar</button>
                </form>

                <p>Ainda não possuí conta?<span>Registre-se</span></p>
            </div>

            <p></p>
        </div>
    )
}