function checkValidForImg(url) {
    const reg = /^https:\/\/\S+?\.(jpg|jpeg|tif|tiff|png|gif)$/;
    return reg.test(url);
};