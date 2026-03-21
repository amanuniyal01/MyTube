import React from "react";

function HomeShimmer() {
    return (
        <div className="flex ml-40 flex-wrap justify-center gap-6 mt-16 px-6">

            {Array(12).fill("").map((_, index) => (

                <div key={index} className="w-80 animate-pulse">

                    {/* Thumbnail */}
                    <div className="w-full h-44 bg-gray-300 rounded-lg"></div>

                    {/* Content */}
                    <div className="flex mt-3 gap-3">

                        {/* Channel Icon */}
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

                        {/* Text */}
                        <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default HomeShimmer;