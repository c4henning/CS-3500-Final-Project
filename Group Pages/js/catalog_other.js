window.onload = function hide_ddm()
{
	var eastteam = document.getElementById("eastteam");
	eastteam.style.display = "none"
	var westteam = document.getElementById("westteam");
	westteam.style.display = "none"
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
		var clothtype = document.getElementById("clothtype");
		var display = clothtype.getAttribute("name")
		
        selectTeam = document.querySelector('#eastteam');
        output = selectTeam.value;
        if(output =="Albany Firewolves"){
			changer.setAttribute("src","../Images/catalog_images/Albany_Firewolves/albany_"+display+".jpg");
		}
		else if(output =="Buffalo Bandits"){
			changer.setAttribute("src","../Images/catalog_images/Buffalo_Bandits/buffalo_"+display+".jpg");
		}
		else if(output =="Georgia Swarm"){
			changer.setAttribute("src","../Images/catalog_images/Georgia_Swarm/georgia_"+display+".jpg");
		}
		else if(output =="Halifax Thunderbirds"){
			changer.setAttribute("src","../Images/catalog_images/Halifax_Thunderbirds/halifax_"+display+".jpg");
		}
		else if(output =="New York Riptide"){
			changer.setAttribute("src","../Images/catalog_images/NewYork_Riptide/newyork_"+display+".jpg");
		}
		else if(output =="Philadelphia Wings"){
			changer.setAttribute("src","../Images/catalog_images/Philidelphia_Wings/philidelphia_"+display+".jpg");
		}
		else if(output =="Rochester Knighthawks"){
			changer.setAttribute("src","../Images/catalog_images/Rochester_Knighthawks/rochester_"+display+".jpg");
		}
		else if(output =="Toronto Rock"){
			changer.setAttribute("src","../Images/catalog_images/Toronto_Rock/toronto_"+display+".jpg");
		}
		if(output !="Select Team"){
			size = document.getElementById("size");
			size.style.display = ""
		}
    }
function getWestTeamOption() {
		var clothtype = document.getElementById("clothtype");
		var display = clothtype.getAttribute("name")

        selectTeam = document.querySelector('#westteam');
        output = selectTeam.value;
        if(output =="Calgary Roughnecks"){
			changer.setAttribute("src","../Images/catalog_images/Calgary_Roughnecks/calgary_"+display+".jpg");
		}
		if(output =="Colorado Mammoth"){
			changer.setAttribute("src","../Images/catalog_images/Colorado_Mammoth/colorado_"+display+".jpg");
		}
		if(output =="Las Vegas Desert Dogs"){
			changer.setAttribute("src","../Images/catalog_images/LasVegas_DesertDogs/lasvegas_"+display+".jpg");
		}
		if(output =="Panther City Lacrosse Club"){
			changer.setAttribute("src","../Images/catalog_images/PantherCity_LacrosseClub/panthercity_"+display+".jpg");
		}
		if(output =="San Diego Seals"){
			changer.setAttribute("src","../Images/catalog_images/SanDiego_Seals/sandiego_"+display+".jpg");
		}
		if(output =="Saskatchewan Rush"){
			changer.setAttribute("src","../Images/catalog_images/Saskatchewan_Rush/saskatchewan_"+display+".jpg");
		}
		if(output =="Vancouver Warriors"){
			changer.setAttribute("src","../Images/catalog_images/Vancouver_Warriors/vancouver_"+display+".jpg");
		}
		if(output !="Select Team"){
			size = document.getElementById("size");
			size.style.display = ""
		}
    }