# AppDesenho

Este é um código em HTML, CSS e JavaScript que cria um aplicativo simples de desenho.

A seção HTML define a estrutura do aplicativo, que inclui um canvas (tela de desenho) e uma caixa de ferramentas com botões para aumentar e diminuir o tamanho do pincel, escolher a cor, limpar a tela, etc. O arquivo CSS define a aparência visual do aplicativo, como a fonte e o esquema de cores. O arquivo JavaScript fornece a funcionalidade do aplicativo, permitindo ao usuário desenhar no canvas e interagir com os botões na caixa de ferramentas.

O JavaScript começa selecionando os elementos HTML relevantes por meio do uso de "document.getElementById". Em seguida, define algumas variáveis para armazenar o tamanho do pincel, cor, posição do mouse e se o botão do mouse está sendo pressionado. A seguir, há um conjunto de event listeners que detectam quando o mouse é pressionado, solto ou movido sobre o canvas. Quando o mouse é pressionado, a posição é armazenada e um círculo é desenhado na tela usando a função "drawCircle". Quando o mouse é movido, uma linha é desenhada entre a posição anterior e a atual usando a função "drawLine". Quando o mouse é solto, as variáveis de posição são resetadas.

Também há funções para atualizar o tamanho do pincel exibido na tela e para mudar a cor do pincel. Finalmente, há event listeners para os botões da caixa de ferramentas que permitem aumentar e diminuir o tamanho do pincel, mudar a cor do pincel e limpar a tela.

Em resumo, este código cria um aplicativo de desenho interativo e simples que permite ao usuário desenhar usando um pincel de tamanho variável e mudar a cor do pincel.
