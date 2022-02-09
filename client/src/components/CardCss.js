import React from 'react';
import '../styles/cardStyles.css'

export const CardCss = ({name, released, img}) => {
    return <>
        <div className="container-principal">
            <div className="container card">
                <div className="card__face card__face--front">
                    <h1>{name}</h1>
                    <div className="container-img">
                    <img src={img} alt={name} />
                    </div>
                    <div className="footer">{released}</div>
                </div>
                <div className="card__face card__face--back ">back</div>

            </div>

        </div>



    </>;
};
