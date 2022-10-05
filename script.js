const cards = document.querySelectorAll(".card")
let cardOne, cardTwo;
let cardDisbale = false
let cardMatch = 0


cards.forEach((card)=> { /////////// clicking event for every cards
    card.addEventListener('click', openCard)
})

function openCard(e){
    let clickedCard = e.target /// getting the specific clicked card
        if(clickedCard !== cardOne && !cardDisbale){/////prevent a card from clicking twice && prevent click until ceffect is over
            clickedCard.classList.add("turn")
        
            if(!cardOne){//// to return card1 val to clickedcard
                return cardOne = clickedCard
            }
            cardTwo = clickedCard;
            cardDisbale = true
            let cardOneImg = cardOne.querySelector("img").src
            let cardTwoImg = cardTwo.querySelector("img").src

            matchCards(cardOneImg, cardTwoImg)
        }
}

function matchCards(img1, img2){
    if(img1 === img2){ //// condition for if the two clicked cards match
        cardMatch++ /// increasing the val by 1
        if(cardMatch == 10){ /// val == 10 means 10*2 = 20 total cards
            setTimeout(() => {
                return cardShuffle()
            }, 1000); //// calling the shuffle card after 1 sec
        }
        cardOne.removeEventListener('click', openCard)
        cardTwo.removeEventListener('click', openCard)
        cardOne = "" //////to return the card val back to empty
        cardTwo = ""
        return cardDisbale = false
    }
    //////condition if it doesnt match
    setTimeout(() => { //// setting timer for when the card to have effect
        cardOne.classList.add("effect")
        cardTwo.classList.add("effect")
    }, 500);
    
    setTimeout(() => {/////setting timer to remove the class to return the card back
        cardOne.classList.remove("effect", "turn")
        cardTwo.classList.remove("effect", "turn")
        cardOne = "" ////to return the card val back to empty
        cardTwo = ""
        cardDisbale = false
    }, 1500);

}

function cardShuffle(){
    cardMatch = 0
    cardOne = ""
    cardTwo = ""
    cardDisbale = false
    let arrName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ///creating an array of 10 items
    arrName.sort(()=> Math.random() > 0.5 ? 1 : -1) ////sorting array randomly

    cards.forEach((card, index)=> { /// returning the cards back and reshuffling it randomly
        card.classList.remove("turn")
        let imgTag = card.querySelector("img")
        imgTag.src = `./img/${arrName[index]}.svg`
        card.addEventListener('click', openCard)
    })
}
cardShuffle()

// cards.forEach((card)=> { /////////// clicking event for every cards
//     card.classList.add('turn')
//     card.addEventListener('click', openCard)
// })