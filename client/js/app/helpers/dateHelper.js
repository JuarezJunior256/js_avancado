class DateHelper{

    constructor(){

        //lança um erro caso essa classe seja instanciada 
        throw new Error('DateHelper não necessita de ser instaciada');
    }

    //metodo estático para converter a data em texto
    static dataParaTexto(data){

      return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }

    //metodo estático para converter texto em data
    static textoParaData(txt){

        if(!/\d{4}-\d{2}-\d{2}/.test(txt)) 
          throw new Error('Erro na formatação');
        
        return new Date(...txt.split('-').map((item, indice) => item - indice % 2));

    }

    
}