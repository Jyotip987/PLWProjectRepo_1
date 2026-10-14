

function requiredEnvironmentVariable(urlname:string){
    const value = process.env[urlname]?.trim()
if(!value){
    throw new Error(`Missing required environment variable: ${urlname}`)
}
    return value
}
type EnvironmentName = 'DEV'|'TEST'|'STAGE'
export function getEnvironment(environment:EnvironmentName){
    return {
envName:environment.toLowerCase(),
appUrl : requiredEnvironmentVariable(`${environment}_BASE_URL`),
apiBaseURL : requiredEnvironmentVariable(`${environment}_API_BASE_URL`)
    }
}

