import users from "../model/users.js"
import bcrypt from "bcryptjs";

export const signup = async(req,res) => {

    try{
        const {fullName , email , password} =await req.body
        console.log(req.body);
        const hashPassword =await  bcrypt.hash(password,1)
        const existingUser = await users.findOne({email})

        if( existingUser ){
            return res.status(400).json({ message:"user already exists"})
        }

        const createUser =await  new users({
            fullName,
            email,
            password: hashPassword
        }).save()

        res.status(201).json({message:"User created successfully" ,user:{
            fullName:createUser.fullName,
            email: createUser.email,
            _id: createUser._id,
            
        }})
    }catch(err){
        console.log("Error: "+err);
        
        res.status(500).json({message:"Internal Server error"})
    }
}


// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // 🔹 Check if email exists in the database
//         const user = await users.findOne({ email });

        
//         // 🔥 Fix: If no user is found, return error early
//         if (!user) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         // 🔹 Debugging log
//         // console.log("User found:", user);

//         // 🔹 Compare password
//         const isMatch = await bcrypt.compare(password, user.password);

//         // 🔥 Fix: If password does not match, return error early
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         // 🔹 Send response if login is successful
//         res.status(200).json({
//             message: "Login successful",
//             user: {
//                 _id: user._id,
//                 fullName: user.fullName,
//                 email: user.email
//             }
//         });

//     } catch (err) {
//         console.log("Error:", err); // 🔹 Debugging log
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };















export const login  =async (req,res) => {
    
    try{
        const {email , password} = req.body
        const user = await users.findOne({email})

        if(!user){
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
        const isMatch =await bcrypt.compare(password, user.password)
        console.log("User found:", user);
        
        if(!user|| !isMatch){
            return res.status(400).json({message:"Invalid email or password"})
            
        }

       
        
        res.status(201).json({
            message:"login successful",
            user:{
                
                _id: user._id,
                fullName : user.fullName,
                email : user.email
            }

        })
        
    }catch(err){
        console.log("Error : "+ err);
        res.status(500).json({message:"Internal Server error"})
    }
}