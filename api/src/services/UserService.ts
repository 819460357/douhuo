import { Store } from '../models/shopping/Store.model';
export class UserService {
         /**
          * 登录
          */
        public async login() {
         const storeModel = new Store();
         console.log(await Store.findAll());
           return 123;
         }
       }
