# RobotTest
Na parte do back-end está tudo funcionando com todas restrições de movimento propostas. Só faltou os testes unitários. É possível testar a aplicação com um cliente rest como o Insomnia, Postman etc. passando o estado que deseja como demonstra a imagem abaixo. Os estados possíveis estão presentes no arquivo state.js. Logo, o servidor irá responder com os estados possíveis de ir a partir do novo estado setado.  
![insomnia](https://user-images.githubusercontent.com/29130675/71869901-96e48900-30f2-11ea-8564-8fa29125b174.PNG)

Na parte do front-end foi feita a parte do serviço de requisições PUT ao servidor (envia requisição com o estado e recebe o resultado assim como feito pelo cliente rest na imagem acima). Faltou o GET só para pegar o estado inicial do robô e a parte de visualização e controle do robô pelo usuário.

Requições para rodar o servidor:
Nodejs

Depois de instalado o Nodejs é só entrar na pasta e rodar o comando 
"node server.js"

Download do cliente rest Insomnia caso for usar
https://insomnia.rest/download/

