import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync('docs/package-testing')
      .map((pkg) => {
        return { params: { pkg } }
      })
  }
}