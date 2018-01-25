app.controller("produtoController", function($scope){
    
    $scope.names = [ 'Vestido Must-Have Sweatshirt' ];
    
    $scope.sizes = [ '17' , '18' , '19'];
    
    $scope.addWishlist = function() {
        var size = document.getElementById("size");
        var name = $scope.names;
        var itemWishlist = angular.element( document.querySelector( '#wishlist' ) );
        itemWishlist.append('<p>O ' + name + ' no tamanho ' + size.value + ' foi adicionado a lista de desejos.</p>');     
    }

});