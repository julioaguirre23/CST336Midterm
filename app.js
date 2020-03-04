var keyData = $('#btnSubmit').val();
console.log($('#btnSubmit').val());
function findBook(){
    $("#btnSubmit").click(function(){
        $.ajax({
            method: 'GET',
            url: 'http://openlibrary.org/api/books?bibkeys=ISBN:' + keyData + '&format=json&jscmd=data',
            dataType: "json",
            // data:{
                
            // },
            success:function(data){
                var getInfo = data["ISBN:" + keyData];
                var title = getInfo.details.title,
                author = getInfo.details.authors[keyData].name;
                $('.title').text(title);
                $('.author').text(author);
            }
        });
});
}
$("#forms").submit(function(e) {
    e.preventDefault();
});
findBook();
