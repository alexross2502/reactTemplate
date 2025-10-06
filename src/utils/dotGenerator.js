export const generateDots = (count) => {
    return Array(count).fill().map((_, index) => ({
        id: index,
        top: Math.random() * 100,
        left: Math.random() * 100,
        rotation: Math.random() * 180
    }));
};