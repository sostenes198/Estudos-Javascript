/*
false -> FALSE LITERAL

FALSY
*false (Avalia em false)
0
'' 
""
``
null / undefined
NaN

Qualquer coisa diferentes dos FALSY é avaliado em true em javascript
*/

/*
    Circut-Break

    && -> AND = Se for false retornar o valor avaliado em false, e retornara o ultimo valor avaliado em true da expressão (Caso tenha mais de um)
    || -> OR  = Retorna o primeiro valor verdadeiro encontrado
*/

function falaOi(){
    console.log("OI");
}

const vaiExecutar = true;

vaiExecutar && falaOi();