
const buscarusuarios = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json();

    return usuarios;

}

const usuarioToRowHTML = (usuario) =>{

return `
    <tr>
        <td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        <td>${usuario.username}</td>
        <td>${usuario.website}</td>
    </tr>
    `

}
const filtrar = (usuario) => {
    const filtro = document.getElementById('filtro')
    return usuario.name.toUpperCase().include(filtro.value)
}
const construir_tabela = async () => {

    const filtro = document.getElementById('filtro')
   
    const usuarios = await buscarusuarios();
     
    const content = document.getElementById('content');

    const usuariosHTML = usuarios.filter(filtrar).map(usuarioToRowHTML)
    
    usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)
}


const onFiltro = () => {
    const filtro = document.getElementById('filtro')
}

