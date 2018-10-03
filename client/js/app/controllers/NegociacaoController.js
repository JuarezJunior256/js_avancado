class NegociacaoController{

    constructor(){
     
        //pegando dados do DOM
        let $ = document.querySelector.bind(document);

        this._inputQuantidade  = $('#quantidade');
        this._inputData        = $('#data');
        this._inputValor       = $('#valor');
        
        this._listaNegociacoes = new ListaNegociacoes();//lista de Negociacões
        //cria a tabela vazia 
        this._negociacoesViews = new NegociacoesView($('#negociacoesView'));

        //metodo para atualizar a lista na view da tabela
        this._negociacoesViews.update(this._listaNegociacoes);
    }

    //evento de click 
    adiciona(event){
        event.preventDefault();

        //adicionando uma negociação na lista
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //adicionando uma lista de negocições na view da tabela
        this._negociacoesViews.update(this._listaNegociacoes);
        this._limpaFormulario();//limpando formulário 

        
    }

    //metodo para criar uma negociaco 
    _criaNegociacao(){

        //instância da classe Negociacao
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
    }

    //metodo para limpar formulário 
    _limpaFormulario(){

        this._inputData.value       = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value      = 0.0;

        this._inputData.focus();
    }

}