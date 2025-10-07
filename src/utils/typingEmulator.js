const CURSOR = '|';

export const typingEmulator = (text, { setInput, onStart, onComplete }) => {
    let currentText = '';
    let index = 0;
    let cursorVisible = true;
    
    if (onStart) onStart();

    const cursorInterval = setInterval(() => {
        cursorVisible = !cursorVisible;
        updateDisplay();
    }, 500);
    
    const updateDisplay = () => {
        setInput(currentText + (cursorVisible ? CURSOR : ' '));
    };
    
    const interval = setInterval(() => {
        if (index < text.length) {
            if (currentText.endsWith(CURSOR)) {
                currentText = currentText.slice(0, -1);
            }
            currentText += text[index];
            updateDisplay();
            index++;
        } else {
            clearInterval(interval);
            clearInterval(cursorInterval);
            setInput(currentText.endsWith(CURSOR) ? currentText.slice(0, -1) : currentText);
            if (onComplete) onComplete();
        }
    }, 50);

    return () => {
        clearInterval(interval);
        clearInterval(cursorInterval);
        if (onComplete) onComplete();
    };
};