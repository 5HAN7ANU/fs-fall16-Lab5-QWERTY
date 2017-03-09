$(document).ready(function(){
    $('#keyboard-upper-container').hide();

    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    var sentenceIndex = 0;
    var letterIndex = 0;
    var sentence = setences[sentenceIndex];
    var letter = sentence.charAt(letterIndex);
    var errors = 0;
    var startTime;
    $('#sentence').text(sentence);
    $('#target-letter').text(letter);

    $(document).keydown(function(e){
        if(e.shiftKey){
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    });

    $(document).keyup(function(e){
        if(e.which == 16){
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
        $('#highlight').removeClass('highlight');
    });

    $(document).keypress(function(e){
        $('#' + e.which).addClass('highlight');//add class in css 
        /*.highlight{
            background-color: red;
            color: blue;
        }*/

        if(!startTime){//if startTime has not been defined
            startTime = e.timeStamp;
        }
        
        if(letter.charCodeAt(0) == e.which){
            $('#feedback').append($('<span class="glyphicon glyphicon-ok"></span>'));
        }else{
            $('#feedback').append($('<span class="glyphicon glyphicon-remove"></span>'));
            errors++;
        }

        letterIndex++;
        if(letterIndex === sentence.length){
            //we have reached the end of the sentence
            //we need to move on to the next sentence
            sentenceIndex++;
            if(sentenceIndex === sentences.length){
                //there are no more sentences
                //end the game and display wpm
                var endTime = e.timeStamp;
                var difference = endTime - startTime;
                var elapsedMinutes = difference / 60000; 
                var wpm = 54 / elapsedMinutes - 2 * errors;
                $('#feedback').text('You typed ' + wpm + 'words per minute.');
                setTimeout(function(){
                    if(confirm('Would you like to play again?')){
                        sentenceIndex = 0;
                        sentence = sentences[sentenceIndex];
                        letterIndex = 0;
                        letter = sentence.charAt(letterIndex);
                        errors = 0;
                        startTime = undefined;

                        $('#sentence').text(sentence);
                        $('#target-letter').text(letter);
                        $('#feedback').empty();
                        $('#yellow-block').stop().css('left', '0');
                    }
                }, 5000);
            }else{
                //This newly incremented sentenceIndex is valid - there is a sentence here
                sentence = sentences[sentenceIndex];
                letterIndex = 0;
                letter = sentence.charAt(letterIndex);
                $('#sentence').text(sentence);
                $('#target-letter').text(letter);
                $('#yellow-block').stop().css('left', '0');
                $('#feedback').empty();
            }
        }else{
            //I am not at the end of the sentence
            letter = sentence.charAt(letterIndex);
            $('#target-letter').text(letter);
            $('#yellow-block').animate({
                left: '+=17.5px'
            }, 200);
        }
        e.preventDefault();//prevents space bar from scrolling the screen
    });
});