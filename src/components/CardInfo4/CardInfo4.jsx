import PropTypes from 'prop-types';

function CardInfo4(props) {
    return (
        <div className="card-options-element">
            <div className="card-options-image">
                <div className="sos">
                    <img src={props.image} alt="" />
                </div>
            </div>
            <p>{props.title}</p>
        </div>
    );
}

CardInfo4.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CardInfo4;
