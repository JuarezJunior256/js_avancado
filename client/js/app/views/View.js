class View{

    constructor(elemento){

        this._elemento = elemento;

    }

   template(){
       throw new Error('o método templade deve ser implementado');
   }

    update(model){
    
        this._elemento.innerHTML = this.emplate(model);
    
    }
}