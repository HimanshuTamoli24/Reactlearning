import conf from "../conf/conf";
import { Client, Databases, Query, Storage } from "appwrite";

export class Service {
  client;
  databases;
  bucket;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }
  }

  async updatePost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      throw new Error(
        `Failed to update post with slug "${slug}": ${error.message}`
      );
    }
  }

  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw new Error(
        `Failed to delete post with slug "${slug}": ${error.message}`
      );
    }
  }

  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error(
        `Failed to retrieve post with slug "${slug}": ${error.message}`
      );
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await thid.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw new Error("Failed to retrieve active  post ");
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw new Error("Failed to upload file ");
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      throw new Error("Failed to delete post ");
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId, {
      maxWidth: 800,
      maxHeight: 600,
    });
  }
}
export default Service();
