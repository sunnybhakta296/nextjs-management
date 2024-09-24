'use server';

import { IN } from "@/app/constant";
import Client from "@/app/model/client";
import Payment from "@/app/model/payment";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveInPayments = async(formData: any) => {
    const clientSlug = formData.get("clientSlug");
    const client = await Client.findOne({slug: clientSlug});

    if(!client) {
        throw new Error("Client not found");
    }

    const amount = formData.get("amount");
    if(!amount) {
        throw new Error("Amount is required");
    }

    const createdDate = formData.get("createdDate");
    const challanNo = formData.get("challanNo");
    const type = IN

    const paymentInput = {
        clientId: client._id,
        amount: amount,
        challanNo: challanNo,
        type: type,
        createdDate: createdDate|| new Date(),
        updatedDate: new Date(),
    }

    await new Payment(paymentInput).save();
    revalidatePath("/payments/"+clientSlug);
    redirect("/payments/"+clientSlug);

}