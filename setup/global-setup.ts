import { type FullConfig } from "playwright/test"; 
import fs, { chownSync } from 'fs'
import path  from "path";

export default async function globalSetup() {
    console.log('[INFO]Global setup started')
    if(process.env.RUNNER?.toUpperCase() === "LOCAL"){
        console.log("[INFO]:Detecting the local run...")

        const resultDir = path.resolve(process.cwd(),"allure-results")
        console.log(`>>path is ${resultDir}`)
        if(fs.existsSync(resultDir)){
            fs.rmSync(resultDir,{recursive:true,force:true})
        }
        console.log("[INFO]:allure report deleted for local run")   
    }
    console.log(`[INFO]:Global setup completed...`)
}