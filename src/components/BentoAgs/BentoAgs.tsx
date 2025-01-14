import './BentoAgs.css';
interface Bento {
  primerafoto: string;
  segundafoto: string;
  tercerafoto: string;
  cuartafoto: string;
  quintafoto: string;
  sextafoto: string;
};

const BentoAgs: React.FC<Bento> = ({ primerafoto, segundafoto, tercerafoto, cuartafoto, quintafoto, sextafoto})=>{ 

  const generateAlt = (url) => {
    const fileName = url.split('/').pop(); // Extraer el nombre del archivo
    return fileName
      .replace('.webp', '') 
    };

    return(

      <div className="bento grid grid-cols-4 grid-rows-5 gap-4">
        
          <div className="col-span-2 row-span-3">
            <img src={primerafoto} alt={generateAlt(primerafoto)}></img>
          </div>

          <div className="row-span-2 col-start-1 row-start-4">
            <img src={segundafoto} alt={generateAlt(segundafoto)}></img>
          </div>

          <div className="row-span-2 col-start-2 row-start-4">
          <img src={tercerafoto} alt={generateAlt(tercerafoto)}></img>
          </div>

          <div className="col-span-2 row-span-3 col-start-3 row-start-3">
          <img src={cuartafoto} alt={generateAlt(cuartafoto)}></img>
          </div>

          <div className="row-span-2 col-start-3 row-start-1">
          <img src={quintafoto} alt={generateAlt(quintafoto)}></img>
          </div>

          <div className="row-span-2 col-start-4 row-start-1">
          <img src={sextafoto} alt={generateAlt(sextafoto)}></img>
          </div>
    
      </div>
    );
}

export default BentoAgs;