function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aXLayCKQSZ":
        Script1();
        break;
      case "68JNvi30nsV":
        Script2();
        break;
      case "5aqjNza8Ihq":
        Script3();
        break;
      case "5f7abMdo4bN":
        Script4();
        break;
      case "6ZN2eKOBZ81":
        Script5();
        break;
      case "67OwIGzIYS2":
        Script6();
        break;
      case "6kqmV8lKLcz":
        Script7();
        break;
      case "6VyLpq7qRgM":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6alrA1XcLXv');
const duration = 1000;
const easing = 'ease-out';
const id = '6lbkQVE75mn';
const pulseAmount = 0.07;
const delay = 2750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbxvpdnS5NMUNFEYL0oUHLLUf1wKQACmgOgpbCF64Ook1e7PL7XIV80wulLlg7dHO8dr/exec";
const player = GetPlayer();
let feedBack = player.GetVar("email"); 
let feedBack2 = player.GetVar("attempts"); 
let feedBack3 = player.GetVar("success"); 
let feedBack4 = player.GetVar("error"); 

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({texta: feedBack, textb: feedBack2, textc: feedBack3, textd: feedBack4}) 
});
}

window.Script3 = function()
{
  var player = GetPlayer();
var i = player.GetVar("attempts");

var project = ["Project A", "Project B", "Project C", "Project D", "Project E", "Project F", "Project G", "Project H", "Project I", "Project J", "Project K", "Project L", "Project M", "Project N", "Project O", "Project P", "Project Q", "Project R", "Project S", "Project T", "Project U", "Project V", "Project W", "Project X", "Project Y", "Project Z", "Project AA", "Project BB", "Project CC", "Project DD", "Project EE", "Project FF", "Project GG", "Project HH", "Project II", "Project JJ", "Project KK", "Project LL", "Project MM", "Project NN", "Project OO", "Project PP", "Project QQ", "Project RR", "Project SS", "Project TT", "Project UU", "Project VV", "Project WW", "Project XX", "Project YY", "Project ZZ", "Project AZ", "Project BY", "Project CX", "Project DW", "Project EV", "Project FU", "Project GT", "Project HS", "Project IR", "Project JQ", "Project KP", "Project LO"];
var capacity = ["High", "Low", "Moderate", "Low", "High", "Moderate", "Moderate", "High", "Low", "Moderate", "High", "Low", "Moderate", "Low", "Moderate", "High", "Moderate", "Low", "Low", "Moderate", "High", "Low", "High", "Moderate", "Low", "Moderate", "High", "High", "Moderate", "Low", "High", "High", "Moderate", "High", "Moderate", "Low", "Low", "High", "Low", "High", "High", "Low", "Low", "High", "High", "Low", "Low", "Moderate", "High", "Moderate", "Moderate", "Low", "Moderate", "High", "Low", "Low", "Moderate", "High", "Moderate", "Moderate", "High", "High", "Moderate", "Low"];
var finance = ["Low", "Moderate", "High", "High", "Low", "High", "Low", "High", "High", "Moderate", "Low", "High", "High", "Low", "High", "Moderate", "High", "High", "High", "High", "High", "Moderate", "Moderate", "Low", "Low", "Moderate", "Low", "Moderate", "High", "Low", "Low", "Moderate", "Moderate", "Moderate", "High", "Moderate", "Low", "Moderate", "Low", "Low", "Low", "Low", "Moderate", "Low", "Low", "High", "High", "Moderate", "Low", "Moderate", "Moderate", "High", "Low", "High", "Low", "Low", "Moderate", "High", "Low", "High", "Moderate", "High", "High", "High"];
var ind_support = ["Moderate", "Low", "High", "Moderate", "High", "High", "Low", "High", "Moderate", "High", "Low", "Moderate", "High", "High", "Low", "Low", "High", "Low", "High", "Moderate", "High", "Low", "Moderate", "Moderate", "Moderate", "Low", "High", "Low", "Moderate", "High", "Low", "Moderate", "High", "Moderate", "High", "High", "Moderate", "High", "Moderate", "Moderate", "High", "High", "Low", "High", "High", "Moderate", "Moderate", "High", "Low", "High", "Low", "Moderate", "Moderate", "High", "Moderate", "Low", "High", "Moderate", "High", "Moderate", "High", "Low", "High", "Low"];
var efficacy = ["High", "Low", "Low", "Moderate", "Low", "Moderate", "Moderate", "High", "Low", "Low", "Moderate", "Moderate", "Moderate", "Moderate", "High", "Moderate", "Moderate", "High", "High", "Moderate", "Moderate", "Low", "High", "Moderate", "Low", "Low", "High", "High", "High", "High", "High", "Low", "High", "Moderate", "Low", "High", "Moderate", "High", "Low", "Moderate", "High", "Moderate", "Low", "Low", "High", "Moderate", "Moderate", "Moderate", "High", "High", "Moderate", "Low", "High", "Moderate", "Low", "Moderate", "Low", "Moderate", "High", "Low", "Moderate", "High", "High", "Low"];
var env_impact = ["High", "High", "Low", "Moderate", "High", "Low", "Moderate", "Moderate", "Moderate", "Moderate", "Moderate", "High", "Low", "Moderate", "High", "High", "Low", "High", "Low", "Moderate", "High", "Moderate", "Low", "High", "Moderate", "Low", "Low", "Moderate", "Low", "Moderate", "Moderate", "High", "Low", "Moderate", "Low", "High", "Moderate", "Low", "Moderate", "Moderate", "Low", "Low", "High", "High", "Low", "Moderate", "Low", "High", "Moderate", "High", "Low", "High", "High", "Moderate", "Low", "Moderate", "High", "High", "High", "Low", "Low", "Moderate", "Moderate", "High"];


player.SetVar("project", project[i-1]);
player.SetVar("capacity", capacity[i-1]);
player.SetVar("finance", finance[i-1]);
player.SetVar("ind_support", ind_support[i-1]);
player.SetVar("efficacy", efficacy[i-1]);
player.SetVar("env_impact", env_impact[i-1]);
}

window.Script4 = function()
{
  var player = GetPlayer();

var capacity = player.GetVar("capacity");
var finance = player.GetVar("finance");
var ind_support = player.GetVar("ind_support");
var efficacy = player.GetVar("efficacy");
var env_impact = player.GetVar("env_impact");

var rule = player.GetVar("rule");

var capacity_01 = "High";
var finance_01 = "High";
var ind_support_01 = "High";
var efficacy_01 = "Low";
var env_impact_01 = "Low";

var result = false;

if(rule == 1 && capacity == capacity_01 ){
    result = true;
}

if(rule == 2 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 3 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 4 && finance == finance_01 ){
    result = true;
}

if(rule == 5 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 6 && efficacy == efficacy_01 ){
    result = true;
}

if(rule == 7 && finance == finance_01 ){
    result = true;
}

if(rule == 8 && capacity == capacity_01 ){
    result = true;
}

if(rule == 9 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 10 && ind_support == ind_support_01 ){
    result = true;
}

player.SetVar("result", result);
}

window.Script5 = function()
{
  var player = GetPlayer();

var capacity = player.GetVar("capacity");
var finance = player.GetVar("finance");
var ind_support = player.GetVar("ind_support");
var efficacy = player.GetVar("efficacy");
var env_impact = player.GetVar("env_impact");

var rule = player.GetVar("rule");

var capacity_01 = "Moderate";
var finance_01 = "Moderate";
var ind_support_01 = "Low";
var efficacy_01 = "Moderate";
var env_impact_01 = "High";

var result = false;

if(rule == 1 && capacity == capacity_01 ){
    result = true;
}

if(rule == 2 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 3 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 4 && finance == finance_01 ){
    result = true;
}

if(rule == 5 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 6 && efficacy == efficacy_01 ){
    result = true;
}

if(rule == 7 && finance == finance_01 ){
    result = true;
}

if(rule == 8 && capacity == capacity_01 ){
    result = true;
}

if(rule == 9 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 10 && ind_support == ind_support_01 ){
    result = true;
}

player.SetVar("result", result);
}

window.Script6 = function()
{
  var player = GetPlayer();

var capacity = player.GetVar("capacity");
var finance = player.GetVar("finance");
var ind_support = player.GetVar("ind_support");
var efficacy = player.GetVar("efficacy");
var env_impact = player.GetVar("env_impact");

var rule = player.GetVar("rule");

var capacity_01 = "Low";
var finance_01 = "Low";
var ind_support_01 = "Low";
var efficacy_01 = "Moderate";
var env_impact_01 = "High";

var result = false;

if(rule == 1 && capacity == capacity_01 ){
    result = true;
}

if(rule == 2 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 3 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 4 && finance == finance_01 ){
    result = true;
}

if(rule == 5 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 6 && efficacy == efficacy_01 ){
    result = true;
}

if(rule == 7 && finance == finance_01 ){
    result = true;
}

if(rule == 8 && capacity == capacity_01 ){
    result = true;
}

if(rule == 9 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 10 && ind_support == ind_support_01 ){
    result = true;
}

player.SetVar("result", result);
}

window.Script7 = function()
{
  var player = GetPlayer();

var capacity = player.GetVar("capacity");
var finance = player.GetVar("finance");
var ind_support = player.GetVar("ind_support");
var efficacy = player.GetVar("efficacy");
var env_impact = player.GetVar("env_impact");

var rule = player.GetVar("rule");

var capacity_01 = "Low";
var finance_01 = "Low";
var ind_support_01 = "Moderate";
var efficacy_01 = "High";
var env_impact_01 = "Moderate";

var result = false;

if(rule == 1 && capacity == capacity_01 ){
    result = true;
}

if(rule == 2 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 3 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 4 && finance == finance_01 ){
    result = true;
}

if(rule == 5 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 6 && efficacy == efficacy_01 ){
    result = true;
}

if(rule == 7 && finance == finance_01 ){
    result = true;
}

if(rule == 8 && capacity == capacity_01 ){
    result = true;
}

if(rule == 9 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 10 && ind_support == ind_support_01 ){
    result = true;
}

player.SetVar("result", result);
}

window.Script8 = function()
{
  var player = GetPlayer();

var capacity = player.GetVar("capacity");
var finance = player.GetVar("finance");
var ind_support = player.GetVar("ind_support");
var efficacy = player.GetVar("efficacy");
var env_impact = player.GetVar("env_impact");

var rule = player.GetVar("rule");

var capacity_01 = "High";
var finance_01 = "Moderate";
var ind_support_01 = "High";
var efficacy_01 = "High";
var env_impact_01 = "Moderate";

var result = false;

if(rule == 1 && capacity == capacity_01 ){
    result = true;
}

if(rule == 2 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 3 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 4 && finance == finance_01 ){
    result = true;
}

if(rule == 5 && ind_support == ind_support_01 ){
    result = true;
}

if(rule == 6 && efficacy == efficacy_01 ){
    result = true;
}

if(rule == 7 && finance == finance_01 ){
    result = true;
}

if(rule == 8 && capacity == capacity_01 ){
    result = true;
}

if(rule == 9 && env_impact == env_impact_01 ){
    result = true;
}

if(rule == 10 && ind_support == ind_support_01 ){
    result = true;
}

player.SetVar("result", result);
}

};
