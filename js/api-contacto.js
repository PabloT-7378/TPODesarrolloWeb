const form = document.getElementById("formulario");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("formulario-status");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      })
    //   .then(response => {
    //     if (response.ok) {
    //       form.reset();
    //       alert("Gracias por completar el formulario");
    //     } else {
    //       response.json().then(data => {
    //           status.innerHTML = "Hubo un problema al enviar su formulario"
    //         }
    //       )
    //     }
    //   }).catch(error => {
    //     status.innerHTML = "Hubo un problema al enviar su formulario"
    //   });
    }
    form.addEventListener("submit", handleSubmit)