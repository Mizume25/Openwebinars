//ARCHIVO QUE ANIDA TODOS LOS JS
import * as ui from './ui.js';  
import * as select from './selectors.js'
import * as api from "./api.js";
//EVENT: Cambia color del NAV
select.navMain.addEventListener('click', ui.switchSection);

//EVENT: Cambia color de buttons optativa
select.asideBTN.addEventListener('click', ui.switchOPT);


(async () => {
    let list = [];
    let outerList = [];
    list = await api.getAllStudents();
    ui.renderTable(list);
})();