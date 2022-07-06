
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

// abstract obj for my inputs
const Input = props => (
    <input {...props} className="outline-none w-full bg-transparent p-4 border rounded-xl border-onix text-lg focus:border-platinun" />

)

const validationSchema = yup.object(
    {
        name: yup.string().required('Ingrese su nombre'),
        username: yup.string().required('Ingrese su nombre de usuario'),
        email: yup.string().required('Ingrese su e-mail').email('E-mail invalido'),
        password: yup.string().required('Ingrese su constraseña')

    })

export function Signup({ singInUser }) {

    const formik = useFormik({
        onSubmit: async values => {
            const res = await axios.post(`${import.meta.env.VITE_API_HOST}/signup`, {
                name: values.name,
                username: values.username,
                email: values.email,
                password: values.password

            })
            singInUser(res.data)
        },
        validationSchema,
        validateOnMount: true,
        initialValues: {
            name:'',
            username:'',
            email: '',
            password: ''
        }
    })

    return (
        <div className="h-full flex justify-center items-center p-12 ">
            <div className='flex flex-col space-y-6 w-full lg:w-1/2'>
                <h1 className="text-3xl text-center">Crea tu cuenta </h1>

                <form className="space-y-6" onSubmit={formik.handleSubmit}>

                    <div className="space-y-2">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Ingrese su nombre"
                            values={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={formik.isSubmitting}
                        />
                        {(formik.touched.name && formik.errors.name) &&
                            (<div className='text-red-500 text-sm'>{formik.errors.name}</div>)}
                    </div>

                    <div className="space-y-2">
                        <Input
                            type="text"
                            name="username"
                            placeholder="Ingrese su nombre de usuario"
                            values={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={formik.isSubmitting}
                        />
                        {(formik.touched.username && formik.errors.username) &&
                            (<div className='text-red-500 text-sm'>{formik.errors.username}</div>)}
                    </div>
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
                        {formik.isSubmitting ? 'Enviendo...' : 'Registrarme'}
                    </button>
                </form>

                <div className="text-lg text-silver text-center">
                    Ya tiene cuenta?<a className="text-birdblue" href='/login'> Ingresar </a>
                </div>
            </div>
        </div>

    )
} 