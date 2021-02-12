//В футбол играет 2 команды. Некто ставит ставку на счет в матче, например 1:2.
//Если человек угадывает точный счет, то получает большой приз. Если угадывает исход матча (выигрыш той или иной команды или ничью), 
//то получает маленький приз. Если не угадывает, то не получает ничего.
//
//Написать функцию, которая принимает на вход предсказанный счет и реальный счет (например, массив вида [“1 : 2”, “3 : 2”]) и возвращает 
//0 - не получает ничего
//1 - маленький приз
//2 - большой приз

function bookmaker (sc) {
    let score = sc;
    if (score[0] === score[1]) {
        return 2;
    } else if ((getTeamScore(score[0]))[0] > (getTeamScore(score[0]))[1] && (getTeamScore(score[1]))[0] > (getTeamScore(score[1]))[1]) {
        return 1;
    } else if ((getTeamScore(score[0]))[0] < (getTeamScore(score[0]))[1] && (getTeamScore(score[1]))[0] < (getTeamScore(score[1]))[1]) {
        return 1;
    } else if ((getTeamScore(score[0]))[0] === (getTeamScore(score[0]))[1] && (getTeamScore(score[1]))[0] === (getTeamScore(score[1]))[1]) {
        return 1;
    } else {
        return 0;
    }
}

function getTeamScore (score) {
    return score.split(' : ')
}

console.assert(bookmaker(['1 : 2', '3 : 2']) === 0, 'Actual result: %s', bookmaker(['1 : 2', '3 : 2']));
console.assert(bookmaker(['2 : 1', '1 : 2']) === 0, 'Actual result: %s', bookmaker(['2 : 1', '1 : 2']));
console.assert(bookmaker(['5 : 4', '1 : 1']) === 0, 'Actual result: %s', bookmaker(['5 : 4', '1 : 1']));
console.assert(bookmaker(['1 : 2', '2 : 3']) === 1, 'Actual result: %s', bookmaker(['1 : 2', '2 : 3']));
console.assert(bookmaker(['3 : 2', '5 : 2']) === 1, 'Actual result: %s', bookmaker(['3 : 2', '5 : 2']));
console.assert(bookmaker(['2 : 2', '3 : 3']) === 1, 'Actual result: %s', bookmaker(['2 : 2', '3 : 3']));
console.assert(bookmaker(['2 : 2', '2 : 2']) === 2, 'Actual result: %s', bookmaker(['2 : 2', '2 : 2']));
console.assert(bookmaker(['3 : 2', '3 : 2']) === 2, 'Actual result: %s', bookmaker(['3 : 2', '3 : 2']));