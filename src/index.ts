import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

// Define the signup endpoint
app.post('/api/v1/signup', async(c)=>{
	const prisma = new PrismaClient({
		datasourceUrl:c.env?.DATABASE_URL,
		
	}).$extends(withAccelerate());
	const body = await c.req.json();
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


app.post('/api/v1/user/signin', async(c)=>{
	const prisma = new PrismaClient({
			datasourceUrl:c?.env.DATABASE_URL,

	}).$extends(withAccelerate())

	const body = await c.req.json();
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

app.post('/api/v1/blog',(c)=>{
    return c.text("blog route")
})

app.put('/api/v1/blog', (c)=>{
  return c.text("upload blogs")
})

app.get('/api/v1/blog:id',(c)=>{
  const id = c.req.param('id')
  return c.text("get blog route");
})

app.get('/api/v1/blog/bulk', (c)=>{
  return c.text("Error while doing this");
})
export default app
