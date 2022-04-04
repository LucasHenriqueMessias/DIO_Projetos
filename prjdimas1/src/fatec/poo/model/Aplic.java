
package fatec.poo.model;


public class Aplic {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        FuncionarioHorista funcHor = new FuncionarioHorista(1010, "Pedro Silveira", "14/05/10978", 15.50, "plantonista");
        funcionarioMensalista funcMen = new funcionarioMensalista(1111,"17/06/1998", "Ana Beatriz", 15, "medico");
        
        funcHor.setQtdeHorTrab(90);
        System.out.println("Nome ==> " + funcHor.getNome());
        System.out.println("data de Admissão ==> " + funcHor.getDtAdmissao());
        System.out.println("Salario Bruto ==> " + funcHor.calcSalBruto());
        System.out.println("Desconto ==> " + funcHor.calcDesconto());
        System.out.println("Salario Líquido ==> " + funcHor.calcSalLiquido());
        
        System.out.println("\n\nPulo\n\n");
                
        funcMen.setNumSalMin(1350);
        System.out.println("Nome ==> " + funcMen.getNome());
        System.out.println("data de Admissão ==> " + funcMen.getDtAdmissao());
        System.out.println("Cargo ==> " + funcMen.getCargo());
        System.out.println("Salario Bruto ==> " + funcMen.calcSalBruto());
        System.out.println("Desconto ==> " + funcMen.calcDesconto());
        System.out.println("Salario Líquido ==> " + funcMen.calcSalLiquido());
        
    }

}
