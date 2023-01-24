import { exists, readTextFile, writeTextFile } from '@tauri-apps/api/fs'
import Secret from "./secret.js"

const readSecretsFile = async (secretsFile: string, defaultSecretValues: string[] = []) => {
    let secret = new Secret(defaultSecretValues)
    let exist = await exists(secretsFile)
    if (!exist) {
        console.log("No file secrets file found")
        await writeSecretsFile(secretsFile, secret)
        console.log("Default template saved")
        return secret
    }
    if (exist) {
        console.log("Secrets file found")
        let content = await readTextFile(secretsFile)
        console.log("Reading from secrets file")
        secret.parseFromString(content)
        return secret
    }
}

const writeSecretsFile = async (secretsFile: string, secret: Secret) => {
    await writeTextFile(secretsFile, secret.getString())
    console.log("Secrets written to file")
}

export { readSecretsFile, writeSecretsFile }
