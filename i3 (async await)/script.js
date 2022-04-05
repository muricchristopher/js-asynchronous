
function createDatabase(n){
    const limit = 240 * 3;
    const database = [];

    return new Promise((resolve, reject) => {

        if(!n)
            return reject(new Error('000 - BAD VALUE - ARGUMENT NOT DEFINED'))

        if(typeof n !== 'number')
            return reject(new Error('001 - BAD VALUE - IS NOT A NUMBER'))
        

        if(n > limit)
            return reject(new Error('002 - LIMIT EXCEDEED'+n+'/'+limit))
        
        for (let i = 0; i < n; i++) {
        
                const t1 = '#'+'ab'+i+i*parseInt(Math.random()*10)*parseInt(Math.random()*10)*parseInt(Math.random()*10)*parseInt(Math.random()*10);
                database.push(t1)
                
                const t2 = '#'+'cb'+i+i*parseInt(Math.random()*10)*parseInt(Math.random()*10)*parseInt(Math.random()*10)*parseInt(Math.random()*10);
                database.push(t2)
                
                const t3 = '#'+'de'+i+i*parseInt(Math.random()*10)*parseInt(Math.random()*10)*parseInt(Math.random()*10)*parseInt(Math.random()*10);
                database.push(t3)
        
        }
        
        
        console.log('ESTABILISHING CONNECTION TO SERVER');
        console.log('PLEASE AWAIT...')
        
        setTimeout(() => {
            resolve(database)
        }, 3000)

    })

    
}

function promiseHelper(database, dataNumber){

    return new Promise((resolve, reject) => {

        resolve(database[dataNumber])

    })
}

function handleID(ID){

    return new Promise((resolve,reject) => {
        const userID = ID.split('#')[1];

        userID.length <= 4 ? 
        type = 'company' :
        type = 'client'


    
        const genderNumber = Array.from(userID.slice(-2)).reduce((cur, val) => Number(cur) + Number(val), 0);
        genderNumber % 2 == 0 ? gender = 'M':
        gender = 'F';
        const countryNumber = ID[3];
        countryNumber == 1 || countryNumber == 2  || countryNumber == 3   ? country = 'USA':
        country = 'CANADA';


        resolve( {
            type: type,
            id: ID,
            userID: userID,
            gender: gender,
            country: country
        })
    })
    
}

async function utilsDatabase(n){

    const db = await createDatabase(150);

    const promise = await promiseHelper(db, n)

    const userID = await handleID(promise)
    
    return userID

}

utilsDatabase(42394234).then(data => console.log(data))
.catch(err => console.log(`ERROR: ${err}`))