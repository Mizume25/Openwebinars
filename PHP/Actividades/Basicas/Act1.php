<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad - 1</title>
    <style>
        *{
            box-sizing: border-box;
        }
        table {
            width: 300px;
            height: 100px;
            text-align: center;
            background-color: black;
        }

        td{
            
            height: 15px;
            background-color: white;
        }
    </style>
</head>
<body>
<!--Programa Classico - Control de notas trimestrales a 3 alumnos dínamicamente-->
<?php 

$alumnos = [
    ["nombre" => "Alvaro", "notas" => [5.7, 6.8, 7.8]],
    ["nombre" => "Alba",   "notas" => [6.7, 8.9, 4.5]],
    ["nombre" => "Jose",   "notas" => [5.7, 6.8, 8.9]]
];

?>
<form method="post">
<table>
    <tr>
        <td>Alumno</td>
        <td>Nota 1</td>
        <td>Nota 2</td>
        <td>Nota 3</td>
    </tr>
    <?php foreach ($alumnos as $alumno): ?>
    <tr>
        <td><?= $alumno['nombre'] ?></td>
        
        <?php foreach ($alumno['notas'] as $nota): ?>
            <td><?= $nota ?></td>
        <?php endforeach; ?>
    </tr>
<?php endforeach; ?>
</table>
<br>



</body>
</html>