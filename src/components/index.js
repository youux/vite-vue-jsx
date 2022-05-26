const modulesFiles = import.meta.globEager('./**/*.vue')

const modules = {}
for (const [key, value] of Object.entries(modulesFiles)) {
  const modulePathName = key.replace(/^.\/(.*)\.vue/, '$1')
  const moduleName = modulePathName.replace('/', '-')
  modules[moduleName] = value.default
}
export default modules
