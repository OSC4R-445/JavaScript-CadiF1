class User {
    constructor(name, mail, status, typeOfUser) {
        this.name = name
        this.mail = mail
        this.status = status
        this.typeOfUser = typeOfUser
    }

    initScore(inScore) {
        this.score = inScore
    }

    updScore(operator, value) { 
        let result;
        switch (operator) {
            case '+':
                result = this.score + value;
                break;
            case '-':
                result = this.score - value;
                break;
            case '*':
                result = this.score * value;
                break;
            case '/':
                if (value === 0) {
                    console.error("Error: Division by zero is not allowed.");
                    return this.score; 
                }
                result = this.score / value;
                break;
            default:
                console.error(`Error: Unsupported operator "${operator}".`);
                return this.score;
        }
        this.score = result;
        return this.score
    }

    getInfo(name, mail, status, score, typeOfUser) {
        return {
            name: this.name,
            mail: this.mail,
            status: this.status,
            score: this.score,
            typeOfUser: this.typeOfUser
        }
    }
}

class Game {
    constructor(name, gameType, levelCount, playerCount) {
        this.name = name
        this.gameType = gameType
        this.levelCount = levelCount
        this.playerCount = playerCount
    }
    
    getInfo(name, gameType, levelCount, playerCount) {
        return {
            name: this.name,
            gameType: this.gameType,
            levelCount: this.levelCount,
            playerCount: this.playerCount
        }
    }
}