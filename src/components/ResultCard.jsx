import { useSelector } from "react-redux";

function ResultCard({ info }) {
    const { snippet } = info
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    return (
        <div className={`flex ${isMenuOpen ? "flex-col md:flex-row" : "flex-col md:flex-row"}  gap-6 md:gap-4 mb-6 cursor-pointer`}>


            <img
                className={`${isMenuOpen?"w-full":"w-full"} md:w-90 rounded-lg`}
                src={snippet.thumbnails.medium.url}
                alt="thumbnail"
            />


            <div>
                <h2 className="text-md md:text-lg font-semibold">
                    {snippet.title}
                </h2>

                <p className="text-gray-600 text-sm mt-1">
                    {snippet.channelTitle}
                </p>

                <p className="text-gray-500 text-sm mt-2 hidden md:block">
                    {snippet.description.slice(0, 100)}...
                </p>
            </div>
        </div>
    )
}
export default ResultCard;