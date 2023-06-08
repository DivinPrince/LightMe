import Project from "@models/project";
import { connectToDB } from "@utils/database"
export const POST = async (req ) =>{
    const { userId, name, url, image} = await req.json()
    try {
        await connectToDB();
        const newPro = await Project.create({
            creator: userId,
            name,
            url,
            image,
          });
          
          await newPro.save();

            return new Response(JSON.stringify(newPro),{status: 201})
        } catch (error) {
            console.log(error.message);
            return new Response('failed',{status: 500})
    }
}
