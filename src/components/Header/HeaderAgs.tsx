import './HeaderAgs.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaGithub } from 'react-icons/fa';

// URLs constants
const DIRECCION_YOUTUBE = 'https://www.youtube.com/@andresesquivel5460';
const DIRECCION_INSTAGRAM = 'https://www.instagram.com/andriuxesquivel/';
const DIRECCION_CORREO = 'mailto:a.e.breceda@gmail.com';
const DIRECION_FACEBOOK = 'https://www.facebook.com/andriux.esquivel/';
const DIRECCION_GITHUB = 'https://github.com/AndresBreceda';

function HeaderAgs() {
    return (
        <header>
            <div className="grid grid-cols-5 grid-rows-1 gap-4 items-center">    
                <div className='logo-container'>
                    <img src='./src/assets/ags-logo-transparente.png' alt="Letras de Aguascalientes" className='logo' />
                </div>

                <ul className="navbar-links col-span-3 flex items-center space-x-4">
                    <li><a href="#info">Historia</a></li>
                    <li>|</li>
                    <li><a href="#zona">Zonas de importancia</a></li>
                    <li>|</li>
                    <li><a href="#bento">Bento</a></li>

                </ul>

                <div className="navbar-right col-start-5 flex items-center justify-end">
                    <div className="navbar-icons flex items-center space-x-4">
                        <a 
                            href={DIRECION_FACEBOOK}
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a 
                            href={DIRECCION_YOUTUBE}
                            aria-label="Youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaYoutube className="w-5 h-5" />
                        </a>
                        <a 
                            href={DIRECCION_INSTAGRAM}
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                            href={DIRECCION_CORREO}
                            aria-label="mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaEnvelope className="w-5 h-5" />
                        </a>
                        <a 
                            href={DIRECCION_GITHUB}
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>    
        </header>
    );
}

export default HeaderAgs;