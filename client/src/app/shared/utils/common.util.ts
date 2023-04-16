export const getFontFamily = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    return documentStyle.getPropertyValue('--font-family');
};
