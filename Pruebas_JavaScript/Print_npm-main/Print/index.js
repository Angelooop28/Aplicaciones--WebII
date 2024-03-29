const escpos = require('escpos');
// install escpos-usb adapter module manually
escpos.USB = require('escpos-usb');
// Select the adapter based on your printer type
const device  = new escpos.USB();
// const device  = new escpos.Network('localhost');
// const device  = new escpos.Serial('/dev/usb/lp0');
 
const options = { encoding: "GB18030" /* default */ }
// encoding is optional
 
const printer = new escpos.Printer(device, options);
 
device.open(function(error){
  printer
  .font('a')
  .align('ct')
  .style('bu')
  .size(1, 1)
  .text('la longitud de la cadena está limitada')
  .text('Documento Wiki')
  .barcode('1234567', 'ESCPOS')
  .table(["One", "Two", "Three"])
  .tableCustom(
    [
      { text:"Left", align:"LEFT", width:0.20, style: 'B' },
      { text:"Center", align:"CENTER", width:0.20},
      { text:"Right", align:"RIGHT", width:0.20 }
    ],
    { encoding: 'cp857', size: [1, 1] } // Optional
  )
  .qrimage('https://github.com/song940/node-escpos', function(err){
    this.cut();
    this.close();
  });
});
