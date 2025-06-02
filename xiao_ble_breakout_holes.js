// Breakout holes for Seeed Xiao nRF52840 MCU ergogen footprint
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/util_xiao_ble_breakout_holes.js
// 
// These are just a bunck of thru-hole pads intended to go around the xiao cutouts for testing or connections.
//
//
// The params are roughly equivalent to the MCU itself.


module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    P1: { type: 'net', value: 'D0' },
    P2: { type: 'net', value: 'D1' },
    P3: { type: 'net', value: 'D2' },
    P4: { type: 'net', value: 'D3' },
    P5: { type: 'net', value: 'D4' },
    P6: { type: 'net', value: 'D5' },
    P7: { type: 'net', value: 'D6' },
    P8: { type: 'net', value: 'D7' },
    P9: { type: 'net', value: 'D8' },
    P10: { type: 'net', value: 'D9' },
    P11: { type: 'net', value: 'D11' },
    P12: { type: 'net', value: '3V3' },
    P13: { type: 'net', value: 'GND' },
    P14: { type: 'net', value: '5V' },
    P15: { type: 'net', value: 'CLK' },
    P16: { type: 'net', value: 'DIO' },
    P17: { type: 'net', value: 'RST' },
    P18: { type: 'net', value: 'GND' },
    P19: { type: 'net', value: 'BAT' },
    P20: { type: 'net', value: 'GND' },
    P21: { type: 'net', value: 'NFC1' },
    P22: { type: 'net', value: 'NFC2' }
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
        (fp_text user D0 (at -7.5 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D1 (at -5 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D2 (at -2.5 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D3 (at 0 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D4 (at 2.5 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D5 (at 5 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D6 (at 7.5 ${def_neg}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))

        (fp_text user D7 (at 7.5 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D8 (at 5 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D9 (at 2.5 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user D10 (at 0 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user 3V3 (at -2.5 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at -5 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user 5V (at -7.5 ${def_pos}12 ${p.r + 90}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
              
        (fp_text user CLK (at 17.2 ${def_neg}-8.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user DIO (at 17.1 ${def_neg}-6.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user RST (at 17.15 ${def_neg}-3.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user GND (at 17.25 ${def_neg}-1.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user BAT+ (at 17.5 ${def_neg}1.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user BAT- (at 17.5 ${def_neg}3.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user NFC1 (at 17.5 ${def_neg}6.25 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        (fp_text user NFC2 (at 17.5 ${def_neg}8.75 ${p.r}) (layer F.SilkS) (effects (font (size 0.6 0.6) (thickness 0.15))))
        
        ${''/* and now the actual pins */}
        
        (pad 1 thru_hole circle (at -7.5 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1})
        (pad 2 thru_hole circle (at -5 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2})
        (pad 3 thru_hole circle (at -2.5 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P3})
        (pad 4 thru_hole circle (at 0 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P4})
        (pad 5 thru_hole circle (at 2.5 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P5})
        (pad 6 thru_hole circle (at 5 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P6})
        (pad 7 thru_hole circle (at 7.5 ${def_neg}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P7})

        (pad 8 thru_hole circle (at 7.5 ${def_pos}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P8})
        (pad 9 thru_hole circle (at 5 ${def_pos}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P9})
        (pad 10 thru_hole circle (at 2.5 ${def_pos}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P10})
        (pad 11 thru_hole circle (at 0 ${def_pos}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P11})
        (pad 12 thru_hole circle (at -2.5 ${def_pos}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P12})
        (pad 13 thru_hole circle (at -5 ${def_pos}14 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P13})
        (pad 14 thru_hole rect (at -7.5 ${def_pos}14 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P14})

        (pad 15 thru_hole circle (at 15 ${def_neg}-8.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P15})
        (pad 16 thru_hole circle (at 15 ${def_neg}-6.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P16})
        (pad 17 thru_hole circle (at 15 ${def_neg}-3.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P17})
        (pad 18 thru_hole circle (at 15 ${def_neg}-1.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P18})
        (pad 19 thru_hole circle (at 15 ${def_neg}1.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P19})
        (pad 20 thru_hole circle (at 15 ${def_neg}3.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P20})
        (pad 21 thru_hole circle (at 15 ${def_neg}6.25 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P21})
        (pad 22 thru_hole circle (at 15 ${def_neg}8.75 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P22})
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