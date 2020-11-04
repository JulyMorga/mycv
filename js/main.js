

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
		alto: 10,
		ancho: 10,
	},
	methods: {
		
	},
	computed: { // computed para las funciones que retornen algo
		
	}
})


var sec_name = document.querySelector("#section-name");
var sec_about = document.querySelector("#about");
let sec_job = document.querySelector("#jobs");
let sec_edu = document.querySelector("#education");
let sec_curses = document.querySelector("#curses");
let sec_cont = document.querySelector("#s-contact");
let btn_bajar = document.querySelector("#btn_bajar");

alturas = [sec_name.scrollHeight, sec_job.scrollHeight , sec_edu.scrollHeight , sec_curses.scrollHeight ,sec_cont.scrollHeight]


var position = 0;
var modificarPosicion = function (pos) {
	position = pos;
}

var bajarPosicion = function () {
	alt = 0;
	alturas = [sec_name.scrollHeight, sec_job.scrollHeight , sec_edu.scrollHeight , sec_curses.scrollHeight ,sec_cont.scrollHeight]
	for (let i = 0; i < (position+1); i++) {
		alt += alturas[i];
	}
	position++;
	if(position > alturas.length){
		position = 0;
		alt = 0;
	}

	scrollTo(0,alt)
}

sec_name.addEventListener('mouseenter', function(){modificarPosicion(0)});
sec_about.addEventListener('mouseenter', function(){modificarPosicion(1)});
sec_job.addEventListener('mouseenter', function(){modificarPosicion(2)});
sec_edu.addEventListener('mouseenter', function(){modificarPosicion(3)});
sec_curses.addEventListener('mouseenter', function(){modificarPosicion(4)});
sec_cont.addEventListener('mouseenter', function(){modificarPosicion(5)});
btn_bajar.addEventListener('click', bajarPosicion);