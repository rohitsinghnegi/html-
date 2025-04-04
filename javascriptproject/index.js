document.addEventListener("DOMContentLoaded",function(){
    const searchButton = document.getElementById("search-bar");
    const usernameInput = document.getElementById("uservalue-input");
    const statsContainer = document.querySelector(".stats-container");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easylabel = document.getElementById("easy-label");
    const mediumlabel = document.getElementById("medium-label");
    const hardlabel = document.getElementById("hard-label");
    const cardstatsContainer = document.querySelector(".stats-cards");

    function validteUsername(username){
        if(username.trim() === "") {
            alert("usename should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) { 
            alert("invalid username");
        }
        return isMatching;
    }
    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`
        try{
            searchButton.textContent= "searching...";
            searchButton.disable= true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error ("no username founnd");
            }
            const parasedData = await response.json();
            console.log("loggindata;", parasedData );

            displayUserdata(parasedData);
        }
        catch(error){
                 statsContainer.innerHTML`<p>there is no data</p>`
        }
        finally{
                 searchButton.textContent="search";
                 searchButton.disable = false;

        }
    }
     
    function updateProgress(solved,total,label,circle){
      const progressDegree = (solved/total)*100;
      circle.style.setProperty("--progress-degree",`${progressDegree}%`);
      label.textContent= `${solved}/${total}`;
    }



    function displayUserdata(parasedData){
        const totalQuestion = parasedData.totalQuestions;
        const totalEasyQuestion = parasedData.totalEasy;
        const totalMediumQuestion = parasedData.totalMedium;
        const totalHardQuestion = parasedData.totalHard;
        
        const totalSolvedQuestion = parasedData.totalSolved;
        const totalEasySolvedQuestion = parasedData.easySolved;
        const totalMediumSolvedQuestion = parasedData.mediumSolved;
        const totalHardSolvedQuestion = parasedData.hardSolved;
        
         updateProgress(totalEasySolvedQuestion,totalEasyQuestion,easylabel,easyProgressCircle)
         updateProgress(totalMediumSolvedQuestion,totalMediumQuestion,mediumlabel,mediumProgressCircle)
         updateProgress(totalHardSolvedQuestion,totalHardQuestion,hardlabel,hardProgressCircle)
        
    }

    searchButton.addEventListener('click',function(){
        const username = usernameInput.value;
        console.log("loggin username: ", username);
        if(validteUsername(username)){
              fetchUserDetails(username);
        }
    })
})  