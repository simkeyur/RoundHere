$(document).ready(function () {

    $('#phoneinput').mask('(999) 999-9999');
    $('#zipcodeinput').mask('99999');

    ko.validation.configure({
        registerExtenders: true,
        messageOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        messageTemplate: null,
        decorateElement: true
    });

    displayVM = function () {
        var self = this;

        self.sunCB = ko.observable(false);
        self.monCB = ko.observable(false);
        self.tueCB = ko.observable(false);
        self.wedCB = ko.observable(false);
        self.thurCB = ko.observable(false);
        self.friCB = ko.observable(false);
        self.satCB = ko.observable(false);
        self.sunOpen = ko.observable();
        self.sunClose = ko.observable();
        self.monOpen = ko.observable();
        self.monClose = ko.observable();
        self.tueOpen = ko.observable();
        self.tueClose = ko.observable();
        self.wedOpen = ko.observable();
        self.wedClose = ko.observable();
        self.thurOpen = ko.observable();
        self.thurClose = ko.observable();
        self.friOpen = ko.observable();
        self.friClose = ko.observable();
        self.satOpen = ko.observable();
        self.satClose = ko.observable();





        self.name = ko.observable();
        self.name.extend({
            minLength: 2,
            required: true,
            pattern: {
                message: 'Please enter a valid name',
                params: /^[a-zA-Z' .-]+$/
            }
        });

        self.address = ko.observable();
        self.address.extend({
            required: true,
            pattern: {
                message: 'Please enter a valid address',
                params: /^((?!([\x40\[\]\/\\\$\?\!\^\-%&'()_+`~={}'""<>:;]|(\b[pP]\.?\s{0,}[oO]\.?\s{0,}\b([bB][oO][xX])?\s{0,}(no|number)?\s{0,}#?\s{0,}\d{1,})|([pP][oO][sS][tT] [oO][fF]{2,2}[iI][cC][eE] [bB][oO][xX] \d{3,}))).)*$/

            }
        });


        self.zipcode = ko.observable();
        self.zipcode.extend({
            required: true,
            pattern: {
                message: 'Please enter a valid zipcode',
                params: /^\d{5}$/
            }
        });

        self.city = ko.observable();
        self.city.extend({
            required: true,
            pattern: {
                message: 'Invalid city',
                params: /^[A-Za-z ]+$/
            }
        });

        self.phone = ko.observable();
        self.city.extend({
            message: 'Please enter a valid phonenumber',
            params: /^\d{10}$/
        });

        self.description = ko.observable();
        //self.picbutton = ko.observable();
        self.cancel = ko.observable();

        $("input[name=hours]").on("click", function () {
            //alert("saved data");

            //sunday

            if (self.sunCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=sundayOpen]").text("Closed");
                $("span[id=sundayClose]").text("Closed");
            }
            else {
                //throw sunday open time

                var openTemp = self.sunOpen() + "";
                var closeTemp = self.sunClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");



                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }

                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                // alert(Open + " " + Close);


                $("span[id=sundayOpen]").text(Open);
                $("span[id=sundayClose]").text(Close);
            }

            //monday

            if (self.monCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=mondayOpen]").text("Closed");
                $("span[id=mondayClose]").text("Closed");
            }
            else {
                //throw monday open time

                var openTemp = self.monOpen() + "";
                var closeTemp = self.monClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");

                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }
                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                //alert(Open + " " + Close);

                $("span[id=mondayOpen]").text(Open);
                $("span[id=mondayClose]").text(Close);
            }

            //tuesday

            if (self.tueCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=tuesdayOpen]").text("Closed");
                $("span[id=tuesdayClose]").text("Closed");
            }
            else {
                //throw tuesday open time

                var openTemp = self.tueOpen() + "";
                var closeTemp = self.tueClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");

                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }
                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                //alert(Open + " " + Close);

                $("span[id=tuesdayOpen]").text(Open);
                $("span[id=tuesdayClose]").text(Close);
            }

            //wednesday

            if (self.wedCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=wednesdayOpen]").text("Closed");
                $("span[id=wednesdayClose]").text("Closed");
            }
            else {
                //throw wednesday open time

                var openTemp = self.wedOpen() + "";
                var closeTemp = self.wedClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");

                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }
                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                //alert(Open + " " + Close);

                $("span[id=wednesdayOpen]").text(Open);
                $("span[id=wednesdayClose]").text(Close);
            }

            //thursday

            if (self.thurCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=thursdayOpen]").text("Closed");
                $("span[id=thursdayClose]").text("Closed");
            }
            else {
                //throw thursday open time

                var openTemp = self.thurOpen() + "";
                var closeTemp = self.thurClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");

                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }
                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                //alert(Open + " " + Close);

                $("span[id=thursdayOpen]").text(Open);
                $("span[id=thursdayClose]").text(Close);
            }

            //friday

            if (self.friCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=fridayOpen]").text("Closed");
                $("span[id=fridayClose]").text("Closed");
            }
            else {
                //throw friday open time

                var openTemp = self.friOpen() + "";
                var closeTemp = self.friClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");

                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }
                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                //alert(Open + " " + Close);

                $("span[id=fridayOpen]").text(Open);
                $("span[id=fridayClose]").text(Close);
            }

            //saturday

            if (self.satCB() == true) {
                // alert("closed");
                //compute the closed area

                $("span[id=saturdayOpen]").text("Closed");
                $("span[id=saturdayClose]").text("Closed");
            }
            else {
                //throw saturday open time

                var openTemp = self.satOpen() + "";
                var closeTemp = self.satClose() + "";
                var openSplit = openTemp.split(":");
                var closeSplit = closeTemp.split(":");

                var otemp = (openSplit[0] >= 12) ? "P.M." : "A.M.";
                var openHour = ((openSplit[0] > 0 && openSplit[0] < 12) ? openSplit[0] : (openSplit[0] == 0) ? 12 : openSplit[0] - 12);
                var openMin = openSplit[1];
                temp = openHour.toString().split("");
                if (temp[0] == 0) {
                    openHour = temp.slice(1);
                }
                var ctemp = (closeSplit[0] >= 12) ? "P.M." : "A.M.";
                var closeHour = ((closeSplit[0] > 0 && closeSplit[0] < 13) ? closeSplit[0] : (closeSplit[0] == 0) ? 12 : closeSplit[0] - 12);
                var closeMin = closeSplit[1];
                temp = closeHour.toString().split("");
                if (temp[0] == 0) {
                    closeHour = temp.slice(1);
                }
                if (isNaN(openHour) || isNaN(openMin)) {
                    var Open = "Enter Valid Time";
                }
                else {
                    var Open = openHour + ":" + openMin + " " + otemp;

                }

                if (isNaN(closeHour) || isNaN(closeMin)) {
                    var Close = "Enter Valid Time";
                }
                else {
                    var Close = closeHour + ":" + closeMin + " " + ctemp;
                }


                //alert(Open + " " + Close);

                $("span[id=saturdayOpen]").text(Open);
                $("span[id=saturdayClose]").text(Close);
            }



        });




        self.Save = function () {
            var $this = this;

            var location = $('#locationtype :selected').text();
            var category = $('#category :selected').text();
            //var rate = $('input:radio[name=rating]:checked').val();



            if (self.isValid()) {
                // alert('valid data');
                //alert(" sunday time: " + self.sunOpen() + " " + self.sunClose());

                self.errors = ko.validation.group(self);

                //$("#submitUserButton").on("click", function () {
                //    $.post("RoundHere/Home/CreateQueryExecution", {

                //    });
                //});
            }
            else {
                self.errors.showAllMessages();
            }

        }
        //end save
        self.errors = ko.validation.group(self, { deep: true });
    };
    //end function

    var model = new displayVM();
    ko.applyBindings(model);

});


//chart hours

//self.sundayTime = ko.observable();

//var sunOpen = $('input');

//if (self.sunCB() == true) {
//    self.sundayTime = ko.observable("Closed");
//}
//else {
//    self.sundayTime = ko.observable(self.sunOpen());
//}

//var checkSunday = function () {
//    if (self.sunCB() == true) {
//        alert("reach");
//        $("span").text("closed");
//    }
//    else {
//        $("span").text(self.sunOpen());
//    }
//};

//$("input[name = 'sunCheck']:checked").on("click", checkSunday);