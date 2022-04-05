function rand(min,max){
    min > max ? [min, max] = [max, min] : ''
    return Math.floor(Math.random()*(max-min+1)+min);
}

function pleaseWait(msg, time){

    const max_time = 5;

    return new Promise((resolve, reject) => {
        const errorObject = {
            message: '',
            target: msg,
            timeout:time,
            type: typeof msg,
            max_time_accepted: max_time
        }

        if(typeof msg !== 'string') return reject(() => {
            errorObject.message = 'ERR 01 - TIMEOUT EXCEDEED'
            return errorObject
        })
        if(time > max_time) return reject(errorObject)
        

        console.log(msg+ ' -> Será exibida em: '+time+' segundos');

        return setTimeout(()=> {
            resolve(msg)
        }, time * 1000)

    })

}

const max = 10;


pleaseWait('await1', rand(0, max)).then(data => {
    console.log('//'+data);

    return pleaseWait('await2', rand(0, max)).then(data => {
        console.log('//'+data);

        return pleaseWait('await3', rand(0, max)).then(data => {
            console.log('//'+data);

            return pleaseWait('await4', rand(0, max)).then(data => {
                console.log('//'+data);

                return pleaseWait('await5', rand(0, max)).then(data => {
                    console.log('//'+data);
                    
                })
            })
        })
    })
})
// .catch(data => console.log('ERR: '+data.message+'/ TARGET: '+data.target+'/ TIMEOUT: '+data.timeout+'secs'))
.catch(data => console.log(data))



