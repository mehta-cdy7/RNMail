import shortid from "shortid";
import {LoremIpsum} from 'lorem-ipsum'; 
import { Book, Note } from "./models";

const DATA : Array<Book> = []

const lorem  = new LoremIpsum({
    sentencesPerParagraph:{
        max:8, 
        min:4
    },
    wordsPerSentence:{
        max:16 ,
        min:4
    }
})

const capitalizeFirstLetter = ([first, ...rest]:string)=>first.toLocaleUpperCase()+rest.join('')

for(let i = 0 ; i<100 ; i++ ){
        DATA.push({
            id:shortid.generate(),
            name:capitalizeFirstLetter(
                lorem.generateSentences(Math.round(Math.random() * 4))
            )
        })
}


export default DATA;