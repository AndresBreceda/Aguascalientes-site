import './EstadoMapa.css';

const DIRECCION_ESTADO ='./ags-municipios/ags-estado.svg';
const DIRECCION_MUNICIPIO ='./ags-municipios/ags-municipio.svg';

function EstadoMapa(){
    return(
        <div className='mapa-container'>
            <img className="municipio" src={DIRECCION_MUNICIPIO} alt="municipio de aguascalientes"></img>
            <img className="estado" src={DIRECCION_ESTADO} alt="estado de aguascalientes"></img>
        </div>
    );
}

export default EstadoMapa;