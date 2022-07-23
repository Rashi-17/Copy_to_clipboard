$(document).ready(function(){
    var text=''
    $('#copyBtn').click(function(){
        $('#text').select();
        document.execCommand('copy');
        text=$('#text').val();
    })

    $('#pasteBtn').click(function(){
        $('#text2').val(text);
    })

    $('#clearBtn').click(function(){
        $('#text').val('');
    })
})