const server=require('./app');

async function main(){
    await server.listen(5000);
    console.log('Server on port 5000');
}

main();