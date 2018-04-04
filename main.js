class professorCoke {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
}

class Pokemon {
    constructor(name, hp, attack, defence, abilities) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defence = defence
        this.abilities = abilities
    }
}

let ul = document.querySelector("ul")
let pokemon = new Pokemon()

axios.get("https://pokeapi.co/api/v2/pokemon/2/")
.then((response) => {

    let li = document.createElement("li")
    let pokeData = response.data

    let ivysaur = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat

    
    )
    console.log(ivysaur)

    // let hp = " HP: " + pokeData.stats[5].base_stat
    // console.log(hp)
})