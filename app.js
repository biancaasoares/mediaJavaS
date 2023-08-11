/**************************************************
 * Obejtivo: Calcular a média de um aluno
 * autora: Bianca
 * data: 04/08/23
 * versão: 1.0 
 * 
 * 
 * 
 * Operadores de comparação
 * == : Permite validar a igualdade de dois conteúdos
 * < : Menor
 * > : Maior
 * <= : menor OU igual
 * >= : maior OU igual
 * != : Permite validar a difereça entre dois conteúdos
 * === : Permite validade a igualdade de dois conteúdos e validar a tipagem de dados
 * !== : Permite validade a diferença entre dois conteúdos e validar a tipagem de dados
 * ==! : Permite validar a igualdade de dois conteudos e validar a diferenca de tipagem
 * 
 * OPERADORES LÓGICOS
 * E        AND   &&
 * OU       OR    ||
 * NEGAÇÃO  NOT   !
 */


//Import da biblioteca realine, que recebe dados digitados pelo usuário no terminal
var readline = require('readline');


//Cria um elemento para entrada de dados do usuário via teclado
var entradaDeDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout

});

//Solicita a entrada de dados no terminal
entradaDeDados.question('Digite seu nome: ', function(nomeAluno){
var nome = nomeAluno;

    //Solicita a 1° nota do aluno
    entradaDeDados.question('digite a 1° nota: ', function(nota1){
    var n1 =  Number (nota1);
 
        //Solicita a 2° nota do aluno
        entradaDeDados.question('digite a 2° nota: ', function(nota2){
        var n2 = Number (nota2);

            //Solicita a 3° nota do aluno
            entradaDeDados.question('digite a 3° nota: ', function(nota3){
            var n3 = Number (nota3);
     
                //Solicita a 4° nota do aluno
                entradaDeDados.question('digite a 4° nota: ', function(nota4){
                var n4 = Number (nota4);

                var media = (n1 + n2 + n3 + n4) / 4

                  if(n1 == '' || n2 == '' || n3 == '' || n4 == ''){
                    console.log('ERRO - informe todas as notas do aluno');
                  }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
                       console.log('ERRO: é obrigatória a entrada de números!!')
                  } else if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10){
                    console.log('ERRO: Por favor, informe uma nota entre 0 e 10!!')
                    
                  }
                  else{
                    console.log()
                    console.log(`Bem vindo, ${nome}`);
                    console.log(`Sua média é: ${media}`);
                  }

                 entradaDeDados.close();
                })

             })  

         })
  
     })

})