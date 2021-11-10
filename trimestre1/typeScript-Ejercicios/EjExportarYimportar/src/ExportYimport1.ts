export class casa{
    abitaciones:number;
    dormitorios:number;
    cuartoDeBanios:number;
    cocinas:number;
    maxOcupantes:number;

    constructor(abitaciones:number,dormitorios:number,cuartoDeBanios:number,cocinas:number){
        this.abitaciones=abitaciones;
        this.dormitorios=dormitorios;
        this.cuartoDeBanios=cuartoDeBanios;
        this.cocinas=cocinas;
        this.maxOcupantes=dormitorios*2;
    }

    mostrar(){
        console.log(`Abitaciones: ${this.abitaciones}, dormitorios: ${this.dormitorios}, cuartos de baño: ${this.cuartoDeBanios}, cocinas: ${this.cocinas}, maximo de ocupantes: ${this.maxOcupantes}`);
    }
}