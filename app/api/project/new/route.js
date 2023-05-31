import { connectToDB } from "@utils/database"
import Project from "@models/project";
console.log(Project);
export const POST = async (req,res ) =>{
    const { userId, name, url, image} = await req.json()
    try {
        await connectToDB();
        const newPro = new Project({
            creator: userId,
            name,
            url,
            image
        })
        await newPro.save()
            return new Response(JSON.stringify(newPro),{status: 201})
        } catch (error) {
            console.log(error);
            return new Response('failed',{status: 500})
    }
}