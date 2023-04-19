window.onload = function hide_ddm()
{
	var eastteam = document.getElementById("eastteam");
	eastteam.style.display = "none"
	var westteam = document.getElementById("westteam");
	westteam.style.display = "none"
	var style_page = document.getElementById("style");
	style_page.style.display = "none"
	var size = document.getElementById("size");
	size.style.display = "none"
	var variant = document.getElementById("variant");
	variant.style.display = "none"
}
function getConferenceOption() {
        selectElement = document.querySelector('#conference');
        output = selectElement.value;
        if(output =="East"){
			var eastteam = document.getElementById("eastteam");
			eastteam.style.display = ""
			var westteam = document.getElementById("westteam");
			westteam.style.display = "none"
		}
		else if(output =="West"){
			var westteam = document.getElementById("westteam");
			westteam.style.display = ""
			var eastteam = document.getElementById("eastteam");
			eastteam.style.display = "none"
		}
    }
function getEastTeamOption() {
        selectTeam = document.querySelector('#eastteam');
        output = selectTeam.value;
        if(output =="Albany Firewolves"){
			changer.setAttribute("src","../Images/jaiden-images/Albany_Firewolves.png");
		}
		else if(output =="Buffalo Bandits"){
			changer.setAttribute("src","../Images/jaiden-images/Buffalo_Bandits.png");
		}
		else if(output =="Georgia Swarm"){
			changer.setAttribute("src","../Images/jaiden-images/Georgia_Swarm.png");
		}
		else if(output =="Halifax Thunderbirds"){
			changer.setAttribute("src","../Images/jaiden-images/Halifax_Thunderbirds.png");
		}
		else if(output =="New York Riptide"){
			changer.setAttribute("src","../Images/jaiden-images/NewYork_Riptide.png");
		}
		else if(output =="Philadelphia Wings"){
			changer.setAttribute("src","../Images/jaiden-images/Philidelphia_Wings.png");
		}
		else if(output =="Rochester Knighthawks"){
			changer.setAttribute("src","../Images/jaiden-images/Rochester_Knighthawks.png");
		}
		else if(output =="Toronto Rock"){
			changer.setAttribute("src","../Images/jaiden-images/Toronto_Rock.png");
		}
		if(output !="Select Team"){
			size = document.getElementById("size");
			size.style.display = ""
		}
    }
function getWestTeamOption() {
        selectTeam = document.querySelector('#westteam');
        output = selectTeam.value;
        if(output =="Calgary Roughnecks"){
			changer.setAttribute("src","../Images/jaiden-images/Calgary_Roughnecks.png");
		}
		if(output =="Colorado Mammoth"){
			changer.setAttribute("src","../Images/jaiden-images/Colorado_Mammoth.png");
		}
		if(output =="Las Vegas Desert Dogs"){
			changer.setAttribute("src","../Images/jaiden-images/LasVegas_DesertDogs.png");
		}
		if(output =="Panther City Lacrosse Club"){
			changer.setAttribute("src","../Images/jaiden-images/PantherCity_LacrosseClub.png");
		}
		if(output =="San Diego Seals"){
			changer.setAttribute("src","../Images/jaiden-images/SanDiego_Seals.png");
		}
		if(output =="Saskatchewan Rush"){
			changer.setAttribute("src","../Images/jaiden-images/Saskatchewan_Rush.png");
		}
		if(output =="Vancouver Warriors"){
			changer.setAttribute("src","../Images/jaiden-images/Vancouver_Warriors.png");
		}
		if(output !="Select Team"){
			size = document.getElementById("size");
			size.style.display = ""
		}
    }
	
function getSizeOption() {
		selectElement = document.querySelector('#size');
        output = selectElement.value;
        if(output !="Select Size"){
			style_page = document.getElementById("style");
			style_page.style.display = ""
		}
	}
function getStyleOption() {
        selectElement = document.querySelector('#style');
        output = selectElement.value;
        if(output !="Select Style"){
			var variant = document.getElementById("variant");
			variant.style.display = ""
		}
	}
function getVariantOption() {
		var clothtype = document.getElementById("clothtype");
		var display = clothtype.getAttribute("name")
		if(document.getElementById("eastteam").style.display ==""){
			var eastteam = document.querySelector('#eastteam');
			team = eastteam.value;
			const path = [];
			for(i=0; i < team.length; i++){
				if(team[i]==" ")
				{
					path.push("_");
				}
				else if (team[i] != " ")
				{
					path.push(team[i]);
				}
			}
			var variant = document.querySelector('#variant');
			output = variant.value;
			if(output=="Away")
			{
				changer.setAttribute("src","../Images/catalog_images/"+path.join("")+"/away_"+display+".jpg");
			}
			if(output=="Home")
			{
				changer.setAttribute("src","../Images/catalog_images/"+path.join("")+"/home_"+display+".jpg");
			}
		}
		if(document.getElementById("westteam").style.display ==""){
			var westteam = document.querySelector('#westteam');
			team = westteam.value;
			const path = [];
			for(i=0; i < team.length; i++){
				if(team[i]==" ")
				{
					path.push("_");
				}
				else if (team[i] != " ")
				{
					path.push(team[i]);
				}
			}
			var variant = document.querySelector('#variant');
			output = variant.value;
			if(output=="Away")
			{
				changer.setAttribute("src","../Images/catalog_images/"+path.join("")+"/away_"+display+".jpg");
			}
			if(output=="Home")
			{
				changer.setAttribute("src","../Images/catalog_images/"+path.join("")+"/home_"+display+".jpg");
			}
		}
	}