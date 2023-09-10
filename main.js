function forms () {
    // ------------ Spreadsheet App Conection ------------
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var sh = planilha.getActiveSheet();
    var row = sh.getLastRow();
    console.log(planilha)
    // ---------------------------------------------------
    
    // --------------- Local Variables -------------------
    var data = sh.getRange(row,2).getValue();
    var valor = sh.getRange(row,3).getValue();
    var combustivel = sh.getRange(row,4).getValue();
    var posto = sh.getRange(row,5).getValue();
    var cidade = sh.getRange(row,6).getValue();
    var placa = sh.getRange(row,7).getValue();
    var km = sh.getRange(row,8).getValue();
    var prestador = sh.getRange(row,9).getValue();

    console.log(placa);

    if (placa == "DZP1G51"){
      placa = "K01 - DZP1G51";
    } 
    else{
      if (placa == "FJY8169"){
        placa = "L320 - FJY8169";
      } 
      else {
        if (placa == "FYI3A22"){
          placa = "L555 - FYI3A22";
        } 
        else {
          if (placa == "GHU"){
            placa = "L382 - GHU";
          }
          else {
            if (placa == "FPZ4G26"){
              placa = "TF28 - FPZ4G26";
            } 
            else {
              if (placa == "GIK7H86"){
                placa = "TF460 - GIK7H86";
              }
              else {
              }
            }
          }
        }
      }
    }
    
    
    
    
    
    console.log(placa);
    var text = "Nota Fiscal de Abastecimento - " + data + " - " + cidade + "\nPosto: " + posto + "\nPrestador: " + prestador + "\nVeículo: " + placa + "\nKilometragem: " + km +"\nCombustível: " + combustivel + "\nPreço: " + valor;
    text = encodeURIComponent(text);
    message(text);
    // ---------------------------------------------------

}
    // ------------- Telegram Connection -----------------
function message (text) {
    
    var chat_id = 123456789
    var bot_id = "your-bot-id";
    var url = "https://api.telegram.org/bot" + bot_id + "/sendMessage?chat_id=-" + chat_id + "&text=" + text;
    // Bot joga a url no navegador e entra na mesma
    Logger.log(url);
    UrlFetchApp.fetch(url);

} 
    // ---------------------------------------------------
