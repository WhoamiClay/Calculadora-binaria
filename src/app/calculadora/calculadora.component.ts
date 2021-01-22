import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numero = '0';
  primeiraOperacao = null;
  operador = null;
  esperarSegundoNumero = false;

  constructor() { }

  ngOnInit() {
  }

  adicionarNumero(v: string) {
    if (this.esperarSegundoNumero) {
      this.numero = v;
      this.esperarSegundoNumero = false;
    } else {
      this.numero === '0' ? this.numero = v : this.numero += v;
    }
  }

  calcular(op, secondOp) {
    switch (op) {
      case '+':
        return this.primeiraOperacao += secondOp;
      case '-':
        return this.primeiraOperacao -= secondOp;
      case '*':
        return this.primeiraOperacao *= secondOp;
      case '/':
        return this.primeiraOperacao /= secondOp;
      case '=':
        return secondOp;
    }
  }

  adicionarOperacao(op: string) {
    if (this.primeiraOperacao === null) {
      this.primeiraOperacao = Number(this.numero);
    } else if (this.operador) {
      const result = this.calcular(this.operador, Number(this.numero));
      if (result > 255) {
        alert('Número maior que 255, favor inserir números com resultado menor que 255');
      } else {
        this.numero = result.toString(2);
        this.primeiraOperacao = result;
      }
    }
    this.operador = op;
    this.esperarSegundoNumero = true;
  }

  clear() {
    this.numero = '';
    this.primeiraOperacao = null;
    this.operador = null;
    this.esperarSegundoNumero = false;
  }

  binario(n) {
    let numero = Number(n).toString(2);
    return numero;
  }

}
