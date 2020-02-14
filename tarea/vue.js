new Vue({
    el: "#app",
    data: {
        frutas: [
            {
                fruta: "Uva",
                cantidad: 4
            },
            {
                fruta: "Manzana",
                cantidad: 4
            },
            {
                fruta: "Banana",
                cantidad: 4
            }
        ],
        nuevaFruta: "",
        //Estilos
        botonAgregar: "btn btn-outline-info",
        ventana: "badge badge-light",
        otro: "alert alert-warning",
        aumentar: "btn btn-success",
        disminuir: "btn btn-danger"
    },
    methods: {
        agregar() {
            if (this.nuevaFruta) {
                this.frutas.push(
                    {
                        fruta: this.nuevaFruta,
                        cantidad: 0,

                    }
                )
            }
            this.nuevaFruta = ""
        },
        total() {
            let auxiliar = 0;
            for (f of this.frutas) {
                auxiliar = auxiliar + f.cantidad
            }
            return auxiliar;
        },
        borrar(index) {
            this.frutas.splice(index, 1)
        },
        cambiarColor(f) {
            if (f.cantidad < 5) {
                return "color";
            }
            if (f.cantidad < 10) {
                return "color1";
            } else {
                return "color2";
            }
        },
        pintar(cantidad) {
            if (cantidad >= 0 && cantidad < 6) {
                return "text-danger"
            } else {
                if (cantidad > 5 && cantidad < 11) {
                    return "text-warning"
                } else {
                    if (cantidad > 10 && cantidad < 16) {
                        return "text-primary"
                    } else {
                        return "text-success"
                    }
                }
            }
        }
    }

})