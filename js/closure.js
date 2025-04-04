//  closure is a top levelentity
// there are two things need for closure 1.function +2. required data
function outerfunction(){
    let name = "rohit ";
    function innerfunction(){
        let name = "negi";//prints the  functionn which is nearer to console.log
        console.log(name);
    }
    innerfunction();
}
outerfunction();