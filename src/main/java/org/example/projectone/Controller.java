package org.example.projectone;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    private Repository rep;

    @Autowired
    private HttpSession session;

@GetMapping("loggInn")
    public boolean loggInn(String brukernavn, String passord){
    if (rep.loggInn(brukernavn, passord)){
        session.setAttribute("loggetInn", true);
        return true;
    } else {
        return false;
    }
}

@GetMapping("/loggUt")
    public void loggUt(){
    session.setAttribute("loggetInn", false);
}


}
