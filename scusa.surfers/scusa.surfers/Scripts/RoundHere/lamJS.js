

$(document).ready(function () {

    //$('.timepicker').timepicker();

    //$("#phoneinput").inputmask({
    //    mask: '999-999-9999'
    //})

    $('#phoneinput').mask('(999) 999-9999');
    $('#zipcodeinput').mask('99999');




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
        self.address = ko.observable();
        self.phone = ko.observable();
        self.zipcode = ko.observable();
        self.city = ko.observable();
        self.review = ko.observable();
        self.picbutton = ko.observable();
        self.cancel = ko.observable();

        //$("#form-group1").validate({
        //    rules: {
        //        test: {
        //            minlength: 3,
        //            required: true
        //        }
        //    },
        //    showErrors: function (errorMap, errorList) {
        //        $.each(this.successList, function (index, value) {
        //            return $(value).popover("hide");
        //        });
        //        return $.each(errorList, function (index, value) {
        //            var _popover;
        //            console.log(value.message);
        //            _popover = $(value.element).popover({
        //                trigger: "manual",
        //                placement: "bottom",
        //                content: value.message,
        //                template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\"><p></p></div></div></div>"
        //            });
        //            _popover.data("popover").options.content = value.message;
        //            return $(value.element).popover("show");
        //        });
        //    }
        //});

        self.Save = function () {
            //$("input,select").not("[type=submit]").jqBootstrapValidation();


            var location = $('#locationtype :selected').text();
            var category = $('#category :selected').text();
            var rate = $('input:radio[name=rating]:checked').val();

            //alert("name: " + self.name());
            //alert("address: " + self.address());
            //alert("zipcode: " + self.zipcode());
            //alert("city: " + self.city());
            //alert("phone: " + self.phone());
            //alert("open day: " + self.sunOpen());
            //alert("open to close: " + self.sunClose());
            //alert("closed: " + self.monCB());
            //alert("category: " + category);
            //alert("location: " + location);
            //alert("rate: " + rate);
            //alert("review: " + self.review());

            //if (self.sunCB() == true) {
            //    var sundayOpen = 'closed';

            //    //alert("sunday: " + self.sunCB() + " " + sundayOpen + " " + sunOpenTime + " " + sunCloseTime);
            //}
            //else {
            //    var sundayOpen = 'open';
            //    var sunOpenTime = self.sunOpen();
            //    var sunCloseTime = self.sunClose();
            //    //alert("sunday: " + self.sunCB() + " " + sundayOpen + " " + sunOpenTime + " " + sunCloseTime);

            //}

            //if (sunOpenTime == null && sunCloseTime == null && sundayOpen == 'closed') {
            //    sunOpenTime = 'closed';
            //    sunCloseTime = 'closed';
            //    alert("sunday: " + self.sunCB() + " " + sundayOpen + " " + sunOpenTime + " " + sunCloseTime);
            //}
            //else {
            //    alert("Please enter an open time and close time");
            //}



        };
    };


    var model = new displayVM();
    ko.applyBindings(model);

});


//function required( validation )
//{
    
//    var x = document.forms[]["fname"].value;
//    if (x == null || x == "") {
//        alert("First name must be filled out");
//        return false;
//    }

//}




