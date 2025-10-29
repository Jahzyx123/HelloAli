// data_colors.js
const COLOR_PALETTES = {
  "silicate_armor": {
    "name": "Silicate Armor",
    "primary": [
      "primary hue 1a",
      "primary hue 1b",
      "primary hue 1c"
    ],
    "secondary": [
      "secondary hue 1a",
      "secondary hue 1b"
    ],
    "accent": [
      "accent 1a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 1",
    "mood": "mood descriptor 1"
  },
  "gas_giant": {
    "name": "Gas Giant",
    "primary": [
      "primary hue 2a",
      "primary hue 2b",
      "primary hue 2c"
    ],
    "secondary": [
      "secondary hue 2a",
      "secondary hue 2b"
    ],
    "accent": [
      "accent 2a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 2",
    "mood": "mood descriptor 2"
  },
  "metallic_circuitry": {
    "name": "Metallic Circuitry",
    "primary": [
      "primary hue 3a",
      "primary hue 3b",
      "primary hue 3c"
    ],
    "secondary": [
      "secondary hue 3a",
      "secondary hue 3b"
    ],
    "accent": [
      "accent 3a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 3",
    "mood": "mood descriptor 3"
  },
  "quantum_foam": {
    "name": "Quantum Foam",
    "primary": [
      "primary hue 4a",
      "primary hue 4b",
      "primary hue 4c"
    ],
    "secondary": [
      "secondary hue 4a",
      "secondary hue 4b"
    ],
    "accent": [
      "accent 4a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 4",
    "mood": "mood descriptor 4"
  },
  "radioactive_fog": {
    "name": "Radioactive Fog",
    "primary": [
      "primary hue 5a",
      "primary hue 5b",
      "primary hue 5c"
    ],
    "secondary": [
      "secondary hue 5a",
      "secondary hue 5b"
    ],
    "accent": [
      "accent 5a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 5",
    "mood": "mood descriptor 5"
  },
  "vacuum_stasis": {
    "name": "Vacuum Stasis",
    "primary": [
      "primary hue 6a",
      "primary hue 6b",
      "primary hue 6c"
    ],
    "secondary": [
      "secondary hue 6a",
      "secondary hue 6b"
    ],
    "accent": [
      "accent 6a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 6",
    "mood": "mood descriptor 6"
  },
  "psychotropic": {
    "name": "Psychotropic",
    "primary": [
      "primary hue 7a",
      "primary hue 7b",
      "primary hue 7c"
    ],
    "secondary": [
      "secondary hue 7a",
      "secondary hue 7b"
    ],
    "accent": [
      "accent 7a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 7",
    "mood": "mood descriptor 7"
  },
  "cryogenic_desert": {
    "name": "Cryogenic Desert",
    "primary": [
      "primary hue 8a",
      "primary hue 8b",
      "primary hue 8c"
    ],
    "secondary": [
      "secondary hue 8a",
      "secondary hue 8b"
    ],
    "accent": [
      "accent 8a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 8",
    "mood": "mood descriptor 8"
  },
  "biological_lava": {
    "name": "Biological Lava",
    "primary": [
      "primary hue 9a",
      "primary hue 9b",
      "primary hue 9c"
    ],
    "secondary": [
      "secondary hue 9a",
      "secondary hue 9b"
    ],
    "accent": [
      "accent 9a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 9",
    "mood": "mood descriptor 9"
  },
  "tidal_strain": {
    "name": "Tidal Strain",
    "primary": [
      "primary hue 10a",
      "primary hue 10b",
      "primary hue 10c"
    ],
    "secondary": [
      "secondary hue 10a",
      "secondary hue 10b"
    ],
    "accent": [
      "accent 10a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 10",
    "mood": "mood descriptor 10"
  },
  "photonic_sail": {
    "name": "Photonic Sail",
    "primary": [
      "primary hue 11a",
      "primary hue 11b",
      "primary hue 11c"
    ],
    "secondary": [
      "secondary hue 11a",
      "secondary hue 11b"
    ],
    "accent": [
      "accent 11a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 11",
    "mood": "mood descriptor 11"
  },
  "hydrothermal_vent": {
    "name": "Hydrothermal Vent",
    "primary": [
      "primary hue 12a",
      "primary hue 12b",
      "primary hue 12c"
    ],
    "secondary": [
      "secondary hue 12a",
      "secondary hue 12b"
    ],
    "accent": [
      "accent 12a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 12",
    "mood": "mood descriptor 12"
  },
  "data_bleed": {
    "name": "Data Bleed",
    "primary": [
      "primary hue 13a",
      "primary hue 13b",
      "primary hue 13c"
    ],
    "secondary": [
      "secondary hue 13a",
      "secondary hue 13b"
    ],
    "accent": [
      "accent 13a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 13",
    "mood": "mood descriptor 13"
  },
  "chiral_anomaly": {
    "name": "Chiral Anomaly",
    "primary": [
      "primary hue 14a",
      "primary hue 14b",
      "primary hue 14c"
    ],
    "secondary": [
      "secondary hue 14a",
      "secondary hue 14b"
    ],
    "accent": [
      "accent 14a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 14",
    "mood": "mood descriptor 14"
  },
  "necrotic_growth": {
    "name": "Necrotic Growth",
    "primary": [
      "primary hue 15a",
      "primary hue 15b",
      "primary hue 15c"
    ],
    "secondary": [
      "secondary hue 15a",
      "secondary hue 15b"
    ],
    "accent": [
      "accent 15a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 15",
    "mood": "mood descriptor 15"
  },
  "infrared_hunter": {
    "name": "Infrared Hunter",
    "primary": [
      "primary hue 16a",
      "primary hue 16b",
      "primary hue 16c"
    ],
    "secondary": [
      "secondary hue 16a",
      "secondary hue 16b"
    ],
    "accent": [
      "accent 16a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 16",
    "mood": "mood descriptor 16"
  },
  "pressure_mottling": {
    "name": "Pressure Mottling",
    "primary": [
      "primary hue 17a",
      "primary hue 17b",
      "primary hue 17c"
    ],
    "secondary": [
      "secondary hue 17a",
      "secondary hue 17b"
    ],
    "accent": [
      "accent 17a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 17",
    "mood": "mood descriptor 17"
  },
  "aetheric_membrane": {
    "name": "Aetheric Membrane",
    "primary": [
      "primary hue 18a",
      "primary hue 18b",
      "primary hue 18c"
    ],
    "secondary": [
      "secondary hue 18a",
      "secondary hue 18b"
    ],
    "accent": [
      "accent 18a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 18",
    "mood": "mood descriptor 18"
  },
  "temporal_echo": {
    "name": "Temporal Echo",
    "primary": [
      "primary hue 19a",
      "primary hue 19b",
      "primary hue 19c"
    ],
    "secondary": [
      "secondary hue 19a",
      "secondary hue 19b"
    ],
    "accent": [
      "accent 19a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 19",
    "mood": "mood descriptor 19"
  },
  "toxic_terraformer": {
    "name": "Toxic Terraformer",
    "primary": [
      "primary hue 20a",
      "primary hue 20b",
      "primary hue 20c"
    ],
    "secondary": [
      "secondary hue 20a",
      "secondary hue 20b"
    ],
    "accent": [
      "accent 20a",
      "accent {i+1}b"
    ],
    "glow": "glow descriptor 20",
    "mood": "mood descriptor 20"
  },
  "exotic_palette_0": {
    "name": "Exotic Palette 0",
    "primary": [
      "impossible color 0a",
      "impossible color 0b"
    ],
    "secondary": [
      "shift color 0"
    ],
    "accent": [
      "flash 0",
      "edge 0"
    ],
    "glow": "ethereal glow 0",
    "mood": "alien mood 0"
  },
  "exotic_palette_1": {
    "name": "Exotic Palette 1",
    "primary": [
      "impossible color 1a",
      "impossible color 1b"
    ],
    "secondary": [
      "shift color 1"
    ],
    "accent": [
      "flash 1",
      "edge 1"
    ],
    "glow": "ethereal glow 1",
    "mood": "alien mood 1"
  },
  "exotic_palette_2": {
    "name": "Exotic Palette 2",
    "primary": [
      "impossible color 2a",
      "impossible color 2b"
    ],
    "secondary": [
      "shift color 2"
    ],
    "accent": [
      "flash 2",
      "edge 2"
    ],
    "glow": "ethereal glow 2",
    "mood": "alien mood 2"
  },
  "exotic_palette_3": {
    "name": "Exotic Palette 3",
    "primary": [
      "impossible color 3a",
      "impossible color 3b"
    ],
    "secondary": [
      "shift color 3"
    ],
    "accent": [
      "flash 3",
      "edge 3"
    ],
    "glow": "ethereal glow 3",
    "mood": "alien mood 3"
  },
  "exotic_palette_4": {
    "name": "Exotic Palette 4",
    "primary": [
      "impossible color 4a",
      "impossible color 4b"
    ],
    "secondary": [
      "shift color 4"
    ],
    "accent": [
      "flash 4",
      "edge 4"
    ],
    "glow": "ethereal glow 4",
    "mood": "alien mood 4"
  },
  "exotic_palette_5": {
    "name": "Exotic Palette 5",
    "primary": [
      "impossible color 5a",
      "impossible color 5b"
    ],
    "secondary": [
      "shift color 5"
    ],
    "accent": [
      "flash 5",
      "edge 5"
    ],
    "glow": "ethereal glow 5",
    "mood": "alien mood 5"
  },
  "exotic_palette_6": {
    "name": "Exotic Palette 6",
    "primary": [
      "impossible color 6a",
      "impossible color 6b"
    ],
    "secondary": [
      "shift color 6"
    ],
    "accent": [
      "flash 6",
      "edge 6"
    ],
    "glow": "ethereal glow 6",
    "mood": "alien mood 6"
  },
  "exotic_palette_7": {
    "name": "Exotic Palette 7",
    "primary": [
      "impossible color 7a",
      "impossible color 7b"
    ],
    "secondary": [
      "shift color 7"
    ],
    "accent": [
      "flash 7",
      "edge 7"
    ],
    "glow": "ethereal glow 7",
    "mood": "alien mood 7"
  },
  "exotic_palette_8": {
    "name": "Exotic Palette 8",
    "primary": [
      "impossible color 8a",
      "impossible color 8b"
    ],
    "secondary": [
      "shift color 8"
    ],
    "accent": [
      "flash 8",
      "edge 8"
    ],
    "glow": "ethereal glow 8",
    "mood": "alien mood 8"
  },
  "exotic_palette_9": {
    "name": "Exotic Palette 9",
    "primary": [
      "impossible color 9a",
      "impossible color 9b"
    ],
    "secondary": [
      "shift color 9"
    ],
    "accent": [
      "flash 9",
      "edge 9"
    ],
    "glow": "ethereal glow 9",
    "mood": "alien mood 9"
  },
  "exotic_palette_10": {
    "name": "Exotic Palette 10",
    "primary": [
      "impossible color 10a",
      "impossible color 10b"
    ],
    "secondary": [
      "shift color 10"
    ],
    "accent": [
      "flash 10",
      "edge 10"
    ],
    "glow": "ethereal glow 10",
    "mood": "alien mood 10"
  },
  "exotic_palette_11": {
    "name": "Exotic Palette 11",
    "primary": [
      "impossible color 11a",
      "impossible color 11b"
    ],
    "secondary": [
      "shift color 11"
    ],
    "accent": [
      "flash 11",
      "edge 11"
    ],
    "glow": "ethereal glow 11",
    "mood": "alien mood 11"
  },
  "exotic_palette_12": {
    "name": "Exotic Palette 12",
    "primary": [
      "impossible color 12a",
      "impossible color 12b"
    ],
    "secondary": [
      "shift color 12"
    ],
    "accent": [
      "flash 12",
      "edge 12"
    ],
    "glow": "ethereal glow 12",
    "mood": "alien mood 12"
  },
  "exotic_palette_13": {
    "name": "Exotic Palette 13",
    "primary": [
      "impossible color 13a",
      "impossible color 13b"
    ],
    "secondary": [
      "shift color 13"
    ],
    "accent": [
      "flash 13",
      "edge 13"
    ],
    "glow": "ethereal glow 13",
    "mood": "alien mood 13"
  },
  "exotic_palette_14": {
    "name": "Exotic Palette 14",
    "primary": [
      "impossible color 14a",
      "impossible color 14b"
    ],
    "secondary": [
      "shift color 14"
    ],
    "accent": [
      "flash 14",
      "edge 14"
    ],
    "glow": "ethereal glow 14",
    "mood": "alien mood 14"
  },
  "exotic_palette_15": {
    "name": "Exotic Palette 15",
    "primary": [
      "impossible color 15a",
      "impossible color 15b"
    ],
    "secondary": [
      "shift color 15"
    ],
    "accent": [
      "flash 15",
      "edge 15"
    ],
    "glow": "ethereal glow 15",
    "mood": "alien mood 15"
  },
  "exotic_palette_16": {
    "name": "Exotic Palette 16",
    "primary": [
      "impossible color 16a",
      "impossible color 16b"
    ],
    "secondary": [
      "shift color 16"
    ],
    "accent": [
      "flash 16",
      "edge 16"
    ],
    "glow": "ethereal glow 16",
    "mood": "alien mood 16"
  },
  "exotic_palette_17": {
    "name": "Exotic Palette 17",
    "primary": [
      "impossible color 17a",
      "impossible color 17b"
    ],
    "secondary": [
      "shift color 17"
    ],
    "accent": [
      "flash 17",
      "edge 17"
    ],
    "glow": "ethereal glow 17",
    "mood": "alien mood 17"
  },
  "exotic_palette_18": {
    "name": "Exotic Palette 18",
    "primary": [
      "impossible color 18a",
      "impossible color 18b"
    ],
    "secondary": [
      "shift color 18"
    ],
    "accent": [
      "flash 18",
      "edge 18"
    ],
    "glow": "ethereal glow 18",
    "mood": "alien mood 18"
  },
  "exotic_palette_19": {
    "name": "Exotic Palette 19",
    "primary": [
      "impossible color 19a",
      "impossible color 19b"
    ],
    "secondary": [
      "shift color 19"
    ],
    "accent": [
      "flash 19",
      "edge 19"
    ],
    "glow": "ethereal glow 19",
    "mood": "alien mood 19"
  },
  "exotic_palette_20": {
    "name": "Exotic Palette 20",
    "primary": [
      "impossible color 20a",
      "impossible color 20b"
    ],
    "secondary": [
      "shift color 20"
    ],
    "accent": [
      "flash 20",
      "edge 20"
    ],
    "glow": "ethereal glow 20",
    "mood": "alien mood 20"
  },
  "exotic_palette_21": {
    "name": "Exotic Palette 21",
    "primary": [
      "impossible color 21a",
      "impossible color 21b"
    ],
    "secondary": [
      "shift color 21"
    ],
    "accent": [
      "flash 21",
      "edge 21"
    ],
    "glow": "ethereal glow 21",
    "mood": "alien mood 21"
  },
  "exotic_palette_22": {
    "name": "Exotic Palette 22",
    "primary": [
      "impossible color 22a",
      "impossible color 22b"
    ],
    "secondary": [
      "shift color 22"
    ],
    "accent": [
      "flash 22",
      "edge 22"
    ],
    "glow": "ethereal glow 22",
    "mood": "alien mood 22"
  },
  "exotic_palette_23": {
    "name": "Exotic Palette 23",
    "primary": [
      "impossible color 23a",
      "impossible color 23b"
    ],
    "secondary": [
      "shift color 23"
    ],
    "accent": [
      "flash 23",
      "edge 23"
    ],
    "glow": "ethereal glow 23",
    "mood": "alien mood 23"
  },
  "exotic_palette_24": {
    "name": "Exotic Palette 24",
    "primary": [
      "impossible color 24a",
      "impossible color 24b"
    ],
    "secondary": [
      "shift color 24"
    ],
    "accent": [
      "flash 24",
      "edge 24"
    ],
    "glow": "ethereal glow 24",
    "mood": "alien mood 24"
  },
  "exotic_palette_25": {
    "name": "Exotic Palette 25",
    "primary": [
      "impossible color 25a",
      "impossible color 25b"
    ],
    "secondary": [
      "shift color 25"
    ],
    "accent": [
      "flash 25",
      "edge 25"
    ],
    "glow": "ethereal glow 25",
    "mood": "alien mood 25"
  },
  "exotic_palette_26": {
    "name": "Exotic Palette 26",
    "primary": [
      "impossible color 26a",
      "impossible color 26b"
    ],
    "secondary": [
      "shift color 26"
    ],
    "accent": [
      "flash 26",
      "edge 26"
    ],
    "glow": "ethereal glow 26",
    "mood": "alien mood 26"
  },
  "exotic_palette_27": {
    "name": "Exotic Palette 27",
    "primary": [
      "impossible color 27a",
      "impossible color 27b"
    ],
    "secondary": [
      "shift color 27"
    ],
    "accent": [
      "flash 27",
      "edge 27"
    ],
    "glow": "ethereal glow 27",
    "mood": "alien mood 27"
  },
  "exotic_palette_28": {
    "name": "Exotic Palette 28",
    "primary": [
      "impossible color 28a",
      "impossible color 28b"
    ],
    "secondary": [
      "shift color 28"
    ],
    "accent": [
      "flash 28",
      "edge 28"
    ],
    "glow": "ethereal glow 28",
    "mood": "alien mood 28"
  },
  "exotic_palette_29": {
    "name": "Exotic Palette 29",
    "primary": [
      "impossible color 29a",
      "impossible color 29b"
    ],
    "secondary": [
      "shift color 29"
    ],
    "accent": [
      "flash 29",
      "edge 29"
    ],
    "glow": "ethereal glow 29",
    "mood": "alien mood 29"
  }
};