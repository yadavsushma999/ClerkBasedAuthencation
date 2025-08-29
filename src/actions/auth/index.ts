"use server"

import { client } from "@/lib/prisma";

export const onCompleteUserRegistration =async(
    fullName: string,
    clerkId: string,
    type:string
)=>{
    try{
        const registered = await client.user.create({
            data:{
                fullName,
                clerkId,
                type,
                subscription:{
                    create:{},
                }
            },
            select:{
                fullName: true,
                id: true,
                type:true,
            },
        });
        if (registered){
            console.log("Registered");
            return {
                status:200,
                user: registered
            };
        }
    }catch(error){
        return {status:400};
    }

}