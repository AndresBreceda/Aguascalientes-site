import './InfoAgs.css';

function InfoAgs(){
    return(
        <>
        <div className='separador'> </div><br></br>
        <section className='contenedor'>
            <img className='img-principal' src="./src/assets/Plaza-En-Aguascalientes.webp" alt="plaza central aguascalientes"></img>
            <span id='info'></span>
            <p className='aguascalientesSinal'>Aguascalientes</p>
        </section>
        


      <section>
            <h2 className='introduccion'>Historia</h2>
            <blockquote className='introduccion-texto'>
            <img src='./src/assets/periodico-rasgado.svg' alt='Periodico rasgado' className='imagen-izquierda-1'></img>                
            <img src="./src/assets/iglesia-transparente.png" alt="casa verde en Aguascalientes" className='imagen-izquierda-2'></img>
                <p className='parrafo1'>
                    <strong>Aguascalientes</strong>, ubicada en el corazón de México, es una ciudad que combina tradición, 
                    modernidad y hospitalidad. Fundada en <strong>1575</strong>, es conocida por su rica historia, 
                    su vibrante cultura y su destacado desarrollo económico. Su nombre, 
                    que significa <strong>"aguas calientes"</strong>, 
                    se debe a las aguas termales que caracterizaron la región en el pasado.
                </p>

                <p  className='parrafo2'>
                    Esta ciudad es reconocida por ser sede de la famosa <strong>Feria Nacional de San Marcos</strong>, 
                    una de las festividades más importantes y tradicionales del país, 
                    que atrae a visitantes de todo el mundo con su oferta de eventos culturales, 
                    espectáculos y actividades. Además, <strong> Aguascalientes</strong> se distingue por su arquitectura 
                    colonial, su tranquilidad y su calidad de vida,
                    que la han convertido en un lugar atractivo tanto para turistas como para residentes.
                </p>

                <p  className='parrafo2'>
                    Con una economía pujante basada en la industria automotriz, la tecnología y el comercio, 
                    <strong> Aguascalientes</strong> ha sabido mantener su esencia histórica mientras avanza hacia el futuro. 
                    Lugares como el <strong>Jardín de San Marcos</strong>, el<strong>Teatro Morelos</strong> y el <strong>Museo 
                    Nacional de la Muerte</strong> son testigos del rico patrimonio cultural que enorgullece a sus habitantes.
                </p>
            </blockquote>
        </section>
        </>


    );
}

export default InfoAgs;