import { Account, Client, Databases } from "appwrite";
import { Query } from "appwrite";
import { database } from "./config";
const config = useRuntimeConfig();

export async function getLabs() {
    const data = await database.listDocuments(
        config.public.appwriteDatabaseId,
        config.public.appwriteLabColloectionId
        
    )
    console.log("Multiple Labs",data)
    if (data.documents) return data;
    else return "Failed to Fetch"
}


export async function getLabSlug(slug:string) {
    const data = await database.listDocuments(
        config.public.appwriteDatabaseId,
        config.public.appwriteLabColloectionId,
        [Query.equal("slug", slug), Query.limit(1)]
    )
    console.log("Single Lab",data)
    if (data.total > 0) {
        return data.documents[0];
      }
      else return "No Document Found"
}