// CD Hub Whitelist API
// Add users here - they sync with your Base44 admin panel manually

// WHITELIST - Add user IDs here
const WHITELISTED_USERS = [
    "16773546",  // Your ID (Owner)
    // Add more users below:
    // "123456789",
    // "987654321",
];

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    const userid = req.query.userid;
    
    if (!userid) {
        return res.status(400).json({ allowed: false, message: "No userid provided" });
    }
    
    const isWhitelisted = WHITELISTED_USERS.includes(userid.toString());
    
    return res.status(200).json({ 
        allowed: isWhitelisted,
        userId: userid
    });
}
