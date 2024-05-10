import CardInfo6 from "../../components/CardInfo6/CardInfo6";
import "./section6.css";

function Section6() {
    return (
        <div className="section-bigger-container-section-6">
            <div>
                <p className="section-title">Besoin d&apos;aide?</p>
            </div>
            <div className="card-options">
                <CardInfo6
                    image="src/assets/wireframe/atom_secondaryicon_faq.png"
                    title="Assistance en ligne"
                />
                <CardInfo6
                    image="src/assets/wireframe/azerty.png"
                    title="Trouver une agence"
                />
                <CardInfo6
                    image="src/assets/wireframe/Thumbnail.png"
                    title="Pharmacie de garde"
                />
                <CardInfo6
                    image="src/assets/wireframe/Capture d’écran 2023-11-29 à 10.50 1.png"
                    title="Parrainage"
                />
            </div>
        </div>
    );
}

export default Section6;
