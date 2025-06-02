//CKW12 DIY Roller Encoder Footprint
//author: @huntercook https://github.com/jusdisgi
//made with kicad2ergogen https://kicad2ergogen.genteure.com/
//
//Based on CKW12 design by Kumamuk available here: https://github.com/kumamuk-git/CKW12
//Adapted to be integrated into the main PCB instead of on a daughter board.
//
// All 3D printed components are available at: https://github.com/kumamuk-git/CKW12/tree/main/3dmodel
//
// Components needed:
// 3D printed housing
// 3D printed wheel 
// 3D printed stem
// ALPS SKQYACE010, SKQYPCE010 or similar 2.5mm high tactile switch: https://www.lcsc.com/datasheet/lcsc_datasheet_2409300803_ALPSALPINE-SKQYPCE010_C262422.pdf
// ALPS EC05E1220202 side-mount rotary encoder: https://www.lcsc.com/datasheet/lcsc_datasheet_2409301732_ALPSALPINE-EC05E1220202_C202421.pdf
//
// Parameters:
// side: F (default) for front or B for back
// S1: net for switch leg. Default is blank
// S2: net for switch leg. Default is blank
// A: net for rotary. default is RE_A
// B: net for ground pad. default is GND
// C: net for rotary. default is RE_B

module.exports = {
  params: {
    designator: 'RE',
    side: 'F',
    S1: { type: 'net', value: '' },
    S2: { type: 'net', value: '' },
    A: { type: 'net', value: 'RE_A' },
    B: { type: 'net', value: 'GND' },
    C: { type: 'net', value: 'RE_C' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "CKW12"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "DIY Roller Encoder like that in the roBa keyboard")`);
fp.push(`(tags "EC12")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 7 : -7)} -7 ${(p.r + 90) % 360}) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 7 : -7)} 7 ${(p.r + 90) % 360}) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -6.5 : 6.5)} -3.75 ${p.r}) (size 2.7 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) (thermal_bridge_angle 45) )`);
fp.push(`(pad "" smd roundrect (at ${(flip ? -6.5 : 6.5)} 3.75 ${p.r}) (size 2.7 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) (thermal_bridge_angle 45) )`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? -7 : 7)} -7 ${(p.r + 90) % 360}) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? -7 : 7)} 7 ${(p.r + 90) % 360}) (size 2.2 2.2) (drill 2.2) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "A" smd roundrect (at ${(flip ? -5.5 : 5.5)} 2 ${p.r}) (size 2 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.A})`);
fp.push(`(pad "B" smd roundrect (at ${(flip ? -5.5 : 5.5)} 0 ${p.r}) (size 2 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.B})`);
fp.push(`(pad "C" smd roundrect (at ${(flip ? -5.5 : 5.5)} -2 ${p.r}) (size 2 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) (thermal_bridge_angle 45)  ${p.C})`);
fp.push(`(pad "S1" smd rect (at ${(flip ? 7 : -7)} 3 ${(p.r + 90) % 360}) (size 2 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (thermal_bridge_angle 45)  ${p.S1})`);
fp.push(`(pad "S2" smd rect (at ${(flip ? 7 : -7)} -3 ${(p.r + 90) % 360}) (size 2 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (thermal_bridge_angle 45)  ${p.S2})`);

// Drawings on Edge.Cuts
fp.push(`(fp_line (start ${(flip ? 5 : -5)} 4.5) (end ${(flip ? 5 : -5)} -4.5) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? 4.5 : -4.5)} -5) (end ${(flip ? -4.5 : 4.5)} -5) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? 4.5 : -4.5)} 5) (end ${(flip ? -4.5 : 4.5)} 5) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -4.5 : 4.5)} 5) (end ${(flip ? -5 : 5)} 4.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -5 : 5)} -4.5) (end ${(flip ? -5 : 5)} 4.5) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -7.545076 : 7.545076)} -2.333604) (end ${(flip ? -8.393604 : 8.393604)} -1.485076) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -7.54934 : 7.54934)} 2.541472) (end ${(flip ? -8.397868 : 8.397868)} 3.39) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -8.393604 : 8.393604)} -3.394264) (end ${(flip ? -7.545076 : 7.545076)} -2.545736) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -8.397868 : 8.397868)} 1.480812) (end ${(flip ? -7.54934 : 7.54934)} 2.32934) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -8.605736 : 8.605736)} -3.394264) (end ${(flip ? -9.454264 : 9.454264)} -2.545736) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -8.605736 : 8.605736)} -1.485076) (end ${(flip ? -9.454264 : 9.454264)} -2.333604) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -8.61 : 8.61)} 1.480812) (end ${(flip ? -9.458528 : 9.458528)} 2.32934) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -8.61 : 8.61)} 3.39) (end ${(flip ? -9.458528 : 9.458528)} 2.541472) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? 5 : -5)} -4.5) (mid ${(flip ? 4.853553 : -4.853553)} -4.853553) (end ${(flip ? 4.5 : -4.5)} -5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? 4.5 : -4.5)} 5) (mid ${(flip ? 4.853553 : -4.853553)} 4.853553) (end ${(flip ? 5 : -5)} 4.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -4.5 : 4.5)} -5) (mid ${(flip ? -4.853553 : 4.853553)} -4.853553) (end ${(flip ? -5 : 5)} -4.5) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -7.545076 : 7.545076)} -2.333604) (mid ${(flip ? -7.501142 : 7.501142)} -2.43967) (end ${(flip ? -7.545076 : 7.545076)} -2.545736) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -7.54934 : 7.54934)} 2.541472) (mid ${(flip ? -7.505406 : 7.505406)} 2.435406) (end ${(flip ? -7.54934 : 7.54934)} 2.32934) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -8.393604 : 8.393604)} -3.394264) (mid ${(flip ? -8.49967 : 8.49967)} -3.438198) (end ${(flip ? -8.605736 : 8.605736)} -3.394264) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -8.397868 : 8.397868)} 1.480812) (mid ${(flip ? -8.503934 : 8.503934)} 1.436878) (end ${(flip ? -8.61 : 8.61)} 1.480812) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -8.605736 : 8.605736)} -1.485076) (mid ${(flip ? -8.49967 : 8.49967)} -1.441142) (end ${(flip ? -8.393604 : 8.393604)} -1.485076) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -8.61 : 8.61)} 3.39) (mid ${(flip ? -8.503934 : 8.503934)} 3.433934) (end ${(flip ? -8.397868 : 8.397868)} 3.39) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -9.454264 : 9.454264)} -2.545736) (mid ${(flip ? -9.498198 : 9.498198)} -2.43967) (end ${(flip ? -9.454264 : 9.454264)} -2.333604) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start ${(flip ? -9.458528 : 9.458528)} 2.32934) (mid ${(flip ? -9.502462 : 9.502462)} 2.435406) (end ${(flip ? -9.458528 : 9.458528)} 2.541472) (stroke (width 0.05) (type default)) (layer "Edge.Cuts") )`);

// Drawings on F.Fab
fp.push(`(fp_text user "\${REFERENCE}" (at 0 2.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_rect (start ${(flip ? 9 : -9)} -9) (end ${(flip ? -9 : 9)} 9) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -0.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "CKW12" (at 0 1 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

