$(document).ready(function() {
	console.log("init fired");
//|----------ALL PAGES-----------|
	
	$(".searchIcon").click(function() {
		var input = $(".searchInput").val();
		console.log(input);
		if (input == "mens") {
			localStorage.setItem("mensClick", "true");
		} else if (input == "womens") {
			localStorage.setItem("womensClick", "true");
		} else if (input == "kids") {
			localStorage.setItem("kidsClick", "true");
		} else {
			alert("error, please search either mens, womens or kids");
			$(".searchInput").val("");
		}
	})
	var cartFlag = 0;
	$(".cartIcon").click(function() {
		if(cartFlag == 0) {
			$(".cartDropDown").slideDown("fast").show();
			cartFlag += 1;
		} else if (cartFlag == 1) {
			$(".cartDropDown").hide();
			cartFlag = 0;
		}
	})

	$(".l4").click(function() {
		localStorage.setItem("contactClick", "true");
	})
	$(".l5").click(function() {
		localStorage.setItem("contactClick", "true");
	})
	$(".l6").click(function() {
		localStorage.setItem("shippingClick", "true");
	})
	$(".l7").click(function() {
		localStorage.setItem("returnsClick", "true");
	})
	$(".l8").click(function() {
		localStorage.setItem("aboutUsClick", "true");
	})

	$(document).ready(function() { 
		if (localStorage.getItem("contactClick") == "true") {
			$("#information").html("Contact information:"+"<br><br>"+"email: nike@gmail.com"+"<br><br>"+"Phone Number: 01215324865"+
			"<br><br><br>"+"Address:"+"<br><br>"+"142 Wardour St"+"<br><br>"+"Soho, London"+"<br><br>"+"W1F 8DD");
			localStorage.setItem("contactClick", "");
		} else if (localStorage.getItem("shippingClick") == "true") {
			$("#information").html("Shipping information:"+"<br><br>"+"All shipping is done via 3rd party companies,"+
			"this company will vary depending on your region:" +"<br><br>"+"United Kingdom: Royal Mail"+"<br><br>"+"Europe: DHL"+"<br><br>"+
			"United States: FedEx"+"<br><br>"+"Tracking of a delivery is done via the shipping company, "+
			"we will provide emails on the status of your delivery and a tracking number for the parcel to track via the shipping company.");
			localStorage.setItem("shippingClick", "");
		} else if (localStorage.getItem("returnsClick") == "true") {
			$("#information").html("Returns information:"+"<br><br>"+"Part of our returns policy states that the returns policy is 48 days,"+
			" but 60 days over the christmas holiday"+"<br><br>"+"exceptions may apply such as clearance items cannot be returned."+
			"<br><br>"+"How do i return an item?"+"<br><br>"+"the method of returning an item will vary depending on the delivery service:"+
			"<br><br>"+"Royal Mail: Return label is in the box, or you can print one off"+"<br><br>"+
			"DHL: Get your return label from their website"+"<br><br>"+
			"FedEx: Schedule a pickup via their website");
			localStorage.setItem("returnsClick", "");
		} else if (localStorage.getItem("aboutUsClick") == "true") {
			$("#information").html("About us:"+"<br><br>"+"We are an American clothing brand dedicated to providing the best quality clothing and footwear to the world"+
			"our mission is to bring inspiration and innovation to every athlete in the world." +"<br><br><br><br>"+
			"If you have a body, you are an athlete."+"<br><br><br><br>"+"Our mission is what drives us to do everything possible to expand human potential."+
			" We do that by creating groundbreaking sport innovations,"+ 
			" by making our products more sustainably,"+
			 " by building a creative and diverse global team and by making a positive impact in communities where we live and work.");
			localStorage.setItem("aboutUsClick", "");
		}
	})

//|----------INDEX PAGE----------|
	var videoflag = 0;
	var video = $("#sliderVideo").attr("src");

	$(".b1").click(function() {
		$("#sliderVideo").attr("src", "");
		$("#sliderVideo").hide();
		$(".imgSlider").show();
		$("#welcomeText").show();

		if ($(".imgSlider").attr("Src") != "/assets/slider-test-image.png") {
			$(".imgSlider").fadeOut("slow", function() {
				$(".imgSlider").fadeIn("slow").attr("src", "/assets/slider-test-image.png")
			});
		} else if ($(".imgSlider").attr("Src") == "/assets/slider-test-image.png"){
			$(".imgSlider").attr("src", "/assets/slider-test-image.png");
		}	
	})
	$(".b2").click(function() {
		$("#sliderVideo").attr("src", "");
		$("#sliderVideo").hide();
		$(".imgSlider").show();
		$("#welcomeText").show();

		if ($(".imgSlider").attr("Src") != "/assets/slider-test-image2.png") {
			$(".imgSlider").fadeOut("slow", function() {
				$(".imgSlider").fadeIn("slow").attr("src", "/assets/slider-test-image2.png");
			});
		} else if ($(".imgSlider").attr("src") == "/assets/slider-test-image2.png"){
			$(".imgSlider").attr("src", "/assets/slider-test-image2.png");
		}
	})
	$(".b3").click(function() {
		flag = 1;
		$("#sliderVideo").attr("src", video);
		$("#sliderVideo").show();
		$(".imgSlider").hide();
		$("#welcomeText").hide();
	})

	//|---------PRODUCT PAGE----------|
	$("#customText").click(function() {
		$("#customizer").slideDown("slow", function() {
		}).css("display", "block");
	})
	$("#closeText").click(function() {
		$("#customizer").css("display", "none");
	})
	$("#blackBtn").click(function() {
		localStorage.setItem("colourChosen", "black");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/black-shirt.PNG");
		})
	})
	$("#blueBtn").click(function() {
		localStorage.setItem("colourChosen", "blue");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/blue-shirt.PNG");
		})
	})
	$("#greenBtn").click(function() {
		localStorage.setItem("colourChosen", "green");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/green-shirt.PNG");
		})
	})
	$("#greyBtn").click(function() {
		localStorage.setItem("colourChosen", "grey");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/grey-shirt.PNG");
		})
	})
	$("#orangeBtn").click(function() {
		localStorage.setItem("colourChosen", "orange");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/orange-shirt.PNG");
		})
	})
	$("#redBtn").click(function() {
		localStorage.setItem("colourChosen", "red");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/red-shirt.PNG");
		})
	})
	$("#whiteBtn").click(function() {
		localStorage.setItem("colourChosen", "white");
		$(".customImg").fadeOut("fast", function() {
			$(".customImg").fadeIn("fast").attr("src", "/assets/white-shirt.PNG");
		})
	})
	$("#customBuyBtn").click(function() {
		localStorage.setItem("buyClicked", "true");
	})
	$(document).ready(function() {
		$(".productBrought").html("");
		if (localStorage.getItem("buyClicked") == "true") {
			$(".productBrought").html("CUSTOM T SHIRT - £17.95");
			localStorage.setItem("buyClicked", "");
		}
	})
	var menArray1 = ["/assets/nike-air-force-1-white.PNG", "/assets/nike-air-max-97-grey.PNG", "/assets/nike-air-mens-jacket-red.PNG", 
					"/assets/fleece-joggers-grey.PNG", "/assets/nike-fleece-crew.PNG", "/assets/jumpman-hoodie.PNG", 
					"/assets/barcelona-t-shirt.PNG", "/assets/windrunner-orange.PNG", "/assets/flex-training-shorts.PNG"];

	var pText = ["pText1", "pText2", "pText3", "pText4", "pText5", "pText6", "pText7", "pText8", "pText9"];
	var pBox = ["pBox1", "pBox2", "pBox3", "pBox4", "pBox5", "pBox6", "pBox7", "pBox8", "pBox9"];

	var menText = ["Nike air force 1 - white <br>£80.00", "Nike air max 97 - grey<br>£120.00", "Nike air mens jacket - black/red<br>£69.95", 
				"Nike tech fleece joggers - grey/black<br>£74.95", "- Nike air mens fleece crew - blue<br>£54.95", "- Nike air jordan jumpman hoodie - black<br>£67.95", 
				" FC Barcelona 20th Anniversary t-shirt<br>£59.99", "Nike windrunner - orange<br>£89.95", "Nike flex training shorts - beige<br>£37.95"];

	var womenArray1 = ["/assets/nike-m2k-teckno.PNG", "/assets/nike-power-training-shorts.PNG", "/assets/dri-fit-shorts-black.PNG",
					"/assets/nike-nsw-parka.PNG", "/assets/nike-air-max-270.PNG", "/assets/running-tights.PNG",
					"/assets/nike-eclipse-shorts.PNG", "/assets/heirtage-hip-pack.PNG", "/assets/nike-air-force-1-xx.PNG"];
	var womenText = ["Nike M2K teckno - grey<br>£89.95", "Nike power training shorts - black<br>£55.95", "Nike dri-FIT shorts<br>", "Nike NSW parka - beige<br>£159.95", 
					"Nike air max 270 - grey/red<br>£115.00", "Nike womens running tights - blue<br>£39.99", "Nike eclipse running shorts<br>£32.99", 
					"Nike sportswear heritage hip pack - blue<br>£16.95", "Nike air force 1 xx - black/gold<br>£95.00"];

	var kidsArray1 = ["/assets/futura-logo-t-shirt.PNG", "/assets/futura-3-piece.PNG", "/assets/nike-sportswear-tank.PNG",
					"/assets/baby-3-piece.PNG", "/assets/kids-air-max-270.PNG", "/assets/air-max-axis.PNG",
					"/assets/huarache-toddler.PNG", "/assets/air-crew-kids.PNG", "/assets/full-zip-hoodie-kids.PNG"];
	var kidText = ["Nike futura logo t shirt<br>£13.95", "Nike futura 3 piece gift set<br>£35.95", "Nike sportswear girls tank<br>£16.99", "Nike sportswear baby 3 piece<br>£19.95", 
				"Nike Air max 270 - black/red<br>£82.99", "Nike air max axis toddler - grey<br>£42.95", "Nike huarache Ultra toddler - black<br>£42.95", 
				"Nike air crew - grey/blue<br>£37.95", "Nike sportwear full zip hoodie - blue<br>£47.97"];

	$(".il1").click(function() {
		localStorage.setItem("mensClick", "true");
	})
	$(".il2").click(function() {
		localStorage.setItem("womensClick", "true");
	})
	$(".il3").click(function() {
		localStorage.setItem("kidsClick", "true");
	})

	$(document).ready(function() {
		if (localStorage.getItem("mensClick") == "true") {
			$("#productName").html("MENS PRODUCTS.");
			for(var i = 0; i < 3; i++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow1");
				$("<p class='pText'></p>").appendTo(".textProductGridRow1");
				$(".pBox").attr("class", pBox[i]);
				$(".pText").attr("class", pText[i]);
			}
			for(var b = 3; b < 6; b++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow2");
				$("<p class='pText'></p>").appendTo(".textProductGridRow2");
				$(".pBox").attr("class", pBox[b]);
				$(".pText").attr("class", pText[b]);
			}
			for(var c = 6; c < 9; c++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow3");
				$("<p class='pText'></p>").appendTo(".textProductGridRow3");
				$(".pBox").attr("class", pBox[c]);
				$(".pText").attr("class", pText[c]);
			}
			for (var i = 0; i < menText.length; i++) {
				$("."+pText[i]).html(menText[i]);
			}
			for (var a = 0; a < 3; a++) {
				$("."+pBox[a]).attr("src", menArray1[a]);
			}
			for (var b = 3; b < 6; b++) {
				$("."+pBox[b]).attr("src", menArray1[b]);
			}
			for (var c = 6; c < 9; c++) {
				$("."+pBox[c]).attr("src", menArray1[c]);
			}
			localStorage.setItem("mensClick", "");
			localStorage.setItem("productClickMens", "true");
			localStorage.setItem("productClickwomens", "");
			localStorage.setItem("productClickKids", "");


		} else if (localStorage.getItem("womensClick") == "true") {
			$("#productName").html("WOMENS PRODUCTS.");
			for(var i = 0; i < 3; i++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow1");
				$("<p class='pText'></p>").appendTo(".textProductGridRow1");
				$(".pBox").attr("class", pBox[i]);
				$(".pText").attr("class", pText[i]);
			}
			for(var b = 3; b < 6; b++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow2");
				$("<p class='pText'></p>").appendTo(".textProductGridRow2");
				$(".pBox").attr("class", pBox[b]);
				$(".pText").attr("class", pText[b]);
			}
			for(var c = 6; c < 9; c++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow3");
				$("<p class='pText'></p>").appendTo(".textProductGridRow3");
				$(".pBox").attr("class", pBox[c]);
				$(".pText").attr("class", pText[c]);
			}
			for (var i = 0; i < menText.length; i++) {
				$("."+pText[i]).html(womenText[i]);
			}
			for (var a = 0; a < 3; a++) {
				$("."+pBox[a]).attr("src", womenArray1[a]);
			}
			for (var b = 3; b < 6; b++) {
				$("."+pBox[b]).attr("src", womenArray1[b]);
			}
			for (var c = 6; c < 9; c++) {
				$("."+pBox[c]).attr("src", womenArray1[c]);
			}
			localStorage.setItem("womensClick", "");
			localStorage.setItem("productClickMens", "");
			localStorage.setItem("productClickwomens", "true");
			localStorage.setItem("productClickKids", "");

		} else if (localStorage.getItem("kidsClick") == "true") {
			$("#productName").html("KIDS PRODUCTS.");
			for(var i = 0; i < 3; i++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow1");
				$("<p class='pText'></p>").appendTo(".textProductGridRow1");
				$(".pBox").attr("class", pBox[i]);
				$(".pText").attr("class", pText[i]);
			}
			for(var b = 3; b < 6; b++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow2");
				$("<p class='pText'></p>").appendTo(".textProductGridRow2");
				$(".pBox").attr("class", pBox[b]);
				$(".pText").attr("class", pText[b]);
			}
			for(var c = 6; c < 9; c++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow3");
				$("<p class='pText'></p>").appendTo(".textProductGridRow3");
				$(".pBox").attr("class", pBox[c]);
				$(".pText").attr("class", pText[c]);
			}
			for (var i = 0; i < menText.length; i++) {
				$("."+pText[i]).html(kidText[i]);
			}
			for (var a = 0; a < 3; a++) {
				$("."+pBox[a]).attr("src", kidsArray1[a]);
			}
			for (var b = 3; b < 6; b++) {
				$("."+pBox[b]).attr("src", kidsArray1[b]);
			}
			for (var c = 6; c < 9; c++) {
				$("."+pBox[c]).attr("src", kidsArray1[c]);
			}
			localStorage.setItem("kidsClick", "");

			localStorage.setItem("productClickMens", "");
			localStorage.setItem("productClickwomens", "");
			localStorage.setItem("productClickKids", "true");
		}
	})
	//mens product page
	$(".l1").click( function() {
		localStorage.setItem("currentPage", "true");
		$("#productName").html("MENS PRODUCTS.");
		for (var i = 0; i < menText.length; i++) {
			$("."+pText[i]).remove();
			$("."+pBox[i]).remove();
			$(".pLink").remove();
		}
		for(var i = 0; i < 3; i++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow1");
				$("<p class='pText'></p>").appendTo(".textProductGridRow1");
				$(".pBox").attr("class", pBox[i]);
				$(".pText").attr("class", pText[i]);
			}
			for(var b = 3; b < 6; b++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow2");
				$("<p class='pText'></p>").appendTo(".textProductGridRow2");
				$(".pBox").attr("class", pBox[b]);
				$(".pText").attr("class", pText[b]);
			}
			for(var c = 6; c < 9; c++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow3");
				$("<p class='pText'></p>").appendTo(".textProductGridRow3");
				$(".pBox").attr("class", pBox[c]);
				$(".pText").attr("class", pText[c]);
			}
			for (var i = 0; i < menText.length; i++) {
				$("."+pText[i]).html(menText[i]);
			}
			for (var a = 0; a < 3; a++) {
				$("."+pBox[a]).attr("src", menArray1[a]);
			}
			for (var b = 3; b < 6; b++) {
				$("."+pBox[b]).attr("src", menArray1[b]);
			}
			for (var c = 6; c < 9; c++) {
				$("."+pBox[c]).attr("src", menArray1[c]);
			}
			$(".pBox1").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "1");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox2").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "2");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox3").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "3");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox4").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "4");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox5").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "5");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox6").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "6");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox7").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "7");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox8").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "8");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox9").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "9");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			localStorage.setItem("productClickMens", "true");
			localStorage.setItem("productClickwomens", "");
			localStorage.setItem("productClickKids", "");
		})

	//womens product page
	$(".l2").click( function() {
		localStorage.setItem("currentPage", "true");
		$("#productName").html("WOMENS PRODUCTS.");
		for (var i = 0; i < menText.length; i++) {
			$("."+pText[i]).remove();
			$("."+pBox[i]).remove();
			$(".pLink").remove();
		}

		for(var i = 0; i < 3; i++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow1");
				$("<p class='pText'></p>").appendTo(".textProductGridRow1");
				$(".pBox").attr("class", pBox[i]);
				$(".pText").attr("class", pText[i]);
			}
			for(var b = 3; b < 6; b++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow2");
				$("<p class='pText'></p>").appendTo(".textProductGridRow2");
				$(".pBox").attr("class", pBox[b]);
				$(".pText").attr("class", pText[b]);
			}
			for(var c = 6; c < 9; c++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow3");
				$("<p class='pText'></p>").appendTo(".textProductGridRow3");
				$(".pBox").attr("class", pBox[c]);
				$(".pText").attr("class", pText[c]);
			}
			for (var i = 0; i < menText.length; i++) {
				$("."+pText[i]).html(womenText[i]);
			}
			for (var a = 0; a < 3; a++) {
				$("."+pBox[a]).attr("src", womenArray1[a]);
			}
			for (var b = 3; b < 6; b++) {
				$("."+pBox[b]).attr("src", womenArray1[b]);
			}
			for (var c = 6; c < 9; c++) {
				$("."+pBox[c]).attr("src", womenArray1[c]);
			}
			$(".pBox1").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "1");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox2").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "2");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox3").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "3");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox4").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "4");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox5").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "5");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox6").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "6");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox7").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "7");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
	
			})
			$(".pBox8").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "8");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox9").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "9");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			localStorage.setItem("productClickMens", "");
			localStorage.setItem("productClickwomens", "true");
			localStorage.setItem("productClickKids", "");
		})

	//kids product page
	$(".l3").click( function() {
		localStorage.setItem("currentPage", "true");
		$("#productName").html("KIDS PRODUCTS.");
		for (var i = 0; i < menText.length; i++) {
			$("."+pText[i]).remove();
			$("."+pBox[i]).remove();
			$(".pLink").remove();
		}
		for(var i = 0; i < 3; i++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow1");
				$("<p class='pText'></p>").appendTo(".textProductGridRow1");
				$(".pBox").attr("class", pBox[i]);
				$(".pText").attr("class", pText[i]);
			}
			for(var b = 3; b < 6; b++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow2");
				$("<p class='pText'></p>").appendTo(".textProductGridRow2");
				$(".pBox").attr("class", pBox[b]);
				$(".pText").attr("class", pText[b]);
			}
			for(var c = 6; c < 9; c++) {
				$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>").appendTo(".productGridRow3");
				$("<p class='pText'></p>").appendTo(".textProductGridRow3");
				$(".pBox").attr("class", pBox[c]);
				$(".pText").attr("class", pText[c]);
			}
			for (var i = 0; i < menText.length; i++) {
				$("."+pText[i]).html(kidText[i]);
			}
			for (var a = 0; a < 3; a++) {
				$("."+pBox[a]).attr("src", kidsArray1[a]);
			}
			for (var b = 3; b < 6; b++) {
				$("."+pBox[b]).attr("src", kidsArray1[b]);
			}
			for (var c = 6; c < 9; c++) {
				$("."+pBox[c]).attr("src", kidsArray1[c]);
			}
			$(".pBox1").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "1");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox2").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "2");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox3").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "3");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox4").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "4");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox5").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "5");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox6").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "6");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox7").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "7");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			$(".pBox8").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "8");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
			})
			$(".pBox9").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "9");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
			})
			localStorage.setItem("productClickMens", "");
			localStorage.setItem("productClickwomens", "");
			localStorage.setItem("productClickKids", "true");
	})
	//DROPDOWN MENU
	var flag = 0;
	$(".filter").click(function() {
		if (flag == 0) {
			$(".dropdown-content").show();
			$("<a class='pLink' href='product-view-page.html'><img class='pBox' src='' alt='products'></a>")
			$("<a class='pLink' href='product-page.html'><p class='fl1'></p></a>").appendTo(".dropdown-content");
			$("<a class='pLink' href='product-page.html'><p class='fl2'></p></a>").appendTo(".dropdown-content");
			$("<a class='pLink' href='product-page.html'><p class='fl3'></p></a>").appendTo(".dropdown-content");
			$(".fl1").html("MENS");
			$(".fl2").html("WOMENS");
			$(".fl3").html("KIDS");
			$(".fl1").click(function() {
				localStorage.setItem("mensClick", "true");
			})
			$(".fl2").click(function() {
				localStorage.setItem("womensClick", "true");
			})
			$(".fl3").click(function() {
				localStorage.setItem("kidsClick", "true");
			})
			flag += 1;
		} else if (flag == 1) {
			$(".dropdown-content").hide();
			$(".fl1").remove();
			$(".fl2").remove();
			$(".fl3").remove();
			$(".fl4").remove();
			$(".pLink").remove();
			flag = 0;
		}
	})
	$(document).ready(function(){
		$(".pBox1").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "1");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
		})
		$(".pBox2").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "2");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
		})
		$(".pBox3").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "3");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
		})
		$(".pBox4").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "4");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
		})
		$(".pBox5").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "5");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
		})
		$(".pBox6").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "6");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
		})
		$(".pBox7").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "7");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
		})
		$(".pBox8").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "8");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));
		})
		$(".pBox9").click(function() {
			localStorage.setItem("productClicked", "true");
			localStorage.setItem("pFlag", "9");
			localStorage.setItem("pBoxVal",".pBox"+localStorage.getItem("pFlag"));
			localStorage.setItem("pBoxSrc", $(localStorage.getItem("pBoxVal")).attr("src"));	
		})
	})
	$(document).ready(function() {
		if (localStorage.getItem("productClicked") == "true") {
			localStorage.setItem("imgSrc", localStorage.getItem("pBoxSrc"));
			$(".productImg").attr("src", localStorage.getItem("imgSrc"));
			for (var i = 0; i <= pText.length; i++) {
				if (localStorage.getItem("pFlag") == i+1) {
					if (localStorage.getItem("productClickMens") == "true") {
						$(".productName").html(menText[i]);
						localStorage.setItem("productClickMens", "");
						localStorage.setItem("productClickwomens", "");
						localStorage.setItem("productClickKids", "");
					} else if (localStorage.getItem("productClickKids") == "true") {
						$(".productName").html(kidText[i]);
						localStorage.setItem("productClickMens", "");
						localStorage.setItem("productClickwomens", "");
						localStorage.setItem("productClickKids", "");
					}else if (localStorage.getItem("productClickWomens") == "true") {
						$(".productName").html(womenText[i]);
						localStorage.setItem("productClickMens", "");
						localStorage.setItem("productClickwomens", "");
						localStorage.setItem("productClickKids", "");
					} 
				}
			}
			localStorage.setItem("productClicked", "");
			localStorage.setItem("imgSrc", "");
		}
	})

//|---------PRODUCT VIEW PAGE-------|
	$("#buyBtn").click(function() {
		localStorage.setItem("buyBtnClick", "true");
		localStorage.setItem("productToBuy", $(".productName").html()) 
		
	})
	$(document).ready(function() {
		if (localStorage.getItem("buyBtnClick") == "true") {
			$(".productBrought").html(localStorage.getItem("productToBuy"));
			localStorage.setItem("buyBtnClick", "");
		}
	})



//|---------INFORMATION PAGE----------|
	$(".indexBtn1").click( function() {
		$("#information").html("Contact information:"+"<br><br>"+"email: nike@gmail.com"+"<br><br>"+"Phone Number: 01215324865"+
			"<br><br><br>"+"Address:"+"<br><br>"+"142 Wardour St"+"<br><br>"+"Soho, London"+"<br><br>"+"W1F 8DD");
	})
	$(".indexBtn2").click( function() {
		$("#information").html("Shipping information:"+"<br><br>"+"All shipping is done via 3rd party companies,"+
			"this company will vary depending on your region:" +"<br><br>"+"United Kingdom: Royal Mail"+"<br><br>"+"Europe: DHL"+"<br><br>"+
			"United States: FedEx"+"<br><br>"+"Tracking of a delivery is done via the shipping company, "+
			"we will provide emails on the status of your delivery and a tracking number for the parcel to track via the shipping company.");
	})
	$(".indexBtn3").click( function() {
		$("#information").html("Returns information:"+"<br><br>"+"Part of our returns policy states that the returns policy is 48 days,"+
			" but 60 days over the christmas holiday"+"<br><br>"+"exceptions may apply such as clearance items cannot be returned."+
			"<br><br>"+"How do i return an item?"+"<br><br>"+"the method of returning an item will vary depending on the delivery service:"+
			"<br><br>"+"Royal Mail: Return label is in the box, or you can print one off"+"<br><br>"+
			"DHL: Get your return label from their website"+"<br><br>"+
			"FedEx: Schedule a pickup via their website");
	})
	$(".indexBtn4").click( function() {
		$("#information").html("About us:"+"<br><br>"+"We are an American clothing brand dedicated to providing the best quality clothing and footwear to the world"+
			"our mission is to bring inspiration and innovation to every athlete in the world." +"<br><br><br><br>"+
			"If you have a body, you are an athlete."+"<br><br><br><br>"+"Our mission is what drives us to do everything possible to expand human potential."+
			" We do that by creating groundbreaking sport innovations,"+ 
			" by making our products more sustainably,"+
			 " by building a creative and diverse global team and by making a positive impact in communities where we live and work.");
	})
	





//|---------CHECKOUT PAGE----------|
	var inputArray = ["#nameInput", "#emailInput", "#addressInput1", "#cityInput", "#countyInput", "#countryInput", "#zipInput", 
						"#cardInput", "#cardNameInput", "#dateInput", "#csvInput"];
	var sumArray = ["#name", "#email", "#address", "#city", "#county", "#country", "#zipCode"];
	$("#submitButton").click(function() {
		for (var i = 0; i <= 7; i++) {
			if($(inputArray[i]).val() == "" || $(inputArray[i]).val() == " ") {
				alert("please enter all details");
				$("#name").html("NAME");
				$("#email").html("EMAIL");
				$("#address").html("ADDRESS");
				$("#city").html("CITY");
				$("#county").html("COUNTY");
				$("#country").html("COUNTRY");
				$("#zipCode").html("ZIPCODE");
				break;
			} else if ($(inputArray[i]).val() != "" || $(inputArray[i]).val() != " ") {
				if($(inputArray[i]).val() == "#addressInput1") {
				} else {
					$(sumArray[i]).text($(inputArray[i]).val());
				}
				console.log($(inputArray[i]).val());
			}
		}
		for (var b = 0; b <= inputArray.length; b++) {
			$(inputArray[b]).val("");
		}
	})
	$(".payNowBtn").click(function() {
		if ($("#name").html() == "NAME") {
			alert("error please enter all details");
		} else {
			alert("Thank you for your purchase "+ $("#name").html());
		}
		$("#name").html("NAME");
		$("#email").html("EMAIL");
	 	$("#address").html("ADDRESS");
		$("#city").html("CITY");
		$("#county").html("COUNTY");
		$("#zipCode").html("ZIPCODE");
		$("#country").html("COUNTRY");
	})
})

