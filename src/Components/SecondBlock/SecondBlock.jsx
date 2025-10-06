import React, { useCallback, useState, useMemo  } from 'react';
import styles from './SecondBlock.module.css';
import { generateDots } from '../../utils/dotGenerator';

const SecondBlock = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const dots = useMemo(() => generateDots(40), []);

    const handleMouseMove = useCallback((event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePos({ x, y });
    }, []);

    const MAX_DISTANCE = 300;

    const calculateLine = (dot) => {
        const container = document.querySelector(`.${styles.container}`);
        const containerRect = container.getBoundingClientRect();

        const dotX = (dot.left / 100) * containerRect.width;
        const dotY = (dot.top / 100) * containerRect.height;

        const dx = dotX - mousePos.x;
        const dy = dotY - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > MAX_DISTANCE) {
            return null;
        }

        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        return {
            width: `${distance}px`,
            transform: `rotate(${angle}deg)`,
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transformOrigin: '0 0',
            opacity: 1 - (distance / MAX_DISTANCE) * 0.8
        };
    };

    return (
        <div
            className={styles.container}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {dots.map(dot => (
                <React.Fragment key={dot.id}>
                    <div
                        className={styles.dot}
                        style={{
                            top: `${dot.top}%`,
                            left: `${dot.left}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <div
                            className={styles.cross}
                            style={{transform: `rotate(${dot.rotation}deg)`}}
                        ></div>
                    </div>
                    {isHovered && (
                        <div
                            className={styles.line}
                            style={calculateLine(dot)}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default SecondBlock;