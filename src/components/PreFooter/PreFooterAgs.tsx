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
                    <source src="./src/assets/video-centro.webm" type="video/webm" />
                    Tu navegador no soporta el elemento de video.
                </video>
        </div>



        <Divider sx={{ borderColor: '#f9c74f', borderWidth: 2 }}></Divider>     

      </div>


    );
}

export default PreFooterAgs;