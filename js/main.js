//The JS code is based on what was done in class and class workshops. All credits goes to Orlando Caraballo from NYCDA.
class professorCoke {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
    get(pokemon){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
            }
        }
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
//https://pokeapi.co/api/v2/pokemon/6/

axios.get("https://pokeapi.co/api/v2/pokemon/6/")
.then((response) => {

    let ul = document.querySelector("#charizard")
    
    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let charizard = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(charizard)

    professor.add(charizard)

    pokeData.innerHTML = charizard.data

    name.innerHTML = "Name: " + charizard.name
    hp.innerHTML = "Hp: " + charizard.hp
    attack.innerHTML = "Attack: " + charizard.attack
    defence.innerHTML = "Defence: " + charizard.defence
    abilities.innerHTML = "Abilities: " + charizard.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})

//blastoise
//https://pokeapi.co/api/v2/pokemon/9/

axios.get("https://pokeapi.co/api/v2/pokemon/9/")
.then((response) => {

    let ul = document.querySelector("#blastoise")
    
    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let blastoise = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(blastoise)

    professor.add(blastoise)

    pokeData.innerHTML = blastoise.data

    name.innerHTML = "Name: " + blastoise.name
    hp.innerHTML = "Hp: " + blastoise.hp
    attack.innerHTML = "Attack: " + blastoise.attack
    defence.innerHTML = "Defence: " + blastoise.defence
    abilities.innerHTML = "Abilities: " + blastoise.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
    // let li = document.createElement("li")
    // let pokeData = response.data

    // let blastoise = new Pokemon(
    //     pokeData.name,
    //     pokeData.stats[5].base_stat,
    //     pokeData.stats[4].base_stat,
    //     pokeData.stats[3].base_stat,
    //     pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    // )
    // console.log(blastoise) 
})

console.log(professor.all)