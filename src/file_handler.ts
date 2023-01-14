import { exists, readTextFile, writeFile, FsTextFileOption, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs'
import Secret from "./secret.js"

const readSecretsFile = async (secretsFilePath) => {
    let secret = new Secret
    let exist = await exists(secretsFilePath, { dir: BaseDirectory.Resource })
    // let exist = await exists(secretsFilePath)
    console.log(exist)
    if (!exist) {
        console.log("No file secrets file found")
        await writeSecretsFile(secretsFilePath, secret)
        console.log("Default template saved")
        return secret
    }
    if (exist) {
        console.log("Secrets file found")
        let content = await readTextFile(secretsFilePath, {dir: BaseDirectory.Resource})
        // let content = await readTextFile(secretsFilePath)
        console.log("Reading from secrets file")
        secret.parseFromString(content)
        return secret
    }
}

const writeSecretsFile = async (secretsFilePath: string, secret: Secret) => {
    const secretsFile: FsTextFileOption = {
        path: secretsFilePath,
        contents: secret.getString()
    }
    await writeTextFile(secretsFilePath, secret.getString(), {dir: BaseDirectory.Resource})
    // await writeFile(secretsFile)
    console.log("Secrets written to file")
}

export { readSecretsFile, writeSecretsFile }
