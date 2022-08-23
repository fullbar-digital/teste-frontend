import { useState } from 'react';
import './style.scss';

export const Image = ({ classNameImg, src, alt, height, parentHeight, width }) => {
    const [loading, setLoading] = useState(true)

    // Esta função é apenas chamada quando a imagem é carregada
    function imgLoad() {
        setLoading(false)
    }

    return (
        <div onLoad={imgLoad} style={{ height: loading ? parentHeight : 'auto' }}>
            <img height={height} width={width} className={`image-component${classNameImg ? ` ${classNameImg}` : ''}`} src={src} alt={alt} />
        </div>
    );
};