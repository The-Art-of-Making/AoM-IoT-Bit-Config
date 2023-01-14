import { exists, readTextFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs'
import Secret from "./secret.js"

const readSecretsFile = async (secretsFileName: string, secretsFilePath: BaseDirectory) => {
    let secret = new Secret
    let exist = await exists(secretsFileName, { dir: secretsFilePath })
    if (!exist) {
        console.log("No file secrets file found")
        await writeSecretsFile(secretsFileName, secretsFilePath, secret)
        console.log("Default template saved")
        return secret
    }
    if (exist) {
        console.log("Secrets file found")
        let content = await readTextFile(secretsFileName, {dir: secretsFilePath})
        console.log("Reading from secrets file")
        secret.parseFromString(content)
        return secret
    }
}

const writeSecretsFile = async (secretsFileName: string, secretsFilePath: BaseDirectory, secret: Secret) => {
    await writeTextFile(secretsFileName, secret.getString(), {dir: secretsFilePath})
    console.log("Secrets written to file")
}

export { readSecretsFile, writeSecretsFile }
