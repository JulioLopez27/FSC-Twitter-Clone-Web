import { HomeIcon, UserIcon, LogoutIcon } from '@heroicons/react/outline'
import Logo from './../../images/LogoTwitter.png'

export function Menu() {
    return (
        <div className="hidden md:flex  place-content-between space-x-6">
            <span className="">Desarrollado por
                <a className=" ml-1 text-birdblue "
                    href="https://www.linkedin.com/in/juliolopezg95"
                    target={"_blank"}
                >@juliolopezg95</a>
            </span>

            <img className=" h-11 w-11  " src={Logo} />


            <div className="flex items-end md:pb-5  space-x-6 ">
                <button className="flex md:transition ease-linear delay-0 hover:scale-110  duration-75 hover:text-birdblue ">
                    <HomeIcon className="w-6 h-6 stroke-2 mr-1 " />
                    Pagina Inicial
                </button>

                <button className="flex md:transition ease-linear delay-0 hover:scale-110 duration-75 hover:text-birdblue" >
                    <UserIcon className="w-6 h-6 stroke-2 mr-1" />
                    <span className="">Perfil</span>
                </button>

                <button className="flex md:transition ease-linear delay-0 hover:scale-110 duration-75 hover:text-birdblue">
                    <LogoutIcon className="w-6 h-6 stroke-2 mr-1" />
                    Salir
                </button>
            </div>
        </div>
    )
}
