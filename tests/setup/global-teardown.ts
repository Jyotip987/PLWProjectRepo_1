import { type FullConfig } from "playwright/test";
import { exec } from "child_process";
import { error } from "console";
import { stderr, stdout } from "process";

export default async function globalTeardown() {
    console.log(`[INFO]:Stating global teardown...`)
    if (process.env.RUNNER?.toUpperCase() === 'LOCAL') {
        console.log("[INFO]:Detecting the local run - Starting Allure server...")
    }
    exec('allure serve', (error, stdout, stderr) => {
        if (error) {
            console.error(`[Error]:Starting allure server ${error.message}`)
        }
        else if (stderr) {
            console.log(`[INFO]:Allure report started with warnings: ${stderr}`)
        }
         else{
            console.log(`[INFO]: Allure reoport started successfully ${stdout}`)
        }
    })
    console.log(`[INFO]:Global teardown completed...`)
}