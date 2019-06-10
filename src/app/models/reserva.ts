export class Reserva{
    constructor(public id : number, public idLibro : number, 
    public idPersona : number, public fechaCheckout : String, public fechaRetorno : String, 
    public fechaRetornado : String, public persona:any = null, public libro:any){} 
}

