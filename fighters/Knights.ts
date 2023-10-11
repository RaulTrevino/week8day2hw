import { Attack,Defense } from "../interface"

export default class Knight implements Attack,Defense{
    className='Knight'

    attack():void{
        console.log('attacking with: Sword')
    }

    defense():void{
        console.log(`defending with:shield`)
    }
}