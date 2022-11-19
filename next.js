player1 = localStorage.getItem("player1")
player2 = localStorage.getItem("player2")

player1_Score = 0;
player2_Score = 0;

document.getElementById("player1_name").innerHTML =  player1 + "-" + player1_Score
document.getElementById("player2_name").innerHTML =  player2 + "-"+ player2_Score

function send_q(){
    number1 = document.getElementById("in1").value 
    number2 = document.getElementById("in2").value
    actual_Question = parseInt(number1) + parseInt(number2)
    Question = "<h4 id = 'Question'>"+number1 +'X'+number2+"</h4>"
    head = "<h4 id='t1'>Answer:</h4>"
    mid = "<input id = 'in1' placeholder = 'Answer'> <br><br>"
    foot = "<button class = 'btn btn-primary'>Submit</button>"
    document.getElementById("div2").innerHTML = Question+head+mid+foot

}