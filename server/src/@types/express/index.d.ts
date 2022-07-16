declare module Express {
  export interface Request {
    currentUserId?: string;
  }
}
