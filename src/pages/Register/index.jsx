import './register.css'
import background from '../../assets/cadastro-white.png'
import { useForm } from "react-hook-form"
import validator from 'validator'

export function Register() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    function onSubmit(data) {
        alert(JSON.stringify(data))
    }

    return (
        <div className='register'>
            <div className="register-banner">
                <img src={background} alt="lOGO da Tesla Checkout" />
            </div>

            <div className="container-form">
                <h2>Registre-se agora</h2>

                <form action="">
                    <div className='form-input'>
                        <label>Nome</label>
                        <input
                            className={errors?.name && "input-error"}
                            type="text"
                            id="name"
                            placeholder='Digite seu nome'
                            {...register('name', { required: true })}
                        />
                        {errors?.name?.type === 'required' && <p className='error-message'>Nome é obrigatório</p>}
                    </div>

                    <div className="form-input">
                        <label>Email</label>
                        <input
                            className={errors?.email && "input-error"}
                            type="text"
                            id="email"
                            placeholder='Seu e-mail'
                            {...register('email', { required: true, validate: (value) => validator.isEmail(value), })}
                        />
                        {errors?.email?.type === 'required' && <p className='error-message'>Email é obrigatório</p>}

                        {errors?.email?.type === 'validate' && <p className='error-message'>Email invalido</p>}
                    </div>

                    <div className="form-input">
                        <label>Senha</label>
                        <input
                            className={errors?.password && "input-error"}
                            type="password"
                            id="password"
                            placeholder='Senha'
                            {...register('password', { required: true, minLength: 7 })}
                        />
                        {errors?.password?.type === 'required' && <p className='error-message'>Senha é obrigatório</p>}

                        {errors?.password?.type === 'minLength' && <p className='error-message'>Senha deve conter pelo menos 7 caracteres.</p>}
                    </div>

                    <div className="form-input">
                        <label>Confirme sua senha</label>
                        <input
                            className={errors?.passwordConfirmation && "input-error"}
                            type="password"
                            id="password"
                            placeholder='Digite sua senha novamente'
                            {...register('passwordConfirmation', { required: true, validate: (value) => value === getValues('password') || "Senhas são diferentes" })}
                        />
                        {errors?.passwordConfirmation?.type === 'required' && <p className='error-message'>Confirme sua senha.</p>}

                        {errors?.passwordConfirmation?.type === 'validate' && <p className='error-message'>{errors.passwordConfirmation.message}</p>}
                    </div>

                    <div className="form-checkbox">
                        <div className="checkbox-input">
                            <input
                                type="checkbox"
                                name="privacy-policy"
                                {...register("privacyTerms", {
                                    validate: (value) => value === true,
                                })}
                            />
                            <label>Aceito os termos de uso e privacidade.</label>
                        </div>

                        {errors?.privacyTerms?.type === "validate" && (
                            <p className="error-message">
                                Você deve concordar com os termos de privacidade.
                            </p>
                        )}
                    </div>

                </form>
                <div className='button-register'>
                    <button onClick={() => handleSubmit(onSubmit)()}>CADASTRAR</button>
                    <a href='#'>Já é usuário do Tesla?<span> Entrar</span></a>
                </div>
            </div>

            <div className='terms'>
                <p>@ 2024, <span className='terms-tesla'>Tesla Checkout LTDA.</span></p>
                <div>
                    <a>Política de Privacidade</a>
                    <a>Termos de Uso</a>
                </div>
            </div>
        </div>
    )
}