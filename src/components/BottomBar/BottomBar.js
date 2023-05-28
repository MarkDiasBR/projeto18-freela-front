import { Link } from "react-router-dom";
import { Container } from "./styled";
import { IonIcon } from '@ionic/react';
import { home, search, heartOutline, personOutline } from 'ionicons/icons';

export default function BottomBar() {
    return (
        <Container className="barra-base modo-claro">
            <Link to="/">
                <IonIcon icon={home} />
            </Link>      
            <IonIcon icon={search} />
            <IonIcon icon={heartOutline} />
            <IonIcon icon={personOutline} />
        </Container>
    )
}