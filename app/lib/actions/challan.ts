"use server";

import { OUT } from "@/app/constant";
import { generateRandomId } from "@/app/helper";
import Challan from "@/app/model/challan";
import Client from "@/app/model/client";
import Payment from "@/app/model/payment";
import { redirect } from "next/navigation";

export const saveChallan = async (produuct, formData) => {
  try {
    const clientSlug = formData.get("clientSlug");
    const client = await Client.findOne({ slug: clientSlug });

    if (!client) throw new Error("No Client Found");
    
    let totalQuantit = 0;
    let totalAmount = 0;

    produuct.forEach((element: {}) => {
      if(!element.quantity || !element.unitPrice || !element.product) {
        throw new Error("Please fill all the product fields");
      }
      totalQuantit += parseInt(element.quantity || 0);
      totalAmount +=
        parseInt(element.quantity || 0) * parseInt(element.unitPrice || 0);
    });

    const gst = parseInt(formData.get("gst")) || 0;
    const gstAmount = ((totalAmount * gst) / 100).toFixed(2);
    const grandTotal = (totalAmount + parseInt(gstAmount)).toFixed(2);


    const challan = {
      clientId: client._id,
      clientName: client.name,
      clientAddress: client.address,
      clientGstin: client.gstin,
      challanNo: formData.get("challanNo") || generateRandomId(6),
      challanDate: formData.get("challanDate") || new Date(),
      quantity: totalQuantit,
      total: totalAmount,
      grandTotal,
      gstAmount,
      gstPercentage: gst,
      items: produuct,
      createdDate: new Date(),
      updatedDate: new Date(),
    };

    

    //add transaction
    const result = await new Challan(challan).save();

    const paymentInput = {
      clientId: client._id,
      amount: grandTotal,
      type: OUT,
      createdDate: new Date(),
      challanId: result._id,
      challanNo: challan.challanNo,
    }

    const payment = await new Payment(paymentInput).save();
    await Client.updateOne({slug: clientSlug}, {$push: {challans: result._id, payments: payment._id}});

    //todo add transactions
    // redirect(`/challan/${clientSlug}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
};


export const getChallan = async (slug: string) => {
    try {
        const client = await Client.findOne({slug}).populate({
            path: 'challans',
            select: 'challanNo challanDate grandTotal'
        });
        console.log(client.challans, 'client');
        client._id = client._id.toString();
        client.challan = client?.challans?.map((chanllan: any) => {
            const a = chanllan.toObject()
            chanllan._id = a._id.toString();
            return chanllan;
        })

        return client
    } catch (error) {
        console.error('Failed to get chanllan', error);
        throw error;
    }
}


export const getChallanById = async (challanId: string) => {
    try {
        const challan = await Challan.findById(challanId);
        // challan._id = challan?._id.toString();
        return challan;
    }
   catch (error) {
        console.log('Error in getChallanById', error);
        throw error;
   } 
}