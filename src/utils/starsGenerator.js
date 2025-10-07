export const starGenerator = () => {
    const newStars = Array(40).fill().map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5
    }));

    return newStars;
};