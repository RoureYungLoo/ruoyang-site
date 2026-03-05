import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync('docs/testpkg')
      .map((pkg) => {
        return { params: { pkg } }
      })
  }
}