import CardInfo2 from "../../components/CardInfo2/CardInfo2";
import "./section2.css";

function Section2() {
    return (
        <div className="section-bigger-container">
            <div className="card-options">
                <CardInfo2
                    id="Opt1-section2"
                    image="src/assets/wireframe/Group 1365.png"
                    title="Recharger"
                />
                <CardInfo2
                    id="Opt2-section2"
                    image="src/assets/wireframe/Content image.png"
                    title="Acheter un pass"
                />
                <CardInfo2
                    id="Opt3-section2"
                    image="src/assets/wireframe/Thumbnail.png"
                    title="Transfert d'argent"
                />
                <CardInfo2
                    id="Opt4-section2"
                    image="src/assets/wireframe/Thumbnail-1.png"
                    title="Paiement marchant"
                />
            </div>
        </div>
    );
}

export default Section2;
