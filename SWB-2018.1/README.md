## Software Básico
Diversas rotinas ocorrem do ponto em que o código fonte é escrito até o ponto que ele se torna um programa executável. Se desejamos observar tais processos o realizar tais processos manualmente para uma maior customização, se fazem necessárias ferramentas especializadas. Ao visualizar essas etapas somos capazes de compreender como certos processos são realizados no sistema e fazer melhor proveito dos mesmos.
Este texto discorrerá sobre o processo de instalação e uso básico das ferramentas: nasm, kdbg. As instalações utilizadas foram realizadas em uma máquina Linux Debian com a distribuíção Deepin 15.5. Outras ferramentas são utilizadas no processo de análise porém tais ferramentas se encontravam instaladas na máquina no momento.

#### Ferramentas
##### Vim
O Vim é um editor de texto simples, que pode ser customizado para atender as necessidades do usuário. A ferramenta foi compilada segundo as especificações abaixo. O vim também será utilizado como editor Hexadecimal de minha escolha.
[Especificações](https://gist.github.com/odiumediae/3b22d09b62e9acb7788baf6fdbb77cf8)

##### Gdb
Ferramenta de debug sugerida em sala de aula. Tal ferramenta já encontravas-se instalada no sistema. Ela permite que o usuário possa observar passo a passo a execução do programa para uma depuração mais rápida e eficiente.

##### Nasm
A ferramenta foi instalada utilizando o comando `sudo apt-get install nasm`. Essa ferramenta será utilizada no processo de montagem e desmontagem de código, levando o código em assembly para código de máquina e de código de máquina para código assembly novamente.

##### KDbg
A ferramenta foi instalada utilizando-se o comando `sudo apt-get install kdbg`. Essa ferramenta traz uma interface gráfica para o processo de depuração.
