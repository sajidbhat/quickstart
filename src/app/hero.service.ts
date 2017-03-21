import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEREOS} from "./mock-heroes";

@Injectable()
export class HeroService{
    getHeroes():Hero[]{
        return HEREOS;
    }
}

