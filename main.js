var news = [
				{
					title:"War not an option to deal with Kashmir issue: Pakistan",
					subtitle: "Pakistan's Foreign Minister Shah Mahmood Qureshi has said war is not an option to deal with the Kashmir issue. The tensions between India and Pakistan have escalated over India's decision to abrogate Article 370 in J&K. He added Pakistan has repeatedly offered to start talks with India as the two nuclear-armed neighbours can't take the risk of going to war."
				},
				{
					title:"Sunanda Pushkar wanted to do press conference on IPL before death: Lawyer",
					subtitle:"During the hearing in the death case of Shashi Tharoor's wife on Saturday, senior public prosecutor Atul Shrivastava read out a statement of the couple's domestic help. He said that before her death, Pushkar wanted to address a press conference on the IPL issue and had said, 'I will not leave Tharoor'."
				},
				{
					title:"Shiv Sena leader gets 7-year jail term in housing scam, fined ₹100 crore",
					subtitle:"A sessions court in Dhule district in Maharashtra today sentenced Shiv Sena leader and former state minister Suresh Jain to seven-year jail term in the multi-crore Gharkul housing scam. Special Judge Srushti Neelkanth also imposed a fine of ₹100 crore on Jain. Ex-state minister Gulabrao Deokar and 46 others were also sentenced to jail terms between three and seven years."
				},
				{
					title:"He has no time for me: Wife seeks divorce from man preparing for UPSC",
					subtitle:"A woman from Madhya Pradesh's Bhopal has moved a family court seeking a divorce claiming her husband is busy preparing for UPSC exams and doesn't have time for her. The woman told the counsellor that her husband is never interested in going out to watch movies and shop. The counsellor advised the couple to try and understand each other better."
				},
				{
					title:"At least 25 students booked for waving Pakistani flag in Kerala college",
					subtitle:"At least 25 students were booked for allegedly waving Pakistani flag inside Perambra Silver College in Kerala's Kozhikode. The incident happened during campaigning for the college elections and the students booked reportedly belong to Muslim Students Federation (MSF) and Kerala Students Union (KSU). The student members of the MSF have claimed that the MSF flag looks similar to Pakistani flag."
				},
				{
					title:"US sanctions India's Akhilesh Kumar, captain of Iranian oil tanker",
					subtitle:"The US has imposed sanctions on Iranian oil tanker Adrian Darya-1 and its captain Akhilesh Kumar, an Indian national, under an executive order that targets terrorists and those providing support to terrorism. The tanker was seized by Gibraltar in July on suspicion of transporting oil to Syria illegally. Anyone providing support to the tanker risks being sanctioned, the US warned."
				}
			];
			// {
			// 		title:"",
			// 		subtitle:""
			// 	}

var curr = 0;

function changeNews(){
	console.log(curr)

	document.getElementById("title").innerText = news[curr].title;
	document.getElementById("sub-title").innerText = news[curr].subtitle;
	curr += 1;

	if (curr > news.length-1) {
			curr = 0;
	}
	
	// var readm = document.createElement('a');
	// readm.setAttribute = "href";
	// document.getElementById("sub-title").a

	// document.getElementById("readmore").href = news[0].link;
	// document.getElementById("readmore").innerText = "Read More";

}

changeNews();
document.addEventListener("keydown",changeNews);
