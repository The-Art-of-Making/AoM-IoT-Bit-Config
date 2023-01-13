import { useState } from "react"
import { BaseDirectory } from '@tauri-apps/api/fs'
import { resourceDir } from '@tauri-apps/api/path';
import { readSecretsFile, writeSecretsFile } from "./file_handler"
import Input from "./Input"
import Secret from "./secret"

function App() {
  const [REQUEST_RATE_SEC, set_REQUEST_RATE_SEC] = useState("")
  const [SECRET_SSID, set_SECRET_SSID] = useState("")
  const [SECRET_PASS, set_SECRET_PASS] = useState("")
  const [IO_USERNAME, set_IO_USERNAME] = useState("")
  const [IO_GROUP, set_IO_GROUP] = useState("")
  const [IO_FEED_KEY, set_IO_FEED_KEY] = useState("")
  const [IO_KEY, set_IO_KEY] = useState("")

  const setFields = {
    0: set_REQUEST_RATE_SEC,
    1: set_SECRET_SSID,
    2: set_SECRET_PASS,
    3: set_IO_USERNAME,
    4: set_IO_GROUP,
    5: set_IO_FEED_KEY,
    6: set_IO_KEY
  }

  async function readFile() {
    let secrets = await readSecretsFile("secrets_template_SD.txt", BaseDirectory.Resource)
    secrets.log()
    for (let i = 0; i < secrets.fields_length; i++)
    {
      setFields[i](secrets.getField(i))
    }
    const resourceDirPath = await resourceDir();
    console.log(resourceDirPath)
  }

  async function writeFile() {
    let secret = new Secret
    const currentFields = [REQUEST_RATE_SEC, SECRET_SSID, SECRET_PASS, IO_USERNAME, IO_GROUP, IO_FEED_KEY, IO_KEY]
    for (let i = 0; i < currentFields.length; i++) secret.setField(i, currentFields[i])
    await writeSecretsFile("secrets_template_SD.txt", BaseDirectory.Resource, secret)
  }

  async function reset() {
    let secret = new Secret
    await writeSecretsFile("secrets_template_SD.txt", BaseDirectory.Resource, secret)
    await readFile()
  }

  return (
    <div className="container">
      <h1>AoM IoT Bit Config</h1>

      <div className="row">
        <div>
          <button className="btn btn-success m-1" onClick={() => readFile()}>
            Load
          </button>
          <button className="btn btn-primary m-1" onClick={() => writeFile()}>
            Configure
          </button>
          <button className="btn btn-danger m-1" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>

      <Input label="REQUEST_RATE_SEC" currentInput={REQUEST_RATE_SEC} setInput={set_REQUEST_RATE_SEC} />
      <Input label="SECRET_SSID" currentInput={SECRET_SSID} setInput={set_SECRET_SSID} />
      <Input label="SECRET_PASS" currentInput={SECRET_PASS} setInput={set_SECRET_PASS} />
      <Input label="IO_USERNAME" currentInput={IO_USERNAME} setInput={set_IO_USERNAME} />
      <Input label="IO_GROUP" currentInput={IO_GROUP} setInput={set_IO_GROUP} />
      <Input label="IO_FEED_KEY" currentInput={IO_FEED_KEY} setInput={set_IO_FEED_KEY} />
      <Input label="IO_KEY" currentInput={IO_KEY} setInput={set_IO_KEY} />

    </div>
  )
}

export default App
