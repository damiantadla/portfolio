const ServicesComponent = () => {
    return (
        <>
            <div
                style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}
                className="group"
            >
                {/* SVG with the image */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 417 508"
                    fill="none"
                    className="w-[317px] h-[408px] xl:w-[417px] lg:h-[508px] mx-auto"
                >
                    <defs>
                        <radialGradient
                            id="paint0_radial_3203_55"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(208.5 254) rotate(-90) scale(254 363.68)"
                        >
                            <stop stopColor="white" stopOpacity="0"/>
                            <stop offset="1" stopColor="white"/>
                        </radialGradient>

                        {/* Mask with SVG shape */}
                        <mask id="mask1">
                            {/* Shape of the mask */}
                            <path
                                d="M0.5 37C0.5 16.5655 17.0655 0 37.5 0H379.5C399.935 0 416.5 16.5655 416.5 37V338.5C416.5 358.935 399.935 375.5 379.5 375.5H356.549C318.034 375.5 286.976 407.031 287.557 445.541L287.933 470.442C288.245 491.092 271.59 508 250.937 508H37.5C17.0655 508 0.5 491.435 0.5 471V37Z"
                                fill="white"
                            />
                        </mask>
                    </defs>

                    <g filter="url(#filter0_b_3203_55)">
                        <path
                            d="M0.5 37C0.5 16.5655 17.0655 0 37.5 0H379.5C399.935 0 416.5 16.5655 416.5 37V338.5C416.5 358.935 399.935 375.5 379.5 375.5H356.549C318.034 375.5 286.976 407.031 287.557 445.541L287.933 470.442C288.245 491.092 271.59 508 250.937 508H37.5C17.0655 508 0.5 491.435 0.5 471V37Z"
                            className="transition-all duration-600duration-800 opacity-20 group-hover:fill-orange group-hover:opacity-90 group-hover:scale-y-90"
                            fill="#686868"
                        />
                    </g>

                    {/* First rectangle */}
                    <rect
                        x="50"
                        y="160"
                        width="320"
                        height="120"
                        fill="#757575"
                        rx="30"
                        ry="30"
                        fillOpacity="0.7"
                        className="transition-transform duration-500 group-hover:-translate-y-4"
                    />

                    {/* Second rounded rectangle */}
                    <rect
                        x="30"
                        y="180"
                        width="360"
                        height="120"
                        fill="#9E9D9D"
                        rx="30"
                        ry="30"
                        className="transition-transform duration-500 group-hover:-translate-y-4"
                    />

                    <g className="transition-transform duration-500 group-hover:scale-y-105 origin-bottom">
                        <image
                            href="/services.png"
                            x="0"
                            y="201"
                            width="416"
                            height="307"
                            mask="url(#mask1)"
                        />
                    </g>

                    <text className="svg-text" x="130" y="65" textAnchor="middle">
                        Your Title Here
                    </text>

                    {/* Line below the title */}
                    <rect x="" y="100" width="416" height="2" fill="rgba(249, 250, 251, 0.30)"/>
                </svg>

                <div
                    className="absolute right-0 bottom-3 xl:bottom-0 w-[85px] h-[85px] xl:w-[110px] xl:h-[110px] bg-darkBlue rounded-full flex items-center justify-center transition-colors duration-500 group-hover:bg-orange"
                >
                    <svg
                        className="w-[73px] h-[72px] transition-transform duration-500 group-hover:rotate-45"
                        viewBox="0 0 73 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.5 51L51.5 21"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21.5 21H51.5V51"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default ServicesComponent;
