import CardInfo4 from "../../components/CardInfo4/CardInfo4";

function Section4() {
    return (
        <div className="section-bigger-container">
            <div>
                <p className="section-title">Payer et transférer</p>
            </div>
            <div className="card-options">
                <CardInfo4
                    image="src/assets/wireframe/SOS.png"
                    title="SOS"
                />
                <CardInfo4
                    image="src/assets/wireframe/content.png"
                    title="Tranfert crédit"
                />
                <CardInfo4
                    image="src/assets/wireframe/atom_quickicon_paybill.png"
                    title="Facture orange"
                />
                <CardInfo4
                    image="src/assets/wireframe/atom_secondaryicon_line_outlined.png"
                    title="Gérer ma sim"
                />
            </div>
        </div>
    );
}

export default Section4;
