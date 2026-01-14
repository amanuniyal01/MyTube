const GOOGLE_API = "AIzaSyC9rINkqi024AzPGh0Pcgiyjb2zMAv-w-0"
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LANGUAGE_OPTION = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" }

]