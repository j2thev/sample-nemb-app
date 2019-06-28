import { IndexController, UserController } from './controllers';
import { MongooseMiddleware } from './middlewares';

export default function routes(app) {
  app.get('/', IndexController.index);

  app.get('/user', MongooseMiddleware.isValidObjectIdQuery, UserController.search);
  app.get('/user/:_id', MongooseMiddleware.isValidObjectIdParam, UserController.get);
  app.post('/user', UserController.create);
  app.put('/user/:_id', MongooseMiddleware.isValidObjectIdParam, UserController.update);
}