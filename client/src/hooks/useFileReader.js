import { useState } from "react";

const useFileReader = () => {
    const [dataUrl, setDataUrl] = useState({ dataUrl: '', fileName: '' });

    function setUrl(ev, dispatch) {
        const file = ev.target.files[0];
        console.log(file);

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const dataURL = reader.result;
                setDataUrl({ dataURL, fileName: file.name });
            };
            reader.readAsDataURL(file);
        }
    }

    return [dataUrl, setUrl];
}

export default useFileReader;