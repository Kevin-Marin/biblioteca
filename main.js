const biblioteca = [];
let livro = {};
let opcao = 0;

console.log("1. para inserir, 2. para remover, 3. visualizar");
console.log("2. para remover");
console.log("3. visualizar");

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!opcao) {
    opcao = Number(entrada_usuario);
    console.log("Digite ENTER para continuar.")
  } else {
    switch (opcao) {
      case 1:
        console.log("Digite o nome do livro?");
        if(!livro.nome) {
            livro.nome = entrada_usuario;
            console.log("Digite o tamanho:");
        } else if (!livro.tamanho) {
            livro.tamanho = entrada_usuario
            console.log("Digite o autor:");
        } else if (!livro.autor) {
            livro.autor = entrada_usuario
            console.log("Digite o gênero:");
        } else  {
            livro.genero = entrada_usuario

            biblioteca.push(livro);
            livro = {};
            opcao = 0;

            console.log("livro inserido com sucesso!")
        }
        break;
      case 2:
        break;
      case 3:
        biblioteca.forEach(livro => {
            console.log(livro);
        })
        opcao = 0;
        break;

      default:
        console.log("Opção inválida");
        opcao = 0;
        break;
    }
  }
});
