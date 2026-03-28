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