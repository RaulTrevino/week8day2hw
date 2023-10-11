import { Attack,Defense } from "../interface"

export default class Ogers implements Attack,Defense{
    className='Ogers'

    attack():void{
        console.log('attacking with: Club')
    }

    defense():void{
        console.log('defending with:Shield')
    }
}