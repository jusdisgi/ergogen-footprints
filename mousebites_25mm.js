// 2.5mm Mousebites ergogen footprint
// Author: Hunter Cook @huntercook https://github.com/jusdisgi
// Canonical location: https://github.com/jusdisgi/ergogen-footprints/blob/main/mousebites_25mm.js
//
// made with kicad2ergogen https://kicad2ergogen.genteure.com/
// based on marbastlib kicad footprint here: https://github.com/ebastler/marbastlib/blob/main/footprints/marbastlib-various.pretty/mousebites_2.5mm.kicad_mod
//

//
// Parameter
//
// side: F (default) for Front, B for Back


module.exports = {
  params: {
    designator: 'XX',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "mousebites_25mm"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr exclude_from_pos_files exclude_from_bom)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 0.05 : -0.05)} 1.11 ${p.r}) (size 0.5 0.5) (drill 0.5) (layers "F&B.Cu" "*.Mask") (tstamp 2a97cf57-0bf3-430a-85f4-bf42e99f6f23))`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 0.05 : -0.05)} -1.85 ${p.r}) (size 0.5 0.5) (drill 0.5) (layers "F&B.Cu" "*.Mask") (tstamp 34be3315-7e66-48d9-ac34-715d5e479ab8))`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 0.05 : -0.05)} 0.37 ${p.r}) (size 0.5 0.5) (drill 0.5) (layers "F&B.Cu" "*.Mask") (tstamp 3b40f0ef-082f-46ec-a547-7b51e88e72e0))`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 0.05 : -0.05)} -0.37 ${p.r}) (size 0.5 0.5) (drill 0.5) (layers "F&B.Cu" "*.Mask") (tstamp 5fb46c1f-38d8-4808-92b6-8a5ab4e9cdfb))`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 0.05 : -0.05)} 1.85 ${p.r}) (size 0.5 0.5) (drill 0.5) (layers "F&B.Cu" "*.Mask") (tstamp c6386583-0880-481f-bf47-cf721ce3ca88))`);
fp.push(`(pad "" np_thru_hole circle (at ${(flip ? 0.05 : -0.05)} -1.11 ${p.r}) (size 0.5 0.5) (drill 0.5) (layers "F&B.Cu" "*.Mask") (tstamp f56e7031-c683-4c65-b4bc-472cb9c96bc7))`);

// F.SilkS
fp.push(`(fp_text reference "REF**" (at ${(flip ? 4 : -4)} -2.75 ${p.r}) (layer ${(flip ? "B.SilkS" : "F.SilkS")}) hide (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}) (tstamp 72f91f5e-391d-4fb4-a3c2-799156236a2f))`);

// F.Fab
fp.push(`(fp_text value "mousebites 2mm" (at ${(flip ? -0.25 : 0.25)} -1.5 ${p.r}) (layer ${(flip ? "B.Fab" : "F.Fab")}) hide (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}) (tstamp bd512b21-7d86-4ea0-8972-a09d240531b1))`);

// Edge.Cuts
//fp.push(`(fp_line (start ${(flip ? 1 : -1)} 2) (end ${(flip ? 1.5 : -1.5)} 2) (layer "Edge.Cuts") (width 0.08) (tstamp 76d4aa32-2bac-4988-a111-70e574bdf83a))`);
//fp.push(`(fp_line (start ${(flip ? 1.5 : -1.5)} -2) (end ${(flip ? 1 : -1)} -2) (layer "Edge.Cuts") (width 0.08) (tstamp fae7dccf-4923-4433-a74a-1b93accd86b2))`);
//fp.push(`(fp_arc (start ${(flip ? 1.5 : -1.5)} -2.999997) (end ${(flip ? 1.5 : -1.5)} -2) (angle 90) (layer "Edge.Cuts") (width 0.08) (tstamp 0abcccce-dcef-4c7e-93c2-3ea5092ea444))`);
//fp.push(`(fp_arc (start ${(flip ? 0.999997 : -0.999997)} -3) (end ${(flip ? -0 : 0)} -3) (angle 90) (layer "Edge.Cuts") (width 0.08) (tstamp 119e9b2f-aa64-46dd-8883-be91275215bb))`);
//fp.push(`(fp_arc (start ${(flip ? 1.500003 : -1.500003)} 3) (end ${(flip ? 2.5 : -2.5)} 3) (angle 90) (layer "Edge.Cuts") (width 0.08) (tstamp 476b3c80-f7c1-4934-b9e3-5b3afe141f0b))`);
//fp.push(`(fp_arc (start ${(flip ? 1 : -1)} 2.999997) (end ${(flip ? 1 : -1)} 2) (angle 90) (layer "Edge.Cuts") (width 0.08) (tstamp 8ee48a69-5783-42d0-8f46-667e848052d2))`);

fp.push(`(generator pcbnew)`);
fp.push(`(tedit 612CD351)`);

fp.push(`)`);

    return fp.join('\n');
  }
}
