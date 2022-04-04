/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.poo.model;

/**
 *
 * @author aluno.local
 */
public class funcionarioMensalista extends Funcionario{
    double valSalMin;
    double numSalMin;

public funcionarioMensalista(int registro,
                             String dtAdmissao, 
                             String nome,
                             double valSalMin,
                             String cargo){
    super(registro, nome, dtAdmissao, cargo);
    this.valSalMin = valSalMin;
}
public void setNumSalMin(double numSalMin){
    this.numSalMin = numSalMin;
}

    @Override
    public double calcSalBruto() {
        return(valSalMin * numSalMin);
    }



}

