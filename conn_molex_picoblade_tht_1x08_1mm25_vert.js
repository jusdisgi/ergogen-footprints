// Molex PicoBlade 1x8 Wire-to-Board connector - Horizontal plug, surface mount.
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/conn_molex_picoblade_tht_1x08_1mm25_vert.js
//
// created with kicad2ergogen: https://kicad2ergogen.genteure.com/
//
// Component datasheet: https://www.lcsc.com/datasheet/lcsc_datasheet_2410121648_XYECONN-XY-MX1-25-8A11_C19272056.pdf
//
// Nets/Parameters
//
// side: F (default) for Front, B for Back
// P1-8: nets for pins. Default undefined.
//

module.exports = {
  params: {
    designator: 'CONN',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
    P5: { type: 'net', value: undefined },
    P6: { type: 'net', value: undefined },
    P7: { type: 'net', value: undefined },
    P8: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "Molex_PicoBlade_53047-0810_1x08_P1.25mm_Vertical"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Molex PicoBlade Connector System, 53047-0810, 8 Pins per row (http://www.molex.com/pdm_docs/sd/530470610_sd.pdf), generated with kicad-footprint-generator")`);
fp.push(`(tags "connector Molex PicoBlade vertical")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole roundrect (at 0 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.25) ${p.P1})`);
fp.push(`(pad "2" thru_hole oval (at ${(flip ? -1.25 : 1.25)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P2})`);
fp.push(`(pad "3" thru_hole oval (at ${(flip ? -2.5 : 2.5)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P3})`);
fp.push(`(pad "4" thru_hole oval (at ${(flip ? -3.75 : 3.75)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P4})`);
fp.push(`(pad "5" thru_hole oval (at ${(flip ? -5 : 5)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P5})`);
fp.push(`(pad "6" thru_hole oval (at ${(flip ? -6.25 : 6.25)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P6})`);
fp.push(`(pad "7" thru_hole oval (at ${(flip ? -7.5 : 7.5)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P7})`);
fp.push(`(pad "8" thru_hole oval (at ${(flip ? -8.75 : 8.75)} 0 ${p.r}) (size 0.8 1.3) (drill 0.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P8})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start ${(flip ? 2 : -2)} -2.56) (end ${(flip ? 2 : -2)} 1.65) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start ${(flip ? 2 : -2)} 1.65) (end ${(flip ? -10.75 : 10.75)} 1.65) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.75 : 10.75)} -2.56) (end ${(flip ? 2 : -2)} -2.56) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.75 : 10.75)} 1.65) (end ${(flip ? -10.75 : 10.75)} -2.56) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);

// Drawings on F.Fab
fp.push(`(fp_line (start ${(flip ? 1.5 : -1.5)} -2.05) (end ${(flip ? 1.5 : -1.5)} 1.15) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.5 : -1.5)} 1.15) (end ${(flip ? -10.25 : 10.25)} 1.15) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 0.5 : -0.5)} 1.15) (end ${(flip ? -0 : 0)} 0.442893) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -0 : 0)} 0.442893) (end ${(flip ? -0.5 : 0.5)} 1.15) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.25 : 10.25)} -2.05) (end ${(flip ? 1.5 : -1.5)} -2.05) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.25 : 10.25)} 1.15) (end ${(flip ? -10.25 : 10.25)} -2.05) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_text user "\${REFERENCE}" (at ${(flip ? -4.38 : 4.38)} -1.35 ${(p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 1.9 : -1.9)} 1.55) (end ${(flip ? 1.9 : -1.9)} 0.55) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.9 : -1.9)} 1.55) (end ${(flip ? 0.9 : -0.9)} 1.55) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.61 : -1.61)} -2.16) (end ${(flip ? 1.61 : -1.61)} 1.26) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.61 : -1.61)} 1.26) (end ${(flip ? -10.36 : 10.36)} 1.26) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.3 : -1.3)} -0.8) (end ${(flip ? 1.1 : -1.1)} -0.8) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.3 : -1.3)} 0) (end ${(flip ? 1.3 : -1.3)} -0.8) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} -1.65) (end ${(flip ? -4.375 : 4.375)} -1.65) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} -0.8) (end ${(flip ? 1.1 : -1.1)} -1.65) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} 0) (end ${(flip ? 1.3 : -1.3)} 0) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} 0.75) (end ${(flip ? 1.1 : -1.1)} 0) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -4.375 : 4.375)} 0.75) (end ${(flip ? 1.1 : -1.1)} 0.75) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -4.375 : 4.375)} 0.75) (end ${(flip ? -9.85 : 9.85)} 0.75) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -9.85 : 9.85)} -1.65) (end ${(flip ? -4.375 : 4.375)} -1.65) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -9.85 : 9.85)} -0.8) (end ${(flip ? -9.85 : 9.85)} -1.65) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -9.85 : 9.85)} 0) (end ${(flip ? -10.05 : 10.05)} 0) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -9.85 : 9.85)} 0.75) (end ${(flip ? -9.85 : 9.85)} 0) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.05 : 10.05)} -0.8) (end ${(flip ? -9.85 : 9.85)} -0.8) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.05 : 10.05)} 0) (end ${(flip ? -10.05 : 10.05)} -0.8) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.36 : 10.36)} -2.16) (end ${(flip ? 1.61 : -1.61)} -2.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -10.36 : 10.36)} 1.26) (end ${(flip ? -10.36 : 10.36)} -2.16) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);

// 3D Models
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Connector_Molex.3dshapes/Molex_PicoBlade_53047-0810_1x08_P1.25mm_Vertical.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at ${(flip ? -4.38 : 4.38)} -3.26 ${(p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "Molex_PicoBlade_53047-0810_1x08_P1.25mm_Vertical" (at ${(flip ? -4.38 : 4.38)} 2.35 ${(p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

