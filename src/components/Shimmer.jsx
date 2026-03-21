function Shimmer() {
    return (
        <div className="p-4">
            {Array(10).fill("").map((_, index) => (
                <div key={index} className="flex gap-4 mb-4 animate-pulse">
                    <div className="w-40 h-24 bg-gray-300 rounded"></div>
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Shimmer;