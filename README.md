# meuprojeto

Criar chave ssh em arquivo:
ssh-keygen -t rsa -b 4096 -C "lari-feltrin@hotmail.com" -f ~/.ssh/id_rsa_meuprojeto

Pegar a chave publica:
cat id_rsa_meuprojeto.pub 

Colocar o projeto na maquina:
git clone git@github.com:LarissaMFeltrin/meuprojeto.git

Depois entra na pasta do projeto e coloca o passo a passo so GIT
echo "# projetoteste" >> README.md

Dentro da pasta do projeto usar: (Ele serve para mandar as alterações do projeto para o GIT) 
smerge .