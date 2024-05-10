import z from 'zod'

export const singupinput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()

})




export const singininput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()

})



export const createBlogInput = z.object({
    title:z.string(),
    content:z.string(),

})



export const updateBloginput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})



export type UpdateBlogInput = z.infer<typeof updateBloginput>
export type SingupInput =z.infer<typeof singupinput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type SignIninput =z.infer<typeof singininput>
