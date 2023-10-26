import { useEffect, useState } from "react"
import { getMemes } from "../services/memes"
import iziToast from "izitoast"
import MemeDisplay from "../components/MemeDisplay"
import ReactLoading from "react-loading";
import SideBar from "../components/SideBar";
import TextForm from "../components/TextForm";

function Home() {

    const [memes, setMemes] = useState([])
    const [status, setStatus] = useState("loading")
    const [currentMeme, setCurrentMeme] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [firstIndex, setFirstIndex] = useState(null);
    const [sampleArray, setSampleArray] = useState([]);
    const [textBoxes, setTextBoxes] = useState(["", "", "", ""])

    const classArray = [["absolute bottom-0 left-1/2 transform -translate-x-1/2"], ["absolute top-0 w-full ", "absolute bottom-0 w-full"], ["absolute top-0 left-0 ", "absolute top-0 right-0 ", "absolute bottom-0 w-full"], ["absolute top-0 left-0 ", "absolute top-0 right-0 ", "absolute bottom-0 left-0 ", "absolute bottom-0 right-0 "]]


    useEffect(() => {
        setStatus("loading");
        getMemes().then((resp) => {
            setTimeout(() => {
                setMemes(resp);
                if (resp.length) {
                    const random = Math.round(Math.random() * 101)
                    setFirstIndex(random);
                    setCurrentIndex(random);
                    setCurrentMeme(resp[random])
                    classArray.forEach((item) => item.length === resp[random].box_count ? setSampleArray(item) : null);
                } else {
                    iziToast.warning({
                        title: 'Uh oh',
                        message: "There seems to be a meme shortage, try later!",
                    });
                }
                setStatus("success");
            }, 2000)

        }).catch((err) => {
            iziToast.error({
                title: 'Error',
                message: err.message,
            });
            setStatus("error");
        })
    }, [])

    function goToNext() {
        let next = currentIndex;
        currentIndex !== 99 ? next = next + 1 : next = 0;
        setCurrentIndex(next)
        setCurrentMeme(memes[next])
        classArray.forEach((item) => item.length === currentMeme.box_count ? setSampleArray(item) : null);

    }

    function setTextBox(index, value) {
        console.log(index, value)
        const text = [...textBoxes];
        text[index] = value;
        console.log(text)
        setTextBoxes(text);
    }

    return (
        <>
            <div className="min-h-screen flex w-screen whitespace-nowrap">
                <div className="flex bg-white  p-4"><SideBar currentIndex={currentIndex} goToNext={goToNext} firstIndex={firstIndex} /></div>
                <div className="flex bg-memes-gray items-center min-w-600 justify-center"> {status === "success" ? (<MemeDisplay meme={currentMeme} sampleArray={sampleArray} textBoxes={textBoxes} />) : (<div className="flex items-center justify-center  w-600"><ReactLoading type="bubbles" color="#676868" /></div>)}</div>
                <div className="flex w-full bg-white p-24 items-center justify-center">
                    {status === "success" ? (
                        <TextForm
                            meme={currentMeme}
                            sampleArray={sampleArray}
                            textBoxes={textBoxes}
                            updateTextBox={(index, value) => setTextBox(index, value)} // Use the prop
                        />
                    ) : (
                        <div className="flex items-center justify-center">
                            <ReactLoading type="bubbles" color="#5223cb" />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
