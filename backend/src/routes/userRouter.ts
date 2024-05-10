
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import {singupinput,singininput} from "@abhishekbhonde/zodvalidationmedium"

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

// Define the signup endpoint
userRouter.post('/signup', async(c)=>{


	const prisma = new PrismaClient({
		datasourceUrl:c.env?.DATABASE_URL,
		
	}).$extends(withAccelerate());

	
	const body = await c.req.json();
	const { success } = singupinput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
	try {
		const user = await prisma.user.create({
			data:{
                email:body.email,
                password:body.password
	
			}
		
		});
		const jwt = await sign({ id:user.id },c.env.JWT_SECRET);
		return c.json({jwt});
	} catch (error) {
		c.status(411);
		return c.json("Error while signing up")
	}
})


userRouter.post('/signin', async(c)=>{
	const prisma = new PrismaClient({
			datasourceUrl:c?.env.DATABASE_URL,

	}).$extends(withAccelerate())

	const body = await c.req.json();
	const { success } = singininput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
	const user = await prisma.user.findUnique({
		where:{
			email:body.email
		}
	});
	if(!user){
		return c.json("User not found");
	}

    const jwt = await sign({id:user.id},c.env.JWT_SECRET)
	return c.json({jwt});
})
export default userRouter;