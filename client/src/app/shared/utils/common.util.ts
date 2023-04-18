export const getFontFamily = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    return documentStyle.getPropertyValue('--font-family');
};

export const getFontColor = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    return documentStyle.getPropertyValue('--font-color');
};

export const getRandomDate = (): Date => {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
    const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTimestamp);
};
