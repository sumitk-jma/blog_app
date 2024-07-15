import z from "zod";

// Zod for signup

export const signupInput = z.object({

    username : z.string().email(),
    password : z.string().min(8),
    name : z.string().optional()
})

// Zod for signin

export const signinInput = z.object({

    username : z.string().email(),
    password : z.string().min(8),
})

// ZOD for blog create endpoints

export const createBlogInput = z.object({

    title : z.string(),
    description : z.string() ,
})

// ZOD for blog update endpoints

export const updateBlogInput = z.object({

    title : z.string(),
    description : z.string(),
    id : z.number()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>