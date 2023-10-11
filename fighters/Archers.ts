import { Attack,Defense } from "../interface"

export default class Archers implements Attack,Defense{
    static Attack: any
    static Defense() {
        throw new Error("Method not implemented.")
    }
    className='Archer'
    get gold():number{
        return this.gold +100
    }
    // constructor(_gold:number){
    //     super(_gold)}
    
    attack():void{
        console.log('attacking with: bow and arrow')
    }
  

    defense():void{
        console.log('defending with:Tunic')
    }
}



console.log(Archers.Attack)