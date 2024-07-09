import crypto from "crypto";

export class UserService {
  constructor() {}
  async encryptPassword(password: string): Promise<string> {
    const hash = crypto.createHash('md5').update(password).digest('hex');
    console.log(hash);
    return hash;
  }
}
