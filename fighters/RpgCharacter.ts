export default abstract class RPGCharacter{
    static className= 'Character'

    get gold():number{
        return this.gold
    }

    set gold(value:number){
        this.gold=value
    }
    constructor(protected _gold:number){}
}
        
// // }

// // type Attack={
// //     attack:string
// // }

// // type Defense={
// //     defense:string
// // }

