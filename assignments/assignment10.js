const dolp1 = 97
const dolp2 = 112
const dolp3 = 101
const koal1 = 109
const koal2 = 95
const koal3 = 123
const averageDolp = (dolp1 + dolp2 + dolp3) / 3
const averageKoal = (koal1 + koal2 + koal3) / 3
console.log(averageDolp, averageKoal)

if (averageDolp < averageKoal) {
    console.log(`Winner of the competition is Koalas with ${averageKoal}!!`)
} else if (averageDolp > averageKoal) {
    console.log(`Winner of the competition is Dolphins with ${averageDolp}!!`)
} else {
    console.log("Result is draw ")
}
