var x =angular.module("app",[])
x.controller("cont",function($scope){
    $scope.btnplus=function() {
        $(".inputbox").slideToggle(1000);
    }
        $scope.alltext = [];
        $scope.btnsubmit = function () {
            $scope.alltext.push($scope.text);
            $(".textfield").val("");

    }
        $scope.btncancel=function(){
            $(".inputbox").slideUp(500)
        }
        $scope.editdel=function(){
            // $(".editable").insertAfter($(this).closest(".output"))
        $scope.change=true;
            // $(".editable").css("display","block")

        }

})