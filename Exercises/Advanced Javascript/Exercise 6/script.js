const Main = {
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$edtMensagem = document.querySelector('.edtMensagem')
        this.$botao = document.querySelector('.botao')
        this.$loading = document.querySelector('#loading')
        this.$label = document.querySelector('#label')
    },

    bindEvents: function() {
        const self = this
        this.$botao.onclick = self.Events.botao_click.bind(self)
    },

    Events: {
        botao_click: function() {
            this.$botao.classList.add('hidden')
            this.$loading.classList.remove('hidden')
            let mensagem = this.$edtMensagem.value
            setTimeout(() => {
                this.$label.innerText = mensagem
                this.$edtMensagem.classList.add('hidden')
                this.$loading.classList.add('hidden')
                this.$label.classList.remove('hidden')
            }, 10000)
        },

    }
}

Main.init()