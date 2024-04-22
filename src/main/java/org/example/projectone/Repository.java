package org.example.projectone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

@org.springframework.stereotype.Repository
public class Repository {

    @Autowired
    private JdbcTemplate db;


    public boolean loggInn(String brukernavn, String passord){
        String sql = "SELECT COUNT(*) FROM bruker WHERE brukernavn = ? AND passord = ?";
        try{
            int funnetEnBruker = db.queryForObject(sql, Integer.class, brukernavn, passord);
            if (funnetEnBruker > 0){
                return true;
            } else {
                return false;
            }
        } catch (Exception e){
            return false;
        }
    }

    public Bruker hentBruker(int id){
        String sql = "SELECT * FROM bruker WHERE id = ?";
        Bruker enBruker = db.queryForObject(sql, BeanPropertyRowMapper.newInstance(Bruker.class),id);
        return enBruker;
    }



}
