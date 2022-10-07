# api-study-v1.0
Um api de um blog densenvolvida no começo dos meus estudos

# um caso diferente
essa api começou a ser feita logo no começo dos meus estudos com node js, e seguia os moldes de todas as outras apis encontradas no youtube, reddit, medium, stackoverflow etc..., basicamente o backend de uma aplicação do stack MERN, o servidor usa o framework express para gerenciar as rotas e a logica de cada endpoint, o banco de dados utiliza o MongoDB atlas e a biblioteca mongoose para criar schemas que são utilizados para criar os dados persistentes,bcrypt também é utilzado para criar passwords hashs, as requests e responses são em formato JSON.

# tudo errado
o sistema esta incompleto, a api implementou apenas os endpoints de autenticação /api/auth/register e /api/auth/login , eu poderia ter terminado a api e feito todas as implementações que eu tinha planejado como posts, comentarios, categorias, validação JWT mas logo no começo do desenvolvimento eu senti que faltava algo, faltava um direcionamento, um projeto e uma arquitetura, a partir desse ponto eu parei e comecei a procurar resources sobre boas praticas de desenvolvimento de software e consegui criar uma lista de coisas que eu faria diferente na implementação de uma api.

# o que eu faria diferente (ou morreria tentando)
1- um planejamento baseado em tecnicas de modelagem Domain-driven-design<br/>
2- a implementação de uma arquitetura em camadas que possa desaclopar os componentes do software (clean architecture)<br/>
3- criar os testes primeiro utilizando TDD<br/>
4- aplicar os principios SOLID<br/>
5- fazer commits pontuais, unicos e utilizando os padrões do conventional commits<br/>

o resultado final dessas mudanças criaria um software independente de frameworks, com testes unitarios e de facil manutenção e expansão, a divisão das responsabilidades em camadas da clean architecture facilita a leitura do codigo e a implementação de novas features

# eu consigo fazer todas essas mudanças agora ?
provavelmente sim, mas não sem gastar muitas horas e esforço, mas isso só quer dizer que eu ainda estou me aperfeiçoando, a aplicação dessas tecnicas pouco tem a ver com codigo ou linguagems, mas estão ligados a conceitos abstratos que visam diminuir a quantidade de recurso humano necessario para o desenvolvimento e manutenção de sistemas de qualidade

