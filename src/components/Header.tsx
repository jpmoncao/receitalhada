import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LOGO from '../assets/logo.png'
import ACCOUNT from '../assets/iconaccount.svg'

type HeaderProps = {
    account: Boolean;
    title: Boolean;
}

export default function Header({account, title}: HeaderProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToLogin = () => {
        navigate('/login');
    };

    const goToSignUp = () => {
        navigate('/cadastro')
    }

    const goToHome = () => {
        navigate('/')
    }

    return(
        <div>
            {title === false ? 
            <div className="px-16 p-4 flex justify-between">
                <img src={LOGO} width={280} className='ml-8 cursor-pointer'/> 
                {account && (
                    <img className='mt-1 cursor-pointer' src={ACCOUNT} width={45} onClick={toggleMenu} />
                )}
                
                {isMenuOpen && (
                    <div className="absolute right-5 top-20 bg-white border border-gray-300 shadow-md p-2 px-8 rounded">
                    <p className="cursor-pointer hover:text-gray-700 mb-1 text-center" onClick={goToLogin}>Entrar</p>
                    <hr />
                    <p className="cursor-pointer hover:text-gray-700 text-center" onClick={goToSignUp}>Cadastrar</p>
                </div>
                )}
            </div>
            :
            <div className="px-16 p-4 flex justify-center">
            <img src={LOGO} width={280} onClick={goToHome} className='cursor-pointer'/> 
            {account && (
                <img className='mt-1 cursor-pointer' src={ACCOUNT} width={45} onClick={toggleMenu} />
            )}
            
        </div>
        }
            <div className="lineorange h-5">
            </div>
            
        </div>
    )
}