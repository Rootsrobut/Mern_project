import jwt from "jsonwebtoken";


export const generateTokenAndSetCookie = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d", 
	});
	res.cookie("token", token, {
		httpOnly: true, // Prevents JavaScript in the browser from accessing the cookie (security against XSS)
		secure: process.env.NODE_ENV === "production", // Ensures the cookie is only sent over HTTPS in production
		sameSite: "strict", // Restricts the cookie to same-site requests (helps prevent CSRF attacks)
		maxAge: 7 * 24 * 60 * 60 * 1000, 
	});
	return token;
};
