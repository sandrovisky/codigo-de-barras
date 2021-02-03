function imprimir(){
    
    const texto = document.getElementById("texto").value
    const quantidade = document.getElementById("quantidadeEtiqueta").value

    console.log("mae do leandro é minha")

    if (quantidade > 10) {
        alert("Maximo de impressões: 10")
    } else {

        var printWindow = window.open("", "Print Window","height=600,width=600")

        for ( let i = 0; i < quantidade; i++){
            
            printWindow.document.write("<div style = 'width: 10cm;height:5cm;border-style: solid; border-width: 1px;'><h1 style='text-align: center;'>Impressão do Sandrovisky</h1><br/>");
            printWindow.document.write(`<img  style = 'display: block;margin-left: auto;margin-right: auto;width: 50%;' src='https://www.cognex.com/api/Sitecore/Barcode/Get?data=${texto}&code=BCL_CODE128&width=800&imageType=PNG&foreColor=%23000000&backColor=%23FFFFFF&rotation=RotateNoneFlipNone'  width='1000' /></div>`);
        }
                
        printWindow.document.close();
        setTimeout(function(){printWindow.print();  }, 500);

    }

      
}

function logar() {
    const login = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    console.log(login+senha)

    if (login === "admin" && senha === "admin") {
        document.getElementById("islogged").style.display = "inline"
        document.getElementById("login").style.display = "none"
    } else {
        alert("Usuario ou senha invalido")
    }
}