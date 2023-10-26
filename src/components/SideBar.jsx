import PropTypes from "prop-types";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

library.add(faChevronDown);


SideBar.propTypes = {
    goToNext: PropTypes.func,
    currentIndex: PropTypes.number,
    firstIndex: PropTypes.number,
};

function SideBar({ goToNext, currentIndex, firstIndex }) {

    return (
        <div className="flex flex-col text-memes-dark-gray justify-between w-full">
            <Link className="" to="/">
                <div className="flex flex-col justify-start items-start">
                    <div className=" font-nurito text-xl font-black">THE</div>
                    <div className=" font-nurito text-xl font-black">MEME</div>
                    <div className=" font-nurito text-xl font-black">GEN-</div>
                </div>
            </Link>
            {currentIndex !== firstIndex - 1 ?
                <div onClick={() => goToNext()} className="rounded-xl flex justify-center self-center items-center h-10 w-10 bg-memes-gray hover:bg-memes-light-purple hover:text-memes-purple">
                    <FontAwesomeIcon className="" icon="chevron-down" />
                </div> :
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center font-nurito text-xl font-black">THE</div>
                    <div className="text-center font-nurito text-xl font-black">END</div>
                </div>
            }

        </div>
    );
}


export default SideBar;
