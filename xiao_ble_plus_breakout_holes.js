// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    P1: { type: 'net', value: 'P0.02' },
    P2: { type: 'net', value: 'P0.03' },
    P3: { type: 'net', value: 'P0.28' },
    P4: { type: 'net', value: 'P0.29' },
    P5: { type: 'net', value: 'P0.04' },
    P6: { type: 'net', value: 'P0.05' },
    P7: { type: 'net', value: 'P1.11' },
    P8: { type: 'net', value: 'P1.12' },
    P9: { type: 'net', value: 'P1.13' },
    P10: { type: 'net', value: 'P1.14' },
    P11: { type: 'net', value: 'P1.15' },
    P12: { type: 'net', value: '3V3' },
    P13: { type: 'net', value: 'GND' },
    P14: { type: 'net', value: '5V' },
    P15: { type: 'net', value: 'P0.15' },
    P16: { type: 'net', value: 'P0.19' },
    P17: { type: 'net', value: 'P1.01' },
    P18: { type: 'net', value: 'P0.09' },
    P19: { type: 'net', value: 'P0.10' },
    P20: { type: 'net', value: 'P0.31' },
    P21: { type: 'net', value: 'P1.03' },
    P22: { type: 'net', value: 'P1.05' },
    P23: { type: 'net', value: 'P1.07' },
    P24: { type: 'net', value: 'DIO' },
    P25: { type: 'net', value: 'CLK' },
    P26: { type: 'net', value: 'RST' },
    P27: { type: 'net', value: 'GND' },
    P28: { type: 'net', value: 'BAT+' },
    P29: { type: 'net', value: 'BAT-' },
    P30: { type: 'net', value: 'NFC1' },
    P31: { type: 'net', value: 'NFC2' }
  },
  body: p => {
    const standard = `
      (module XIAO_Breakout_Holes (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      `
    function pins(def_neg, def_pos) {
      return `
        
        ${''/* pin names */}
        (fp_text user 5V (at -8.97 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -6.43 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user 3V3 (at -3.89 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D10 (at -1.35 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D20 (at 1.19 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D9 (at 3.83 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D19 (at 6.27 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D8 (at 8.81 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D18 (at 11.35 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D7 (at 13.89 ${def_pos}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
              
        (fp_text user CLK (at 20.2 ${def_neg}-8.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user DIO (at 20.1 ${def_neg}-6.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user RST (at 20.15 ${def_neg}-3.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at 20.25 ${def_neg}-1.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user BAT+ (at 20.5 ${def_neg}1.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user BAT- (at 20.5 ${def_neg}3.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user NFC1 (at 20.5 ${def_neg}6.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user NFC2 (at 20.5 ${def_neg}8.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        
        (fp_text user D0 (at -8.97 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D11 (at -6.43 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D1 (at -3.89 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D12 (at -1.35 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D2 (at 1.19 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D13 (at 3.83 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D3 (at 6.27 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D14 (at 8.81 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D4 (at 11.35 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D15 (at 13.89 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D5 (at 16.43 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D16 (at 18.97 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D6 (at 21.43 ${def_neg}12.5 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
      
        ${''/* and now the actual pins */}
        (pad 14 thru_hole rect (at -8.97 ${def_pos}14.62 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P14})
        (pad 13 thru_hole circle (at -6.43 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P13})
        (pad 12 thru_hole circle (at -3.89 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P12})
        (pad 11 thru_hole circle (at -1.35 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P11})
        (pad 23 thru_hole circle (at 1.19 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P23})
        (pad 10 thru_hole circle (at 3.83 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P10})
        (pad 22 thru_hole circle (at 6.27 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P22})
        (pad 9 thru_hole circle (at 8.81 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P9})
        (pad 21 thru_hole circle (at 11.35 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P21})
        (pad 8 thru_hole circle (at 13.89 ${def_pos}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P8})

        (pad 24 thru_hole circle (at 18 ${def_neg}-8.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P24})
        (pad 25 thru_hole circle (at 18 ${def_neg}-6.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P25})
        (pad 26 thru_hole circle (at 18 ${def_neg}-3.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P26})
        (pad 27 thru_hole circle (at 18 ${def_neg}-1.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P27})
        (pad 28 thru_hole circle (at 18 ${def_neg}1.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P28})
        (pad 29 thru_hole circle (at 18 ${def_neg}3.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P29})
        (pad 30 thru_hole circle (at 18 ${def_neg}6.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P30})
        (pad 31 thru_hole circle (at 18 ${def_neg}8.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P31})
       
        (pad 1 thru_hole circle (at -8.97 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1})
        (pad 15 thru_hole circle (at -6.43 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P15})
        (pad 2 thru_hole circle (at -3.89 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2})
        (pad 16 thru_hole circle (at -1.35 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P16})
        (pad 3 thru_hole circle (at 1.19 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P3})
        (pad 17 thru_hole circle (at 3.83 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P17})
        (pad 4 thru_hole circle (at 6.27 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P4})
        (pad 18 thru_hole circle (at 8.81 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P18})
        (pad 5 thru_hole circle (at 11.35 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P5})
        (pad 19 thru_hole circle (at 13.89 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P19})
        (pad 6 thru_hole circle (at 16.43 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P6})
        (pad 20 thru_hole circle (at 18.97 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P20})
        (pad 7 thru_hole circle (at 21.43 ${def_neg}14.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P7})
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}