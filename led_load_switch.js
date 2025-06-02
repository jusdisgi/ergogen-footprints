// LED Load Switch ergogen footprint
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/led_load_switch.js
//
// made with kicad2ergogen https://kicad2ergogen.genteure.com/
// based on schematic included in the ebastler ZMK design guide: https://github.com/ebastler/zmk-designguide
//
// This may well be bad behavior...this footprint is actually kind of a composite. 
// It includes pads for 3 resistors and 2 MOSFETs, and "traces" to connect them which are actually long/skinny pads.
//
// To build the circuit you need:
// 1x 100 Ohm 0603 resistor
// 2x 10k Ohm 0603 resistors
// 1x 2N7002 SOT23 MOSFET
// 1x AO3401A SOT23 MOSFET
//
// Nets/Parameters:
//
// side: F (default) for Front, B for Back
// P1: Control, connects to GPIO pin on MCU. Default net "LED_SW"
// P2: Power input. Default net "5V"
// P3: Power output. Desault net "LED_PWR"

module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: 'LED_SW' },
    P2: { type: 'net', value: '5V' },
    P3: { type: 'net', value: 'LED_PWR' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "LED_Load_SW"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" smd roundrect (at ${(flip ? 4.45 : -4.45)} -0.6 ${p.r}) (size 0.8 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? 2.9 : -2.9)} -0.6 ${p.r}) (size 3 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? 2.9 : -2.9)} -0.45 ${(p.r + 270) % 360}) (size 0.8 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? 2.9 : -2.9)} 1.2 ${(p.r + 270) % 360}) (size 0.8 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? 2.1 : -2.1)} 1.3 ${p.r}) (size 2 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? 0.975 : -0.975)} -0.55 ${p.r}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? 0.975 : -0.975)} 1.35 ${p.r}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -0.9 : 0.9)} 0.4 ${p.r}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -2.8 : 2.8)} -1.25 ${(p.r + 270) % 360}) (size 0.8 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -2.8 : 2.8)} 0.4 ${(p.r + 270) % 360}) (size 0.8 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -2.8 : 2.8)} 0.4 ${p.r}) (size 3 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -4 : 4)} -1.3 ${p.r}) (size 3 0.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -4.3 : 4.3)} 0.8 ${(p.r + 90) % 360}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45))`);
fp.push(`(pad "1" smd roundrect (at ${(flip ? 6.1 : -6.1)} -0.6 ${p.r}) (size 0.8 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? -5.25 : 5.25)} -1.075 ${(p.r + 90) % 360}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? -6.2 : 6.2)} 0.8 ${(p.r + 90) % 360}) (size 1.475 0.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P3})`);

// Drawings on F.SilkS
fp.push(`(fp_rect (start ${(flip ? 6.75 : -6.75)} -2) (end ${(flip ? -6.75 : 6.75)} 2) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start ${(flip ? 6.6 : -6.6)} -1.2) (end ${(flip ? 3.9 : -3.9)} 0) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start ${(flip ? 3.5 : -3.5)} -1) (end ${(flip ? 2.3 : -2.3)} 1.7) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start ${(flip ? 1.9 : -1.9)} -1) (end ${(flip ? -1.8 : 1.8)} 1.8) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start ${(flip ? -2.2 : 2.2)} -1.8) (end ${(flip ? -3.4 : 3.4)} 0.9) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_rect (start ${(flip ? -3.8 : 3.8)} -1.9) (end ${(flip ? -6.7 : 6.7)} 1.7) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_text user "AO3401A" (at ${(flip ? -5.25 : 5.25)} 0.7 ${(p.r + 90) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.2 0.2) (thickness 0.05) (bold yes)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "10kΩ" (at ${(flip ? 2.9 : -2.9)} 0.4 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.3 0.3) (thickness 0.07) (bold yes)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "100Ω" (at ${(flip ? 5.25 : -5.25)} -0.6 ${(p.r + 90) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.3 0.3) (thickness 0.07) (bold yes)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "2N7002" (at ${(flip ? -0.725 : 0.725)} -0.25 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.3 0.3) (thickness 0.07) (bold yes)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "10kΩ" (at ${(flip ? -2.8 : 2.8)} -0.45 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.3 0.3) (thickness 0.07) (bold yes)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "LED Load SW" (at ${(flip ? 1.2 : -1.2)} -1.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.5 0.5) (thickness 0.1) (bold yes)) (justify${ flip ? " mirror" : ""})))`);

// Properties
// fp.push(`(property "Reference" "LED_Load_SW" (at 0 -6.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "LED_Load_SW" (at 0 -5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

