//Camera Model
export const xtransIV = [
  { value: 'xt4', label: 'X-T4' },
  { value: 'xt3', label: 'X-T3' },
  { value: 'xt30', label: 'X-T30' },
  { value: 'x100v', label: 'X100V' },
  { value: 'xpro3', label: 'X-Pro3' },
];

export const xtransIII = [
  { value: 'xpro2', label: 'X-Pro2' },
  { value: 'x100f', label: 'X100F' },
  { value: 'xe3', label: 'X-E3' },
  { value: 'xt2', label: 'X-T2' },
  { value: 'xt20', label: 'X-T20' },
];

export const xtransII = [
  { value: 'x100s', label: 'X100S' },
  { value: 'x100T', label: 'X100T' },
  { value: 'xe2s', label: 'X-E2S' },
  { value: 'xt1', label: 'X-T1' },
  { value: 'xe2', label: 'X-E2' },
];

//Camera Model with Sensor
export const cameraModel = [
  {
    label: 'X-Trans IV',
    options: xtransIV,
  },
  {
    label: 'X-Trans III',
    options: xtransIII,
  },
  {
    label: 'X-Trans II',
    options: xtransII,
  },
];

export const filmSimulation = [
  { value: 'provia', label: 'Provia' },
  { value: 'velvia', label: 'Velvia' },
  { value: 'astia', label: 'Astia' },
  { value: 'classic-chrome', label: 'Classic Chrome' },
  { value: 'pro-neg-hi', label: 'PRO Neg. Hi' },
  { value: 'pro-neg-std', label: 'PRO Neg. Std' },
  { value: 'classic-neg', label: 'Classic Negative' },
  { value: 'eterna', label: 'ETERNA/Cinema' },
  { value: 'eterna-bb', label: 'Eterna Bleach Bypass' },
  { value: 'acros', label: 'Acros' },
  { value: 'acros-ye', label: 'Acros+Ye' },
  { value: 'acros-r', label: 'Acros+R' },
  { value: 'acros-g', label: 'Acros+G' },
  { value: 'sepia', label: 'Sepia' },
  { value: 'monochrome', label: 'Monochrome' },
  { value: 'monochrome-ye', label: 'Monochrome+Ye' },
  { value: 'monochrome-r', label: 'Monochrome+R' },
  { value: 'monochrome-g', label: 'Monochrome+G' },
];

//Grain Effect
export const grainEffect = [
  { value: 'off', label: 'Off' },
  { value: 'weak', label: 'Weak' },
  { value: 'strong', label: 'Strong' },
];

export const grainSize = [
  { value: 'small', label: 'Small' },
  { value: 'large', label: 'Large' },
];

export const grainEffectAndSize = [
  {
    label: 'Grain Effect',
    options: grainEffect,
  },
  {
    label: 'Grain Size',
    options: grainSize,
  },
];

//Dynmaic Range
export const dynmaicRange = [
  { value: 'auto', label: 'auto' },
  { value: '100', label: '100' },
  { value: '200', label: '200' },
  { value: '400', label: '400' },
];

//Color Chrome
export const colorChrome = [
  { value: 'off', label: 'Off' },
  { value: 'weak', label: 'Weak' },
  { value: 'strong', label: 'Strong' },
];

export const colorChromeBlue = [
  { value: 'off', label: 'Off' },
  { value: 'weak', label: 'Weak' },
  { value: 'strong', label: 'Strong' },
];

//Tone
export const noiseReduction = {
  min: -4,
  max: 4,
  marks: { '-4': '-4', '-2': '-2', 0: '0', 2: '2', 4: '4' },
};

export const highlight = {
  min: -2,
  max: 4,
  marks: { '-2': '-2', 0: '0', 2: '2', 4: '4' },
};

export const shadow = {
  min: -2,
  max: 4,
  marks: { '-2': '-2', 0: '0', 2: '2', 4: '4' },
};

export const color = {
  min: -4,
  max: 4,
  marks: { '-4': '-4', '-2': '-2', 0: '0', 2: '2', 4: '4' },
};

export const sharpness = {
  min: -4,
  max: 4,
  marks: { '-4': '-4', '-2': '-2', 0: '0', 2: '2', 4: '4' },
};

export const clarity = {
  min: -5,
  max: 5,
  marks: { '-5': '-5', '-3': '-3', 0: '0', 3: '3', 5: '5' },
};

export const expoComp = {
  min: -3,
  max: 3,
  marks: { '-3': '-3', '-2': '-2', '-1': '-1', 0: '0', 1: '1', 2: '2', 3: '3' },
};
