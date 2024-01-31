


const phrase = document.getElementById('phrase').value
const displayphrase = document.getElementById('displayphrase')
const displayconsonants = document.getElementById('displayconsonants')
const displaynodupli = document.getElementById('displaynodupli')
const go = document.getElementById('go')

const ltrA = [1, 'A'],
    ltrB = [2, 'B'],
    ltrC = [3, 'C'],
    ltrD = [4, 'D'],
    ltrE = [5, 'E'],
    ltrF = [6, 'F'],
    ltrG = [7, 'G'],
    ltrH = [8, 'H'],
    ltrI = [9, 'I'],
    ltrJ = [1, 'J'],
    ltrK = [2, 'K'],
    ltrL = [3, 'L'],
    ltrM = [4, 'M'],
    ltrN = [5, 'N'],
    ltrO = [6, 'O'],
    ltrP = [7, 'P'],
    ltrQ = [8, 'Q'],
    ltrR = [9, 'R'],
    ltrS = [1, 'S'],
    ltrT = [2, 'T'],
    ltrU = [3, 'U'],
    ltrV = [4, 'V'],
    ltrW = [5, 'W'],
    ltrX = [6, 'X'],
    ltrY = [7, 'Y'],
    ltrZ = [8, 'Z'];

go.addEventListener('click', () => {
    updateDisplayPhrase();
    removeVowels();
    removeDuplicates();
    alphabet();
})


function updateDisplayPhrase() {
    // document.getElementById('phrase').innerHTML === phrase;
    displayphrase.innerHTML = ('<h3>' + phrase + '</h3>');
}

function removeVowels() {
    const consonants = phrase.replace( /[aeiou ]/gi, '').toUpperCase().split('').join(' ');
    displayconsonants.innerHTML = ('<h3>' + consonants + '</h3>');
    return consonants;
}

function removeDuplicates() {
    const nodupli = [...new Set(removeVowels())].sort().toString().replace( /[,]/gi, ' ');
    displaynodupli.innerHTML = ('<h3>' + nodupli + '</h3>');
    return nodupli
}

function alphabet() {
    const asign = [...new Set(removeVowels())].sort();
    console.log(asign);
    const asgn = [];
    for (let i = 0; i < asign.length; i++) {
        if (asign[i] === "B") {
            asgn.push(ltrB)
        }
        else if (asign[i] === "C") {
            asgn.push(ltrC)
        }
        else if (asign[i] === "D") {
            asgn.push(ltrD)
        }
        else if (asign[i] === "F") {
            asgn.push(ltrF)
        }
        else if (asign[i] === "G") {
            asgn.push(ltrG)
        }
        else if (asign[i] === "H") {
            asgn.push(ltrH)
        }
        else if (asign[i] === "J") {
            asgn.push(ltrJ)
        }
        else if (asign[i] === "K") {
            asgn.push(ltrK)
        }
        else if (asign[i] === "L") {
            asgn.push(ltrL)
        }
        else if (asign[i] === "M") {
            asgn.push(ltrM)
        }
        else if (asign[i] === "N") {
            asgn.push(ltrN)
        }
        else if (asign[i] === "P") {
            asgn.push(ltrP)
        }
        else if (asign[i] === "Q") {
            asgn.push(ltrQ)
        }
        else if (asign[i] === "R") {
            asgn.push(ltrR)
        }
        else if (asign[i] === "S") {
            asgn.push(ltrS)
        }
        else if (asign[i] === "T") {
            asgn.push(ltrT)
        }
        else if (asign[i] === "V") {
            asgn.push(ltrV)
        }
        else if (asign[i] === "W") {
            asgn.push(ltrW)
        }
        else if (asign[i] === "X") {
            asgn.push(ltrX)
        }
        else if (asign[i] === "Z") {
            asgn.push(ltrZ)
        }

    }
    console.log(asgn);
} 

