import User from "@/models/User";
import DbConnect from "@/utils/dbConnect";

export const POST = async (req) => {
    let data = await req.json();
    DbConnect();
    // Add validation logic here (e.g., required fields, data type checks)
    if (!data.name ||!data.email) {
        return { status: 400, body: 'Missing required fields: name and email' };
    }
    
    // Save the data to a database or file system
    let user = User.find({name:data.name, email:data.email});
    if (user) {
        return { status: 409, body: 'User already exists' };
    }
    
    user = new User(data);
    await user.save();
    
    return { status: 201, body: 'User created successfully' };
}