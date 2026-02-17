<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repaso de PHP</title>
</head>
<!--Repaso de Contenidos PHP-->

<body>
    <?php
    //Declaración y inicialización de una variable
    $x = 0;

    //Imprimir variable php en html
    echo $x . "<br>"; // --> El Operador . concatenta html + php
    print $x;
    ?>
    <!--Imprimir en una sentencia HTML-->
    <p><?php echo $x;  ?></p>
    <p><?= $x; ?></p>

    <?php

    //Estructuras de Control

    //Switch
    $y = rand(1, 3);

    echo "<ul>";
    switch ($y) {
        case 1:
            echo "<li>" . $y . "</li>"; // Concatenación multiple
            break;
        case 2:
            echo "<li>" . $y . "</li>"; // Concatenación multiple
            break;
        case 3:
            echo "<li>" . $y . "</li>"; // Concatenación multiple
            break;
    }

    //If

    if ($y != 1) {
        echo "El numero seguramente no es 1";
    } else {
        echo "El numero muy seguramente es 1";
    }

    echo "<br>";

    //Condicional ternario
    $z = $y < 2 ? "El numero es 1<br>" : "El numero no es 1<br>";
    echo $z;


    ?>

    <?php


    //Bucles iterativos

    $a = 0;
    $cont = 0;
    //While
    while ($a != 1) {

        $a = rand(1, 5);
        echo $a . " no es 1<br>";
        $cont++;
    }

    echo "Se ha tardado " . $cont . " intentos en encontrar 1<br>";


    //Do while
    $b = 0;
    $cont = 0;
    //While
    do {

        $b = rand(1, 5);
        echo $b . " no es 1<br>";
        $cont++;
    } while ($b != 1);

    echo "Se ha tardado " . $cont . " intentos en encontrar 1<br>";


    //for
    for ($i = 0; $i < 5; $i++) {

        echo "Veras este print ejecutado 5 veces exactas<br>";
    }

    ?>


    <?php

    //Arrays

    //Indexados
    $list = ["A", "B", "C", "D"];

    foreach ($list as $item) {
        echo $item; //esto imprimira: "ABCD"
    }
    echo "<br>";

    echo $list[2]; //Esto imprime: "C"
    echo "<br>";
    //Asociativos

    $outerList = [
        "nombre" => "Gabriel",
        "Edad" => "20",
        "Curso" => "DAW"
    ];

    foreach ($outerList as $key => $item) {
        echo "[" . $key . "]"; // esto imprimra nombre, edad, curso separdo
    }

    echo "<br>";
    echo "<br>";
    foreach ($outerList as $key => $item) {
        echo "[" . $item . "]"; // Esto imprimira el valor de cada key separado
    }

    echo "<br>";
    echo "<br>";
    foreach ($outerList as $key => $item) {
        echo "[" . $key . "] - " . $item . "<br>"; // Esto imprimira el valor FORMATEADO
    }




    ?>



    <?php

    //Funciones

    $value = 0;
    echo "<br>";
    echo "Antes esta variable era:" . $value;

    //Funciones Normales
    function incrementValue($value)
    {
        return ++$value; // Usamos ++$value para que sume ANTES de devolverlo
    }
    echo "<br>";
    // Así activamos la función:
    echo "Ahora esta variable vale: " . incrementValue($value);

    //Funciones anonimas
    $saludar = function ($nombre) {
        return "Hola, $nombre!";
    };

    echo "<br>";
    echo $saludar("Alex");

    ?>


    <?php 
    //Objectos

    require_once 'Persona.php';

    $jeremy = new Persona("Jeremy MacNugget", 20);
     echo "<br>";
    echo $jeremy->saludar();
    
    
    ?>
</body>

</html>