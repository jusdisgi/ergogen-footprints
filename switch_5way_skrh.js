// Alps SKRH series 5-way Multidirectional Switch ergogen footprint
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/switch_5way_skrh.js
//
// created with kicad2ergogen: https://kicad2ergogen.genteure.com/
//
// Component datasheet: https://lcsc.com/datasheet/lcsc_datasheet_2410122026_ALPSALPINE-SKRHADE010_C202415.pdf
//
// Nets/Parameters
//
// side: F (default) for Front, B for Back
// 
// P1: Direction "A" (left if rotation is 0), default undefined
// P2: Center click, default undefined
// P3: Direction "C" (down), default undefined
// P4: Direction "B" (up), default undefined
// P5: Common, default GND
// P6: Direction "D" (right), default undefined
//
module.exports = {
  params: {
    designator: 'MDS',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
    P5: { type: 'net', value: 'GND' },
    P6: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SKRHADE010_naked"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(tags "5way 5-way five-way multidirectional navswitch")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" smd rect (at ${(flip ? 2.863782 : -2.863782)} -2.863782 ${(p.r + 45) % 360}) (size 2 1.8) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (thermal_bridge_angle 45) )`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 1.343503 : -1.343503)} -1.343503 ${(p.r + 45) % 360}) (size 0.75 0.75) (drill 0.75) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? -1.343503 : 1.343503)} 1.343503 ${(p.r + 45) % 360}) (size 1.05 1.05) (drill 1.05) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" smd rect (at ${(flip ? -2.863782 : 2.863782)} 2.863782 ${(p.r + 45) % 360}) (size 2 1.8) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (thermal_bridge_angle 45) )`);
fp.push(`(pad "1" smd roundrect (at ${(flip ? 3.517856 : -3.517856)} 1.537957 ${(flip ? (p.r - 45) % 360 : (p.r + 45) % 360)}) (size 1.35 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 2.527907 : -2.527907)} 2.527907 ${(flip ? (p.r - 45) % 360 : (p.r + 45) % 360)}) (size 1.35 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? 1.537957 : -1.537957)} 3.517856 ${(flip ? (p.r - 45) % 360 : (p.r + 45) % 360)}) (size 1.35 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P3})`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? -1.537957 : 1.537957)} -3.517856 ${(flip ? (p.r - 45) % 360 : (p.r + 45) % 360)}) (size 1.35 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P4})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? -2.527907 : 2.527907)} -2.527907 ${(flip ? (p.r - 45) % 360 : (p.r + 45) % 360)}) (size 1.35 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P5})`);
fp.push(`(pad "6" smd roundrect (at ${(flip ? -3.517856 : 3.517856)} -1.537957 ${(flip ? (p.r - 45) % 360 : (p.r + 45) % 360)}) (size 1.35 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P6})`);

// Drawings on F.Fab
fp.push(`(fp_text user "\${REFERENCE}" (at 0 -6.6 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_poly (pts (xy ${(flip ? 5.303301 : -5.303301)} 0) (xy ${(flip ? -0 : 0)} -5.303301) (xy ${(flip ? -5.303301 : 5.303301)} 0) (xy ${(flip ? -0 : 0)} 5.303301)) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -9.7 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "SKRHADE010_naked" (at 0 -8.2 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "Alps 5-way multidirectional switch" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

