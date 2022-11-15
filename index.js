function showTone(selected){
    let tone = document.getElementById('toneSelector').value;
    let toneShow = document.getElementById('showTone');
    let toneSelected = classCaller(selected.value);
    showChords(toneSelected);

   
}
function  classCaller(classes){
    switch(classes){
        case 'A':
            toneSelected = ATone;
            break;
        case 'A#':
            toneSelected = ASharpTone;
            break;
        case 'B':
            toneSelected = BTone;
            break;
        case 'C':
            toneSelected = CTone;
            break;
        case 'C#':
            toneSelected = CSharpTone;
            break;
        case 'D':
            toneSelected = DTone;
            break;
        case 'D#':
            toneSelected = DSharpTone;
            break;
        case 'E':
            toneSelected = ETone;
            break;
        case 'F':
            toneSelected = FToneETone;
            break;
        case 'F#':
            toneSelected = FSharpTone;
            break;
        case 'G':
            toneSelected = GTone;
            break;
        case 'G#':
            toneSelected = GSharpTone;
            break;
        default:
            break;
    }
    return toneSelected;
}

function showChords(toneSelected){
    // let str = JSON.stringify(toneSelected, null, 4);
    // div.innerText = str;
    document.getElementById('base1').innerText = toneSelected.base
    document.getElementById('segunda1').innerText =  toneSelected.segunda 
    document.getElementById('terceira1').innerText =  toneSelected.terceira   
    document.getElementById('quarta1').innerText =  toneSelected.quarta   
    document.getElementById('quinta1').innerText =  toneSelected.quinta   
    document.getElementById('sexta1').innerText =  toneSelected.sexta   
    document.getElementById('setima1').innerText =  toneSelected.setima   
    
} 

function clearInputs(){
    let text = document.getElementById('songInput');
    let selector = document.getElementById('toneSelector');

    document.getElementById('base1').innerText = '';
    document.getElementById('segunda1').innerText =  ''; 
    document.getElementById('terceira1').innerText =  '';   
    document.getElementById('quarta1').innerText =  '';   
    document.getElementById('quinta1').innerText =  '';   
    document.getElementById('sexta1').innerText =  '';   
    document.getElementById('setima1').innerText =  ''; 

    text.value = '';
    selector.value = '';
}