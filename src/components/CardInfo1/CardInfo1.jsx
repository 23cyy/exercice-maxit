import PropTypes from 'prop-types';

function CardInfo1(props) {
    return (
        <div className="card-info">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
            <div className="solde">
                <p>{props.solde}</p>
                <img src={props.icon} alt="" />
            </div>
        </div>
    );
}

CardInfo1.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    solde: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default CardInfo1;
