class DateHelper{

    constructor(){

        throw new Error('DateHelper não necessita de ser instaciada');
    }

    static dataParaTexto(data){

      return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }

    
    static textoParaData(txt){

        if(!/\d{4}-\d{2}-\d{2}/.test(txt)) 
          throw new Error('Erro na formatação');
        
        return new Date(...txt.split('-').map((item, indice) => item - indice % 2));

    }

    
}