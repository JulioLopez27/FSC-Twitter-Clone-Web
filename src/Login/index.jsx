import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import twitter from '../imgs/LogoTwitter.png'

// abstract obj for my inputs
const Input = props => (
    <input {...props} className="outline-none w-full bg-transparent p-4 border rounded-xl border-onix text-lg focus:border-platinun" />

)

const validationSchema = yup.object(
    {
        email: yup.string().required('Ingrese su e-mail').email('E-mail invalido'),
        password: yup.string().required('Ingrese su constraseña')

    })

export function Login({ singInUser }) {

    const formik = useFormik({
        onSubmit: async values => {
            const res = await axios.get(`${import.meta.env.VITE_API_HOST}/login`, {
                auth: {
                    username: values.email,
                    password: values.password
                }
            })
            singInUser(res.data)
        },
        validationSchema,
        validateOnMount: true,
        initialValues: {
            email: '',
            password: ''
        }
    })

    return (
        <div className="h-full flex justify-center">
            {/* div costado azul */}
            <div className='md:flex-1 hidden lg:flex justify-center items-center bg-birdblue '>
                <img src={twitter}/>
            </div>

            <div className="flex-1 flex justify-center items-center p-12 space-y-6">
                <div className='max-w-md flex-1'>
                    <img className='w-12 lg:hidden' src={twitter}/>
                   <h1 className="text-3xl  my-4">Acceda a su cuenta</h1>

                    <form className="space-y-6" onSubmit={formik.handleSubmit}>

                        <div className="space-y-2">
                            <Input
                                type="text"
                                name="email"
                                placeholder="Email"
                                values={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={formik.isSubmitting}
                            />
                            {(formik.touched.email && formik.errors.email) &&
                                (<div className='text-red-500 text-sm'>{formik.errors.email}</div>)}
                        </div>

                        <div className="space-y-2">
                            <Input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                values={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={formik.isSubmitting}
                            />
                            {(formik.touched.password && formik.errors.password) &&
                                (<div className='text-red-500 text-sm'>{formik.errors.password}</div>)}

                        </div>

                        <button
                            disabled={formik.isSubmitting || !formik.isValid}
                            type="submit"
                            className="
                        w-full 
                        bg-birdblue 
                        py-4 rounded-full 
                        disabled:opacity-50 text-lg"
                        >
                            {formik.isSubmitting ? 'Enviendo...' : 'Entrar'}
                        </button>
                    </form>

                    <div className="text-lg text-center  text-silver my-4">
                        No tiene cuenta? <a href='/signup' className="text-birdblue"> Registrarme </a>
                    </div>

                </div>
            </div>
        </div>
    )
} 