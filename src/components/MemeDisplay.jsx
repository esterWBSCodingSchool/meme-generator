import PropTypes from "prop-types";

MemeDisplay.propTypes = {
    meme: PropTypes.object,
    sampleArray: PropTypes.array,
    textBoxes: PropTypes.array
};

function MemeDisplay({ meme, sampleArray, textBoxes }) {

    const backgroundStyle = {
        backgroundImage: `url(${meme.url})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div className="w-600 h-600 relative text-black" style={backgroundStyle}>
            {sampleArray.length > 0 ? sampleArray.map((item, index) =>
                <div key={index} className={`${item} p-4 font-nurito text-3xl font-black`}>{textBoxes[index]}</div>
            ): null }
        </div> 
    );
}


export default MemeDisplay;
