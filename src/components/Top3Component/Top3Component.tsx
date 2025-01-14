interface Top3ComponentProps {
    nombrePuesto: string;
    informacion: string;
    foto: string;
  }
  
const Top3Component: React.FC<Top3ComponentProps> = ({ nombrePuesto, informacion, foto }) =>{
  return (
    <blockquote className="w-full max-w-6xl mx-auto p-4">
      <h3 className="text-2xl font-bold text-center mb-6 text-black">{nombrePuesto}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="prose max-w-none">
          <p className="justificado text-gray-900">{informacion}</p>
        </div>
        <div className="flex justify-center items-start">
          <img 
            src={foto} 
            alt={nombrePuesto}
            className="rounded-lg shadow-md max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </blockquote>
  );
};

export default Top3Component;