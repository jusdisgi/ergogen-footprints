// Molex PicoBlade 1x8 Wire-to-Board connector - Vertical plug, surface mount.
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/conn_molex_picoblade_smd_1x08_1mm25_horiz.js
//
// created with kicad2ergogen: https://kicad2ergogen.genteure.com/
//
// Component datasheet: https://www.lcsc.com/datasheet/lcsc_datasheet_2312011610_Megastar-ZX-MX1-25-8PWT_C19272381.pdf
//
// Nets/Parameters
//
// side: F (default) for Front, B for Back
// MP: net for mounting points, default is no net. Not recommended to use anything but GND
// P1-8: nets for pins. Default undefined.
//

module.exports = {
  params: {
    designator: 'CONN',
    side: 'F',
    MP: { type: 'net', value: '' },
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

fp.push(`(footprint "Molex_PicoBlade_53398-0871_1x08-1MP_P1.25mm_Vertical"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Molex PicoBlade series connector, 53398-0871 (http://www.molex.com/pdm_docs/sd/533980271_sd.pdf), generated with kicad-footprint-generator")`);
fp.push(`(tags "connector Molex PicoBlade vertical")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 4.375 : -4.375)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 3.125 : -3.125)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? 1.875 : -1.875)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P3})`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? 0.625 : -0.625)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P4})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? -0.625 : 0.625)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P5})`);
fp.push(`(pad "6" smd roundrect (at ${(flip ? -1.875 : 1.875)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P6})`);
fp.push(`(pad "7" smd roundrect (at ${(flip ? -3.125 : 3.125)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P7})`);
fp.push(`(pad "8" smd roundrect (at ${(flip ? -4.375 : 4.375)} -1.25 ${p.r}) (size 0.8 1.3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.P8})`);
fp.push(`(pad "MP" smd roundrect (at ${(flip ? 6.925 : -6.925)} 1.5 ${p.r}) (size 2.1 3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.119048) ${p.MP})`);
fp.push(`(pad "MP" smd roundrect (at ${(flip ? -6.925 : 6.925)} 1.5 ${p.r}) (size 2.1 3) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.119048) ${p.MP})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start ${(flip ? 8.48 : -8.48)} -2.41) (end ${(flip ? 8.48 : -8.48)} 3.5) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start ${(flip ? 8.48 : -8.48)} 3.5) (end ${(flip ? -8.48 : 8.48)} 3.5) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start ${(flip ? -8.48 : 8.48)} -2.41) (end ${(flip ? 8.48 : -8.48)} -2.41) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);
fp.push(`(fp_line (start ${(flip ? -8.48 : 8.48)} 3.5) (end ${(flip ? -8.48 : 8.48)} -2.41) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}"))`);

// Drawings on F.Fab
fp.push(`(fp_line (start ${(flip ? 7.575 : -7.575)} 0.6) (end ${(flip ? 7.375 : -7.375)} 0.4) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 7.575 : -7.575)} 2.4) (end ${(flip ? 7.575 : -7.575)} 0.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 7.375 : -7.375)} -0.2) (end ${(flip ? 5.875 : -5.875)} -0.2) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 7.375 : -7.375)} 0.4) (end ${(flip ? 7.375 : -7.375)} -0.2) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 7.375 : -7.375)} 2.6) (end ${(flip ? 7.575 : -7.575)} 2.4) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.875 : -5.875)} -1.1) (end ${(flip ? 5.875 : -5.875)} 2.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.875 : -5.875)} -1.1) (end ${(flip ? -5.875 : 5.875)} -1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.875 : -5.875)} 2.6) (end ${(flip ? 7.375 : -7.375)} 2.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.875 : -5.875)} 2.6) (end ${(flip ? -5.875 : 5.875)} 2.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 4.875 : -4.875)} -1.1) (end ${(flip ? 4.375 : -4.375)} -0.392893) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? 4.375 : -4.375)} -0.392893) (end ${(flip ? 3.875 : -3.875)} -1.1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -5.875 : 5.875)} -1.1) (end ${(flip ? -5.875 : 5.875)} 2.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -5.875 : 5.875)} 2.6) (end ${(flip ? -7.375 : 7.375)} 2.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -7.375 : 7.375)} -0.2) (end ${(flip ? -5.875 : 5.875)} -0.2) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -7.375 : 7.375)} 0.4) (end ${(flip ? -7.375 : 7.375)} -0.2) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -7.375 : 7.375)} 2.6) (end ${(flip ? -7.575 : 7.575)} 2.4) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -7.575 : 7.575)} 0.6) (end ${(flip ? -7.375 : 7.375)} 0.4) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_line (start ${(flip ? -7.575 : 7.575)} 2.4) (end ${(flip ? -7.575 : 7.575)} 0.6) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? 4.525 : -4.525)} 1.225) (end ${(flip ? 4.225 : -4.225)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? 3.275 : -3.275)} 1.225) (end ${(flip ? 2.975 : -2.975)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? 2.025 : -2.025)} 1.225) (end ${(flip ? 1.725 : -1.725)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? 0.775 : -0.775)} 1.225) (end ${(flip ? 0.475 : -0.475)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? -0.475 : 0.475)} 1.225) (end ${(flip ? -0.775 : 0.775)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? -1.725 : 1.725)} 1.225) (end ${(flip ? -2.025 : 2.025)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? -2.975 : 2.975)} 1.225) (end ${(flip ? -3.275 : 3.275)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_rect (start ${(flip ? -4.225 : 4.225)} 1.225) (end ${(flip ? -4.525 : 4.525)} 1.825) (stroke (width 0.1) (type solid)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}"))`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 0.4 ${(p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 5.985 : -5.985)} -1.21) (end ${(flip ? 5.035 : -5.035)} -1.21) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.985 : -5.985)} -0.26) (end ${(flip ? 5.985 : -5.985)} -1.21) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.615 : -5.615)} 2.71) (end ${(flip ? -5.615 : 5.615)} 2.71) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? 5.035 : -5.035)} -1.21) (end ${(flip ? 5.035 : -5.035)} -1.9) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -5.985 : 5.985)} -1.21) (end ${(flip ? -5.035 : 5.035)} -1.21) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);
fp.push(`(fp_line (start ${(flip ? -5.985 : 5.985)} -0.26) (end ${(flip ? -5.985 : 5.985)} -1.21) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}"))`);

// 3D Models
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Connector_Molex.3dshapes/Molex_PicoBlade_53398-0871_1x08-1MP_P1.25mm_Vertical.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -3.11 ${(p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "Molex_PicoBlade_53398-0871_1x08-1MP_P1.25mm_Vertical" (at 0 4.2 ${(p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

