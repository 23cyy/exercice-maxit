import CardInfo3 from "../../components/CardInfo3/CardInfo3";
import "./section3.css";

function Section3() {
    return (
        <div className="section-bigger-container">
            <div>
                <p className="section-title">Services</p>
            </div>
            <div className="section3-container">
                <div>
                    <img src="src/assets/wireframe/Illustration.png" alt="" />
                    <p className="sub-text">CAF 2023 Match centre</p>
                </div>
                <div className="section3-right-container">
                    <div>
                        <CardInfo3
                            image="src/assets/wireframe/atom_quickicon_deals.png"
                            title="Promo"
                        />
                        <CardInfo3
                            image="src/assets/wireframe/atom_quickicon_ozen.png"
                            title="O'zen"
                        />
                    </div>
                    <div>
                        <CardInfo3
                            image="src/assets/wireframe/atom_secondaryicon_line_outlined.png"
                            title="Ma SIM"
                        />
                        <CardInfo3
                            image="src/assets/wireframe/atom_secondaryicon_mylives.png"
                            title="Live streaming"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;
