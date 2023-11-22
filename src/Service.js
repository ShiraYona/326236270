//Fetch to api
async function getDataService(date1,date2) {
    let dates = await fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${date1}&end=${date2}`)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
    return new Promise((resolve, reject) => {
        resolve(
            {data:dates}
        );
        reject(
            new Error("Error by getting data")
        );
    })

}
export{getDataService};