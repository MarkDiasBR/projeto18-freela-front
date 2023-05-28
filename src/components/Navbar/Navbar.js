import { Link } from "react-router-dom";
import { Container, ContentContainer, LogoContainer } from "./styled"
import { IonIcon } from '@ionic/react';
import { restaurantOutline, moonOutline, moon, personOutline, heartOutline, logOutOutline } from 'ionicons/icons';

export default function Navbar() {

    function toggleDarkMode() {
        const boxes = document.querySelectorAll(".modo-claro");
        for (const box of boxes) {
            box.classList.toggle("modo-escuro");
        }
    }

    return (
        <Container className="modo-claro">
            <ContentContainer className="navbar modo-claro">
                <LogoContainer className="logo">
                    <Link to="/">
                        <IonIcon className="modo-claro" icon={restaurantOutline} />
                    </Link>
                    <div className="divisor-vertical-logo modo-claro"></div>
                    <Link to="/">
                        <p className="modo-claro">
                            Only<span>Foods</span>
                        </p>
                    </Link>
                    <button id="botao-modo-escuro" onClick={toggleDarkMode}>
                        <IonIcon className="modo-claro" icon={moonOutline} />
                        <IonIcon className="modo-claro switch modo-escuro" icon={moon} />
                    </button>
                    <IonIcon className="modo-claro" icon={logOutOutline} />
                </LogoContainer>
                <input className="modo-claro" type="text" name="input-pesquisar" id="input-pesquisar" placeholder="Pesquisar" />
                <div className="icones">
                    <button onClick={toggleDarkMode}>
                        <IonIcon className="modo-claro" icon={moonOutline} />
                        <IonIcon className="modo-claro switch modo-escuro" icon={moon} />
                    </button>



                    <IonIcon className="modo-claro" icon={heartOutline} />
                    <IonIcon className="modo-claro" icon={personOutline} />
                    <IonIcon className="modo-claro" icon={logOutOutline} />
                </div>
            </ContentContainer>
            <div className="divisor-horizontal modo-claro"></div>
        </Container>
    )
}