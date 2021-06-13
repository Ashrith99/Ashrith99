var number_mvs=0;


function start_game() {
    var tab_position = new Array();
    while(tab_position.length < 25) {
        var numero = Math.round(Math.random() * 100 );
        if( (numero==11) || (numero==12) || (numero==13) || (numero==14) || (numero==15) || (numero==21) || (numero==22) || (numero==23) || (numero==24) || (numero==25) || (numero==31) || (numero==32) || (numero==33) || (numero==34) || (numero==35) || (numero==41) || (numero==42) || (numero==43) || (numero==44) || (numero==45) || (numero==51) || (numero==52) || (numero==53) || (numero==54) || (numero==55) ){
            if(!tab_position.includes(numero)){

                tab_position[tab_position.length] = numero ;
            }   
        }
    }

    document.getElementById('p11').textContent = tab_position[0];
    document.getElementById('p11').style.background= 'url('+tab_position[0]+'.jpg)';
   
    document.getElementById('p12').textContent = tab_position[1];
    document.getElementById('p12').style.background ='url('+tab_position[1]+'.jpg)';
   
    document.getElementById('p13').textContent = tab_position[2];
    document.getElementById('p13').style.background ='url('+tab_position[2]+'.jpg)';
   
    document.getElementById('p14').textContent = tab_position[3];
    document.getElementById('p14').style.background = 'url('+tab_position[3]+'.jpg)';
   
    document.getElementById('p15').textContent = tab_position[4];
    document.getElementById('p15').style.background = 'url('+tab_position[4]+'.jpg)';
   
    document.getElementById('p21').textContent = tab_position[5];
    document.getElementById('p21').style.background = 'url('+tab_position[5]+'.jpg)';
   
    document.getElementById('p22').textContent = tab_position[6];
    document.getElementById('p22').style.background = 'url('+tab_position[6]+'.jpg)';
   
    document.getElementById('p23').textContent = tab_position[7];
    document.getElementById('p23').style.background = 'url('+tab_position[7]+'.jpg)';
   
    document.getElementById('p24').textContent = tab_position[8];
    document.getElementById('p24').style.background = 'url('+tab_position[8]+'.jpg)';
   
   
   
    document.getElementById('p25').textContent = tab_position[9];
    document.getElementById('p25').style.background = 'url('+tab_position[9]+'.jpg)';
   
    document.getElementById('p31').textContent = tab_position[10];
    document.getElementById('p31').style.background = 'url('+tab_position[10]+'.jpg)';
   
    document.getElementById('p32').textContent = tab_position[11];
    document.getElementById('p32').style.background = 'url('+tab_position[11]+'.jpg)';
   
    document.getElementById('p33').textContent = tab_position[12];
    document.getElementById('p33').style.background = 'url('+tab_position[12]+'.jpg)';
   
    document.getElementById('p34').textContent = tab_position[13]; 
    document.getElementById('p34').style.background = 'url('+tab_position[13]+'.jpg)';
   
    document.getElementById('p35').textContent = tab_position[14];
    document.getElementById('p35').style.background = 'url('+tab_position[14]+'.jpg)';
   
    document.getElementById('p41').textContent = tab_position[15];
    document.getElementById('p41').style.background = 'url('+tab_position[15]+'.jpg)';
   
    document.getElementById('p42').textContent = tab_position[16];
    document.getElementById('p42').style.background = 'url('+tab_position[16]+'.jpg)';
   
    document.getElementById('p43').textContent = tab_position[17];
    document.getElementById('p43').style.background = 'url('+tab_position[17]+'.jpg)';
   
    document.getElementById('p44').textContent = tab_position[18];
    document.getElementById('p44').style.background = 'url('+tab_position[18]+'.jpg)';
   
    document.getElementById('p45').textContent = tab_position[19];
    document.getElementById('p45').style.background = 'url('+tab_position[19]+'.jpg)';
   
    document.getElementById('p51').textContent = tab_position[20];
    document.getElementById('p51').style.background = 'url('+tab_position[20]+'.jpg)';
  
    document.getElementById('p52').textContent = tab_position[21];
    document.getElementById('p52').style.background = 'url('+tab_position[21]+'.jpg)';
   
    document.getElementById('p53').textContent = tab_position[22];
    document.getElementById('p53').style.background = 'url('+tab_position[22]+'.jpg)';
   
    document.getElementById('p54').textContent = tab_position[23];
    document.getElementById('p54').style.background = 'url('+tab_position[23]+'.jpg)';
   
    document.getElementById('p55').textContent = tab_position[24];
    document.getElementById('p55').style.background = 'url('+tab_position[24]+'.jpg)';
    
    document.getElementById('moves').textContent = "Moves 0";
    number_mvs = 0;
    document.getElementById('launch').textContent = 'Restart Game';

}

function check_win(){
    var cell1 = document.getElementById('p22').textContent;
    var cell2 = document.getElementById('p23').textContent;
    var cell3 = document.getElementById('p24').textContent;
    var cell4 = document.getElementById('p32').textContent;
    var cell5 = document.getElementById('p33').textContent;
    var cell6 = document.getElementById('p34').textContent;
    var cell7 = document.getElementById('p42').textContent;
    var cell8 = document.getElementById('p43').textContent;
    var cell9 = document.getElementById('p44').textContent;

    if((cell1 == '22' || '33' || '43' || '55') && (cell2 == '23' || '12' || '13' || '15') && (cell3 == '21' || '24' || '35' || '45') && (cell4 == '32' || '33' || '43' || '55') && (cell5 == '33' || '33' || '43' || '55') && (cell6 == '34' || '33' || '43' || '55') && (cell7 == '42' || '33' || '43' || '55') && (cell8 == '43' || '33' || '43' || '55') && (cell9 == '44' || '33' || '43' || '55') ){
        return true;
    }else {
        return false;
    }
}

function reset_images() {
    document.getElementById('p22').style.visibility = 'hidden';
                                document.getElementById('p23').style.visibility = 'visible';
                                document.getElementById('p24').style.visibility = 'visible';
                                document.getElementById('p32').style.visibility = 'visible';
                                document.getElementById('p33').style.visibility = 'visible';
                                document.getElementById('p34').style.visibility = 'visible';
                                document.getElementById('p52').style.visibility = 'visible';
                                document.getElementById('p53').style.visibility = 'visible';
                                document.getElementById('p54').style.visibility = 'visible';

                                document.getElementById('launch').textContent = 'Start Game';
                                number_mvs = 0;
                                document.getElementById('moves').textContent = 'Moves: 0';

     
}

function back_to_normal() {
    document.getElementById('tab_grid').style.background = 'url("hgd.jpg")'

    setTimeout(reset_images, 5000);
}



//switching

function switching(cell) {
    if(document.getElementById(cell).textContent != '11'){
        switch  (cell){
            case 'p11':
                        if(document.getElementById('p12').textContent == '11') {
                            var temp_val = document.getElementById('p12').textContent;
                            document.getElementById('p12').textContent = document.getElementById('p11').textContent;
                            document.getElementById('p11').textContent = temp_val;

                            document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.jpg)';
                            document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                        } 
                        if(document.getElementById('p21').textContent == '11') {
                            var temp_val = document.getElementById('p21').textContent;
                            document.getElementById('p21').textContent = document.getElementById('p11').textContent;
                            document.getElementById('p11').textContent = temp_val;

                            document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.jpg)';
                            document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                        }  
                        
                        if(check_win()) {
                            setTimeout(function() {
                                document.getElementById('p22').style.visibility = 'hidden';
                                document.getElementById('p23').style.visibility = 'hidden';
                                document.getElementById('p24').style.visibility = 'hidden';
                                document.getElementById('p32').style.visibility = 'hidden';
                                document.getElementById('p33').style.visibility = 'hidden';
                                document.getElementById('p34').style.visibility = 'hidden';
                                document.getElementById('p52').style.visibility = 'hidden';
                                document.getElementById('p53').style.visibility = 'hidden';
                                document.getElementById('p54').style.visibility = 'hidden';
                                document.getElementById('tab_grid').style.background ='url("congo.gif")'

                                setTimeout(back_to_normal, 5000)


                            },500);

                        }
            break;
            case 'p12':
                         if(document.getElementById('p11').textContent == '11') {
                            var temp_val = document.getElementById('p11').textContent;
                            document.getElementById('p11').textContent = document.getElementById('p12').textContent;
                            document.getElementById('p12').textContent = temp_val;

                            document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.jpg)';
                            document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.jpg)';
                             number_mvs++;
                             document.getElementById('moves').textContent="Moves: "+number_mvs
                        }   
                        if(document.getElementById('p22').textContent == '11') {
                            var temp_val = document.getElementById('p22').textContent;
                            document.getElementById('p22').textContent = document.getElementById('p12').textContent;
                            document.getElementById('p12').textContent = temp_val;

                            document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                            document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.jpg)';
                             number_mvs++;
                             document.getElementById('moves').textContent="oves: "+number_mvs
                        }   
                        if(document.getElementById('p13').textContent == '11') {
                            var temp_val = document.getElementById('p13').textContent;
                            document.getElementById('p13').textContent = document.getElementById('p12').textContent;
                            document.getElementById('p12').textContent = temp_val;

                            document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.jpg)';
                            document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                        }   
            break;
            case 'p13':
                         if(document.getElementById('p12').textContent == '11') {
                             var temp_val = document.getElementById('p12').textContent;
                             document.getElementById('p12').textContent = document.getElementById('p13').textContent;
                             document.getElementById('p13').textContent = temp_val;

                             document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.jpg)';
                             document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.jpg)';
                             number_mvs++;
                             document.getElementById('moves').textContent="Moves: "+number_mvs
                        }   
                        if(document.getElementById('p23').textContent == '11') {
                            var temp_val = document.getElementById('p23').textContent;
                            document.getElementById('p23').textContent = document.getElementById('p13').textContent;
                            document.getElementById('p13').textContent = temp_val;

                            document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                            document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                       }   
                       if(document.getElementById('p14').textContent == '11') {
                        var temp_val = document.getElementById('p14').textContent;
                        document.getElementById('p14').textContent = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = temp_val;

                        document.getElementById('p14').style.background = 'url('+document.getElementById('p14').textContent+'.jpg)';
                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.jpg)';
                        number_mvs++;
                        document.getElementById('moves').textContent="Moves: "+number_mvs
                      }   
            
            break;
            case 'p14':
                        if(document.getElementById('p13').textContent == '11') {
                            var temp_val = document.getElementById('p13').textContent;
                            document.getElementById('p13').textContent = document.getElementById('p14').textContent;
                            document.getElementById('p14').textContent = temp_val;

                            document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.jpg)';
                            document.getElementById('p14').style.background = 'url('+document.getElementById('p14').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                        }   
                        if(document.getElementById('p24').textContent == '11') {
                            var temp_val = document.getElementById('p24').textContent;
                            document.getElementById('p24').textContent = document.getElementById('p14').textContent;
                            document.getElementById('p14').textContent = temp_val;

                            document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                            document.getElementById('p14').style.background = 'url('+document.getElementById('p14').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                        }   
                        if(document.getElementById('p15').textContent == '11') {
                            var temp_val = document.getElementById('p15').textContent;
                            document.getElementById('p15').textContent = document.getElementById('p14').textContent;
                            document.getElementById('p14').textContent = temp_val;

                            document.getElementById('p15').style.background = 'url('+document.getElementById('p15').textContent+'.jpg)';
                            document.getElementById('p14').style.background = 'url('+document.getElementById('p14').textContent+'.jpg)';
                            number_mvs++;
                            document.getElementById('moves').textContent="Moves: "+number_mvs
                        }   
                        
            
            break;
            case 'p15':
                if(document.getElementById('p14').textContent == '11') {
                    var temp_val = document.getElementById('p14').textContent;
                    document.getElementById('p14').textContent = document.getElementById('p15').textContent;
                    document.getElementById('p15').textContent = temp_val;

                    document.getElementById('p14').style.background = 'url('+document.getElementById('p14').textContent+'.jpg)';
                    document.getElementById('p15').style.background = 'url('+document.getElementById('p15').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }   
                if(document.getElementById('p25').textContent == '11') {
                    var temp_val = document.getElementById('p25').textContent;
                    document.getElementById('p25').textContent = document.getElementById('p15').textContent;
                    document.getElementById('p15').textContent = temp_val;

                    document.getElementById('p25').style.background = 'url('+document.getElementById('p25').textContent+'.jpg)';
                    document.getElementById('p15').style.background = 'url('+document.getElementById('p15').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }   
            
            break;
            case 'p21':
                if(document.getElementById('p11').textContent == '11') {
                    var temp_val = document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.jpg)';
                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p31').textContent == '11') {
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.jpg)';
                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p22':
                if(document.getElementById('p12').textContent == '11') {
                    var temp_val = document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.jpg)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p21').textContent == '11') {
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.jpg)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p32').textContent == '11') {
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p23').textContent == '11') {
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p23':
                if(document.getElementById('p13').textContent == '11') {
                    var temp_val = document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.jpg)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p33').textContent == '11') {
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p24').textContent == '11') {
                    var temp_val = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = temp_val;

                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p24':
                if(document.getElementById('p14').textContent == '11') {
                    var temp_val = document.getElementById('p14').textContent;
                    document.getElementById('p14').textContent = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = temp_val;

                    document.getElementById('p14').style.background = 'url('+document.getElementById('p14').textContent+'.jpg)';
                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p23').textContent == '11') {
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p34').textContent == '11') {
                    var temp_val = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = temp_val;

                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p25').textContent == '11') {
                    var temp_val = document.getElementById('p25').textContent;
                    document.getElementById('p25').textContent = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = temp_val;

                    document.getElementById('p25').style.background = 'url('+document.getElementById('p25').textContent+'.jpg)';
                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p25':
                if(document.getElementById('p15').textContent == '11') {
                    var temp_val = document.getElementById('p15').textContent;
                    document.getElementById('p15').textContent = document.getElementById('p25').textContent;
                    document.getElementById('p25').textContent = temp_val;

                    document.getElementById('p15').style.background = 'url('+document.getElementById('p15').textContent+'.jpg)';
                    document.getElementById('p25').style.background = 'url('+document.getElementById('p25').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p24').textContent == '11') {
                    var temp_val = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = document.getElementById('p25').textContent;
                    document.getElementById('p25').textContent = temp_val;

                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    document.getElementById('p25').style.background = 'url('+document.getElementById('p25').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p35').textContent == '11') {
                    var temp_val = document.getElementById('p35').textContent;
                    document.getElementById('p35').textContent = document.getElementById('p25').textContent;
                    document.getElementById('p25').textContent = temp_val;

                    document.getElementById('p35').style.background = 'url('+document.getElementById('p35').textContent+'.jpg)';
                    document.getElementById('p25').style.background = 'url('+document.getElementById('p25').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p31':
                if(document.getElementById('p21').textContent == '11') {
                    var temp_val = document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.jpg)';
                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p32').textContent == '11') {
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p41').textContent == '11') {
                    var temp_val = document.getElementById('p41').textContent;
                    document.getElementById('p41').textContent = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = temp_val;

                    document.getElementById('p41').style.background = 'url('+document.getElementById('p41').textContent+'.jpg)';
                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p32':
                if(document.getElementById('p22').textContent == '11') {
                    var temp_val = document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.jpg)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p31').textContent == '11') {
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.jpg)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p42').textContent == '11') {
                    var temp_val = document.getElementById('p42').textContent;
                    document.getElementById('p42').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p33').textContent == '11') {
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p33':
                if(document.getElementById('p23').textContent == '11') {
                    var temp_val = document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.jpg)';
                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p32').textContent == '11') {
                    var temp_val = document.getElementById('p32').textContent;
                    document.getElementById('p32').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p43').textContent == '11') {
                    var temp_val = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p34').textContent == '11') {
                    var temp_val = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = temp_val;

                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p34':
                if(document.getElementById('p24').textContent == '11') {
                    var temp_val = document.getElementById('p24').textContent;
                    document.getElementById('p24').textContent = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = temp_val;

                    document.getElementById('p24').style.background = 'url('+document.getElementById('p24').textContent+'.jpg)';
                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p33').textContent == '11') {
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p44').textContent == '11') {
                    var temp_val = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = temp_val;

                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p35').textContent == '11') {
                    var temp_val = document.getElementById('p35').textContent;
                    document.getElementById('p35').textContent = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = temp_val;

                    document.getElementById('p35').style.background = 'url('+document.getElementById('p35').textContent+'.jpg)';
                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p35':
                if(document.getElementById('p25').textContent == '11') {
                    var temp_val = document.getElementById('p25').textContent;
                    document.getElementById('p25').textContent = document.getElementById('p35').textContent;
                    document.getElementById('p35').textContent = temp_val;

                    document.getElementById('p25').style.background = 'url('+document.getElementById('p25').textContent+'.jpg)';
                    document.getElementById('p35').style.background = 'url('+document.getElementById('p35').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p34').textContent == '11') {
                    var temp_val = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = document.getElementById('p35').textContent;
                    document.getElementById('p35').textContent = temp_val;

                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    document.getElementById('p35').style.background = 'url('+document.getElementById('p35').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p45').textContent == '11') {
                    var temp_val = document.getElementById('p45').textContent;
                    document.getElementById('p45').textContent = document.getElementById('p35').textContent;
                    document.getElementById('p35').textContent = temp_val;

                    document.getElementById('p45').style.background = 'url('+document.getElementById('p45').textContent+'.jpg)';
                    document.getElementById('p35').style.background = 'url('+document.getElementById('p35').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p41':
                if(document.getElementById('p31').textContent == '11') {
                    var temp_val = document.getElementById('p31').textContent;
                    document.getElementById('p31').textContent = document.getElementById('p41').textContent;
                    document.getElementById('p41').textContent = temp_val;

                    document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.jpg)';
                    document.getElementById('p41').style.background = 'url('+document.getElementById('p41').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p42').textContent == '11') {
                    var temp_val = document.getElementById('p42').textContent;
                    document.getElementById('p42').textContent = document.getElementById('p41').textContent;
                    document.getElementById('p41').textContent = temp_val;

                    document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                    document.getElementById('p41').style.background = 'url('+document.getElementById('p41').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p51').textContent == '11') {
                    var temp_val = document.getElementById('p51').textContent;
                    document.getElementById('p51').textContent = document.getElementById('p41').textContent;
                    document.getElementById('p41').textContent = temp_val;

                    document.getElementById('p51').style.background = 'url('+document.getElementById('p51').textContent+'.jpg)';
                    document.getElementById('p41').style.background = 'url('+document.getElementById('p41').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p42':if(document.getElementById('p32').textContent == '11') {
                var temp_val = document.getElementById('p32').textContent;
                document.getElementById('p32').textContent = document.getElementById('p42').textContent;
                document.getElementById('p42').textContent = temp_val;

                document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.jpg)';
                document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                number_mvs++;
                document.getElementById('moves').textContent="Moves: "+number_mvs
            } 
            if(document.getElementById('p41').textContent == '11') {
                var temp_val = document.getElementById('p41').textContent;
                document.getElementById('p41').textContent = document.getElementById('p42').textContent;
                document.getElementById('p42').textContent = temp_val;

                document.getElementById('p41').style.background = 'url('+document.getElementById('p41').textContent+'.jpg)';
                document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                number_mvs++;
                document.getElementById('moves').textContent="Moves: "+number_mvs
            } 
            if(document.getElementById('p52').textContent == '11') {
                var temp_val = document.getElementById('p52').textContent;
                document.getElementById('p52').textContent = document.getElementById('p42').textContent;
                document.getElementById('p42').textContent = temp_val;

                document.getElementById('p52').style.background = 'url('+document.getElementById('p52').textContent+'.jpg)';
                document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                number_mvs++;
                document.getElementById('moves').textContent="Moves: "+number_mvs
            } 
            if(document.getElementById('p43').textContent == '11') {
                var temp_val = document.getElementById('p43').textContent;
                document.getElementById('p43').textContent = document.getElementById('p42').textContent;
                document.getElementById('p42').textContent = temp_val;

                document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                number_mvs++;
                document.getElementById('moves').textContent="Moves: "+number_mvs
            } 
            
            break;
            case 'p43':
                if(document.getElementById('p33').textContent == '11') {
                    var temp_val = document.getElementById('p33').textContent;
                    document.getElementById('p33').textContent = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = temp_val;

                    document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.jpg)';
                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p42').textContent == '11') {
                    var temp_val = document.getElementById('p42').textContent;
                    document.getElementById('p42').textContent = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = temp_val;

                    document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p53').textContent == '11') {
                    var temp_val = document.getElementById('p53').textContent;
                    document.getElementById('p53').textContent = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = temp_val;

                    document.getElementById('p53').style.background = 'url('+document.getElementById('p53').textContent+'.jpg)';
                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p44').textContent == '11') {
                    var temp_val = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = temp_val;

                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p44':
                if(document.getElementById('p34').textContent == '11') {
                    var temp_val = document.getElementById('p34').textContent;
                    document.getElementById('p34').textContent = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = temp_val;

                    document.getElementById('p34').style.background = 'url('+document.getElementById('p34').textContent+'.jpg)';
                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p43').textContent == '11') {
                    var temp_val = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = temp_val;
 
                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p54').textContent == '11') {
                    var temp_val = document.getElementById('p54').textContent;
                    document.getElementById('p54').textContent = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = temp_val;

                    document.getElementById('p54').style.background = 'url('+document.getElementById('p54').textContent+'.jpg)';
                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p45').textContent == '11') {
                    var temp_val = document.getElementById('p45').textContent;
                    document.getElementById('p45').textContent = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = temp_val;

                    document.getElementById('p45').style.background = 'url('+document.getElementById('p45').textContent+'.jpg)';
                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
            
            break;
            case 'p45':
                if(document.getElementById('p35').textContent == '11') {
                    var temp_val = document.getElementById('p35').textContent;
                    document.getElementById('p35').textContent = document.getElementById('p45').textContent;
                    document.getElementById('p45').textContent = temp_val;

                    document.getElementById('p35').style.background = 'url('+document.getElementById('p35').textContent+'.jpg)';
                    document.getElementById('p45').style.background = 'url('+document.getElementById('p45').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p44').textContent == '11') {
                    var temp_val = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = document.getElementById('p45').textContent;
                    document.getElementById('p45').textContent = temp_val;

                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    document.getElementById('p45').style.background = 'url('+document.getElementById('p45').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                if(document.getElementById('p55').textContent == '11') {
                    var temp_val = document.getElementById('p55').textContent;
                    document.getElementById('p55').textContent = document.getElementById('p45').textContent;
                    document.getElementById('p45').textContent = temp_val;

                    document.getElementById('p55').style.background = 'url('+document.getElementById('p55').textContent+'.jpg)';
                    document.getElementById('p45').style.background = 'url('+document.getElementById('p45').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                } 
                 
            
            break;
            case 'p51':
                if(document.getElementById('p41').textContent == '11') {
                    var temp_val = document.getElementById('p41').textContent;
                    document.getElementById('p41').textContent = document.getElementById('p51').textContent;
                    document.getElementById('p51').textContent = temp_val;

                    document.getElementById('p41').style.background = 'url('+document.getElementById('p41').textContent+'.jpg)';
                    document.getElementById('p51').style.background = 'url('+document.getElementById('p51').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p52').textContent == '11') {
                    var temp_val = document.getElementById('p52').textContent;
                    document.getElementById('p52').textContent = document.getElementById('p51').textContent;
                    document.getElementById('p51').textContent = temp_val;

                    document.getElementById('p52').style.background = 'url('+document.getElementById('p52').textContent+'.jpg)';
                    document.getElementById('p51').style.background = 'url('+document.getElementById('p51').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
            
            break;
            case 'p52':
                if(document.getElementById('p51').textContent == '11') {
                    var temp_val = document.getElementById('p51').textContent;
                    document.getElementById('p51').textContent = document.getElementById('p52').textContent;
                    document.getElementById('p52').textContent = temp_val;

                    document.getElementById('p51').style.background = 'url('+document.getElementById('p51').textContent+'.jpg)';
                    document.getElementById('p52').style.background = 'url('+document.getElementById('p52').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p42').textContent == '11') {
                    var temp_val = document.getElementById('p42').textContent;
                    document.getElementById('p42').textContent = document.getElementById('p52').textContent;
                    document.getElementById('p52').textContent = temp_val;

                    document.getElementById('p42').style.background = 'url('+document.getElementById('p42').textContent+'.jpg)';
                    document.getElementById('p52').style.background = 'url('+document.getElementById('p52').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p53').textContent == '11') {
                    var temp_val = document.getElementById('p53').textContent;
                    document.getElementById('p53').textContent = document.getElementById('p52').textContent;
                    document.getElementById('p52').textContent = temp_val;
    
                    document.getElementById('p53').style.background = 'url('+document.getElementById('p53').textContent+'.jpg)';
                    document.getElementById('p52').style.background = 'url('+document.getElementById('p52').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                    
                }
            
            break;
            case 'p53':
                if(document.getElementById('p52').textContent == '11') {
                    var temp_val = document.getElementById('p52').textContent;
                    document.getElementById('p52').textContent = document.getElementById('p53').textContent;
                    document.getElementById('p53').textContent = temp_val;
    
                    document.getElementById('p52').style.background = 'url('+document.getElementById('p52').textContent+'.jpg)';
                    document.getElementById('p53').style.background = 'url('+document.getElementById('p53').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p43').textContent == '11') {
                    var temp_val = document.getElementById('p43').textContent;
                    document.getElementById('p43').textContent = document.getElementById('p53').textContent;
                    document.getElementById('p53').textContent = temp_val;
    
                    document.getElementById('p43').style.background = 'url('+document.getElementById('p43').textContent+'.jpg)';
                    document.getElementById('p53').style.background = 'url('+document.getElementById('p53').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p54').textContent == '11') {
                    var temp_val = document.getElementById('p54').textContent;
                    document.getElementById('p54').textContent = document.getElementById('p53').textContent;
                    document.getElementById('p53').textContent = temp_val;
    
                    document.getElementById('p54').style.background = 'url('+document.getElementById('p54').textContent+'.jpg)';
                    document.getElementById('p53').style.background = 'url('+document.getElementById('p53').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
            
            
            break;
            case 'p54':
                if(document.getElementById('p53').textContent == '11') {
                    var temp_val = document.getElementById('p53').textContent;
                    document.getElementById('p53').textContent = document.getElementById('p54').textContent;
                    document.getElementById('p54').textContent = temp_val;
    
                    document.getElementById('p53').style.background = 'url('+document.getElementById('p53').textContent+'.jpg)';
                    document.getElementById('p54').style.background = 'url('+document.getElementById('p54').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                 if(document.getElementById('p44').textContent == '11') {
                    var temp_val = document.getElementById('p44').textContent;
                    document.getElementById('p44').textContent = document.getElementById('p54').textContent;
                    document.getElementById('p54').textContent = temp_val;
    
                    document.getElementById('p44').style.background = 'url('+document.getElementById('p44').textContent+'.jpg)';
                    document.getElementById('p54').style.background = 'url('+document.getElementById('p54').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p55').textContent == '11') {
                    var temp_val = document.getElementById('p55').textContent;
                    document.getElementById('p55').textContent = document.getElementById('p54').textContent;
                    document.getElementById('p54').textContent = temp_val;
    
                    document.getElementById('p55').style.background = 'url('+document.getElementById('p55').textContent+'.jpg)';
                    document.getElementById('p54').style.background = 'url('+document.getElementById('p54').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
            
            break;
            case 'p55':
                if(document.getElementById('p54').textContent == '11') {
                    var temp_val = document.getElementById('p54').textContent;
                    document.getElementById('p54').textContent = document.getElementById('p55').textContent;
                    document.getElementById('p55').textContent = temp_val;
    
                    document.getElementById('p54').style.background = 'url('+document.getElementById('p54').textContent+'.jpg)';
                    document.getElementById('p55').style.background = 'url('+document.getElementById('p55').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
                if(document.getElementById('p45').textContent == '11') {
                    var temp_val = document.getElementById('p45').textContent;
                    document.getElementById('p45').textContent = document.getElementById('p55').textContent;
                    document.getElementById('p55').textContent = temp_val;
    
                    document.getElementById('p45').style.background = 'url('+document.getElementById('p45').textContent+'.jpg)';
                    document.getElementById('p55').style.background = 'url('+document.getElementById('p55').textContent+'.jpg)';
                    number_mvs++;
                    document.getElementById('moves').textContent="Moves: "+number_mvs
                }
            
            break;
                         
        }
    }
}
 