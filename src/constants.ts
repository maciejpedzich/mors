export const TEAM_COLORS: { [index: number]: string } = {
  1: '#00d2be', // Mercedes
  2: '#dc0000', // Ferrari
  3: '#0600ef', // Red Bull
  4: '#005aff', // Williams
  5: '#006f62', // Aston Martin
  6: '#0090ff', // Alpine
  7: '#2b4562', // AlphaTauri
  8: '#b6babd', // Haas
  9: '#ff8700', // McLaren
  10: '#900000' // Alfa Romeo
};

/*
  Shamelessly stolen from:
  https://github.com/racehub-io/f1-telemetry-client/blob/57ceb8b32ef7b6a9af8d834193f7c2a7fee26413/src/constants
*/

export const INFRINGEMENTS: { [index: number]: string } = {
  0: 'Blocking by driving slowly',
  1: 'Blocking by driving the wrong way',
  2: 'Reversing off the start line',
  3: 'Causing a collision',
  4: 'Causing a big collision',
  5: 'Collision failed to hand back position single',
  6: 'Collision failed to hand back position multiple',
  7: 'Gaining time by corner cutting',
  8: 'Overtaking another driver by corner cutting',
  9: 'Overtaking multiple drivers by corner cutting',
  10: 'Crossed pit exit lane',
  11: 'Ignoring blue flags',
  12: 'Ignoring yellow flags',
  13: 'Ignoring drive through penalty',
  14: 'Too many drive through penalties',
  15: 'Drive through reminder serve within n laps',
  16: 'Drive through reminder serve this lap',
  17: 'Speeding in the pit lane',
  18: 'Parked for too long',
  19: 'Ignoring tyre regulations',
  20: 'Too many penalties',
  21: 'Receiving multiple warnings',
  22: 'Approaching disqualification',
  23: 'Tyre regulations select single',
  24: 'Tyre regulations select multiple',
  25: 'Lap invalidated corner cutting',
  26: 'Lap invalidated running wide',
  27: 'Running wide gained time minor',
  28: 'Corner cutting ran wide gained time significant',
  29: 'Corner cutting ran wide gained time extreme',
  30: 'Lap invalidated wall riding',
  31: 'Lap invalidated flashback used',
  32: 'Lap invalidated reset to track',
  33: 'Blocking the pitlane',
  34: 'Jump start',
  35: 'Safety car to car collision',
  36: 'Safety car illegal overtake',
  37: 'Safety car exceeding allowed pace',
  38: 'Virtual safety car exceeding allowed pace',
  39: 'Formation lap below allowed speed',
  40: 'Formation lap parking',
  41: 'Retired mechanical failure',
  42: 'Retired terminally damaged',
  43: 'Safety car falling too far back',
  44: 'Black flag timer',
  45: 'Unserved stop go penalty',
  46: 'Unserved drive through penalty',
  47: 'Engine component change',
  48: 'Gearbox change',
  49: 'Parc Fermé change',
  50: 'League grid penalty',
  51: 'Retry penalty',
  52: 'Illegal time gain',
  53: 'Mandatory pitstop',
  54: 'Attribute assigned'
};

export const PENALTIES: { [index: number]: string } = {
  0: 'Drive through penalty',
  1: 'Stop Go penalty',
  2: 'Grid penalty',
  3: 'Penalty reminder',
  4: 'Time penalty',
  5: 'Warning',
  6: 'Disqualification',
  7: 'Removed from formation lap',
  8: 'Parked too long timer',
  9: 'Tyre regulations',
  10: 'This lap invalidated',
  11: 'This and next lap invalidated',
  12: 'This lap invalidated without reason',
  13: 'This and next lap invalidated without reason',
  14: 'This and previous lap invalidated',
  15: 'This and previous lap invalidated without reason',
  16: 'Retirement',
  17: 'Black flag timer'
};
