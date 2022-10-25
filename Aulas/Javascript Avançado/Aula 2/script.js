/*

* HOISTING (IÇAR, ERGUER AO TOPO)- MUITO IMPORTANTE ESSE CONCEITO

! Hoisting é o comportamento padrão do Javascript de mover as declarações para o topo de um escopo 

*/

function teste () {
    outraFuncao() //~ No Javascript isso funcionaria, pois as declarações (Variáveis, funções etc) são colocadas no topo (Hoisting)
    //! Contudo, não é uma Boa Prática (Best Practice)

    function outraFuncao () { //~ O comportamento de Hoisting vai mandar essa declaração pro topo.
        console.log('ok, sou a outra função')
    }

    //! outraFuncao() - em outras linguages, a função deve ser chamada assim, pois o código é lido de cima para baixo.
    //BP: No entanto, é uma boa prática, mesmo no Javascript, chamar a função depois de ela ser declarada.
}

teste()