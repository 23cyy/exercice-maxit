import PropTypes from 'prop-types';

function CardInfo2(props) {
    return (
        <div className="card-options-element" id={props.id}>
            <div className="card-options-image">
                <img src={props.image} alt="" />
            </div>
            <p>{props.title}</p>
        </div>
    );
}

CardInfo2.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CardInfo2;
