module.exports = {
  params: {
    designator: 'J',
    side: 'F',
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
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "xiao_plus_cutout"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
//
//fp.push(`(pad "1" smd roundrect (at ${(flip ? 6.223 : -10.287)} -7.6165 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P1})`);
fp.push(`(pad "1" smd roundrect (at ${(flip ? 9.6 : -9.6)} -7.6165 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P1})`);
fp.push(`(pad "101" smd roundrect (at ${(flip ? 8.8 : -8.8)} -7.6165 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 9.6 : -9.6)} -5.0765 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P2})`);
fp.push(`(pad "102" smd roundrect (at ${(flip ? 8.8 : -8.8)} -5.0765 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? 9.6 : -9.6)} -2.5365 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P3})`);
fp.push(`(pad "103" smd roundrect (at ${(flip ? 8.8 : -8.8)} -2.5365 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? 9.6 : -9.6)} 0.0035 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P4})`);
fp.push(`(pad "104" smd roundrect (at ${(flip ? 8.8 : -8.8)} 0.0035 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? 9.6 : -9.6)} 2.5435 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P5})`);
fp.push(`(pad "105" smd roundrect (at ${(flip ? 8.8 : -8.8)} 2.5435 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "6" smd roundrect (at ${(flip ? 9.6 : -9.6)} 5.0835 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P6})`);
fp.push(`(pad "106" smd roundrect (at ${(flip ? 8.8 : -8.8)} 5.0835 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "7" smd roundrect (at ${(flip ? 9.6 : -9.6)} 7.6235 ${p.r + 180}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P7})`);
fp.push(`(pad "107" smd roundrect (at ${(flip ? 8.8 : -8.8)} 7.6235 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "8" smd roundrect (at ${(flip ? -9.6 : 9.6)} 7.6235 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P8})`);
fp.push(`(pad "108" smd roundrect (at ${(flip ? -8.8 : 8.8)} 7.6235 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "9" smd roundrect (at ${(flip ? -9.6 : 9.6)} 5.0835 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P9})`);
fp.push(`(pad "109" smd roundrect (at ${(flip ? -8.8 : 8.8)} 5.0835 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "10" smd roundrect (at ${(flip ? -9.6 : 9.6)} 2.5435 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P10})`);
fp.push(`(pad "110" smd roundrect (at ${(flip ? -8.8 : 8.8)} 2.5435 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "11" smd roundrect (at ${(flip ? -9.6 : 9.6)} 0.0035 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P11})`);
fp.push(`(pad "111" smd roundrect (at ${(flip ? -8.8 : 8.8)} 0.0035 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "12" smd roundrect (at ${(flip ? -9.6 : 9.6)} -2.5365 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P12})`);
fp.push(`(pad "112" smd roundrect (at ${(flip ? -8.8 : 8.8)} -2.5365 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "13" smd roundrect (at ${(flip ? -9.6 : 9.6)} -5.0765 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P13})`);
fp.push(`(pad "113" smd roundrect (at ${(flip ? -8.8 : 8.8)} -5.0765 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "14" smd roundrect (at ${(flip ? -9.6 : 9.6)} -7.6165 ${p.r}) (size 2.032 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P14})`);
fp.push(`(pad "114" smd roundrect (at ${(flip ? -8.8 : 8.8)} -7.6165 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "15" smd roundrect (at ${(flip ? 9.2 : -9.2)} -6.3465 ${p.r + 180}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P15})`);
fp.push(`(pad "115" smd roundrect (at ${(flip ? 8.8 : -8.8)} -6.3565 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "16" smd roundrect (at ${(flip ? 9.2 : -9.2)} -3.8065 ${p.r + 180}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P16})`);
fp.push(`(pad "116" smd roundrect (at ${(flip ? 8.8 : -8.8)} -3.8065 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "17" smd roundrect (at ${(flip ? 9.2 : -9.2)} -1.2665 ${p.r + 180}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P17})`);
fp.push(`(pad "117" smd roundrect (at ${(flip ? 8.8 : -8.8)} -1.2665 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "18" smd roundrect (at ${(flip ? 9.2 : -9.2)} 1.2735 ${p.r + 180}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P18})`);
fp.push(`(pad "118" smd roundrect (at ${(flip ? 8.8 : -8.8)} 1.2735 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "19" smd roundrect (at ${(flip ? 9.2 : -9.2)} 3.8135 ${p.r + 180}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P19})`);
fp.push(`(pad "119" smd roundrect (at ${(flip ? 8.8 : -8.8)} 3.8135 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "20" smd roundrect (at ${(flip ? 9.2 : -9.2)} 6.3535 ${p.r + 180}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P20})`);
fp.push(`(pad "120" smd roundrect (at ${(flip ? 8.8 : -8.8)} 6.3535 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "21" smd roundrect (at ${(flip ? -9.2 : 9.2)} 6.3535 ${p.r}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P21})`);
fp.push(`(pad "121" smd roundrect (at ${(flip ? -8.8 : 8.8)} 6.3535 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "22" smd roundrect (at ${(flip ? -9.2 : 9.2)} 3.8135 ${p.r}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P22})`);
fp.push(`(pad "122" smd roundrect (at ${(flip ? -8.8 : 8.8)} 3.8135 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);
fp.push(`(pad "23" smd roundrect (at ${(flip ? -9.2 : 9.2)} 1.2735 ${p.r}) (size 1.232 0.75) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.5) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P23})`);
fp.push(`(pad "123" smd roundrect (at ${(flip ? -8.8 : 8.8)} 1.2735 ${p.r + 180}) (size 1 0.5) (layers "F.Paste") (roundrect_rratio 0.5))`);

//top of left line
fp.push(`(fp_line (start -8.99 -7.8665) (end -8.99 -10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 1 iface
fp.push(`(fp_arc (start -8.99 -7.6165) (end -8.99 -7.8665) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line below pad 1 (just to 15)
fp.push(`(fp_line (start -8.99 -6.5965) (end -8.99 -7.3665) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 15 iface
fp.push(`(fp_arc (start -8.99 -6.3465) (end -8.99 -6.5965) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 15-2
fp.push(`(fp_line (start -8.99 -5.3265) (end -8.99 -6.0965) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 2 iface
fp.push(`(fp_arc (start -8.99 -5.0765) (end -8.99 -5.3265) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 2-16
fp.push(`(fp_line (start -8.99 -4.0565) (end -8.99 -4.8265) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 16 iface
fp.push(`(fp_arc (start -8.99 -3.8065) (end -8.99 -4.0565) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 16-3
fp.push(`(fp_line (start -8.99 -2.7865) (end -8.99 -3.5565) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 3 iface
fp.push(`(fp_arc (start -8.99 -2.5365) (end -8.99 -2.7865) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 3-17
fp.push(`(fp_line (start -8.99 -1.5165) (end -8.99 -2.2865) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 17 iface
fp.push(`(fp_arc (start -8.99 -1.2665) (end -8.99 -1.5165) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 17-4
fp.push(`(fp_line (start -8.99 -0.2435) (end -8.99 -1.0165) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 4 iface
fp.push(`(fp_arc (start -8.99 0.0035) (end -8.99 0.2535) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 4-18
fp.push(`(fp_line (start -8.99 1.0235) (end -8.99 0.2535) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 18 iface
fp.push(`(fp_arc (start -8.99 1.2735) (end -8.99 1.5235) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 18-5
fp.push(`(fp_line (start -8.99 2.2935) (end -8.99 1.5235) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 5 iface
fp.push(`(fp_arc (start -8.99 2.5435) (end -8.99 2.7935) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 5-19
fp.push(`(fp_line (start -8.99 3.5635) (end -8.99 2.7935) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 19 iface
fp.push(`(fp_arc (start -8.99 3.8135) (end -8.99 4.0635) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 19-6
fp.push(`(fp_line (start -8.99 4.8335) (end -8.99 4.0635) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 6 iface
fp.push(`(fp_arc (start -8.99 5.0835) (end -8.99 5.3335) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 6-20
fp.push(`(fp_line (start -8.99 6.1035) (end -8.99 5.3335) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 20 iface
fp.push(`(fp_arc (start -8.99 6.3535) (end -8.99 6.6035) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line 20-7
fp.push(`(fp_line (start -8.99 7.3735) (end -8.99 6.6035) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 7 iface
fp.push(`(fp_arc (start -8.99 7.6235) (end -8.99 7.8735) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//left line below pad 7
fp.push(`(fp_line (start -8.99 8.7625) (end -8.99 7.8735) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);


//top of right line
fp.push(`(fp_line (start 8.99 -7.8665) (end 8.99 -10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 14 iface
fp.push(`(fp_arc (start 8.99 -7.6165) (end 8.99 -7.8665) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 14-13
fp.push(`(fp_line (start 8.99 -5.3265) (end 8.99 -7.3665) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 13 iface
fp.push(`(fp_arc (start 8.99 -5.0765) (end 8.99 -5.3265) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 13-12
fp.push(`(fp_line (start 8.99 -2.7865) (end 8.99 -4.8265) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 12 iface
fp.push(`(fp_arc (start 8.99 -2.5365) (end 8.99 -2.7865) (angle -180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 12-11
fp.push(`(fp_line (start 8.99 -0.2465) (end 8.99 -2.2865) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 11 iface
fp.push(`(fp_arc (start 8.99 0.0035) (end 8.99 0.2535) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 11-23
fp.push(`(fp_line (start 8.99 1.0235) (end 8.99 0.2535) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 23 iface
fp.push(`(fp_arc (start 8.99 1.2735) (end 8.99 1.5235) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 23-10
fp.push(`(fp_line (start 8.99 2.2935) (end 8.99 1.5235) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 10 iface
fp.push(`(fp_arc (start 8.99 2.5435) (end 8.99 2.7935) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 10-22
fp.push(`(fp_line (start 8.99 3.5635) (end 8.99 2.7935) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 22 iface
fp.push(`(fp_arc (start 8.99 3.8135) (end 8.99 4.0635) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 22-9
fp.push(`(fp_line (start 8.99 4.8335) (end 8.99 4.0635) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 9 iface
fp.push(`(fp_arc (start 8.99 5.0835) (end 8.99 5.3335) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 9-21
fp.push(`(fp_line (start 8.99 6.1035) (end 8.99 5.3335) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 21 iface
fp.push(`(fp_arc (start 8.99 6.3535) (end 8.99 6.6035) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line 21-8
fp.push(`(fp_line (start 8.99 7.3735) (end 8.99 6.6035) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//pad 8 iface
fp.push(`(fp_arc (start 8.99 7.6235) (end 8.99 7.8735) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right line below pad 8 
fp.push(`(fp_line (start 8.99 8.7625) (end 8.99 7.8735) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);



//left side
//fp.push(`(fp_line (start -8.99 8.7625) (end -8.99 -10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//top
//fp.push(`(fp_line (start -6.985 -10.5675) (end 6.985 -10.5675) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
//fp.push(`(fp_line (start -8.99 -10.6675) (end 8.99 -10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//bottom
//fp.push(`(fp_line (start 6.985 10.5675) (end -6.985 10.5675) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
fp.push(`(fp_line (start 7.085 10.6675) (end 0.5 10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start 0.5 10.6675) (end 0.5 11) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);

fp.push(`(fp_arc (start 0 11) (end 0.5 11) (angle 180) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);

fp.push(`(fp_line (start -0.5 11) (end -0.5 10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start -0.5 10.6675) (end -7.085 10.6675) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//right side
//fp.push(`(fp_line (start 8.89 -8.6625) (end 8.89 8.6625) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
//fp.push(`(fp_line (start 8.99 -10.4675) (end 8.99 8.7625) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//upper right
//fp.push(`(fp_arc (start -6.984999 -8.6625) (end -8.89 -8.6625) (angle 89.9999) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
//fp.push(`(fp_arc (start -7.084999 -8.7625) (end -8.99 -8.7625) (angle 89.9999) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//lower right
//fp.push(`(fp_arc (start -6.984999 8.6625) (end -6.985 10.5675) (angle 89.9999) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
fp.push(`(fp_arc (start -7.084999 8.7625) (end -7.085 10.6675) (angle 89.9999) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//upper left
//fp.push(`(fp_arc (start 6.984999 -8.6625) (end 6.985 -10.5675) (angle 90) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
//fp.push(`(fp_arc (start 7.084999 -8.7625) (end 7.085 -10.6675) (angle 90) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);
//lower left
//fp.push(`(fp_arc (start 6.984999 8.6625) (end 8.89 8.6625) (angle 90) (stroke (width 0.05) (type solid)) (layer "F.SilkS"))`);
fp.push(`(fp_arc (start 7.084999 8.7625) (end 8.99 8.7625) (angle 90) (stroke (width 0.05) (type solid)) (layer "Edge.Cuts"))`);


fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);
fp.push(`(model "\${_MYPATH}/XIAO nRF52840 Plus oriented.step" (offset (xyz 0 0.09 0)) (scale (xyz 1 1 1)) (rotate (xyz -0 -0 -0)))`);

fp.push(`)`);

    return fp.join('\n');
  }
}

