import './PreFooterAgs.css';
import { Divider } from '@mui/material'; 

function PreFooterAgs(){
    return(
      <div>
        <div className='video'>
        <video
                    muted
                    autoPlay
                    loop
                    playsInline
                >
                    <source src="public\fotos-bento\video\exedra.mp4"  type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
        </div>

        <Divider sx={{ borderColor: '#f9c74f', borderWidth: 2 }}></Divider>     

      </div>


    );
}

export default PreFooterAgs;