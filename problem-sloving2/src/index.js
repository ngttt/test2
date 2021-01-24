import React from 'react';
import ReactDOM from 'react-dom';

const BaiA2 = () => {
    let datas = [
        {
            name:"Arsenal",
            points: 99,
            GD: 45
        },
        {
            name:"Chelsea",
            points: 75,
            GD: 39
        },
        {
            name:"Manchester United",
            points: 60,
            GD: 29
        },
        {
            name:"Liverpool",
            points: 88,
            GD: 39
        }
    ];
   
    for(let i = 0; i < datas.length; i++) {
        let dem = 0;
        for (let j = 0; i < datas.length; j++) {
            if (i === j)
                continue;
                else {
                    if (datas[i].points < datas[j].points)
                        dem++;

                }
            
        }
        datas[i].position = dem+1;
    }

    console.log(datas);

    return(
        <div>{console.log((datas))}
        </div>

    )
}

ReactDOM.render(<BaiA2/>, document.getElementById("root"));