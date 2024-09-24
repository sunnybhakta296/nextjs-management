import dbConnect from "@/app/lib/db";

export async function register() {
    console.log("Registering instrumentation");
    await dbConnect();
}