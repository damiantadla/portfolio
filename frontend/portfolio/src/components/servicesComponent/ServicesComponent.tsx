const ServicesComponent = () => {
    return (
        <>
            <div style={{position: 'relative', borderRadius: '20px', overflow: 'hidden'}}>
                {/* Div with rounded corners */}

                {/* SVG with the image */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 417 508" fill="none"
                     className="w-[317px] h-[408px] xl:w-[417px] lg:h-[508px] mx-auto">
                    <defs>
                        <radialGradient id="paint0_radial_3203_55" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(208.5 254) rotate(-90) scale(254 363.68)">
                            <stop stopColor="white" stopOpacity="0"/>
                            <stop offset="1" stopColor="white"/>
                        </radialGradient>

                        {/* Mask with SVG shape */}
                        <mask id="mask1">
                            {/* Shape of the mask */}
                            <path
                                d="M0.5 37C0.5 16.5655 17.0655 0 37.5 0H379.5C399.935 0 416.5 16.5655 416.5 37V338.5C416.5 358.935 399.935 375.5 379.5 375.5H356.549C318.034 375.5 286.976 407.031 287.557 445.541L287.933 470.442C288.245 491.092 271.59 508 250.937 508H37.5C17.0655 508 0.5 491.435 0.5 471V37Z"
                                fill="white"/>
                        </mask>
                    </defs>

                    <g filter="url(#filter0_b_3203_55)">
                        <path
                            d="M0.5 37C0.5 16.5655 17.0655 0 37.5 0H379.5C399.935 0 416.5 16.5655 416.5 37V338.5C416.5 358.935 399.935 375.5 379.5 375.5H356.549C318.034 375.5 286.976 407.031 287.557 445.541L287.933 470.442C288.245 491.092 271.59 508 250.937 508H37.5C17.0655 508 0.5 491.435 0.5 471V37Z"
                            fill="#686868" fillOpacity="0.2"/>
                        <path
                            d="M1.5 37C1.5 17.1178 17.6177 1 37.5 1H379.5C399.382 1 415.5 17.1177 415.5 37V338.5C415.5 358.382 399.382 374.5 379.5 374.5H356.549C317.476 374.5 285.968 406.488 286.557 445.556L286.933 470.457C287.236 490.549 271.032 507 250.937 507H37.5C17.6177 507 1.5 490.882 1.5 471V37Z"
                            stroke="url(#paint0_radial_3203_55)" strokeOpacity="0.5" strokeWidth="2"/>
                    </g>
                    <rect x="50" y="160" width="320" height="120" fill="#757575" rx="30" ry="30" fillOpacity="0.7"/>
                    {/* New rounded rectangle matching the box's radius */}
                    <rect x="30" y="180" width="360" height="120" fill="#9E9D9D" rx="30" ry="30"/>

                    {/* Image with mask */}
                    <image href="/services.png" x="0" y="201" width="416" height="307" mask="url(#mask1)"/>
                    <text
                        className="svg-text"
                        x="130"
                        y="65"
                        textAnchor="middle">
                        Your Title Here
                    </text>

                    {/* Line below the title */}
                    <rect x="1" y="100" width="416" height="2" fill="rgba(249, 250, 251, 0.30)"/>

                    {/* Image with mask */}
                </svg>
                <div
                    className="absolute right-0 bottom-3 xl:bottom-0 w-[85px] h-[85px] xl:w-[110px] xl:h-[110px] bg-orange rounded-full flex items-center justify-center">
                    <svg className="w-[73px] h-[72px]" viewBox="0 0 73 72" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 51L51.5 21" stroke="white" strokeWidth="4" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M21.5 21H51.5V51" stroke="white" strokeWidth="4" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default ServicesComponent;
