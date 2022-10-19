package br.com.DTO;

public class PessoaDTO {

    private String nome;
    private String email;
    private String senha;
    private String msg;
    
    public void setNome(String nome) {
        
        this.nome = nome;
    }
    
    public String getNome() {
        
        return nome;
    }
    
        public void setEmail(String email) {
        
        this.email = email;
    }
    
    public String getEmail() {
        
        return email;
    }
    
        public void setSenha(String senha) {
        
        this.senha = senha;
    }
    
    public String getSenha() {
        
        return senha;
    }
    
        public void setMsg(String msg) {
        
        this.msg = msg;
    }
    
    public String getMsg() {
        
        return msg;
    }

}
