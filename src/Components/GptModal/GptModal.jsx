import React, {useEffect, useState} from 'react';
import styles from './GptModal.module.css';
import { getAIResponse } from '../../utils/gpt';
import {starGenerator} from "../../utils/starsGenerator";
import {typingEmulator} from "../../utils/typingEmulator";

const GptModal = ({ isOpen, onClose }) => {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
            setStars(starGenerator());
            typingEmulator("Hi! I'm your virtual assistant and chat partner for today.", {
                setInput: setInput,
                onStart: () => setIsTyping(true),
                onComplete: () => {
                    setIsTyping(false);
                    setTimeout(() => {
                        typingEmulator("Type your question here!", {
                            setInput: setPlaceholder,
                            onStart: () => setIsTyping(true),
                            onComplete: () => setIsTyping(false)
                        });
                    }, 1000);
                }
            });
        } else {
            document.body.style.overflowY = 'auto';
            setInput('');
            setInput2('');
        }
    }, [isOpen]);

    const handleSubmit = async () => {
        try {
            const response = await getAIResponse(input2);

            const responseText = response.content || response;

            setInput('');

            typingEmulator(responseText, {
                setInput: (text) => {
                    setInput(text);
                },
                onStart: () => {
                    setIsTyping(true);
                },
                onComplete: () => {
                    setIsTyping(false);
                }
            });
        } catch (error) {
            setIsTyping(false);
        }
    };


    return (
        <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}>
            {isOpen && stars.map(star => (
                <div
                    key={star.id}
                    className={styles.star}
                    style={{
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration,
                        animationDelay: star.animationDelay
                    }}
                />
            ))}
            <div className={`${styles.modal} ${isOpen ? styles.modalVisible : ''}`}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <textarea
                    placeholder=''
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={styles.input}
                    readOnly
                />
                <textarea
                    placeholder={placeholder}
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    className={styles.input2}
                    readOnly={isLoading || isLoading}
                />
                <button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={isLoading || isTyping}
                >
                    <p>Ask</p>
                </button>
            </div>
        </div>
    );
};

export default GptModal;