const fs=require('fs')

const calculateTimes=(base, list, until)=>{
  return new Promise((resolve, reject)=>{

  let output=''

  for(let i=1; i<=until; i++){
    output += `${base} X ${i}=${base*i}\n`
  }
  if(list===true){

    console.log(output)
  }
  fs.writeFileSync(`output/Tabla del ${base}.txt`, output)

  resolve(`Archivo de la Tabla del ${base} creado`)

  })
}

module.exports={
  calculateTimes
}