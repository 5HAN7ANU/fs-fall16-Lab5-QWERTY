$(document).ready(function(){
    $('#keyboard-upper-container').show();
    $('#keyboard-lower-container').hide();

    var highlight = function(a){
        console.log('highlighting #' + a);
        var b = '#' + a.toString();
        $(b).css('border-color', 'orangered');
        return;
    };

    var unhighlight = function(c){
        console.log('unhighlighting #' + c);
        var d = '#' + c.toString();
        $(d).css('border-color', 'white');
        return;
    };

    var nextSentence = function(sentenceNum){
        if(sentences[sentenceNum]){
            return sentences[sentenceNum];
        }else{
            return;
        };
    };

    var sentenceLetters = function(sentenceReceived){//returns an array with each letter in the sentence as an element
        var letter = '';
        var returnArray = [];
        for(var i = 0; i < sentenceReceived.length; i++){
            letter = sentenceReceived[i];
            returnArray.push(letter);
        }
        return returnArray;
    };

    var nextLetter = function(sentenceNum, letterNum){
        var sentence = sentences[sentenceNum];
        var lettersArray = sentenceLetters(sentence);
        var letterToPress = lettersArray[letterNum];
        return letterToPress; 
    };

    function highlightNextLetter(){
        $('#yellow-block').animate({'right' : '15px'});
    };

    var upKeyboard = false;
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    var sentenceNum = 0;
    var letterNum = 0;

    var sentenceToType = sentences[sentenceNum];
    console.log('sentence to type: ' + sentenceToType);
    $('#sentence').html(sentenceToType);

    var letterToType = nextLetter(sentenceNum, letterNum);
    console.log('letter to type: ' + letterToType);
    $('#target-letter').html(letterToType);

    $(document).keydown(function(e){
        var keyPressed = event.which;
        console.log('the pressed key is: ' + e.keyCode);

        if(keyPressed == 16){
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
            upKeyboard = true;
        };

        if(keyPressed == 32){
            highlight('32');
        }
        else if(keyPressed == 192){
            if(upKeyboard){
                highlight('126');
            }
            else{
                highlight('96');
            }
        }
        else if(keyPressed == 49){
            if(upKeyboard){
                highlight('33');
            }
            else{
                highlight('49');
            }
        }
        else if(keyPressed == 50){
            if(upKeyboard){
                highlight('64');
            }
            else{
                highlight('50');
            }
        }
        else if(keyPressed == 51){
            if(upKeyboard){
                highlight('35');
            }
            else{
                highlight('51');
            }
        }
        else if(keyPressed == 52){
            if(upKeyboard){
                highlight('36');
            }
            else{
                highlight('52');
            }
        }
        else if(keyPressed == 53){
            if(upKeyboard){
                highlight('37');
            }
            else{
                highlight('53');
            }
        }
        else if(keyPressed == 54){
            if(upKeyboard){
                highlight('94');
            }
            else{
                highlight('54');
            }
        }
        else if(keyPressed == 55){
            if(upKeyboard){
                highlight('38');
            }
            else{
                highlight('55');
            }
        }
        else if(keyPressed == 56){
            if(upKeyboard){
                highlight('42');
            }
            else{
                highlight('56');
            }
        }
        else if(keyPressed == 57){
            if(upKeyboard){
                highlight('40');
            }
            else{
                highlight('57');
            }
        }
        else if(keyPressed == 48){
            if(upKeyboard){
                highlight('41');
            }
            else{
                highlight('48');
            }
        }
        else if(keyPressed == 189){
            if(upKeyboard){
                highlight('95');
            }
            else{
                highlight('45');
            }
        }
        else if(keyPressed == 187){
            if(upKeyboard){
                highlight('43');
            }
            else{
                highlight('61');
            }
        }
        else if(keyPressed == 81){
            if(upKeyboard){
                highlight('81');
            }
            else{
                highlight('113');
            }
        }
        else if(keyPressed == 87){
            if(upKeyboard){
                highlight('87');
            }
            else{
                highlight('119');
            }
        }
        else if(keyPressed == 69){
            if(upKeyboard){
                highlight('69');
            }
            else{
                highlight('101');
            }
        }
        else if(keyPressed == 82){
            if(upKeyboard){
                highlight('82');
            }
            else{
                highlight('114');
            }
        }
        else if(keyPressed == 84){
            if(upKeyboard){
                highlight('84');
            }
            else{
                highlight('116');
            }
        }
        else if(keyPressed == 89){
            if(upKeyboard){
                highlight('89');
            }
            else{
                highlight('121');
            }
        }
        else if(keyPressed == 85){
            if(upKeyboard){
                highlight('85');
            }
            else{
                highlight('117');
            }
        }
        else if(keyPressed == 73){
            if(upKeyboard){
                highlight('73');
            }
            else{
                highlight('105');
            }
        }
        else if(keyPressed == 79){
            if(upKeyboard){
                highlight('79');
            }
            else{
                highlight('111');
            }
        }
        else if(keyPressed == 80){
            if(upKeyboard){
                highlight('80');
            }
            else{
                highlight('112');
            }
        }
        else if(keyPressed == 219){
            if(upKeyboard){
                highlight('123');
            }
            else{
                highlight('91');
            }
        }
        else if(keyPressed == 221){
            if(upKeyboard){
                highlight('125');
            }
            else{
                highlight('93');
            }
        }
        else if(keyPressed == 220){
            if(upKeyboard){
                highlight('124');
            }
            else{
                highlight('92');
            }
        }
        else if(keyPressed == 65){
            if(upKeyboard){
                highlight('65');
            }
            else{
                highlight('97');
            }
        }
        else if(keyPressed == 83){
            if(upKeyboard){
                highlight('83');
            }
            else{
                highlight('115');
            }
        }
        else if(keyPressed == 68){
            if(upKeyboard){
                highlight('68');
            }
            else{
                highlight('100');
            }
        }
        else if(keyPressed == 70){
            if(upKeyboard){
                highlight('70');
            }
            else{
                highlight('102');
            }
        }
        else if(keyPressed == 71){
            if(upKeyboard){
                highlight('71');
            }
            else{
                highlight('103');
            }
        }
        else if(keyPressed == 72){
            if(upKeyboard){
                highlight('72');
            }
            else{
                highlight('104');
            }
        }
        else if(keyPressed == 74){
            if(upKeyboard){
                highlight('74');
            }
            else{
                highlight('106');
            }
        }
        else if(keyPressed == 75){
            if(upKeyboard){
                highlight('75');
            }
            else{
                highlight('107');
            }
        }
        else if(keyPressed == 76){
            if(upKeyboard){
                highlight('76');
            }
            else{
                highlight('108');
            }
        }
        else if(keyPressed == 186){
            if(upKeyboard){
                highlight('58');
            }
            else{
                highlight('59');
            }
        }
        else if(keyPressed == 222){
            if(upKeyboard){
                highlight('34');
            }
            else{
                highlight('39');
            }
        }
        else if(keyPressed == 90){
            if(upKeyboard){
                highlight('90');
            }
            else{
                highlight('122');
            }
        }
        else if(keyPressed == 88){
            if(upKeyboard){
                highlight('88');
            }
            else{
                highlight('120');
            }
        }
        else if(keyPressed == 67){
            if(upKeyboard){
                highlight('67');
            }
            else{
                highlight('99');
            }
        }
        else if(keyPressed == 86){
            if(upKeyboard){
                highlight('86');
            }
            else{
                highlight('118');
            }
        }
        else if(keyPressed == 66){
            if(upKeyboard){
                highlight('66');
            }
            else{
                highlight('98');
            }
        }
        else if(keyPressed == 78){
            if(upKeyboard){
                highlight('78');
            }
            else{
                highlight('110');
            }
        }
        else if(keyPressed == 77){
            if(upKeyboard){
                highlight('77');
            }
            else{
                highlight('109');
            }
        }
        else if(keyPressed == 188){
            if(upKeyboard){
                highlight('60');
            }
            else{
                highlight('44');
            }
        }
        else if(keyPressed == 190){
            if(upKeyboard){
                highlight('62');
            }
            else{
                highlight('46');
            }
        }
        else if(keyPressed == 191){
            if(upKeyboard){
                highlight('63');
            }
            else{
                highlight('47');
            }
        }
        else{};                    
    });

    $(document).keyup(function(e){
        var keyReleased = event.which;
        console.log('the released key is: ' + e.keyCode);

        if (keyReleased == 16){
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            upKeyboard = false;
        }

        if (keyReleased == 32){
            unhighlight('32');
            pressedLetter = 32;
        }
        else if(keyReleased == 192){
            if(upKeyboard){
                unhighlight('126');
                pressedLetter = 126;
            }else{
                unhighlight('96');
                pressedLetter = 96;
            }
        }
        else if(keyReleased == 49){
            if(upKeyboard){
                unhighlight('33');
                pressedLetter = 33;
            }else{
                unhighlight('49');
                pressedLetter = 49;
            }
        }
        else if(keyReleased == 50){
            if(upKeyboard){
                unhighlight('64');
                pressedLetter = 64;
            }else{
                unhighlight('50');
                pressedLetter = 50;
            }
        }
        else if(keyReleased == 51){
            if(upKeyboard){
                unhighlight('35');
                pressedLetter = 35;
            }else{
                unhighlight('51');
                pressedLetter = 51;
            }
        }
        else if(keyReleased == 52){
            if(upKeyboard){
                unhighlight('36');
                pressedLetter = 36;
            }else{
                unhighlight('52');
                pressedLetter = 52;
            }
        }
        else if(keyReleased == 53){
            if(upKeyboard){
                unhighlight('37');
                pressedLetter = 37;
            }else{
                unhighlight('53');
                pressedLetter = 53;
            }
        }
        else if(keyReleased == 54){
            if(upKeyboard){
                unhighlight('94');
                pressedLetter = 94;
            }else{
                unhighlight('54');
                pressedLetter = 54;
            }
        }
        else if(keyReleased == 55){
            if(upKeyboard){
                unhighlight('38');
                pressedLetter = 38;
            }else{
                unhighlight('55');
                pressedLetter = 55;
            }
        }
        else if(keyReleased == 56){
            if(upKeyboard){
                unhighlight('42');
                pressedLetter = 42;
            }else{
                unhighlight('56');
                pressedLetter = 56;
            }
        }
        else if(keyReleased == 57){
            if(upKeyboard){
                unhighlight('40');
                pressedLetter = 40;
            }else{
                unhighlight('57');
                pressedLetter = 57;
            }
        }
        else if(keyReleased == 48){
            if(upKeyboard){
                unhighlight('41');
                pressedLetter = 41;
            }else{
                unhighlight('48')
                pressedLetter = 48;
            }
        }
        else if(keyReleased == 189){
            if(upKeyboard){
                unhighlight('95');
                pressedLetter = 95;
            }else{
                unhighlight('45');
                pressedLetter = 45;
            }
        }
        else if(keyReleased == 187){
            if(upKeyboard){
                unhighlight('43');
                pressedLetter = 43;
            }else{
                unhighlight('61');
                pressedLetter = 61;
            }
        }
        else if(keyReleased == 81){
            if(upKeyboard){
                unhighlight('81');
                pressedLetter = 81;
            }else{
                unhighlight('113');
                pressedLetter = 113;
            }
        }
        else if(keyReleased == 87){
            if(upKeyboard){
                unhighlight('87');
                pressedLetter = 87;
            }else{
                unhighlight('119');
                pressedLetter = 119;
            }
        }
        else if(keyReleased == 69){
            if(upKeyboard){
                unhighlight('69');
                pressedLetter = 69;
            }else{
                unhighlight('101');
                pressedLetter = 101;
            }
        }
        else if(keyReleased == 82){
            if(upKeyboard){
                unhighlight('82');
                pressedLetter = 82;
            }else{
                unhighlight('114');
                pressedLetter = 114;
            }
        }
        else if(keyReleased == 84){
            if(upKeyboard){
                unhighlight('84');
                pressedLetter = 84;
            }else{
                unhighlight('116');
                pressedLetter = 116;
            }
        }
        else if(keyReleased == 89){
            if(upKeyboard){
                unhighlight('89');
                pressedLetter = 89;
            }else{
                unhighlight('121');
                pressedLetter = 121;
            }
        }
        else if(keyReleased == 85){
            if(upKeyboard){
                unhighlight('85');
                pressedLetter = 85;
            }else{
                unhighlight('117');
                pressedLetter = 117;
            }
        }
        else if(keyReleased == 73){
            if(upKeyboard){
                unhighlight('73');
                pressedLetter = 73;
            }else{
                unhighlight('105');
                pressedLetter = 105;
            }
        }
        else if(keyReleased == 79){
            if(upKeyboard){
                unhighlight('79');
                pressedLetter = 79;
            }else{
                unhighlight('111');
                pressedLetter = 111;
            }
        }
        else if(keyReleased == 80){
            if(upKeyboard){
                unhighlight('80');
                pressedLetter = 80;
            }else{
                unhighlight('112');
                pressedLetter = 112;
            }                        
        }
        else if(keyReleased == 219){
            if(upKeyboard){
                unhighlight('123');
                pressedLetter = 123;
            }else{
                unhighlight('91');
                pressedLetter = 91;
            }
        }
        else if(keyReleased == 221){
            if(upKeyboard){
                unhighlight('125');
                pressedLetter = 125;
            }else{
                unhighlight('93');
                pressedLetter = 93;
            }
        }
        else if(keyReleased == 220){
            if(upKeyboard){
                unhighlight('124');
                pressedLetter = 124;
            }else{
                unhighlight('92');
                pressedLetter = 92;
            }
        }
        else if(keyReleased == 65){
            if(upKeyboard){
                unhighlight('65');
                pressedLetter = 65;
            }else{
                unhighlight('97');
                pressedLetter = 97;
            }
        }
        else if(keyReleased == 83){
            if(upKeyboard){
                unhighlight('83');
                pressedLetter = 83;
            }else{
                unhighlight('115');
                pressedLetter = 115;
            }
        }
        else if(keyReleased == 68){
            if(upKeyboard){
                unhighlight('68');
                pressedLetter = 68;
            }else{
                unhighlight('100');
                pressedLetter = 100;
            }
        }
        else if(keyReleased == 70){
            if(upKeyboard){
                unhighlight('70');
                pressedLetter = 70;
            }else{
                unhighlight('102');
                pressedLetter = 102;
            }
        }
        else if(keyReleased == 71){
            if(upKeyboard){
                unhighlight('71');
                pressedLetter = 71;
            }else{
                unhighlight('103');
                pressedLetter = 103;
            }
        }
        else if(keyReleased == 72){
            if(upKeyboard){
                unhighlight('72');
                pressedLetter = 72;
            }else{
                unhighlight('104');
                pressedLetter = 104;
            }
        }
        else if(keyReleased == 74){
            if(upKeyboard){
                unhighlight('74');
                pressedLetter = 74;
            }else{
                unhighlight('106');
                pressedLetter = 106;
            }
        }
        else if(keyReleased == 75){
            if(upKeyboard){
                unhighlight('75');
                pressedLetter = 75;
            }else{
                unhighlight('107');
                pressedLetter = 107;
            }
        }
        else if(keyReleased == 76){
            if(upKeyboard){
                unhighlight('76');
                pressedLetter = 76;
            }else{
                unhighlight('108');
                pressedLetter = 108;
            }
        }
        else if(keyReleased == 186){
            if(upKeyboard){
                unhighlight('58');
                pressedLetter = 58;
            }else{
                unhighlight('59');
                pressedLetter = 59;
            }
        }
        else if(keyReleased == 222){
            if(upKeyboard){
                unhighlight('34');
                pressedLetter = 34;
            }else{
                unhighlight('39');
                pressedLetter = 39;
            }
        }
        else if(keyReleased == 90){
            if(upKeyboard){
                unhighlight('90');
                pressedLetter = 90;
            }else{
                unhighlight('122');
                pressedLetter = 122;
            }
        }
        else if(keyReleased == 88){
            if(upKeyboard){
                unhighlight('88');
                pressedLetter = 88;
            }else{
                unhighlight('120');
                pressedLetter = 120;
            }
        }
        else if(keyReleased == 67){
        if(upKeyboard){
                unhighlight('67');
                pressedLetter = 67;
            }else{
                unhighlight('99');
                pressedLetter = 99;
            }
        }
        else if(keyReleased == 86){
            if(upKeyboard){
                unhighlight('86');
                pressedLetter = 86;
            }else{
                unhighlight('118');
                pressedLetter = 118;
            }
        }
        else if(keyReleased == 66){
            if(upKeyboard){
                unhighlight('66');
                pressedLetter = 66;
            }else{
                unhighlight('98');
                pressedLetter = 98;
            }
        }
        else if(keyReleased == 78){
            if(upKeyboard){
                unhighlight('78');
                pressedLetter = 78;
            }else{
                unhighlight('110');
                pressedLetter = 110;
            }
        }
        else if(keyReleased == 77){
            if(upKeyboard){
                unhighlight('77');
                pressedLetter = 77;
            }else{
                unhighlight('109');
                pressedLetter = 109;
            }
        }
        else if(keyReleased == 188){
            if(upKeyboard){
                unhighlight('60');
                pressedLetter = 60;
            }else{
                unhighlight('44');
                pressedLetter = 44;
            }
        }
        else if(keyReleased == 190){
            if(upKeyboard){
                unhighlight('62');
                pressedLetter = 62;
            }else{
                unhighlight('46');
                pressedLetter = 46;
            }
        }
        else if(keyReleased == 191){
            if(upKeyboard){
                unhighlight('63');
                pressedLetter = 63;
            }else{
                unhighlight('47');
                pressedLetter = 47;
            }
        }
        else{};
    });

    function playGame(){
        confirm('Are you ready to start?');
        var pressedLetter = 0;

        if(upKeyboard){
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
        else{
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

        while(sentenceNum < sentences.length){
            $('#sentence').html(sentenceToType);

            while(letterNum < sentenceToType.length){
                $('#target-letter').html(letterToType);
                console.log('This is where it breaks. letterToType: ' + letterToType);
                letterToType = letterToType.charCodeAt(0);

                if(letterToType == pressedLetter){
                    $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
                    $('#feedback').css('position', 'relative');
                    letterNum++;
                }else{
                    $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
                    $('#feedback').css('position', 'relative');
                    letterNum++;
                };
                highlightNextLetter();
                $('#target-letter').html('');
                letterToType = nextLetter(sentenceNum, letterNum);
            };

            sentenceNum++;
            letterNum = 0;
            sentenceToType = sentences[sentenceNum];
            $('.glyphicon glyphicon-ok').remove();
            $('.glyphicon glyphicon-remove').remove();
            $('#sentence').html('');
            $('#yellow-block').css({'left' : '0'});
        };
    };
    playGame();
});