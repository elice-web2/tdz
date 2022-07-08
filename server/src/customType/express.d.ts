import { UserModel } from '../db/models/user-model';

declare global {
  namespace Express {
    interface Request {
      currentUserId?: string;
    }
  }
}

// declare namespace Express {
//   export interface Request {
//     currentUserId?: string;
//   }
// }
