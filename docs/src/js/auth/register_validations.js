window.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("registerName"),t=document.getElementById("registerLastname"),n=document.getElementById("registerEmail"),o=document.getElementById("registerPassword"),r=document.getElementById("registerConfirmPassword");function a(e){const t=e.data;/^[A-Za-zñáéíóúÁÉÍÓÚ\s']+$/.test(t)||Swal.fire({icon:"error",title:"Oops...",text:"¡El nombre y apellido solo deben contener letras!",footer:'<a href="#">¿Por qué sucede esto?</a>'})}e.addEventListener("input",a),t.addEventListener("input",a),n.addEventListener("input",(function(e){const t=e.data;/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° 0-9@.]+$/.test(t)||Swal.fire({icon:"error",title:"Oops...",text:"¡Ingrese un correo electrónico válido!",footer:'<a href="#">¿Por qué sucede esto?</a>'})})),o.addEventListener("input",(function(e){const t=e.target.value;/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(t)||Swal.fire({icon:"error",title:"Oops...",text:"¡La contraseña debe contener al menos 8 caracteres, una mayúscula y un número!",footer:'<a href="#">¿Por qué sucede esto?</a>'})})),r.addEventListener("input",(function(){o.value!==r.value&&Swal.fire({icon:"error",title:"Oops...",text:"¡Las contraseñas no coinciden!",footer:'<a href="#">¿Por qué sucede esto?</a>'})}))}));