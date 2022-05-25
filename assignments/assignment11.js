const averageDolp = (97 + 112 + 81) / 3
const averageKoal = (109 + 95 + 16) / 3
console.log(averageDolp, averageKoal)

if (averageDolp < averageKoal && averageKoal >= 100) {
    console.log(`Winner of the competition is Koalas with ${averageKoal}!!`)
} else if (averageDolp > averageKoal && averageDolp >= 100) {
    console.log(`Winner of the competition is Dolphins with ${averageDolp}!!`)
} else if (averageDolp === averageKoal && averageDolp >= 100 && averageKoal >= 100) {
    console.log(" Result is draw ")
} else {
    console.log(" No one wins the trophy")
}