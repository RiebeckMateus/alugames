function alterarStatus(idGame) {
    let game = document.getElementById(`game-${idGame}`);
    let coverGame = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');

    if (coverGame.classList.contains('dashboard__item__img--rented')) {
        coverGame.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.innerHTML = 'Alugar';
    } else {
        coverGame.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';
    }
}

// não quero fazer o desafio de questionar se deseja realemente devolver, pois não ficou do jeito que queria
// vou aprender a fazer diferente e depois volto

function howManyRented() {
    return console.log(document.querySelectorAll('.dashboard__item__img--rented').length);
}

// parte de desafios fora do escopo principal do projeto

function palindromoCheck(_word) {
    let word = _word;
    let normalizedWord = word.toLowerCase().replace(/\s+/g, '');
    let reversedWord = normalizedWord.split('').reverse().join('');

    return normalizedWord === reversedWord;
}

function orderNum(...args) {
    let list_ = args.map(arg => parseInt(arg));
    // let list_ = args
    return list_.sort((a, b) => a -b);
}