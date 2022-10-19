<%@page import="br.com.DAO.PessoaDAO"%>
<%@page import="br.com.DTO.PessoaDTO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../CSS/page.css">
        <title>Submiting</title>
    </head>
    <body>
       <%
            String nome = request.getParameter("nome");
            String email = request.getParameter("email");
            String senha = request.getParameter("senha");
            
            PessoaDTO acessarPessoaDTO = new PessoaDTO();
            PessoaDAO acessarPessoaDAO = new PessoaDAO();
            
            acessarPessoaDTO.setNome(nome);
            acessarPessoaDTO.setEmail(email);
            acessarPessoaDTO.setSenha(senha);
           
            acessarPessoaDAO.PesquisarUsuario(acessarPessoaDTO);
            
            if (acessarPessoaDTO.getMsg() == "Usuário pronto para cadastrar!") {
                
                acessarPessoaDAO.cadastrarPessoa(acessarPessoaDTO);
                
                %> 
                
                <div id="corpoMsg">
                    <h1>Usuário cadastrado com sucesso!</h1>
                    <div onclick="enviar(1)" id="botao"><h1 id="ok">Ok</h1></div>
                </div>
                <script>
                    var corpo = document.getElementById("corpoMsg")
                    
                    setTimeout(function () {
                        
                        corpo.style.opacity = "1"
                    }, 200)
                </script>
                <%
            
            } else { %>
                
                <div id="corpoMsg1">
                <h1>Usuário já cadastrado!</h1>
                <div onclick="enviar(1)" id="botao1"><h1 id="ok1">Ok</h1></div>
                </div>
                <script>
                    var corpo1 = document.getElementById("corpoMsg1")
                    
                    setTimeout(function () {
                        
                        corpo1.style.opacity = "1"
                    }, 200)
                </script>
          <%  }         
        %> 
        
        <script>
            function enviar(p) {
                
                if (p == 1) {
                    
                    window.location.href = "logar.html"
                
                } else {
                    
                    window.location.href = "cadastrar.html"
                }                
            }
        </script>
    </body>
</html>
