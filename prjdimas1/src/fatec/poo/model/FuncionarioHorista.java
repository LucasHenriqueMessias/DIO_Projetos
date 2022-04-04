package fatec.poo.model;

/**
 *
 * @author Dimas
 */
public class FuncionarioHorista extends Funcionario{
    private double valHorTrab;
    private int qtdeHorTrab;

    public FuncionarioHorista(int registro, 
                              String nome, 
                              String dtAdmissao, 
                              double valHorTrab,
                              String cargo) {
        super(registro, nome, dtAdmissao, cargo);
        this.valHorTrab = valHorTrab;
    }

    public void setQtdeHorTrab(int qtdeHorTrab) {
        this.qtdeHorTrab = qtdeHorTrab;
    }

    @Override
    public double calcSalBruto() {
       return(valHorTrab * qtdeHorTrab);
    }
}
