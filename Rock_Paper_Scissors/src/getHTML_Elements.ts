import Choise from "./Enum/Choise"
//# Buttons
export const scissor = document.getElementById("scissor") as HTMLButtonElement
export const stone = document.getElementById("rock") as HTMLButtonElement
export const paper = document.getElementById("paper") as HTMLButtonElement

scissor?.addEventListener("click", (event: Event)=>{
    event.preventDefault
    const playerValue = Choise.Scissors
    return playerValue
})

stone?.addEventListener("click", (event: Event)=>{
    event.preventDefault
    const playerValue = Choise.Rock
    return playerValue
})

paper?.addEventListener("click", (event: Event)=>{
    event.preventDefault
    const playerValue = Choise.Paper
    return playerValue
})

//# retrun
const restart = document.getElementById("restart") as HTMLElement
restart.addEventListener("click",()=>{})

