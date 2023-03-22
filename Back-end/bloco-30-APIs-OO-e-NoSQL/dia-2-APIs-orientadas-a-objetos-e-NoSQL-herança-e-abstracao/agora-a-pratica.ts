// O que é e para que servem os Padrões de Projeto (do inglês Design Patterns)? Quais são as três classificações/categorizações/famílias deles?
`Os padrões de projeto (design patterns) são como plantas pré-projetadas de uma construção, que você pode alterar para se adequar melhor na resolução de um problema recorrente em seu código, em resumo são soluções típicas para problemas comuns em um projeto de software.
Padrões criacionais, estruturais e comportamentais.`

// Dentro da família de padrões criacionais, descreva o “Problema a ser solucionado” e o “Propósito” dos padrões Singleton e Factory Method
`
Singleton: Alguns projetos necessitam que algumas classes tenham apenas uma instância. Por exemplo, em uma aplicação que precisa de uma infraestrutura de log de dados, pode-se implementar uma classe no padrão singleton. Desta forma existe apenas um objeto responsável pelo log em toda a aplicação que é acessível unicamente através da classe singleton.
O Propósito do Singleton é garantir a existência de apenas uma instância de uma classe, mantendo um ponto global de acesso ao seu objeto.

Factory Method: Criar um objeto geralmente requer processos complexos não apropriados para incluir dentro da composição do objeto. A criação do objeto talvez necessite de uma duplicação de código significativa, talvez necessite informações não acessíveis para a composição do objeto, talvez não providencie um grau de abstração suficiente, ou então não faça parte da composição das preocupações do objeto. O padrão de design Factory Method maneja/trata esses problemas definindo um método separado para criação dos objetos, no qual as subclasses possam sobrescrever para especificar o "tipo derivado" do produto que vai ser criado, em resumo Factory Method ou Construtor virtual, na ciência da computação, é um padrão de projeto de software (design pattern, em inglês) que permite às classes delegar para subclasses decidirem, isso é feito através da criação de objetos que chamam o método fabrica especificado numa interface e implementado por um classe filha ou implementado numa classe abstrata e opcionalmente sobrescrito por classes derivadas.

`
// Dentro da família de padrões estruturais, descreva o “Problema a ser solucionado” e o “Propósito” dos padrões Adapter e Facade
`
Adapter: O Adapter permite que classes com interfaces incompatíveis trabalhem juntas, de forma exemplificável por um adaptadores de cabos, o padrão Adapter converte a interface de uma classe para outra interface que o cliente espera encontrar, "traduzindo" solicitações do formato requerido pelo usuário para o formato compatível com o a classe adapter e as redirecionando.

Facade: Estruturar um sistema em subsistemas ajuda a reduzir sua complexidade. A dependência existente entre os subsistemas pode ser minimizada através do uso de um objeto Facade, que fornece uma interface única e uniforme para as diversas funcionalidades de um subsistema.

Quando existir um sistema complexo, na qual o cliente não precisa entender todo o sistema, o Facade possibilita um uso simplificado do sistema, apenas um subconjunto dele, ou utilizá-lo de uma maneira particular. Dispomos então de um sistema complicado, do qual precisamos utilizar somente uma parte, para um sistema simplificado, customizado para nossas necessidades.

O Facade é usado quando um sistema é muito complexo ou difícil de entender, já que possui um grande número de classes independentes ou se trechos de código fonte estão indisponíveis. Este padrão esconde as complexidades de um sistema maior e provê uma interface simplificada ao cliente. Tipicamente envolve uma única classe responsável por englobar uma série de membros requeridos pelo cliente. Estes membros acessam o sistema em nome do Facade e escondem os detalhes de implementação.
`
// Dentro da família de padrões comportamentais, descreva o “Problema a ser solucionado” e o “Propósito” dos padrões Strategy e Observer
`
Strategy: É aplicado em situações em que muitas classes se relacionam e diferem apenas no modo de atuação, com isso o Strategy irá configurar a classe que tenha um dentre muitos comportamentos fornecidos. Também pode ser usado quando há a necessidade da variação de um algoritmo, ou seja, pode-se implementar diferentes códigos que chegam no mesmo objetivo, mas que possuem em determinadas situações mais vantagens do que os demais.

Observer: Suponha que temos um programa que representa vários gráficos de uma pesquisa científica e utiliza vários dados para representar esse gráfico, e se um dado for atualizado o programa deve atualizar os gráficos. Para esse problema, uma solução poderia ser manter uma lista com as possíveis representações e ficar verificando por mudanças nos conjuntos de dados, assim que fosse feita mudança, as representações que está na lista seriam avisadas.

Essa solução não é a melhor pois precisamos sempre verificar se houve essas mudanças no conjunto, e dessa forma o processamento seria muito caro, ou então a atualização seria demorada. Portanto, o padrão Observer resolve esse problema.

O Observer é um padrão de projeto de software que define uma dependência um-para-muitos entre objetos de modo que quando um objeto muda o estado, todos seus dependentes são notificados e atualizados automaticamente. Permite que objetos interessados sejam avisados da mudança de estado ou outros eventos ocorrendo num outro objeto.

O padrão Observer é também chamado de Publisher-Subscriber, Event Generator e Dependents.
`