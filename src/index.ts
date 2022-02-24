import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import PostController from '@/resources/post/post.controller';
import App from './app';

validateEnv();

const app = new App([new PostController()], Number(process.env.PORT));
app.listen();


