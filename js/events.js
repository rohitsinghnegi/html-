// event=this are just announcement done by browser for example clicking or doubleclik or pressing scroll
//monitorEvents(document);


//event -target-> its a entity where a spefic event is happpens in a specific location 
//event-listner-> what is done after event comes on event target is defined by this
// addEvent lsitner()
// removeEventListner()//syntax=><event-target>.addEventlistner(<eventtypee>,<function- action>)


function changeText(){
    let fpara = document.getElementById('fpara')
    fpara.textContent ="hello rohit";
}
let fpara = document.getElementById('fpara')

fpara.addEventListener('click',changeText)

// phases of event
// capturing
// A= target
// bubbling//(returning)


// event object
// avoiding to many listner 