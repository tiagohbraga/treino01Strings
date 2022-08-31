const minhaString = "Eu não sou superticioso, mas sou um pouco_.   "
const minhaNovaString = "Eu não sou superticioso, mas sou um pouco_.   "  
 
console.log(`${minhaString}
Antes de remover os espaços tinha ${minhaString.length} caracteres e depois de remover os espaços ficou com ${minhaNovaString.trim().length} caracteres.`,`${minhaString.replace("_", " sticioso")}`)

