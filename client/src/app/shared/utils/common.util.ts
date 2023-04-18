export const getFontFamily = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    return documentStyle.getPropertyValue('--font-family');
};

export const getFontColor = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    return documentStyle.getPropertyValue('--font-color');
};
