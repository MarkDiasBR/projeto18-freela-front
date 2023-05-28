import { Container } from "./styled";
import Navbar from "../Navbar/Navbar";

export default function ScreenWithHeader({ children }) {
    return (
        <Container>
            <Navbar />
            { children }
        </Container>
    )
}