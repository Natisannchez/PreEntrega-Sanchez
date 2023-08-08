function inicio(){
    alert("Bienvenido a Miestilo");
    alert("tienda de carteras y mochilas exportadas");

}

function usua(){
    alert ("A CONTINUACION INGRESA TU USUARIO POR FAVOR");
}

usua();

let usuario;
let contra;

for(let i=1; i<=3; i++){
    alert('Bienvenido a Miestilo')
    usuario = prompt('Tu nombre de usuario');
    contra = prompt('Tu contraseña');
    if((usuario == 'natalia')&&(contra=='sanchez')){
        alert('Bienvenido Natalia!');
        break;
    }else{
        alert('Usuario y/o constraseña no es correcto! Intenta nuevamente');
    }
}


console.table(productos);
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let contenedor = document.getElementById("misprods");
let cantidad = document.getElementById('cantidad');
cantidad.innerText = `🛒${carrito.length}`;
function compra(){
    if (carrito.length != 0) {
        for (const prod of carrito) {
        
            alert ("Ingreso al catalogo de Miestilo");
        
        }
        compra();
        let gasto = 0; 
        let efectivo= 0;
        let tarjeta= 0;
        let mp=0;
        let producto = prompt('1-Crossbody Bag ... $ 3500\n2- CHANEL ... $ 4289\n3-PRADA... $ 5100\n4-MOCHILA EVERYDAY... $32311\n5-Mini Letter Graphic Flap Saddle Bag... $23323\n6-Metal Decor Flap Square Bag...$284943\n7-Total de compra\n8-Salir');
        
        while(producto != '0'){
            switch(producto){
                case '1':
                    alert('Crossbody Bag ... $ 3500');
                        gastoTotal(3500);
                    break;
                case '2':
                    alert('CHANEL ... $ 4289');
                        gastoTotal(4289);
                    break;
                case '3':
                    alert('PRADA... $ 5100');
                    gastoTotal(5100);
                    break;
                case '4':
                    alert('MOCHILA EVERYDAY... $3211');
                        gastoTotal(3211);
                    break;
                case '5':
                    alert('Mini Letter Graphic Flap Saddle Bag... $2323');
                        gastoTotal(2323);
                    break;
                case '6':
                    alert('Metal Decor Flap Square Bag...$2943');
                        gastoTotal(2943);
                    break;
                case '7':
                    let pago= prompt('1-EFECTIVO-->-10%\n2- Tarjeta-->hasta 3 cuotas sin interes\n3-Mercado Pago--> -5% (recargo)');
                        while(gasto !='0'){
                            switch(pago){
                                case '1':
                                    alert('Pago Efectivo');
                                    break;
                                case '2':
                                    alert('Pago Tarjeta');
                                    break;
                                case '3':
                                    ('Mercado Pago');
                                    break;
                                default:
                                    alert('La opcion ingresada es incorrecta');
                                    break;
                            }
                        if (pago==1){
                            alert('El total de su compra pagando en efectivo es de: '+efectivo);
                        } else if (pago==2){
                            let opc= prompt('1 CUOTA\n2 cuotas\n3 cuotas');
                            switch (opc){
                                case '1':
                                    alert('Pago 1 cuota el total es de '+tarjeta);
                                    break
                                case '2':
                                    alert('pago 2 cuotas el total es de '+tarjeta/2+' mensual');
                                    break
                                case '3':
                                    alert('pago 3 cuotas el total es de '+tarjeta/3+' mensual');
                                    break
                                default:
                                    alert('No se encuentra esa opcion en cuotas');
                                    break
                            }
                        } else if(pago ==3){
                            alert('El total de su compra pagando con Mercado Pago es de: '+mp);
                        }
                        producto = prompt('8-Salir');
                        break;
        
                    }
                        
                    break;
                case '8':
                    alert('Gracias por su compra! Vuelva pronto');
                    break;
                default:
                    alert('Codigo erroneo ');
                    break;
            }
            producto = prompt('1-Crossbody Bag ... $ 3500\n2- CHANEL ... $ 4289\n3-PRADA... $ 5100\n4-MOCHILA EVERYDAY... $32311\n5-Mini Letter Graphic Flap Saddle Bag... $23323\n6-Metal Decor Flap Square Bag...$284943\n7-Total de compra\n8-Salir');
        
        }
        
        document.getElementById('tablabody').innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button class='btn btn-light'>🗑️</button></td>
            </tr>
        `;
    }
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}





function gastoTotal(precio){
    gasto = gasto + precio;
    efectivo= (gasto + precio)*0.10;
    tarjeta =gasto + precio;
    mp= (gasto + precio)*0.5;

}