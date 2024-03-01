function promedioTotal(){

    let n = parseInt(Number(prompt("Ingrese cantidad de notas a promediar: ")))
    let suma = 0;
    for(let i = 1; i <= n; i++){
        let nota = Number(prompt("Ingrese la nota numero " + i));
        suma = suma + nota;
    }
    let promedio = suma / n;

    if(promedio < 1.0 || promedio > 7.0  ){
        console.log("Has introducido un numero invalido, solo debe ser de 1 a 7");
    }else if(promedio < 3.9 ){
        console.log("Estas reprobado, deberas repetir el curso. Tu promedio fue ", promedio);
    }else if(promedio >= 4.0 && promedio <=5.9){
        console.log("Aprobado con un promedio de ", promedio);
    }else if(promedio >= 6.0 && promedio <= 7.0){
        console.log("Aprobado con excelencia con un promedio de ", promedio);
    }
}

promedioTotal();

