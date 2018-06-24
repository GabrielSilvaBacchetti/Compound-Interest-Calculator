function calculate(formObj)
{
     var capitalInvestido = parseFloat(formObj.capitalInvestido.value);
     var taxaJuros = parseFloat(formObj.taxaJuros.value)/100.;
     var tempoAnos = parseFloat(formObj.tempoAnos.value);
   
     var montante = capitalInvestido * Math.pow((1.0+taxaJuros),tempoAnos);
     var jurosTotais = montante - capitalInvestido;
     montante = Math.round(montante*100.0)/100.0;
     jurosTotais  = Math.round(jurosTotais*100.0)/100.0;
   
     formObj.montante.value = montante;
     formObj.jurosTotais.value = jurosTotais;
   
     return;
}    