import dbConnect from "../../lib/dbConnect";
import nc from "next-connect";
import User from "../../models/User";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            // CODE LATER //
            break;
        case "POST":
            try {
                const user = await User.create(
                    req.body
                )
                res.status(201).json({ success: true, data: user });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
    }
}