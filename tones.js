let notas = ['do','do#','re','re#','mi','fa','fa#','sol','sol#','la','la#','si'];
let acordesMaiores = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
let acordesMenores = ['Am','A#m','Bm','Cm','C#m','Dm','D#m','Em','Fm','F#m','Gm','G#m'];
let acordesSetimoGrau = ['Am7(b5)','A#m7(b5)','Bm7(b5)','Cm7(b5)','C#m7(b5)','Dm7(b5)','D#m7(b5)','Em7(b5)','Fm7(b5)','F#m7(b5)','Gm7(b5)','G#m7(b5)'];


class Tone{
    constructor(name, index){
        this.name = name;
        this.index = index;
        this.base = acordesMaiores[(index)%12];
        this.segunda = acordesMenores[((index+2)%12)];
        this.terceira = acordesMenores[(index+4)%12];
        this.quarta = acordesMaiores[(index+5)%12];
        this.quinta = acordesMaiores[(index+7)%12];
        this.quinta7 = `${acordesMaiores[(index+7)%12]}7`;
        this.sexta = acordesMenores[(index+9)%12];
        this.setima = acordesSetimoGrau[(index+11)%12];
    }
}

//TODO
class Chord{
    constructor(name, index){
        this.name = name;
        this.index = index;
        this.primeira = notas[index];
        this.terca = notas[index+4]
        this.quinta = notas[index+7]
        this.setima = notas[index+8]
        this.nona = notas[index+1]

    }
}



let ATone = new Tone('A', 0);
let ASharpTone = new Tone('A#', 1);
let BTone = new Tone('B', 2);
let CTone = new Tone('C', 3);
let CSharpTone = new Tone('C#', 4);
let DTone = new Tone('D', 5);
let DSharpTone = new Tone('D#', 6);
let ETone = new Tone('E', 7);
let FTone = new Tone('F', 8);
let FSharpTone = new Tone('F#', 9);
let GTone = new Tone('G', 10);
let GSharpTone = new Tone('G#', 11);


// console.log(ATone);
// console.log(ASharpTone);
// console.log(BTone);
// console.log(CTone);
// console.log(DTone);
// console.log(DSharpTone);
// console.log(ETone);
// console.log(FTone);
// console.log(FSharpTone);
// console.log(GTone);
// console.log(GSharpTone);
