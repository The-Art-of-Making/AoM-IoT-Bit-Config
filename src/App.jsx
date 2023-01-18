import { useState } from "react"
import { BaseDirectory } from "@tauri-apps/api/fs"
import { readSecretsFile, writeSecretsFile } from "./file_handler"
import Input from "./Input"
import Secret from "./secret"

const secretsFilePath = BaseDirectory.Resource
const secretsFileName = "secrets.txt"

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
    let secrets = await readSecretsFile(secretsFileName, secretsFilePath)
    secrets.log()
    for (let i = 0; i < secrets.fields_length; i++)
    {
      setFields[i](secrets.getField(i))
    }
  }

  async function writeFile() {
    let secret = new Secret
    const currentFields = [REQUEST_RATE_SEC, SECRET_SSID, SECRET_PASS, IO_USERNAME, IO_GROUP, IO_FEED_KEY, IO_KEY]
    for (let i = 0; i < currentFields.length; i++) secret.setField(i, currentFields[i])
    await writeSecretsFile(secretsFileName, secretsFilePath, secret)
  }

  async function reset() {
    let secret = new Secret
    writeSecretsFile(secretsFileName, secretsFilePath, secret)
    await readFile()
  }

  return (
    <div className="container">
      <h1>AoM IoT Bit Config</h1>

      <div className="row" style={{textAlign: "center"}}>
        <div>
          <button className="btn btn-primary m-1" onClick={() => readFile()}>
            Load Existing Data
          </button>
          <button className="btn btn-success m-1" onClick={() => writeFile()}>
            Save
          </button>
          <button className="btn btn-danger m-1" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>

      <table className="table table-hover mt-3 mb-3">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <Input
            label="Request Rate (seconds)"
            description="Determines how often the IoT bit will try to download data, e.g. the bit will request feed data every 2 seconds with a value of 2"
            currentInput={REQUEST_RATE_SEC}
            setInput={set_REQUEST_RATE_SEC}
          />
          <Input
            label="Wifi SSID"
            description="Name of the Wifi network the bit will connect to"
            currentInput={SECRET_SSID}
            setInput={set_SECRET_SSID}
          />
          <Input
            label="Wifi Password"
            description="Password of the Wifi network the bit will connect to"
            currentInput={SECRET_PASS}
            setInput={set_SECRET_PASS}
          />
          <Input
            label="Adafruit IO Username"
            description="Your Adafruit IO username"
            currentInput={IO_USERNAME}
            setInput={set_IO_USERNAME}
          />
          <Input
            label="Adafruit IO Group"
            description="Name of the group with the feed the bit should access"
            currentInput={IO_GROUP}
            setInput={set_IO_GROUP}
          />
          <Input
            label="Adafruit IO Feed Key"
            description="Key for the feed the bit will GET data from or POST data to"
            currentInput={IO_FEED_KEY}
            setInput={set_IO_FEED_KEY}
          />
          <Input
            label="Adafruit IO Key"
            description="Key used to connect to Adafruit IO services, usually is 32 characters and begins with 'aio_'"
            currentInput={IO_KEY}
            setInput={set_IO_KEY}
          />
        </tbody>
      </table>

    </div>
  )
}

export default App
