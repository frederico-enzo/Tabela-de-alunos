function salvar(){

    let dados_alunos = [
    {
        nome:'',
        curso:'',
        email:'',
    },
]

    dados_alunos.nome = document.getElementById('input_Nome').value;
    dados_alunos.curso = document.getElementById('input_Curso').value;
    dados_alunos.email = document.getElementById('input_E-mai').value;


    console.log(dados_alunos);
}