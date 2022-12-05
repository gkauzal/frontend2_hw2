//1. feladat

//MaradekosOsztas funkció létrehozása
function MaradekosOsztas()
{   //nums tömb deklarálása, definiálása
    const nums = [3,4,9,6,2];
    //ciklus: végigmegyünk a nums tömb összes elemén
    for(let i=0;i<nums.length; i++)
    {   
        //ciklusmag: 
            //ha a nums tömb i-ik elemének 2-vel történő ösztása maradéktalan
        if(nums[i]%2===0)
        {   
            //consol-ra kiírjuk a nums tömb i-k elemét és az Osztható szöveget
            console.log (nums[i] + ": Osztható");
        }

            //egyéb esetben 
        else
        {   
            //kiírjuk a nums tömb i-k elemét és a Nem osztható szöveget
            console.log (nums[i] + ": Nem osztható");
        }
    }
}
//MaradekosOsztas funkció meghívása
MaradekosOsztas();

//2. feladat
function Elemkiiras()
{
    // players tömb deklarálása, definiálása
    const players = ['Peter', 'Kate', 'John'];

    //ciklus: végigmegyünk a players tömb elemein
    for(let i=0;i<players.length;i++)
    {   
        //ciklusmag: kiírjuk consolra a players tömb i-k elemének index-ét 1-el növelve és a players tömb i-k elemét
        console.log(Number(players.indexOf(players[i])+1) + ". " +players[i]);
    }
}
//Meghívjuk az Elemkiiras funkciót
Elemkiiras();

//3. feladat

//Elemtipus fvény létrehozása x tömb paraméterrel
function Elemtipus(x)
{
    //a tömb létrehozása
    const a =[];
    //ciklus: végigmegyünk az x tömb elemein
    for(let i=0;i<x.length;i++)
    {
        //ciklusmag: az x tömb i-ik elemét az a tömb-be push-oljuk
        a.push(typeof(x[i]));
    }

    //ellenőrzés: a tömb kiírása consol-ra
    console.log(a);
}

//Elemtipus fvény meghívása paraméterrel
Elemtipus(['', 4, true]);


