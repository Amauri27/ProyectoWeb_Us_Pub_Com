  const btnAdd = document.getElementById('btnCargar')
  btnAdd.addEventListener("click",()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let info = "";
        for (let i=0; i<json.length; i++)
        {
            info+=`<option value = '${json[i].id}'> ${json[i].name}</option>`
        };
        const datos = document.getElementById("users");
        datos.innerHTML=info;
        btnVerDatos.style.display="inline-block"
    })
  })

  const menuUsers = document.getElementById('users');
  menuUsers.addEventListener("change",()=>{
    const posts = document.getElementById('posts');
    let id = document.getElementById('users').value;
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
    .then((response) => response.json())
    .then((json) => {
      let datos = '';
      for (let i = 0; i<json.length; i++){
        datos +=`<div class="posts">
        <h3>${json[i].title}</h3>
        <p>${json[i].body}</p>
        <button type="button" id='btnVer' class='btnVer' onclick="cargarComs(${json[i].id})" >Ver Comentarios</button>
        <div id='comments${json[i].id}' class="comentarios"></div>

        </div>`
      };
      posts.innerHTML=datos;
    });
  })

  cargarComs = (postID) =>
  {
    //console.log("ciclcked  ",postID)
    let comments = document.getElementById("comments"+postID);
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+postID)
    .then((response)=>response.json())
    .then((json)=>{
      let coment = "<button type='button' class='btnEliminar' onclick='Eliminar("+postID+")'>Eliminar</button>";
      for (let i=0;i<json.length;i++)
      {
        coment += `<div>
        <h4>Comentario de: ${json[i].email}</h4>
        <p>${json[i].body}</p>
        </div>`
      };
        comments.innerHTML=coment;
    })
  };

  Eliminar = (post)=> {
    let comments= document.getElementById("comments"+post);
    comments.innerHTML='';

  };

  const btnVerDatos = document.getElementById('btnVerDatos');
  btnVerDatos.addEventListener("click",()=>{
    const datosUs = document.getElementById('datosUs');
    let id =document.getElementById('users').value;
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then((response)=>response.json())
    .then((json)=>{
      let datosUsu= "<button type='button' class='btnCerrar' onclick='Cerrar("+id+")'>Cerrar</button>";
  
        datosUsu+=`<div class="datosUsuario">
        <h3>Datos del Usuario:</h3>
        <h5>Nombre de Usuario:</h5> <p>${json.username}</p> 
        <h5>Nombre:</h5> <p>${json.name}</p> 
        <h5>Email:</h5> <p>${json.email}</p>
        <h5>Ciudad:</h5> <p>${json.address.city}</p>
        <h5>Telefono:</h5> <p>${json.phone}</p>
        <h5>Sitio web:</h5> <p>${json.website}</p>
        <h5>Empresa:</h5> <p>${json.company.name}</p>
        <h5>Frase de la Empresa:</h5> <p>${json.company.catchPhrase}</p>  
        </div>`;
      
        datosUs.innerHTML=datosUsu;
    })
  });

  Cerrar=()=>
  {
    let datosUs=document.getElementById('datosUs');
    datosUs.innerHTML='';
  }


