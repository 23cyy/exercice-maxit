import CardInfo1 from "../../components/CardInfo1/CardInfo1";
import { FunctionalUiIcDonation11, FunctionalUiIcDonation1 } from "../../configs/images.configs";
import "./section1.css";

function Section1() {
    return (
        <div className="section-container">
            <div className="welcome-text">
                <p>Bienvenue, +225 0709925266</p>
            </div>
            <div className="cards">
                <CardInfo1
                    image={FunctionalUiIcDonation11}
                    title="Compte principal"
                    solde="***** Fcfa"
                    icon="src/assets/wireframe/icon.png"
                />
                <CardInfo1
                    image={FunctionalUiIcDonation1}
                    title="Compte principal"
                    solde="***** Fcfa"
                    icon="src/assets/wireframe/icon.png"
                />
            </div>
        </div>
    );
}

export default Section1;
