<%@page import="br.com.DAO.PessoaDAO"%>
<%@page import="br.com.DTO.PessoaDTO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="../CSS/page.css">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            String email = request.getParameter("email");
            String senha = request.getParameter("senha");
            
            PessoaDTO acessarPessoaDTO = new PessoaDTO();
            PessoaDAO acessarPessoaDAO = new PessoaDAO();
            
            acessarPessoaDTO.setEmail(email);
            acessarPessoaDTO.setSenha(senha);
            
            acessarPessoaDAO.PesquisarUsuario(acessarPessoaDTO);
            
            if (acessarPessoaDTO.getMsg() == "Usuário pronto para cadastrar!") {
                
               %>
                
               <div id="corpoMsg2">
                    <h1>Verifique os campos ou cadastre-se!</h1>
                    <div onclick="enviar()" id="botao2"><h1 id="ok2">Ok</h1></div>
                </div>
                <script>
                    var corpo = document.getElementById("corpoMsg2")
                    
                    setTimeout(function () {
                        
                        corpo.style.opacity = "1"
                    }, 200)
                </script>
        <%
            } else {
                
            %>
            <script>
                window.location.href = "../HOME/index.html"
            </script>
                <%
            }
        %>
        
        <script>
            function enviar() {
                    
                    window.location.href = "logar.html"
                               
            } //o servidor wampp nn estava startado...quando a contecer isso clica neleduas vezes e executaa
        </script>
    </body>
</html>
