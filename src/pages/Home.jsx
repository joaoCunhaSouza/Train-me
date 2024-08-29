import Container from '../container';
import '../main-page.css';
import { More } from "./More";
import { Link, Route, Routes } from 'react-router-dom';
import images from "../img/images.jsx"; // Caminho correto para o arquivo de imagens

export function Home() {
    return (
        <>
            <div className="background">
                <Container>
                    <div className="align">
                        <div className="content">
                            <h1 className='font'><strong>Exclusive</strong> workouts
                                for you!</h1>
                            <p>We create exclusive and unique workouts for you.
                                Invest in your body and have much more performance
                                and quality of life.</p>

                            <ul>
                                <li className="no-list-style">

                                    

                                    <Link to="/More" className="more-link">Register</Link>
                                </li>
                            </ul>
                        </div>

                        <img src={images.img8} alt="Photographer's insight" className='logo-png' />
                    </div>
                </Container>
            </div>



         
            <Routes>
                <Route path="/More" element={<More />} />
            </Routes>
        </>
    );
}