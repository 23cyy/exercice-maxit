import CardInfo5 from "../../components/CardInfo5/CardInfo5";
import "./section5.css";

function Section5() {
    return (
        <div className="section-bigger-container">
            <div>
                <p className="section-title">Achats</p>
            </div>
            <div className="card-options-section5">
                <CardInfo5
                    image="src/assets/wireframe/atom_secondaryicon_myservices.png"
                    title="Mes services"
                />
                <CardInfo5
                    image="src/assets/wireframe/atom_secondaryicon_mytickets.png"
                    title="Tickets"
                />
            </div>
        </div>
    );
}

export default Section5;
