function firstWord(s) {
    // your code here
    let str = s.trim();
    let ans = "";

    for(let i=0; i<str.length; i++)
    {
        if(str[i] != " ")
        {
            ans = ans+""+str[i];
        }
        else{
            break;
        }
    }
    return ans;
  }

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
