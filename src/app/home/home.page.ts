//let amp=1234//numerica 
//const amp="batatinha";
//let amp="batatinha"; //string 
/*let amp3={
  nome:"sergio "
  sobrenome:"tanaka"
  turma:55
}*/



import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = "0";
  memoria = "0";
  operacao = "";
  mostrarvalor(valorDoBotao) {
    if (this.valor == "0") {
      this.valor = valorDoBotao
    }
    else {
      this.valor = this.valor + valorDoBotao
    }
  }
  botaoponto() {
    if (this.valor.indexOf(".") == -1) {
      if (this.valor == "0") {
        this.mostrarvalor("0.");
      } else {
        this.mostrarvalor(".");
      }
    }
  }
  botaocalculo(parametroOperacao) {
    if (this.operacao == "") {
      this.memoria = this.valor
      this.valor = "0"
    } 
    else 
    {
      if (this.operacao == "+") {
        //""+() mais 
        this.memoria = (parseFloat(this.memoria) + parseFloat(this.valor)).toString()
      }//menos
      else if (this.operacao == "-") {
        this.memoria = (parseFloat(this.memoria) - parseFloat(this.valor)).toString()
      }//multiplicação
      else if (this.operacao == "*") {
        this.memoria = (parseFloat(this.memoria) * parseFloat(this.valor)).toString()
      } //divisão
      else if (this.operacao == "/") {
        if (this.valor != "0") {
          this.memoria = (parseFloat(this.memoria) / parseFloat(this.valor)).toString()
        }
      }
      //porcentagem 
      else if(this.operacao == "%") {
        this.memoria = ((parseFloat(this.memoria) * parseFloat(this.valor)/100).toString() )
      }
      //elevado 
      else if (this.operacao == "X.y"){
        this.memoria = (parseFloat(this.memoria) ** parseFloat(this.valor)).toString()  
      }
     
 
   }   
      
      //TODO:incluir o calculo de mais aqui
      this.operacao = parametroOperacao;
      if (parametroOperacao == "") {
        this.valor=this.memoria
        this.memoria = "0";
      }  
      //elevado a 2 

      else if (this.operacao == "^2"){
        this.valor = (parseFloat(this.memoria) ** 2).toString()  
        this.memoria=this.valor      
    }
       //matricula
       else if (this.operacao == "M"){
        this.valor = (parseFloat(this.memoria) * 221041016).toString()
        this.memoria=this.valor 
      }
      else {
        this.valor = "0";
      }
    
  }
  botaoLimpa() {
    this.valor = "0"
    this.operacao = ""
    this.memoria = "0"
  }





  constructor() {} 

}