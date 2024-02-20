import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, admin, password, image } = req.body;

        // check if user exists
        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({message: "User already exists"});
        }

        // create new user
        user = await User.create({
            name, email, admin, password, image
        });
        
        // name: { type: String, required: true},
        // admin: { type: Boolean, default: false},
        // email: { type: String, required: true },
        // password: { type: String, required: true },
        // image: { type: String, required: true },

        return res.status(201).json({
            _id: user.id,
            name: user.name,
            admin: user.admin,
            password: user.password,
            image: user.image
        });
    } catch (error) {
        return res.status(500).json({message: "User creation failed"});
    }
}