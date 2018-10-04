class Mensagem{
 
    constructor(txt=''){

        this._texto = txt;
    
    }

    get texto(){
        
        return this._texto;
    }

    set texto(txt){

        this._texto = txt;
    }
}