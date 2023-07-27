function forms () {
    // ------------ Spreadsheet App Conection ------------
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var sh = planilha.getActiveSheet();
    var row = sh.getLastRow();
    console.log(planilha)
    // ---------------------------------------------------
    
    // --------------- Local Variables -------------------
    var object_type = sh.getRange(row,2).getValue();
    var subject = sh.getRange(row,3).getValue();
    var content = sh.getRange(row,4).getValue();
    var send_type = sh.getRange(row,5).getValue();
    var deadline = sh.getRange(row,6).getValue();
    var group = sh.getRange(row,7).getValue();
    var members = sh.getRange(row,8).getValue();
    // ---------------------------------------------------

    // -------------- Conditional functions --------------
    if (group=="Sim"){
        var text = "novo(a) " + object_type + "\nMatéria: " + subject + "\nAssunto: " + content + "\nEntregar em: " + send_type + "\t," + deadline + "\nIntegrantes: " + members;

        text = encodeURIComponent(text);
        message(text);
    }
    else if (group=="Não"){
        var text = "novo(a) " + object_type + "\nMatéria: " + subject + "\nAssunto: " + content + "\nEntregar em: " + send_type + "\t," + deadline;

        text = encodeURIComponent(text);
        message(text);
    }
    // ---------------------------------------------------

}
    // ------------- Telegram Connection -----------------
function message (text) {
    
    var chat_id = 123456789
    var bot_id = "your bot id";
    var url = "https://api.telegram.org/bot" + bot_id + "/sendMessage?chat_id=-" + chat_id + "&text=" + text;
    // Bot joga a url no navegador e entra na mesma
    console.log(url)
    Logger.log(url);
    UrlFetchApp.fetch(url);

} 
    // ---------------------------------------------------
