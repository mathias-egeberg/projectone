package org.example.projectone;

public class Bruker {

    private int id;
    private String brukernavn;
    private String passord;
    private String fornavn;
    private String etternavn;
    private String epost;


    public Bruker(int id, String brukernavn, String passord, String fornavn, String etternavn, String epost) {
        this.id = id;
        this.brukernavn = brukernavn;
        this.passord = passord;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
    }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getBrukernavn() {
        return brukernavn;
    }

    public void setBrukernavn(String brukernavn) {
        this.brukernavn = brukernavn;
    }

    public String getPassord() {
        return passord;
    }

    public void setPassord(String passord) {
        this.passord = passord;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
