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

// let ul = document.querySelector("#ivysaur")
let professor = new professorCoke()
// let pokemon = new Pokemon()

//Ivysaur
axios.get("https://pokeapi.co/api/v2/pokemon/2/")
.then((response) => {

    let ul = document.querySelector("#ivysaur")
    
    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let ivysaur = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(ivysaur)

    professor.add(ivysaur)

    pokeData.innerHTML = ivysaur.data

    name.innerHTML = "Name: " + ivysaur.name
    hp.innerHTML = "Hp: " + ivysaur.hp
    attack.innerHTML = "Attack: " + ivysaur.attack
    defence.innerHTML = "Defence: " + ivysaur.defence
    abilities.innerHTML = "Abilities: " + ivysaur.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})

//Charizard
axios.get("https://pokeapi.co/api/v2/pokemon/6/")
.then((response) => {

    let li = document.createElement("li")
    let pokeData = response.data

    let charizard = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(charizard) 
})

//blastoise
axios.get("https://pokeapi.co/api/v2/pokemon/6/")
.then((response) => {

    let li = document.createElement("li")
    let pokeData = response.data

    let charizard = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(charizard) 
})