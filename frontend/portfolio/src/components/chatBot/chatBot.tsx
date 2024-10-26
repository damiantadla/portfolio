"use client"

import Image from "next/image";
import Cross from "@/app/icon/Frame.svg";
import EmojiIcon from "@/app/icon/EmojiIcon.svg";
import Arrow from "@/app/icon/Arrow.svg";
import Picker, {EmojiClickData} from "emoji-picker-react";
import MessageIcon from "@/app/icon/message.svg";
import Markdown from 'react-markdown'
import Images from "../../../public/damiablack.png"
import React, {RefObject, useEffect, useRef, useState} from "react";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


const client = axios.create({
    baseURL: 'https://europe-central2-oleanna-dev.cloudfunctions.net/ai/ai',
    // baseURL: 'http://127.0.0.1:5001/oleanna-dev/europe-central2/ai/ai',
});

const config: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
}

function useOnClickOutside(
    ref: RefObject<HTMLElement>,
    emojiIconRef: RefObject<HTMLElement>,
    handler: () => void
) {

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                emojiIconRef.current &&
                !emojiIconRef.current.contains(event.target as Node)
            ) {
                handler();
            }
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, emojiIconRef, handler]);
}

interface Message {
    user: boolean;
    text: string;
    createdAt: string;
    link: string
}


const ChatBotAI: React.FC = () => {

    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const [showChatBot, setShowChatBot] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentMessage, setCurrentMessage] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [showRedDot, setShowRedDot] = useState<boolean>(false);
    const pickerRef = useRef<HTMLDivElement | null>(null);
    const emojiIconRef = useRef<HTMLDivElement | null>(null);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(pickerRef, emojiIconRef, () => {
        setShowEmojiPicker(false);
    });

    useEffect(() => {
        const savedMessages = localStorage.getItem('messagesAI');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        } else {
            setMessages([]);
        }
    }, []);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }, [currentMessage]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('messagesAI', JSON.stringify(messages));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [messages]);

    useEffect(() => {
        if (showChatBot) {
            scrollToBottomInstant();
        }
    }, [showChatBot]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    useEffect(() => {
        const lastRedDotTimestamp = localStorage.getItem("lastRedDotTimestamp");

        if(!lastRedDotTimestamp){
            setShowRedDot(true);
        }

        const checkRedDotVisibility = () => {
            const now = Date.now();
            if (lastRedDotTimestamp && now - parseInt(lastRedDotTimestamp) >= 60 * 1000 * 15) {
                setShowRedDot(true);
            }
        };

        const intervalId = setInterval(() => {
            checkRedDotVisibility();
        }, 60 * 1000 * 6);

        return () => clearInterval(intervalId);
    }, []);

    const emojiMap = {
        ":)": "🙂",
        ";)": "😉",
        ";(": "😢",
        ":(": "☹️",
        ":D": "😄",
        ":P": "😛",
        "<3": "❤️",
        ":*": "😚",
        ";*":"😘"
    };

    const replaceEmoticonsWithEmoji = (text: string) => {
        let replacedText = text;
        for (const [key, value] of Object.entries(emojiMap)) {
            replacedText = replacedText.split(key).join(value);
        }
        return replacedText;
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        const newMessage = replaceEmoticonsWithEmoji(inputText);
        setCurrentMessage(newMessage);
    };

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    };

    const scrollToBottomInstant = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'instant', block: "end" });
        }
    };

    const sendMessage = async () => {
        const trimmedMessage = currentMessage.trim();

        if (trimmedMessage !== "") {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const updatedMessages = [...messages, {
                text: trimmedMessage,
                createdAt: time,
                user: true,
                link: ""
            }];

            setMessages(updatedMessages);
            setCurrentMessage("");

            const filterMessages = updatedMessages
                .slice(-10)
                .filter(message => message.user)
                .map(message => ({
                    content: message.text,
                    role: "user",
                }));

            try {
                setLoading(true);

                const response: AxiosResponse = await client.post(
                    "/",
                    { value: filterMessages },
                    config
                );

                const botReply = response.data?.data;
                const link = response.data?.link;

                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        text: botReply || "Przykro mi, nie potrafię pomóc w tej sprawie. Spróbuj zapytać mnie o coś innego. ",
                        createdAt: time,
                        user: false,
                        link: link
                    },
                ]);

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error("Error sending message:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        text: "Wystąpił błąd. Proszę spróbować ponownie.",
                        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        user: false,
                        link: ""
                    },
                ]);

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const showChatBotFunction = () => {
        setShowChatBot((prevState) => !prevState);

        if (!showChatBot) {
            const now = Date.now();
            localStorage.setItem("lastRedDotTimestamp", now.toString());

            const lastMessage = messages[messages.length - 1];

            if (showRedDot && (!lastMessage || lastMessage.text !== "W czym mogę Ci pomóc?")) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        text: "W czym mogę Ci pomóc?",
                        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        user: false,
                        link: ""
                    },
                ]);
            }
            setShowRedDot(false);
        }
    };

    return (
        <>
            <div
                className="fixed bottom-2 right-2 md:bottom-8 md:right-8 w-[80px] h-[80px] rounded-full bg-orange flex items-center justify-center cursor-pointer transition-all duration-300 z-40"
                onClick={() => showChatBotFunction()}
            >
                <Image
                    className={`w-[52px] h-[52px] transition-all duration-300 ${
                        showChatBot ? 'rotate-180 opacity-0' : 'opacity-100'
                    }`}
                    src={MessageIcon}
                    alt="Logo"
                />

                <Image
                    className={`absolute w-[42px] h-[42px] transition-all duration-300 ${
                        showChatBot ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                    }`}
                    src={Cross}
                    alt="Cross"
                />

                {showRedDot && (
                    <div
                        className="h-[28px] w-[28px] bg-red-400 absolute -top-1 right-0 rounded-full pulsate-bck text-center">
                        1
                    </div>
                )}
            </div>

            {showChatBot && (
                <div
                    className="fixed bottom-0 right-0 sm:bottom-32 sm:right-8 sm:rounded-lg shadow-2xl z-50 flex flex-col h-full w-full sm:h-[592px] sm:w-[450px]">
                    <div className="w-full h-[80px] sm:rounded-t-lg shadow-2xl">
                        <div className="bg-orange w-full h-full sm:rounded-t-lg">
                            <div onClick={() => {
                                setMessages([])
                            }} className="flex justify-between items-center w-full h-[80px] px-8">
                                <div className="flex flex-col">
                                    <p className="text-2xl font-bold text-white">Asystent AI 🤖</p>
                                    <p className="text-white ml-10 font-normal text-[12px]">powered by Damian Tadla</p>
                                </div>
                                <div
                                    className="h-[40px] w-[40px] bg-whiteOpacity rounded-full flex items-center justify-center cursor-pointer"
                                    onClick={() => setShowChatBot(false)}
                                >
                                    <Image className="h-[24px] w-[24px]" src={Cross} alt="Cross"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow overflow-auto px-2 text-xs bg-white">
                        {messages.map((msg, index) => {
                                const now = new Date();
                                const nowTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

                                return (
                                    <div key={index} className={`m-4 mt-6 ${msg.user ? 'mr-1' : 'pl-2'}`}>
                                        {msg.user ? (
                                            <>
                                                <div
                                                    className="bg-[#feb273] px-4 py-3 ml-8 rounded-l-lg rounded-b-lg text-white text-[16px] ">
                                                    {msg.text}
                                                </div>
                                                <p className="text-date font-normal text-xs text-right pt-1">
                                                    {msg.createdAt === nowTime ? 'Teraz' : msg.createdAt}
                                                </p>
                                            </>
                                        ) : (
                                            <div className="flex">
                                                <div
                                                    className="flex items-center justify-center bg-[#feb273] h-[40px] w-[40px] rounded-full overflow-hidden">
                                                    <Image src={Images} alt="Logo"/>
                                                </div>
                                                <div className="w-5/6 pl-2">
                                                    <p className="text-lightBlack font-bold text-[16px] pb-2">Damian Tadla</p>
                                                    <div
                                                        className={`bg-[#dadada] bg-opacity-60 px-4 py-3 mb-1 rounded-r-lg rounded-b-lg text-lightBlack transition-all duration-300 ${
                                                            loading && index === messages.length - 1 ? 'w-20' : 'w-auto'
                                                        }`}
                                                    >
                                                        {loading && index === messages.length - 1 ? (
                                                            <div></div>
                                                        ) : (


                                                            <>
                                                                <div
                                                                    className="text-[16px]"
                                                                >
                                                                    <Markdown>{msg.text}</Markdown>
                                                                </div>
                                                                {
                                                                    msg.link && (
                                                                        <div className="mt-4">
                                                                            <a
                                                                                className="text-primary hover:text-primary-darker text-[16px]"
                                                                                href={msg.link}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                Przejdź do listy produktów...
                                                                            </a>
                                                                        </div>
                                                                    )
                                                                }
                                                            </>


                                                        )}
                                                    </div>
                                                    {
                                                        loading ? (
                                                            <div></div>
                                                        ) : (
                                                            <p className="text-date font-normal text-xs text-right pt-1">
                                                                {msg.createdAt === nowTime ? 'Teraz' : msg.createdAt}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                        }
                                        <div ref={messagesEndRef}/>
                                    </div>
                                )
                            }
                        )}
                    </div>

                    <div
                        className="flex items-end justify-between w-full min-h-[72px] max-h-40 bg-white px-4 pb-4 sm:rounded-b-lg ">
                        <div className="flex-shrink-0">
                            <Image
                                className="cursor-pointer h-14 w-14 -mb-2"
                                src={EmojiIcon}
                                alt="Emoji icon"
                                ref={(node) => {
                                    if (node) {
                                        emojiIconRef.current = node;
                                    }
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowEmojiPicker(!showEmojiPicker);
                                }}
                            />
                        </div>
                        <textarea
                            ref={textAreaRef}
                            className="flex-grow resize-none border-none outline-none sm:rounded-lg text-black bg-white max-h-40 w-24  mx-4 mt-4 py-2"
                            rows={1}
                            placeholder="Napisz wiadomość..."
                            value={currentMessage}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />


                        <div className="">
                            {currentMessage.trim() ? (
                                <div
                                    className="cursor-pointer bg-orange p-2 ml-2 rounded-full shadow-2xl transition-all"
                                    onClick={sendMessage}
                                >
                                    <Image src={Arrow} alt="Arrow"/>
                                </div>
                            ) : (
                                <div
                                    className="cursor-pointer bg-gray-300 p-2 ml-2 rounded-full shadow-2xl"
                                >
                                    <Image src={Arrow} alt="Arrow"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            )}

            {showEmojiPicker && (
                <div ref={pickerRef}
                     className="hidden sm:block  sm:fixed bottom-16 sm:bottom-52 sm:right-28 bg-white z-50">
                    <Picker
                        onEmojiClick={(emoji: EmojiClickData) => {
                            setCurrentMessage((prev) => prev + emoji.emoji);
                            setShowEmojiPicker(false);
                        }}
                    />
                </div>
            )}
        </>
    )
}

export default ChatBotAI;