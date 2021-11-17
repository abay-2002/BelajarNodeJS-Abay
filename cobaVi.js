// test vi
async function Gift(){
	let p = new Promise((resolve, reject)=>{
		resolve('Here your gift')
	})
	return await p
}
console.log(Gift());
