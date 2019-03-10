import React from 'react';
import RoundIcon from '../RoundIcon';
import './styles/index.css';

const ThirdPartyLogins = ({ onClickTwitter }) => (
	<section className="tc">
        <div className="context-menu">
        	<small>você também pode se conectar com</small>
        </div>
        <span className="flex justify-center scale--75">
            <RoundIcon
                classButton="anima-jump b--facebook ba bg-transparent bw1 mr2"
                classIcon="facebook"
                family="fab"
                icon="facebook-f"
                title="Facebook"
                onClick={() => console.log("facebook")}
            />
             <RoundIcon
                classButton="anima-jump b--goodreads ba bg-transparent bw1 ml2 mr2"
                classIcon="goodreads"
                family="fab"
                icon="goodreads-g"
                title="Goodreads"
            />
             <RoundIcon
                classButton="anima-jump b--twitter ba bg-transparent bw1 ml2"
                classIcon="twitter"
                family="fab"
                icon="twitter"
                title="Twitter"
                onClick={() => {
                    debugger;
                    onClickTwitter();
                }}
            />
        </span>
    </section>
);

export default ThirdPartyLogins;