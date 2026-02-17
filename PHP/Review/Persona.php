<?php 
class Persona {
    private $name;
    private $edad;
    
    public function __construct($name, $edad)
    {
        $this->name = $name;
        $this->edad = $edad;
    }


    public function getName()
    {
        return $this->name;
    }

    public function getEdad()
    {
        return $this->edad;
    }

    public function saludar () 
    {
        return $this->name . " te manda un gran saludo";
    }

    
}



?>