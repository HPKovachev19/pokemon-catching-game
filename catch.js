let catchId;
catchId= Math.floor(Math.random() *2+1);
switch(catchId)
{
    case 1: 
    
        console.log("A wild rattata! Type 'throw' to catch it!")
       

        let catching;
        let counter=0;
        for(let i=0;i<12;i++)catching= Math.floor(Math.random() *15+1);
        if(counter==10)
        {
            return 0;
        }
        if(catching<=13)
        {
            console.log("You caught a rattata!")
            return 0;
        }
        else
        {
            console.log("You didn't catch it! Keep trying!")
            counter++;
        }
    break;
    case 2:
        console.log("This is for now, run it again")
}