export function setStats(pokemonId) {

    const statsPokemon = {}
    pokemonId.stats.forEach(el => {
        statsPokemon[el["stat"]["name"]] = el["base_stat"]
    })

    const keyStat = Object.keys(statsPokemon)
    const valueStat = Object.values(statsPokemon)

    return {
        type: 'radar',
        data: {
            labels: ["HP", "ATTACK", "DEFENSE", ["SPECIAL", "ATTACK"], ["SPECIAL", "DEFENSE"], "SPEED"],
            datasets: [{
                label: 'Statistics',
                backgroundColor: 'white',
                data: valueStat,                
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'white',
                    },
                    grid: {
                        color: 'white',
                        font: {
                            size: 22,
                        }
                    },
                    pointLabels: {
                        color: 'white',
                        font: {
                            size: 22,
                            family: 'VT323'
                        }
                    },
                    ticks:{
                        display: false
                    }
                }
            },
            elements: {
            },
            responsive: true, 
            plugins: {
                title: {
                    display: true,
                    text: `${pokemonId.name.toUpperCase()}`,
                    color: 'rgb(240, 240, 240)',
                    font: {
                        size: 40,
                        family: 'VT323'
                    }
                },
                legend:{
                    display: false
                }
            }       
        }
    }

}

