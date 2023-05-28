import { Container } from "./styled";
import Navbar from "../Navbar/Navbar";
import BottomBar from "../BottomBar/BottomBar";

export default function ScreenWithHeader({ children }) {
    return (
        <Container>
            <Navbar />
            { children }
            <BottomBar />
        </Container>
    )
}