// import { connectToDB } from "@utils/database";
// import Project from "@models/project";
// export const GET = async (req) =>{
//     try {
//         await connectToDB()
//         const projects = await Project.find({}).populate('creator')

//         return new Response(JSON.stringify(projects),{status: 200})

//     } catch (error) {
//         console.log(error.message);
//         return new Response('failed',{status: 500})
// }
// }