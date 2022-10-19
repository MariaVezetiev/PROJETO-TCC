package br.com.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoDAO {
    
    Connection conectar = null;
    
    public Connection conexaoBD()throws ClassNotFoundException {
        
        try {
            
            Class.forName("com.mysql.jdbc.Driver");
            
            String url = "jdbc:mysql://localhost:3306/lojatcc?user=root&password=";
            
            conectar = DriverManager.getConnection(url);
            
        } catch (SQLException e) {
        }
        
        return conectar;
    }
    
} 


