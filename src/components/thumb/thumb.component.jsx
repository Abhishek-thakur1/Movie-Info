import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from './thumb.styles';

const Thumb = ({ image,movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt=" Movie Image-"/>
            </Link>
        ) : (
            <Image src={image} alt=" Movie Image-"/>
        )}
        
    </div>
);
export default Thumb;