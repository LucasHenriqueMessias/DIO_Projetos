package fatec.poo.model;

/**
 *
 * @author dimas
 */
public abstract class Funcionario {
    private int registro;
    private String nome;
    private String dtAdmissao;

    public Funcionario(int registro, String nome, String dtAdmissao) {
        this.registro = registro;
        this.nome = nome;
        this.dtAdmissao = dtAdmissao;
    }
    
    //Definição de um método abstrato
    abstract public double calcSalBruto();
    
    public double calcDesconto(){
        return(0.10 * calcSalBruto());
    }
    
    public double calcSalLiquido(){
        return(calcSalBruto() - calcDesconto());
    }    
}
