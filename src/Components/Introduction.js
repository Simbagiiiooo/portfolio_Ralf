import React from 'react';
import portrait from './img/profielfoto.jpg'

const Introduction=()=> {
    return (
        <div className="introduction">
            <p>Mijn naam is Ralf van Eck en ben 48 jaar. <br></br>
            Ik heb al veel verschillende banen gehad, maar dit zijn naar mij mening altijd banen onder mijn niveau geweest.
            Dit is volgens mij te wijten geweest omdat ik niet wist wat ik wilde worden.
            Ik heb 2 jaar geleden een aantal persoonlijkheid en beroepskeuze testen gedaan.
            Daar zij een aantal zaken naar boven gekomen namelijk:<br></br>
            - Computers<br></br>
            - Ontwerpen<br></br>
            - Ontwikkeling(maken en/of bouwen)<br></br>
            - Analytisch<br></br>
            - Onderzoekend<br></br>
            Vanaf september 2020 tot september 2021 ben ik bezig geweest met de opleiding Front-end development bij Winc
            Academy. De opleiding heb ik inmiddels afgerond.<br></br>
            Ik heb de opleiding met veel plezier gedaan. Omdat je bij de opleiding veel zelf bezig bent en veel zelf uit moet zoeken. 
            Soms is het niet makkelijk geweest en daardoor veel over en van mezelf geleerd.<br></br>
            Ik ben me ervan bewust dat ik een junior ben en nog veel moet leren.<br></br><br></br>
            Ik ben ervan overtuigd dat ik ondanks mijn leeftijd met de juiste begeleiding een waardevolle Developer kan worden!<br></br><br></br>
            Op deze pagina heb ik projecten die ik maakte in het kader van mijn opleiding maar ook andere projecten.
            </p>
            <img src = {portrait} alt = "portret Ralf van Eck"  ></img>
        </div>
    )
}

export default Introduction
