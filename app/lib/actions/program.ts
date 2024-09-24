'use server';

import Client from "@/app/model/client";
import Program from "@/app/model/program";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getProgramById = async(programId: string) => {
    try {
        const program = await Program.findById(programId)
        if(!program) throw new Error("No program Found")

        program._id = program._id.toString()    
        return program
    }catch(err) {
        throw err
    }
}

export const getPrograms = async (slug: string) => {
    try {
        const client = await Client.findOne({slug}).populate({
            path: 'programs',
            select: 'lotNo createdDate'
        });

        client._id = client._id.toString();
        client.programs = client.programs.map((program: any) => {
            const a = program.toObject()
            program._id = a._id.toString();
            return program;
        })

        return client
    } catch (error) {
        console.error('Failed to get Program', error);
        throw error;
    }
}

export const updateProgram = async (programId: string, slug: string, formData: any) => {
    let cutting = formData.get('cutting');
    let stiched = formData.get('stiched');
    let thredCutting = formData.get('thredCutting')
    let press = formData.get('press')
    let packaging = formData.get('packaging')
    let nara = formData.get('nara')

    const program = await Program.findById(programId);

    if(!program) throw new Error("No Program Found")

    if(cutting){
        cutting = parseInt(cutting);
        program.cutting.total= parseInt(program?.cutting?.total) + cutting,            
        program.cutting.history.push({
            date: new Date(),
            value: cutting
        })
    }

    if(stiched){
        stiched = parseInt(stiched);
        program.stiched.total= parseInt(program?.stiched?.total) + stiched
        program.stiched.history.push({
            date: new Date(),
            value: stiched
        })
    }

    if (thredCutting) {
      thredCutting = parseInt(thredCutting);
      program.thredCutting.total = parseInt(program?.thredCutting?.total) + thredCutting;
      program.threadCutting.history.push({
        date: new Date(),
        value: thredCutting,
      });
    }

    if(press){
        press = parseInt(press);
        program.press.total = parseInt(program?.press?.total) + press       
        program.press.history.push({
            date: new Date(),
            value: press
        })
    }

    if(nara){
        nara = parseInt(nara);
        program.nara.total = parseInt(program?.nara?.total) + nara
        program.nara.history.push({
            date: new Date(),
            value: nara
        })
    }

    if(packaging) {
        packaging = parseInt(packaging);
        program.packaging.total = parseInt(program?.packaging?.total) + packaging
        program.packaging.history.push({
            date: new Date(),
            value: packaging
        })
    }

    program.updatedDate = new Date();

   try{
    let result = await new Program(program).save();
    result = result.toObject();
    result._id = result._id.toString();
    delete result.__v;

    revalidatePath(`/program/${slug}/${programId}`);
    redirect(`/program/${slug}/${programId}`);
   } catch (error) {
       console.error('Failed to update Program', error);
       throw error;
   }
}