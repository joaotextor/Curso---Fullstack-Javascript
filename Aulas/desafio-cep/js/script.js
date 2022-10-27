const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {

        this.$cep = document.querySelector('#cep')
        this.$rua = document.querySelector('#rua')
        this.$bairro = document.querySelector('#bairro')
        this.$cidade = document.querySelector('#cidade')
        this.$uf = document.querySelector('#uf')
    },

    bindEvents: function() {
        const self = this;

        this.$cep.onkeyup = this.Events.cep_keyup.bind(self);
    },

    extractValue: function(obj, num) {
        if (obj.value.length >= num) {
            const valor = obj.value
            return valor
        } else {
            return null
        }
    },

    transformarEmJson: (response) => {
        return response.json()
    },

    exibeErro: () => {
        console.log("Ocorreu um erro")
    },


    Events: {

        cep_keyup: async function() {
            const valor = this.extractValue(this.$cep, 8)
            if (valor) {
                const buscaDados = await fetch(`https://viacep.com.br/ws/${valor}/json`)
                .then(this.transformarEmJson)
                .catch(this.exibeErro)

                const {
                    bairro,
                    cep,
                    logradouro: rua,
                    localidade: cidade,
                    uf,
                } = buscaDados

                this.$cidade.value = cidade
                this.$bairro.value = bairro
                this.$uf.value = uf
                this.$rua.value = rua
            }
            }
        }
    }

Main.init()