// add whatever parameters you deem necessary
function constructNoteHelper(str) {
    let map = new Map();

    for (let char of str){
        let charCount = map.get(char) || 0; 
        map.set(char, charCount + 1);
    }
    return map
}

function constructNote(message, letters){
    if (letters.length < message.length) return false;
    const messageMap = constructNoteHelper(message);
    const lettersMap = constructNoteHelper(letters);
    for (let letter of messageMap.keys()){
        if (messageMap.get(letter) > lettersMap.get(letter) || !lettersMap.get(letter)) return false;
    }
    return true;
}
