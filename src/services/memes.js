import axios from "axios";

const memesApiURL = import.meta.env.VITE_MEMES_API_URL;

class Meme {
    constructor(id, name, url, width, height, box_count, captions) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.width = width;
        this.height = height;
        this.box_count = box_count;
        this.captions = captions
    }
}

// class GeneratedMeme {
//     constructor(url) {
//         this.url = url;
//     }
// }

export const getMemes = async () => {
    const { data } = await axios.get(
        `${memesApiURL}/get_memes`
    );
    return data.data.memes.map(item => new Meme(item.id, item.name, item.url, item.width, item.height, item.box_count, item.caption));
};

// export const generateMeme = async () => {
//     const { data } = await axios.post(
//         `${memesApiURL}/caption_image`
//     );
//     return data.data.memes.map(item => new Meme(item.id, item.name, item.url, item.width, item.height, item.box_count, item.caption));
// };