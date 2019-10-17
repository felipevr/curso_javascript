
// MÉTODOS DO ARRAY

function main() {
    const nomes = ['Paulo', 'Jose', 'Ana', 'Felipe', 'Maria', 'Tião'];

    const idades = new Array(33, 1, 5, 9, 14, 24);

    let animals = ['🐔', '🐷', '🐑', '🐇'];

    let emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😇', '😍', '😘'];

    let hands = ['👍', '👎', '✊', '👊', '🙏', '🤝', '🙌', '👏', '👆', '👇', '🖕'];

    //pushPop(nomes, 'Tiago');

    //shiftUnshift(nomes, 'Terezinha');

    bastanteUsado(nomes, 'Jose', animals);

    //bastanteUsado(emojis, animals[3], hands);

    outrasFuncoes(emojis, hands[0]);

}

const pushPop = (arr, add) => {

    console.log(arr);

    arr.push(add);

    console.log(arr);

    var out = arr.pop();

    console.log(out);
    console.log(arr);

};

const shiftUnshift = (arr, add) => {

    console.log(arr);

    console.log('adiciona no inicio do array');
    arr.unshift(add);

    console.log(arr);

    console.log('retira do inicio do array');
    var out = arr.shift();

    console.log(out);
    console.log(arr);

};


const bastanteUsado = (arr, item, arr2) => {

    console.log(`Indice do item ${item} no array`);
    console.log(arr.indexOf(item));

    console.log(`Junta td do array`);
    console.log(arr.join(' - '));

    console.log(`Concatena dois vetores`);
    console.log(arr.concat(arr2));
    
    console.log(`Corta uma fatia do array`);
    console.log(arr.slice(3, 9));
    
    console.log(arr);
    console.log(`Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos`);
    console.log(`Retorna Uma lista contendo os elementos removidos`);
    //array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
    console.log(arr.splice(2, 3, arr2[2]));
    console.log(arr);

};

const outrasFuncoes = (arr, item) => {

    console.log(arr.keys());

    console.log(arr.reverse());

    console.log(arr.values());

    console.log(arr.keys());

    console.log(arr.fill(item, 2, 9));

};


main();