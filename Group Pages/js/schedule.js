function callJumper() {
			var jump = document.querySelector('#jumper');
			team = jump.value;
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
			brak = document.getElementById(path.join(""));
			brak.scrollIntoView({ behavior: "smooth", block: "start"});
			window.scrollBy(0, -100);
    }