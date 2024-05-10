import PropTypes from 'prop-types';

function CardInfo6(props) {
    return (
        <div className="card-options-element">
            <div className="card-options-image">
                <img src={props.image} alt="" />
            </div>
            <p>{props.title}</p>
        </div>
    );
}

CardInfo6.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CardInfo6;
