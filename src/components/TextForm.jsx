import PropTypes from "prop-types";

TextForm.propTypes = {
    meme: PropTypes.object,
    sampleArray: PropTypes.array,
    textBoxes: PropTypes.array,
    updateTextBox: PropTypes.func
};

function TextForm({ meme, sampleArray, textBoxes, updateTextBox}) {

    function updateText (index, e) {
        const text = e.target.value || "";
        updateTextBox(index, text);
        console.log(index, text)
    }

    return (
        <div className="flex flex-col g-white w-full h-full max-w-600 whitespace-normal justify-center">

            <div className=" font-nurito text-memes-purple text-6xl font-black">{meme.name}</div>

            <div className="font-roboto pt-4">
                <div className="divide-y divide-memes-gray">
                    <div className="text-base leading-6 space-y-6 text-memes-dark-gray sm:text-lg sm:leading-7">
                        {sampleArray.map((item, index) =>
                        (<div key={index} className="flex flex-col w-full">
                            <input
                                type="text"
                                className="px-4 py-2 bg-white border focus:ring-memes-gray focus:border-memes-dark-gray w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder={`Text ${index + 1}`}
                                value={textBoxes[index] || ""}
                                onChange={(e) => updateText(index, e)}
                            />
                        </div>)
                        )}

                    </div>
                    <div className="pt-4 flex items-start justify-start">
                        <button className="px-4 py-2 rounded-xl flex text-memes-dark-gray font-bold justify-center self-center items-cente bg-memes-gray hover:bg-memes-light-purple hover:text-memes-purple">Generate Meme!</button>
                    </div>
                </div>
            </div>

        </div>);
}


export default TextForm;
