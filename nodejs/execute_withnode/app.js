const { exec } = require("child_process");
/*
exec("lss -ldsa", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});*/

function executaor(cmd){
    const myPromise = new Promise((reject , resolve)=>{
        exec(cmd, (error, stdout, stderr)=>{
            if(error){
                reject({error: error})
            }
            if(stderr){
                reject({stderr:stderr})
            }
            resolve(stdout);
        } )
    });
    return myPromise;
}
executaor("./binnary").then(d=>console.log(d)).catch(e=>console.log(e));
