import { useState } from "react"
import { BaseDirectory } from '@tauri-apps/api/fs'
import { readSecretsFile } from "./file_handler"
import Input from "./Input"

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
    let secrets = await readSecretsFile("secrets_template_SD.txt", BaseDirectory.Home)
    secrets.log()
    for (let i = 0; i < secrets.fields_length; i++)
    {
      setFields[i](secrets.getField(i))
    }
  }

  return (
    <div className="container">
      <h1>AoM IoT Secrets Config</h1>

      <Input currentInput={REQUEST_RATE_SEC} setInput={set_REQUEST_RATE_SEC} />
      <Input currentInput={SECRET_SSID} setInput={set_SECRET_SSID} />
      <Input currentInput={SECRET_PASS} setInput={set_SECRET_PASS} />
      <Input currentInput={IO_USERNAME} setInput={set_IO_USERNAME} />
      <Input currentInput={IO_GROUP} setInput={set_IO_GROUP} />
      <Input currentInput={IO_FEED_KEY} setInput={set_IO_FEED_KEY} />
      <Input currentInput={IO_KEY} setInput={set_IO_KEY} />
      
      <div className="row">
        <div>
          <button className="btn btn-primary" onClick={() => greet()}>
            Configure
          </button>
        </div>
      </div>

      <div className="row">
        <div>
          <button className="btn btn-success" onClick={() => readFile()}>
            Load
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
