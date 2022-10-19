package br.com.DAO;


import br.com.DTO.PessoaDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;

public class PessoaDAO {
    
    Connection conexao;
    PreparedStatement prepararConexao;
    ResultSet resultado;
    
    public void cadastrarPessoa(PessoaDTO acessarPessoaDTO) throws ClassNotFoundException {
        
        String sql = "insert into dadoscliente (nome,email,senha) values (?,?,?)";
        
        conexao = new ConexaoDAO().conexaoBD();
        
        try {
            
            prepararConexao = conexao.prepareStatement(sql);
            prepararConexao.setString(1, acessarPessoaDTO.getNome());
            prepararConexao.setString(2, acessarPessoaDTO.getEmail());
            prepararConexao.setString(3, acessarPessoaDTO.getSenha());
            
            prepararConexao.execute();
            prepararConexao.close();
            
            acessarPessoaDTO.setMsg("Deu bom");
                    
        } catch (SQLException e) {
            
            acessarPessoaDTO.setMsg("Deu ruim");
        }
    }
    
    public void PesquisarUsuario(PessoaDTO acessarPessoaDTO) throws ClassNotFoundException {
        
        String sql = "select * from dadoscliente where email = ?";
        
        conexao = new ConexaoDAO().conexaoBD();
        
        try {
            
            prepararConexao = conexao.prepareStatement(sql);
            prepararConexao.setString(1, acessarPessoaDTO.getEmail());
            resultado = prepararConexao.executeQuery();
            
            if (resultado.next()) {
                
                acessarPessoaDTO.setMsg("Usuário já cadastrados");
            
            } else {
                
                acessarPessoaDTO.setMsg("Usuário pronto para cadastrar!");
            }
            
        } catch (SQLException e) {
            
            acessarPessoaDTO.setMsg("Deu ruim");
        }
    }
    
}
    





