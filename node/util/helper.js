const generateUniqueId = () => {
    const today = new Date();
    const datePart = `${today.getFullYear()}${('0' + (today.getMonth() + 1)).slice(-2)}${('0' + today.getDate()).slice(-2)}`;
    const timePart = `${('0' + today.getHours()).slice(-2)}${('0' + today.getMinutes()).slice(-2)}`;
    const randomPart = Math.floor(100 + Math.random() * 900);

    return `${datePart}${timePart}${randomPart}`;
};

export {
    generateUniqueId
}