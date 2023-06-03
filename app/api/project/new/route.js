import { connectToDB } from "@utils/database"
import Project from "@models/project";
export const POST = async (req,res ) =>{
    const { userId, name, url, image} = await req.json()
    try {
        await connectToDB();
        const newPro = Project.create({
            creator: userId,
            name,
            url,
            image
        })
        await newPro.save()
            return new Response(JSON.stringify(newPro),{status: 201})
        } catch (error) {
            console.log(error.message);
            return new Response('failed',{status: 500})
    }
}