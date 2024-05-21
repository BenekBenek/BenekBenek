var mysql = require("mysql")

function zrob() {
    let name = document.querySelector("#imie").value;
    let surname = document.querySelector("#nazwisko").value;
    let pesel = document.querySelector("#pesel").value;

   

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'mariadb',
        password: 'mariadb',
        database: 'maria'
    })

    connection.query("INSERT INTO ludzie VALUES (NULL, " + name + ", " + surname + ", " + pesel + ");")

    connection.end();
};
