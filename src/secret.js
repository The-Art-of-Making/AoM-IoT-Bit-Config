const defaultSecretValues = ["REQUEST_RATE_SEC", "SECRET_SSID", "SECRET_PASS", "IO_USERNAME", "IO_GROUP", "IO_FEED_KEY", "IO_KEY"]

export default class Secret {
    constructor(template = []) {
        this.template = template.length > 0 ? template : defaultSecretValues
        this.fields_length = template.length
        this.fields = {}
        for (let i = 0; i < this.fields_length; i++) {
            this.fields[i] = ""
        }
    }
    getString() {
        let output = ""
        for (let i = 0; i < this.fields_length; i++) {
            (this.fields[i]) ? output += this.fields[i] : output += this.template[i]
            if (i < this.fields_length - 1) output += ";"
        }
        return output
    }
    log() {
        console.log(this.getString())
    }
    parseFromString(data) {
        let i = 0
        let field = 0
        while (i < data.length) {
            let index = data.indexOf(";", i)
            if (index === -1) {
                this.fields[field] = data.substring(i, data.length)
                break
            }
            this.fields[field] = data.substring(i, index)
            i = index + 1
            field++
        }
    }
    getField(num) {
        return (this.fields[num]) ? this.fields[num] : this.template[num]
    }
    setField(num, value) {
        this.fields[num] = value
    }
}
