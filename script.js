$(document).ready(function(){
    $('keyboard-upper-container').hide();

    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    var sentenceNum = 0;
    var letterNum = 0;
    var sentence = sentences[sentenceNum];
    var letter = sentence.charAt(letterNum);
    var errors = 0;
    var startTime;
    $('#sentence').text(sentence);
    $('#target-letter').text(letter);

    $(document).keydown(function(e){
        if(e.shiftKey){
            $('#keyboard-upper-container').hide();
            $('#keyboard-upper-container').show();
        }
    });
    

    $(document).keypress()
});