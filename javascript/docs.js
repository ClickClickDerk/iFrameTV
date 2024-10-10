var footerCon = document.createElement("div");
footerCon.setAttribute("id", "footerCon");
footerCon.setAttribute("class", "footerCon");
con.appendChild(footerCon);

var infoDiv = document.createElement("div");
infoDiv.setAttribute("id", "infoDiv");
infoDiv.setAttribute("class", "infoDiv");
footerCon.appendChild(infoDiv);

function cr() {
var copyDiv = document.createElement("div");
copyDiv.setAttribute("id", "copyDiv");
copyDiv.setAttribute("class", "copyDiv");
footerCon.appendChild(copyDiv);

var mydate = new Date();

var year = mydate.getFullYear();

var copyRight = "&copy " + year + " iframetv.com & Pirate Junkies Inc. All Rights Reserved";

document.getElementById("copyDiv").innerHTML = copyRight;
};

cr();

var or = document.createElement("p");
or.setAttribute("id", "or");
or.setAttribute("class", "or");
var orText = document.createTextNode("||");
or.appendChild(orText);

var or2 = document.createElement("p");
or2.setAttribute("id", "or2");
or2.setAttribute("class", "or2");
var orText2 = document.createTextNode("||");
or2.appendChild(orText2);

function closeAu() {
	con.removeChild(auCon);
};

var closeAbout = document.createElement("input");
closeAbout.setAttribute("type", "button");
closeAbout.setAttribute("id", "closeAbout");
closeAbout.setAttribute("class", "closeDoc closeAbout");
closeAbout.setAttribute("value", "X");
closeAbout.setAttribute("onclick", "closeAu()");

var aboutUs = document.createElement("p");
aboutUs.setAttribute("id", "aboutUs");
aboutUs.setAttribute("class", "aboutUs");
aboutUs.setAttribute("onclick", "openAboutUs()");
var aboutUsText = document.createTextNode("About Us");
aboutUs.appendChild(aboutUsText);
infoDiv.appendChild(aboutUs);
infoDiv.appendChild(or);

var auCon = document.createElement("div");
auCon.setAttribute("id", "auCon");
auCon.setAttribute("class", "auCon");

		var auHeader = document.createElement("p");
		auHeader.setAttribute("id", "auHeader");
		auHeader.setAttribute("class", "auHeader docHeader");
		var auHeaderText = document.createTextNode("About Us");
		auHeader.appendChild(auHeaderText);

		var au = document.createElement("p");
		au.setAttribute("id", "au");
		au.setAttribute("class", "au docText");
		var auText = document.createTextNode("This website was created for one reason, WE LOVE MOVIES! So we decieded instead of compiling movies from the web we've found for our personal use, why not put them on the web in one place for many people to stream. Then on 3/15/2015 iframetv.com was launched. Enjoy.");
		au.appendChild(auText);

		var finePrint = document.createElement("p");
		finePrint.setAttribute("id", "finePrint");
		finePrint.setAttribute("class", "finePrint");
		finePrint.onmouseover = bigFinePrint;
		var fpText = document.createTextNode("Fine Print");
		finePrint.appendChild(fpText);

		function openAboutUs() {
			con.appendChild(auCon);
			auCon.appendChild(closeAbout);
			auCon.appendChild(auHeader);
			auCon.appendChild(au);
			auCon.appendChild(finePrint);
		};

		var rsFinePrint = document.createElement("p");
		rsFinePrint.setAttribute("id", "rsFinePrint");
		rsFinePrint.setAttribute("class", "rsFinePrint");
		rsFinePrint.onmouseout = smallFinePrint;
		var rsText = document.createTextNode("I wish I had more time to code T_T");
		rsFinePrint.appendChild(rsText);

		function bigFinePrint() {
			auCon.removeChild(finePrint);
			auCon.appendChild(rsFinePrint);
		};

		function smallFinePrint() {
			auCon.removeChild(rsFinePrint);
			auCon.appendChild(finePrint);
		};

		var contactUs = document.createElement("p");
		contactUs.setAttribute("id", "contactUs");
		contactUs.setAttribute("class", "contactUs");
		contactUs.setAttribute("onclick", "openContactUs()");
		var cuTest = document.createTextNode("Contact Us");
		contactUs.appendChild(cuTest);
		infoDiv.appendChild(contactUs);
		infoDiv.appendChild(or2);

		var cuCon = document.createElement("div");
		cuCon.setAttribute("id", "cuCon");
		cuCon.setAttribute("class", "cuCon");

		function closeCu() {
			con.removeChild(cuCon);
		};

		var closeContact = document.createElement("input");
		closeContact.setAttribute("type", "button");
		closeContact.setAttribute("id", "closeContact");
		closeContact.setAttribute("class", "closeDoc closeContact");
		closeContact.setAttribute("value", "X");
		closeContact.setAttribute("onclick", "closeCu()");

		var cuHeader = document.createElement("p");
		cuHeader.setAttribute("id", "cuHeader");
		cuHeader.setAttribute("class", "cuHeader docHeader");
		var cuHeaderText = document.createTextNode("Contact Us");
		cuHeader.appendChild(cuHeaderText);

		var cu = document.createElement("p");
		cu.setAttribute("id", "cu");
		cu.setAttribute("class", "cu docText");
		cuText = document.createTextNode("You can provide site feedback by emailing ");
		cu.appendChild(cuText);

		var email = document.createElement("a");
		email.setAttribute("id", "email");
		email.setAttribute("class", "email");
		email.href = "mailto:admin@iframetv.com";
		var emailText = document.createTextNode("admin@iframetv.com");
		email.appendChild(emailText);

		var cu2 = document.createElement("p");
		cu2.setAttribute("id", "cu2");
		cu2.setAttribute("class", "cu2 docText");
		cu2Text = document.createTextNode("If you have movies you would like to share on iframetv.com you can email ");
		cu2.appendChild(cu2Text);

		var reqEmail = document.createElement("a");
		reqEmail.setAttribute("id", "reqEmail");
		reqEmail.setAttribute("class", "reqEmail");
		reqEmail.href = "mailto:request@iframetv.com";
		var reqEmailText = document.createTextNode("request@iframetv.com");
		reqEmail.appendChild(reqEmailText);

		function openContactUs() {
			con.appendChild(cuCon);
			cuCon.appendChild(closeContact);
			cuCon.appendChild(cuHeader);
			cuCon.appendChild(cu);
			cu.appendChild(email);
			cuCon.appendChild(cu2);
			cu2.appendChild(reqEmail);
		};

		var privacy = document.createElement("p");
		privacy.setAttribute("id", "privacy");
		privacy.setAttribute("class", "privacy");
		var ppText = document.createTextNode("Privacy Policy");
		privacy.setAttribute("onclick", "openPrivacy()");
		privacy.appendChild(ppText);
		infoDiv.appendChild(privacy);

		var priCon = document.createElement("div");
		priCon.setAttribute("id", "priCon");
		priCon.setAttribute("class", "priCon");

		function closePri() {
			con.removeChild(priCon);
		};

		var closePrivacy = document.createElement("input");
		closePrivacy.setAttribute("type", "button");
		closePrivacy.setAttribute("id", "closePrivacy");
		closePrivacy.setAttribute("class", "closeDoc closePrivacy");
		closePrivacy.setAttribute("value", "X");
		closePrivacy.setAttribute("onclick", "closePri()");

		var priHeader = document.createElement("p");
		priHeader.setAttribute("id", "priHeader");
		priHeader.setAttribute("class", "priHeader docHeader");
		var priHeaderText = document.createTextNode("Privacy Policy");
		priHeader.appendChild(priHeaderText);

		var pri = document.createElement("p");
		pri.setAttribute("id", "pri");
		pri.setAttribute("class", "pri docText");
		var priText = document.createTextNode("This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.");
		pri.appendChild(priText);

		var pri1 = document.createElement("p");
		pri1.setAttribute("id", "pri1");
		pri1.setAttribute("class", "pri1 pHeaderText");
		var priText1 = document.createTextNode("What personal information do we collect from the people that visit our blog, website or app?");
		pri1.appendChild(priText1);

		var pri2 = document.createElement("p");
		pri2.setAttribute("id", "pri2");
		pri2.setAttribute("class", "pri2 docText");
		var priText2 = document.createTextNode("When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address or other details to help you with your experience.");
		pri2.appendChild(priText2);

		var pri3 = document.createElement("p");
		pri3.setAttribute("id", "pri3");
		pri3.setAttribute("class", "pri3 pHeaderText");
		var priText3 = document.createTextNode("When do we collect information?");
		pri3.appendChild(priText3);

		var pri4 = document.createElement("p");
		pri4.setAttribute("id", "pri4");
		pri4.setAttribute("class", "pri4 docText");
		var priText4 = document.createTextNode("We collect information from you when you register on our site, fill out a form or enter information on our site.");
		pri4.appendChild(priText4);

		var pri5 = document.createElement("p");
		pri5.setAttribute("id", "pri5");
		pri5.setAttribute("class", "pri5 pHeaderText");
		var priText5 = document.createTextNode("How do we use your information?");
		pri5.appendChild(priText5);

		var pri6 = document.createElement("p");
		pri6.setAttribute("id", "pri6");
		pri6.setAttribute("class", "pri6 docText");
		var priText6 = document.createTextNode("- To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.");
		pri6.appendChild(priText6);

		var pri7 = document.createElement("p");
		pri7.setAttribute("id", "pri7");
		pri7.setAttribute("class", "pri7 docText");
		var priText7 = document.createTextNode("- To improve our website in order to better serve you.");
		pri7.appendChild(priText7);

		var pri8 = document.createElement("p");
		pri8.setAttribute("id", "pri8");
		pri8.setAttribute("class", "pri8 docText");
		var priText8 = document.createTextNode("- To allow us to better service you in responding to your customer service requests");
		pri8.appendChild(priText8);

		var pri9 = document.createElement("p");
		pri9.setAttribute("id", "pri9");
		pri9.setAttribute("class", "pri9 pHeaderText");
		var priText9 = document.createTextNode("Do we use 'cookies'?");
		pri9.appendChild(priText9);

		var pri10 = document.createElement("p");
		pri10.setAttribute("id", "pri10");
		pri10.setAttribute("class", "pri10 docText");
		var priText10 = document.createTextNode("Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.");
		pri10.appendChild(priText10);

		var pri11 = document.createElement("p");
		pri11.setAttribute("id", "pri11");
		pri11.setAttribute("class", "pri11 pHeaderText");
		var priText11 = document.createTextNode("We use cookies to:");
		pri11.appendChild(priText11);

		var pri12 = document.createElement("p");
		pri12.setAttribute("id", "pri12");
		pri12.setAttribute("class", "pri12 docText");
		var priText12 = document.createTextNode("- Keep track of advertisements.");
		pri12.appendChild(priText12);

		var pri13 = document.createElement("p");
		pri13.setAttribute("id", "pri13");
		pri13.setAttribute("class", "pri13 docText");
		var priText13 = document.createTextNode("- Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third party services that track this information on our behalf.");
		pri13.appendChild(priText13);

		var pri14 = document.createElement("p");
		pri14.setAttribute("id", "pri14");
		pri14.setAttribute("class", "pri14 docText");
		var priText14 = document.createTextNode("You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Google Chrome) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.");
		pri14.appendChild(priText14);

		var pri15 = document.createElement("p");
		pri15.setAttribute("id", "pri15");
		pri15.setAttribute("class", "pri15 pHeaderText");
		var priText15 = document.createTextNode("If users disable cookies in their browser:");
		pri15.appendChild(priText15);

		var pri16 = document.createElement("p");
		pri16.setAttribute("id", "pri16");
		pri16.setAttribute("class", "pri16 docText");
		var priText16 = document.createTextNode("If you disable cookies off, some features will be disabled It will turn off some of the features that make your site experience more efficient and some of our services will not function properly.");
		pri16.appendChild(priText16);

		var pri17 = document.createElement("p");
		pri17.setAttribute("id", "pri17");
		pri17.setAttribute("class", "pri17 pHeaderText");
		var priText17 = document.createTextNode("Third Party Disclosure");
		pri17.appendChild(priText17);

		var pri18 = document.createElement("p");
		pri18.setAttribute("id", "pri18");
		pri18.setAttribute("class", "pri18 docText");
		var priText18 = document.createTextNode("We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.");
		pri18.appendChild(priText18);

		var pri19 = document.createElement("p");
		pri19.setAttribute("id", "pri19");
		pri19.setAttribute("class", "pri19 docText");
		var priText19 = document.createTextNode("However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.");
		pri19.appendChild(priText19);

		var pri20 = document.createElement("p");
		pri20.setAttribute("id", "pri20");
		pri20.setAttribute("class", "pri20 pHeaderText");
		var priText20 = document.createTextNode("Third party links");
		pri20.appendChild(priText20);

		var pri21 = document.createElement("p");
		pri21.setAttribute("id", "pri21");
		pri21.setAttribute("class", "pri21 docText");
		var priText21 = document.createTextNode("Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.");
		pri21.appendChild(priText21);

		var pri22 = document.createElement("p");
		pri22.setAttribute("id", "pri22");
		pri22.setAttribute("class", "pri22 pHeaderText");
		var priText22 = document.createTextNode("COPPA (Children Online Privacy Protection Act)");
		pri22.appendChild(priText22);

		var pri23 = document.createElement("p");
		pri23.setAttribute("id", "pri23");
		pri23.setAttribute("class", "pri23 docText");
		var priText23 = document.createTextNode("When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online. ");
		pri23.appendChild(priText23);

		var pri24 = document.createElement("p");
		pri24.setAttribute("id", "pri24");
		pri24.setAttribute("class", "pri24 docText");
		var priText24 = document.createTextNode("We do not specifically market to children under 13.");
		pri24.appendChild(priText24);

		var pri25 = document.createElement("p");
		pri25.setAttribute("id", "pri25");
		pri25.setAttribute("class", "pri25 pHeaderText");
		var priText25 = document.createTextNode("Fair Information Practices");
		pri25.appendChild(priText25);

		var pri26 = document.createElement("p");
		pri26.setAttribute("id", "pri26");
		pri26.setAttribute("class", "pri26 docText");
		var priText26 = document.createTextNode("The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.");
		pri26.appendChild(priText26);

		var pri27 = document.createElement("p");
		pri27.setAttribute("id", "pri27");
		pri27.setAttribute("class", "pri27 pHeaderText");
		var priText27 = document.createTextNode("In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:");
		pri27.appendChild(priText27);

		var pri28 = document.createElement("p");
		pri28.setAttribute("id", "pri28");
		pri28.setAttribute("class", "pri28 docText");
		var priText28 = document.createTextNode("We will notify the users via email within 7 business days.");
		pri28.appendChild(priText28);

		var pri29 = document.createElement("p");
		pri29.setAttribute("id", "pri29");
		pri29.setAttribute("class", "pri29 docText");
		var priText29 = document.createTextNode("We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.");
		pri29.appendChild(priText29);

		var pri30 = document.createElement("p");
		pri30.setAttribute("id", "pri30");
		pri30.setAttribute("class", "pri30 pHeaderText");
		var priText30 = document.createTextNode("CAN SPAM Act");
		pri30.appendChild(priText30);

		var pri31 = document.createElement("p");
		pri31.setAttribute("id", "pri31");
		pri31.setAttribute("class", "pri31 docText");
		var priText31 = document.createTextNode("The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.");
		pri31.appendChild(priText31);

		var pri32 = document.createElement("p");
		pri32.setAttribute("id", "pri32");
		pri32.setAttribute("class", "pri32 pHeaderText");
		var priText32 = document.createTextNode("We collect your email address in order to:");
		pri32.appendChild(priText32);

		var pri33 = document.createElement("p");
		pri33.setAttribute("id", "pri33");
		pri33.setAttribute("class", "pri33 docText");
		var priText33 = document.createTextNode("- Send information, respond to inquiries, and/or other requests or questions.");
		pri33.appendChild(priText33);

		var pri34 = document.createElement("p");
		pri34.setAttribute("id", "pri34");
		pri34.setAttribute("class", "pri34 pHeaderText");
		var priText34 = document.createTextNode("To be in accordance with CANSPAM we agree to the following:");
		pri34.appendChild(priText34);

		var pri35 = document.createElement("p");
		pri35.setAttribute("id", "pri35");
		pri35.setAttribute("class", "pri35 docText");
		var priText35 = document.createTextNode("- NOT use false, or misleading subjects or email addresses.");
		pri35.appendChild(priText35);

		var pri36 = document.createElement("p");
		pri36.setAttribute("id", "pri36");
		pri36.setAttribute("class", "pri36 docText");
		var priText36 = document.createTextNode("- Identify the message as an advertisement in some reasonable way.");
		pri36.appendChild(priText36);

		var pri37 = document.createElement("p");
		pri37.setAttribute("id", "pri37");
		pri37.setAttribute("class", "pri37 docText");
		var priText37 = document.createTextNode("- Include the physical address of our business or site headquarters.");
		pri37.appendChild(priText37);

		var pri38 = document.createElement("p");
		pri38.setAttribute("id", "pri38");
		pri38.setAttribute("class", "pri38 docText");
		var priText38 = document.createTextNode("- Monitor third party email marketing services for compliance, if	one is used.");
		pri38.appendChild(priText38);

		var pri39 = document.createElement("p");
		pri39.setAttribute("id", "pri39");
		pri39.setAttribute("class", "pri39 docText");
		var priText39 = document.createTextNode("- Honor opt-out/unsubscribe requests quickly.");
		pri39.appendChild(priText39);

		var pri40 = document.createElement("p");
		pri40.setAttribute("id", "pri40");
		pri40.setAttribute("class", "pri40 docText");
		var priText40 = document.createTextNode("- Allow users to unsubscribe by using the link at the bottom of each email.");
		pri40.appendChild(priText40);

		var pri41 = document.createElement("p");
		pri41.setAttribute("id", "pri41");
		pri41.setAttribute("class", "pri41 pHeaderText");
		var priText41 = document.createTextNode("If at any time you would like to unsubscribe from receiving future emails");
		pri41.appendChild(priText41);

		var pri42 = document.createElement("p");
		pri42.setAttribute("id", "pri42");
		pri42.setAttribute("class", "pri42 docText");
		var priText42 = document.createTextNode("You can email us at ");
		pri42.appendChild(priText42);

		function openPrivacy() {
			con.appendChild(priCon);
			priCon.appendChild(closePrivacy);
			priCon.appendChild(priHeader);
			priCon.appendChild(pri);
			priCon.appendChild(pri1);
			priCon.appendChild(pri2);
			priCon.appendChild(pri3);
			priCon.appendChild(pri4);
			priCon.appendChild(pri5);
			priCon.appendChild(pri6);
			priCon.appendChild(pri7);
			priCon.appendChild(pri8);
			priCon.appendChild(pri9);
			priCon.appendChild(pri10);
			priCon.appendChild(pri11);
			priCon.appendChild(pri12);
			priCon.appendChild(pri13);
			priCon.appendChild(pri14);
			priCon.appendChild(pri15);
			priCon.appendChild(pri16);
			priCon.appendChild(pri17);
			priCon.appendChild(pri18);
			priCon.appendChild(pri19);
			priCon.appendChild(pri20);
			priCon.appendChild(pri21);
			priCon.appendChild(pri22);
			priCon.appendChild(pri23);
			priCon.appendChild(pri24);
			priCon.appendChild(pri25);
			priCon.appendChild(pri26);
			priCon.appendChild(pri27);
			priCon.appendChild(pri28);
			priCon.appendChild(pri29);
			priCon.appendChild(pri30);
			priCon.appendChild(pri31);
			priCon.appendChild(pri32);
			priCon.appendChild(pri33);
			priCon.appendChild(pri34);
			priCon.appendChild(pri35);
			priCon.appendChild(pri36);
			priCon.appendChild(pri37);
			priCon.appendChild(pri38);
			priCon.appendChild(pri39);
			priCon.appendChild(pri40);
			priCon.appendChild(pri41);
			priCon.appendChild(pri42);
			pri42.appendChild(email);
			priCon.appendChild(lastUpDiv);
		};
