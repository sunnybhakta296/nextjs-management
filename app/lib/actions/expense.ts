'use server';

import Client from "@/app/model/client";
import Program from "@/app/model/program";

export const getClients = async () => {
    try {
        const clients = await Client.find({}, { name: 1, slug: 1 }).lean();
        return clients.map(client => {
            client._id = client?._id.toString();
            return client;
        });
    } catch (error) {
        console.error('Failed to get clients', error);
        throw error;
    }
}

export const getClient = async (slug: string) => {
    try {
        const client = await Client.findOne({slug});
        if (!client) {
            throw new Error('Client not found');
        }

        const a = client.toObject()
        a._id = a._id.toString();
        return a;
        
    }catch (error) {
        throw error;
    }
}

export const addProgram = async (formData: any) => {
    const slug = formData.get('clientSlug')
    const client = await Client.findOne({slug});
    if (!client) {
        throw new Error('Client not found');
    }
    const clientId = client._id;
    try {
        const lotNo = formData.get('lotNo');
        const measurement = formData.get('measurement');
        const info = formData.get('info');
        let cutting = formData.get('cutting');
        const price = formData.get('price');
        let stiched = formData.get('stiched');
        let thredCutting = formData.get('thredCutting')
        let press = formData.get('press')
        let nara = formData.get('nara')

        const input: any = {
            clientId,
            lotNo,
            measurement,
            info,
            price,
            createdDate: new Date(),
            updatedDate: new Date(),
            status: 'pending',
        }
       
        if(cutting){
            cutting = parseInt(cutting);
            input.cutting = {
                total: cutting,
                history: [{
                    date: new Date(),
                    value: cutting
                }]
            }
        }

        if(stiched){
            stiched = parseInt(stiched);
            input.stiched = {
                total: stiched,
                history: [{
                    date: new Date(),
                    value: stiched
                }]
            }
        }

        if(thredCutting){
            thredCutting = parseInt(thredCutting);
            input.thredCutting = {
                total: thredCutting,
                history: [{
                    date: new Date(),
                    value: thredCutting
                }]
            }
        }

        if(press){
            press = parseInt(press);    
            input.press = {
                total: press,
                history: [{
                    date: new Date(),
                    value: press
                }]
            }
        }

        if(nara){
            nara = parseInt(nara);
            input.nara = {
                total: nara,
                history: [{
                    date: new Date(),
                    value: nara
                }]
            }
        }

        const newProgram = new Program(input);
        await newProgram.save();
        let result = newProgram.toObject();
        await Client.updateOne({slug}, {$push: {programs: result._id}});
        delete result._id
        //todo redirect
        return result
    } catch (error) {
        console.error('Failed to add program', error);
        throw error;
    }
}