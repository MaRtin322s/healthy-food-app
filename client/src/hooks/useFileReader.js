import { useState } from "react";

const useFileReader = () => {
    const [dataUrl, setDataUrl] = useState({ dataUrl: '', fileName: '' });

    function setUrl(ev) {
        const file = ev.target.files[0];

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