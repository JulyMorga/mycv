

Vue.component("modal-certificado", { // recibe dos argumentos: el nombre del componente y el objeto con las propiedades
	props: {
		titulo: String,
		nombre: String
	},  // lo que definimos acá lo vamos a poder usar como atributo en html
	template: ` <div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" v-bind:id="nombre" role="dialog" tabindex="-1">
                    <div class="modal-dialog modal-dialogg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">
                                    {{ titulo }}
                                </h5>
                                <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                                    <span aria-hidden="true">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <slot></slot>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" data-dismiss="modal" type="button">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
			`, // acá va el código html como string y solo tiene que tener un elemento raiz
})


let app = new Vue ({
	el: "#app",
	data: {
		// alto: 10,
		// ancho: 10,
		posicion: 0 ,
		secciones : ["#section-name", "#about" , "#jobs" , "#education", "#curses","#s-contact"],
		sec_abajo: "#about",
		disable_abajo: false,
		salio_boton: false,
	},
	methods: {
		modificarPosicion : function (pos) {
			// Seteo la posicion que estoy
			this.posicion = pos;

			let proxima_pos;
			// 0 5    proxima_pos =1 
			// 1 5	   proxima_pos =2
			// 5 5    proxima_pos = 0
			if(this.posicion > (this.secciones.length - 1)){
				this.posicion = 0;
				proxima_pos = 1;
				this.disable_abajo = false;
			} else if(this.posicion == (this.secciones.length - 1)){ 
				proxima_pos = 0;
				this.disable_abajo = true;
			} else {
				proxima_pos = this.posicion + 1;
				this.disable_abajo = false;
			}
		
			this.sec_abajo = this.secciones[proxima_pos];
		},
		clickModificarPosicion : function (evento) {

			if(!this.salio_boton){
				this.posicion++;
			}
			else {
				this.salio_boton = false;
			}
			//pos_act max pos		prox
			// 0  		5    1		proxima_pos = 2 
			// 1  		5	 2 		proxima_pos = 3
			// 5  		5    0		proxima_pos = 1

			this.modificarPosicion(this.posicion);
		},
	},
	computed: { // computed para las funciones que retornen algo
		
	},
})


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
// var sec_name = document.querySelector("#section-name");
// var sec_about = document.querySelector("#about");
// let sec_job = document.querySelector("#jobs");
// let sec_edu = document.querySelector("#education");
// let sec_curses = document.querySelector("#curses");
// let sec_cont = document.querySelector("#s-contact");
// let btn_bajar = document.querySelector("#btn_bajar");

// alturas = [sec_name.scrollHeight, sec_job.scrollHeight , sec_edu.scrollHeight , sec_curses.scrollHeight ,sec_cont.scrollHeight]
// seccioness = ["#section-name", "#about" , "#jobs" , "#education", "#curses","#s-contact"]

// var position = 0;
// var modificarPosicion = function (pos) {
// 	position = pos;
// }

// var bajarPosicion = function () {
// 	alt = 0;
// 	alturas = [sec_name.scrollHeight, sec_job.scrollHeight , sec_edu.scrollHeight , sec_curses.scrollHeight ,sec_cont.scrollHeight]
// 	for (let i = 0; i < (position+1); i++) {
// 		alt += alturas[i];
// 	}
// 	position++;
// 	if(position > alturas.length){
// 		position = 0;
// 		alt = 0;
// 	}

// 	scrollTo(0,alt)
// }

// sec_name.addEventListener('mouseenter', function(){modificarPosicion(0)});
// sec_about.addEventListener('mouseenter', function(){modificarPosicion(1)});
// sec_job.addEventListener('mouseenter', function(){modificarPosicion(2)});
// sec_edu.addEventListener('mouseenter', function(){modificarPosicion(3)});
// sec_curses.addEventListener('mouseenter', function(){modificarPosicion(4)});
// sec_cont.addEventListener('mouseenter', function(){modificarPosicion(5)});
// btn_bajar.addEventListener('click', bajarPosicion);
