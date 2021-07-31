function mean(num) {
    total = 0
	num = num.toString().split("")
    for (let i = 0; i < num.length; i++) {
        total += parseInt(num[i])
    }
    return total/num.length
}

console.log(mean(666), 6)
console.log(mean(80), 4)
console.log(mean(789), 8)
console.log(mean(417), 4)
console.log(mean(1357), 4)
console.log(mean(42), 3)
console.log(mean(12345), 3)