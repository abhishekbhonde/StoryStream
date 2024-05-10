import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import {blogRouter} from './routes/blogRouter';
import {userRouter} from './routes/userRouter';

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

// Define the signup endpoint

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


export default app
