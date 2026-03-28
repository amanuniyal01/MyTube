const Names = [
    "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan",
    "Krishna", "Ishaan", "Shaurya", "Atharv", "Advik", "Pranav", "Advait",
    "Priya", "Ananya", "Isha", "Diya", "Kavya", "Riya", "Anika", "Neha",
    "Pooja", "Shruti", "Megha", "Divya", "Sneha", "Tanvi", "Nisha", "Aman", "Sakshi"
];
export function generateRandomName() {
    const randomName = Names[Math.floor(Math.random() * Names.length)];

    return randomName;
}
const mockMessages = [
    // Engagement & Reactions
    "This hit different 😶",
    "Watching this for the 3rd time now",
    "Can't stop rewatching this part 🔁",
    "Nobody talks about this enough",
    "This deserves way more views",
    "Came from a recommendation, not disappointed",
    "Bhai ye toh next level hai 🔥",
    "Sending this to everyone I know",
    "This is the content I needed today",
    "Paused just to leave a comment ❤️",

    // Emotional / Neutral
    "This gave me chills honestly",
    "Something about this just feels real",
    "I don't have words right now...",
    "This touched my heart 🥺",
    "Sat in silence after this ended",
    "Why am I feeling so much rn",
    "This is going in my saved list forever",
    "Didn't expect to feel this way today",
    "This is going to stay with me for a while",
    "Real ones know what this means 🤍",

    // Appreciation
    "The effort in this is unreal 👏",
    "Quality like this is rare",
    "Keep going, we see the work you put in",
    "Subscribed without even thinking twice",
    "This channel never misses",
    "Notifications on for a reason 🔔",
    "Bhai bahut mehnat lagi hogi isme",
    "Respect for making this 🙏",
    "This is what good content looks like",
    "Thank you for this, genuinely",

    // Community / Relatable
    "Who else is here at 2AM? 🌙",
    "Kaun kaun repeat kar raha hai? ✋",
    "The comment section always delivers 😂",
    "I felt personally attacked 💀",
    "This is literally my life story",
    "Bhai mere dil ki baat bol di",
    "Why does this feel so personal lol",
    "Everyone I know needs to see this",
    "Found my people in this comment section",
    "This hits harder depending on your mood",

    // Curiosity / Discussion
    "Can someone explain the part at the end?",
    "Would love a part 2 of this",
    "What software/tool was used here?",
    "Timestamp for the best part? 👇",
    "Drop your thoughts below 👀",
    "This opens up so many questions",
    "Bhai next video kab aa rahi hai?",
    "Anyone else noticed the detail at the start?",
    "I have so many thoughts after watching this",
    "Going down a rabbit hole because of this 😅",
];
export function generateRandomMessage() {
    return mockMessages[Math.floor(Math.random() * mockMessages.length)];
}
