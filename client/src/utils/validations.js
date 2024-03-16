export const minLength = (length, text, type, setter) => {
    setter(state => ({
        ...state,
        [type]: text.length < length && text !== ""
    }))
};

export const regexValidator = (regex, text, type, setter) => {
    const regexStr = new RegExp(regex, 'g');
    setter(state => ({
        ...state,
        [type]: !regexStr.test(text) && text !== ""
    }));
};

export const urlValidator = (startValue, text, type, setter) => {
    setter(state => ({
        ...state,
        [type]: !text.startsWith(startValue) && text !== ""
    }));
};

export const passwordsMatch = (passwordOne, passwordTwo, type, setter) => {
    if (passwordOne !== passwordTwo && passwordTwo !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
};