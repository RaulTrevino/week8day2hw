import { Attack,Defense } from "../interface"

export default class Peons implements Attack,Defense{
    className='Peons'

    attack():void{
        console.log('attacking with: Club')
    }
    // override attack():void{
    //     console.log("Walking Like a Green Koopa")

    defense():void{
        console.log('defending with:Shield')
    }
}

// class Peon extends RPGCharacter {
//     constructor() {
//         super(new ClubAttack(), new ShieldDefence());
//     }

