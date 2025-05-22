 let score =JSON.parse(localStorage.getItem('Score')) || {
           wins: 0,
            losses: 0,
            ties: 0
        };
        
           updatescoreElement();
             
        function playgame(playermove){
                   const computermove=pickcomputermove();
                   
              
            let result='';
            if (playermove==='scissors'){
                 if (computermove==='rock'){
               result= 'You lose';
            }
            else if(computermove==='paper'){
                result='You win'
            }
            else if (computermove==='scissors'){
                result='Tie';
            }
        }
        
        else if(playermove==='paper'){
                  if (computermove==='rock'){
               result= 'You win';
            }
            else if(computermove==='paper'){
                result='Tie'
            }
            else if (computermove==='scissors'){
                result='You lose';
            }
        } 
        
        else if (playermove==='rock'){
               if (computermove==='rock'){
               result= 'Tie';
            }
            else if(computermove==='paper'){
                result='You lose'
            }
            else if (computermove==='scissors'){
                result='You win';
            }

        }
            if(result==='You win'){
                score.wins +=1;

            } else if (result==='You lose'){
                score.losses +=1;
            } 
            else if(result==='Tie'){
                score.ties +=1;
            }

            localStorage.setItem('Score',JSON.stringify(score));
            updatescoreElement();
            
            document.querySelector('.js-result').innerHTML = result;
             
            document.querySelector('.js-move').innerHTML=` You<img class="move-icon"src="${playermove}-emoji.png">
                <img class="move-icon" src="${computermove}-emoji.png">
                computer`;

         
             }
             function updatescoreElement(){
                document.querySelector('.js-score') 
           .innerHTML=`Wins: ${score.wins}  Losses: ${score.losses} Ties: ${score.ties}`;
             }
            function pickcomputermove(){
                
                const randomnumber = Math.random();
                let computermove = '';
                 if(randomnumber >= 0 && randomnumber < 0.33){
                computermove='rock';
               }

               else if (randomnumber>=0.33 && randomnumber < 0.66 ){
               computermove='paper';
               }
                else if (randomnumber >= 0.66 && randomnumber < 1){
                 computermove='scissors';
              }
              return (computermove);
            }