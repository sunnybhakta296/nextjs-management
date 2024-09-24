import Client from "@/app/model/client";

export const getClientBySlug = async (slug: string) => {
    const client = await Client.findOne({ slug}, {name:1}).populate("payments");
    console.log(client);
    if (!client) {
       throw new Error("Client not found");
    }
    return client;
}