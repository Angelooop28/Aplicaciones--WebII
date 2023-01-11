const { Printer, InMemory } = require('escpos-buffer');

const conection = new InMemory();
const printer = await printer.CONNECT('MP-4200 TH');

import { printer, Model, WebUSB } from 'escpos-buffer';

const device = await navigator.usb.requestDevice({
  filters: [
    {
      vendorId: VENDOR_ID,
    },
  ],
});
const conection = new WebUSB(device);
const printer = await Printer.CONNECT('TM-T20');
await printer.setColumns(56)
await printer.write('Simple Text *** ')
await printer.writeln('Bold Text -> complete line text.[]123456', Style.Bold)
await printer.writeln('Double height', Style.DoubleHeight | Style.Bold, Align.Center)
await printer.writeln('Áçênts R$ 5,00', Style.DoubleWidth | Style.DoubleWidth, Align.Center)
await printer.withStyle({
  width: 4,
  height: 6,
  bold: true,
  italic: true,
  underline: true,
  align: Align.Center,
  }, () => {
    printer.writeln('You can apply multiple styles at once using withStyle()')
    printer.writeln('Font sizes 1-8 are available')
})
await printer.writeln('Default style is restored afterwards')
await printer.feed(6)
await printer.buzzer()
await printer.cutter()
await printer.drawer(Drawer.First)

// For buffered connection (output to stdout)
process.stdout.write(conection.buffer())