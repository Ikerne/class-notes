// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          
          getInstruction("mashedPotatoes", 1, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").hidden = false;
          }, error => console.log(error))
      
        }, error => console.log(error))     
      }, error => console.log(error))  
    }, error => console.log(error))
  }, error => console.log(error))
}, error => console.log(error))



// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    
    obtainInstruction("steak", 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

        obtainInstruction("steak", 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

            obtainInstruction("steak", 3)
            .then( (step3) => {
              document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

              obtainInstruction("steak", 4)
              .then( (step4) => {
                document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

                obtainInstruction("steak", 5)
                .then( (step5) => {
                  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;

                  obtainInstruction("steak", 6)
                  .then( (step6) => {
                    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;

                    obtainInstruction("steak", 7)
                    .then( (step7) => {
                      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

                      obtainInstruction("steak", 1)
                      .then( () => {
                        document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
                        document.querySelector("#steakImg").hidden = false;
                      }, error => console.log(error))
                    }, error => console.log(error))
                  }, error => console.log(error))
                }, error => console.log(error))
              }, error => console.log(error))
            }, error => console.log(error))
          }, error => console.log(error))        
      }, error => console.log(error))  
  }, error => console.log(error))


// Iteration 3 using async/await
const makeBroccoli = async () => {
  try {
  const step0 = await obtainInstruction("broccoli", 0); 
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  const step1 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  const step5 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  const step6 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").hidden = false;

} catch (error) {
 console.log(error);
}

}
makeBroccoli();
//ANOTHER OPTION

  // document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;

// Bonus 2 - Promise all
const paso0 = obtainInstruction("brusselsSprouts", 0);
const paso1 = obtainInstruction("brusselsSprouts", 1);
const paso2 = obtainInstruction("brusselsSprouts", 2);
const paso3 = obtainInstruction("brusselsSprouts", 3);
const paso4 = obtainInstruction("brusselsSprouts", 4);
const paso5 = obtainInstruction("brusselsSprouts", 5);
const paso6 = obtainInstruction("brusselsSprouts", 6);
const paso7 = obtainInstruction("brusselsSprouts", 7);

Promise.all( [paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7] )
  .then((promises) => {
    promises.forEach( (instruction) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;

    });

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").hidden = false;
  })
  .catch((error) => console.log(error));

