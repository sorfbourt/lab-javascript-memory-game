class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards =[]
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here

    this.cards.forEach((card) => {
      const randomNumber = Math.floor(Math.random() * (this.cards.length + 1))
      console.log("this.cards", this.cards)
      this.cards.splice(randomNumber, 0, card)  
    })

    if(this.cards === undefined){
      return undefined
    }
    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked = 1
    this.pickedCards.push(card1)
    if(card1==card2){
      this.pairsGuessed = 1
      return true
    }
    return false
  }
  
  checkIfFinished() {
    // ... write your code here
    console.log("this.pickedCards", this.pickedCards)
    console.log("this.pickedCards.length", this.pickedCards.length)
    console.log("this.pairsGuessed", this.pairsGuessed)
    console.log("this.cards.length", this.cards.length)
    if(this.pickedCards.length == 0){
      return false
    }
    if(this.pairsGuessed <= this.cards.length/2){
      return false
    }
    if(this.pairsGuessed == this.cards.length/2){
      return true
    }
  }
}
