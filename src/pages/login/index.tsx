import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from 'hooks/useToast'
import { Card, Input, Button, WrapAuth } from 'components'
import { SMSIcon, LockIcon, EyeOpenIcon, EyeCloseIcon } from 'assets'
import './login.style.scss'
import { isValidEmail } from 'utils/validation'

export type LoginFormData = {
    username: string
    password: string
    remember?: boolean
}

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const toast = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        defaultValues: {},
    })

    const handleLogin = async (values: LoginFormData) => {
        try {
            // router.push(PATHNAME.HOME)
            console.log(values)
            toast('Login successfully!', 'success')
        } catch (error: any) {
            const { message } = error || {}
            toast(message, 'error')
        }
    }

    return (
        <WrapAuth>
            <div className="login-container">
                <Card
                    cardStyles={{
                        width: '100%',
                        maxWidth: '700px',
                        minWidth: '400px',
                    }}
                >
                    <form
                        style={{ padding: '32px' }}
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        <h2>Login to watch movies</h2>
                        <Input
                            placeholder="Email"
                            startAdornment={
                                <>
                                    <SMSIcon />
                                </>
                            }
                            {...register('username', {
                                required: 'Please typing email',
                                validate: (value) => {
                                    const isValid = isValidEmail(value)
                                    if (isValid) return undefined
                                    return 'Format email is not correctly'
                                },
                            })}
                            error={errors && Boolean(errors?.username?.message)}
                            errorMessage={errors?.username?.message}
                        />
                        <Input
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            startAdornment={
                                <>
                                    <LockIcon />
                                </>
                            }
                            endAdornment={
                                <div
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    {showPassword ? (
                                        <EyeOpenIcon />
                                    ) : (
                                        <EyeCloseIcon />
                                    )}
                                </div>
                            }
                            {...register('password', {
                                required: 'Please typing password!',
                                validate: (value) => {
                                    if (!value) return
                                    if (value.length < 6)
                                        return 'Password need min 6 characters!'
                                    return undefined
                                },
                            })}
                        />
                        <div className="login-action">
                            <div className="login-action-save">
                                <input
                                    {...register('remember')}
                                    type="checkbox"
                                />
                                <span>Save password</span>
                            </div>
                            <p
                                onClick={() => {
                                    toast(
                                        'The function is updating, please enter the required login format correctly!',
                                        'error'
                                    )
                                }}
                            >
                                Forgot password?
                            </p>
                        </div>
                        <Button className="login-btn">Login</Button>
                    </form>
                </Card>
            </div>
        </WrapAuth>
    )
}

export default Login
