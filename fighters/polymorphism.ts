import { Attack,Defense} from "../interface";
import { } from "../interface";
import Archers from "./Archers";
import Knight from "./Knights";
import Ogers from "./Orgers";
import Peons from "./Peons";

const characters:Attack[] & Defense[]=[new Archers,new Knight,new Ogers,new Peons]

for (const character of characters){
    character.attack()
    character.defense()
}
console.log()