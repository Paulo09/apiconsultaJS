const construir_tabela = async () =>{
   
    const content = document.getElementById('content');

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const usuarios = await response.json();

    const usuariosHTML = usuarios.map( element =>

        `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.username}</td>
            <td>${element.website}</td>
        </tr>
        `
    )

    usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)
}

