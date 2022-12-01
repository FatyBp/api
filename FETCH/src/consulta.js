export class Consulta{
    constructor(){
        this.url= "https://rickandmortyapi.com/api"
    }
    personajes(){
        // fetch(`https://rickandmortyapi.com/api/character`)
        fetch(`${this.url}/character`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            // console.log(respuesta);
            let {results} = respuesta;
            let personajes = ``;
            let contador = 0;
            results.map(personaje => {
                let {created,gender,id,image,location,name,origin,species,status,url} = personaje;
                if(contador <10)
                personajes += `


    <div class="card mb-2 text-light" style="max-width: 1500px; background: rgb(73,157,52);
    background: radial-gradient(circle, rgba(73,157,52,1) 0%, rgba(0,0,0,1) 100%);">
  <div class="row g-0">
    <div class="col-md-4">
    <br>
    <img class="img-fluid" src="${image}" alt="">
    </div>
    <div class="col-md-8">  
        <h1 class="card-title" >${name} | No. ${id}</h1>
        <p class="card-text">                    
        <div class="card-body">
            <p><b>Creacion: </b>${created}</p>
            <p><b>Genero: </b>${gender}</p>
            <p><b>Localizacion: </b>${location.name}</p>
            <p><b>Origen: </b>${origin.name}</p>
            <p><b>Especie: </b>${species}</p>
            <p><b>Estado: </b>${status}</p></p>
      </div>
    </div>
  </div>
</div>
                <br>
                `;
                contador++;
            });
            $(`#personajes`).html(personajes);
        })
        .catch(error => {
            console.log(`${error}`);
        });
    }

    capitulos(){
        fetch(`${this.url}/episode`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            // console.log('capitulos',respuesta);
            let {results} = respuesta;
            // console.log(results);
            let capitulos = ``;
            let contador = 0;
            results.map(capitulo => {
                let {id,name,air_date,episode,url,created} = capitulo;
                if(contador <10)
                capitulos += `
                <div class="card text-center text-light" style="max-width: 1500px; background: rgb(73,157,52);
                background: radial-gradient(circle, rgba(73,157,52,1) 0%, rgba(0,0,0,1) 100%);">
                <div class="card-header">
                        <h1>${name} | No. ${id}</h1>
                    </div>
                    <div class="card-body">
                    <p><b>Genero: </b>${air_date}</p>
                    <p><b>Genero: </b>${episode}</p>
                        <p><b>Creacion: </b>${created}</p>
                    </div>
                </div>
                <br>
                `;
                contador++;
            });
            $(`#capitulos`).html(capitulos);
        })
        .catch(error => {
            console.log(`${error}`);
        });

    }
    localizacion(){
        fetch(`${this.url}/location`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            // console.log('capitulos',respuesta);
            let {results} = respuesta;
            console.log(results);
            let localizacion = ``;
            let contador = 0;
            results.map(ubicacion => {
                let {id,name,type,dimension,url,created} = ubicacion;
                if(contador <10)
                localizacion += `
                <div class="card text-center text-light" style="max-width: 1500px; background: rgb(73,157,52);
                background: radial-gradient(circle, rgba(73,157,52,1) 0%, rgba(0,0,0,1) 100%);">
                <div class="card-header">
                        <h1>${name} | No. ${id}</h1>
                    </div>
                    <div class="card-body">
                    <p><b>Genero: </b>${type}</p>
                    <p><b>Genero: </b>${dimension}</p>
                        <p><b>Creacion: </b>${created}</p>
                    </div>
                </div>
                <br>
                `;
                contador++;
            });
            $(`#localizacion`).html(localizacion);
        })
        .catch(error => {
            console.log(`${error}`);
        });

    }
   
}