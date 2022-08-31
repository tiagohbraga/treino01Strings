const atencao = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const novaAtencao = atencao.replace("verde","rosa").replace("azul","laranja").replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log(`
${atencao}

${novaAtencao}

A nova frase possui a cor verde? ${novaAtencao.includes("verde")}
A nova frase possui a cor laranja? ${novaAtencao.includes("laranja")}

`)