import PropTypes from 'prop-types';

function CardInfo3(props) {
    return (
        <div className="container">
            <div className="card-options-section3">
                <img src={props.image} alt="" />
            </div>
            <p className="sub-text">{props.title}</p>
        </div>
    );
}

CardInfo3.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CardInfo3;
