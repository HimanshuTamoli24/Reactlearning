import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Redirect to login page
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(`Failed to create account`);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(`Login failed`);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // Add
      throw new Error(`Failed to retrieve current user`);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw new Error(`Logout failed`);
    }
  }
}

const authService = new AuthService();

export default authService;
