// _______________________ Inventory-_________________________

const add_company_select = document.querySelector(".add-company-select");
const add_model_select = document.querySelector(".add-model-select");
const add_partname_select = document.querySelector(".add-partname-select");

const add_model_selectOptions = {
Tata: `<option value="" disabled selected>Model</option>
  <option value="tata">Tata</option>
  <option value="nexon">Tata Nexon</option>
  <option value="punch">Tata Punch</option>
  <option value="harrier">Tata Harrier</option>
  <option value="altroz">Tata Altroz</option>
  <option value="tiago">Tata Tiago</option>
  <option value="safari">Tata Safari</option>
  <option value="tigor">Tata Tigor</option>
  <option value="nexon-ev">Tata Nexon EV</option>
  <option value="xpres-t">Tata Xpres-T</option>`,
Maruti: `<option value="" disabled selected>Model</option>
  <option value="maruti">Maruti</option>
  <option value="maruti-swift">Maruti Suzuki Swift</option>
  <option value="maruti-baleno">Maruti Suzuki Baleno</option>
  <option value="maruti-celerio">Maruti Suzuki Celerio</option>
  <option value="maruti-alto">Maruti Suzuki Alto</option>
  <option value="maruti-ertiga">Maruti Suzuki Ertiga</option>
  <option value="maruti-dzire">Maruti Suzuki Dzire</option>
  <option value="maruti-brezza">Maruti Suzuki Brezza</option>
  <option value="maruti-wagonr">Maruti Suzuki Wagon R</option>
  <option value="maruti-ciaz">Maruti Suzuki Ciaz</option>
  <option value="maruti-eeco">Maruti Suzuki Eeco</option>
  <option value="suzuki-spresso">Suzuki S-Presso</option>
  <option value="maruti-s-cross">Maruti Suzuki S-Cross</option>
  <option value="suzuki-alto">Suzuki Alto</option>
  <option value="maruti-ignis">Maruti Suzuki Ignis</option>
  <option value="maruti-xl6">Maruti Suzuki XL6</option>
  <option value="maruti-1000">Maruti 1000</option>
  <option value="suzuki-vitara">Suzuki Vitara</option>
  <option value="maruti-lgnis">Maruti Lgnis</option>
  <option value="suzuki-carry">Suzuki Carry</option>
  <option value="maruti-800">Maruti 800</option>
  <option value="jimny">Jimny</option>
  <option value="maruti-ertiga-tour-m">Maruti Suzuki Ertiga Tour-M</option>
  <option value="suzuki-xl6-nexa">Suzuki XL 6 Nexa</option>
  `,
Mahindra: `<option value="" disabled selected>Model</option>
  <option value="mahindra scorpio">Mahindra Scorpio</option>
  <option value="mahindra thar">Mahindra Thar</option>
  <option value="mahindra XUV 700">Mahindra XUV 700</option>
  <option value="mahindra bolero">Mahindra Bolero</option>
  <option value="mahindra XUV 300">Mahindra XUV 300</option>
  <option value="mahindra bolero neo">Mahindra Bolero Neo</option>
  <option value="manhindra scorpio -N">Manhindra Scorpio -N</option>
  <option value="mahindra marazzo">Mahindra Marazzo</option>
  <option value="mahindra alturas G 4">Mahindra Alturas G 4</option>
  <option value="mahindra KUV 100_net">Mahindra KUV 100_Net</option>
  <option value="mahindra everito">Mahindra eVerito</option>`,
Hyundai: `
  <option value="" disabled selected>Model</option>
  <option value="hyundai creta">Hyundai Creta</option>
  <option value="hyundai kona">Hyundai Kona</option>
  <option value="hyundai venue">Hyundai Venue</option>
  <option value="hyundai i 20">Hyundai i20</option>
  <option value="hyundai verna">Hyundai Verna</option>
  <option value="hyundai alcazar">Hyundai Alcazar</option>
  <option value="hyundai santro">Hyundai Santro</option>
  <option value="hyundai aura">Hyundai Aura</option>
  <option value="hyundai I 20_N line">Hyundai i20 N Line</option>
  <option value="hyundai xcent">Hyundai Xcent</option>
  <option value="hyundai grand I 10 nias">Hyundai Grand i10 Nios</option>`,
Honda: `<option value="" disabled selected>Model</option>
  <option value="honda city">Honda City</option>
  <option value="honda WR--V">Honda WR-V</option>
  <option value="honda amaze">Honda Amaze</option>
  <option value="honda jazz">Honda Jazz</option>`,
Ford: `<option value="" disabled selected>Model</option>
  <option value="ford ecosport">Ford EcoSport</option>
  <option value="ford mustang">Ford Mustang</option>
  <option value="ford figo">Ford Figo</option>
  <option value="ford aspire">Ford Aspire</option>
  <option value="ford everest">Ford Everest</option>
  <option value="ford mondeo">Ford Mondeo</option>
  <option value="ford freestyle">Ford Freestyle</option>
  <option value="ford taurus">Ford Taurus</option>
  <option value="ford kuga">Ford Kuga</option>
  <option value="ford B-max">Ford B-Max</option>
  <option value="ford falcon">Ford Falcon</option>
  <option value="ford fairlane">Ford Fairlane</option>
  <option value="ford torino">Ford Torino</option>
  <option value="ford thunderbird">Ford Thunderbird</option>
  <option value="1957 ford">1957 Ford</option>
  <option value="ford LTD crown victoria">Ford LTD Crown Victoria</option>
  <option value="1932 ford">1932 Ford</option>
  <option value="ford anglia">Ford Anglia</option>
  <option value="1952 ford">1952 Ford</option>
  <option value="1949 ford">1949 Ford</option>
  <option value="ford windstar">Ford Windstar</option>
  <option value="ford transit">Ford Transit</option>
  <option value="ford consul classic">Ford Consul Classic</option>
  <option value="ford F-150">Ford F-150</option>`,
KIA: `<option value="" disabled selected>Model</option>
  <option value="kia EV6">kia EV6</option>
  <option value="kia seltos">kia seltos</option>
  <option value="kia carens">kia carens</option>
  <option value="kia carnivel">kia carnivel</option>
  <option value="kia sonet">kia sonet</option>
`,
Renault: `<option value="" disabled selected>Model</option>
  <option value="renault KWID">Renault KWID</option>
  <option value="renault kiger">Renault Kiger</option>
  <option value="renault triber">Renault Triber</option>`,
Volkswagen: `<option value="" disabled selected>Model</option>
  <option value="Valkswagen tiguam">Valkswagen tiguam</option>
  <option value="Valkswagen virtus">Valkswagen virtus</option>
  <option value="valkswagen taigun">valkswagen taigun</option>
`,
Toyota: `<option value="" disabled selected>Model</option>
  <option value="toyota camry">Toyota Camry</option>
  <option value="toyota fortuner">Toyota Fortuner</option>
  <option value="toyota vellfire">Toyota Vellfire</option>
  <option value="toyota cruiser">Toyota Cruiser</option>
  <option value="toyota glanze">Toyota Glanze</option>
  <option value="toyota innova crysta">Toyota Innova Crysta</option>`,
MG: `<option value="" disabled selected>Model</option>
  <option value="MG hector">MG hector</option>
  <option value="mg astor">mg astor</option>
  <option value="mg ZS EV">mg ZS EV</option>
  <option value="mg gloster">mg gloster</option>
  <option value="mg hector-plus">mg hector-plus</option>`,
Jeep: `
  <option value="" disabled selected>Model</option>
  <option value="jeep wrangler">Jeep Wrangler</option>
  <option value="jeep compass">Jeep Compass</option>
  <option value="jeep meridian">Jeep Meridian</option>`,
Audi: `<option value="" disabled selected>Model</option>
  <option value="audi A 4">audi A 4</option>
  <option value="audi A6">audi A6</option>
  <option value="audi Q 5">audi Q 5</option>
  <option value="audi Q7">audi Q7</option>
  <option value="audi Q 2">audi Q 2</option>
  <option value="audi Q8">audi Q8</option>
  <option value="audi e-tron GT">audi e-tron GT</option>
  <option value="audi S 5">audi S 5</option>
  <option value="audi RS 5">audi RS 5</option>
  <option value="audi RS Q 8">audi RS Q 8</option>
  <option value="audi e-tron sportback">audi e-tron sportback</option>
  <option value="audi RS 7 sportback">audi RS 7 sportback</option>`,
BMW: `
  <option>bmw XS</option>
  <option>BMW 3 series</option>
  <option>BMW 5 series</option>
  <option>BMW X3</option>
  <option>BMW X 1</option>
  <option>BMW 7 series</option>
  <option>BMW X 6</option>
  <option>BMW i4</option>
  <option>BMW Z4</option>
  <option>BMW series 4</option>
  <option>BMW X7</option>
  <option>BMW X4</option>
  <option>BMW series 8</option>
  <option>BMW 6 series</option>
  <option>BMW iX</option>`,
Mercedes: `
  <option value="mercedes benz E-class">mercedes benz E-class</option>
  <option value="mercedes benz GLE">mercedes benz GLE</option>
  <option value="mercedes -benz A class">mercedes -benz A class</option>
  <option value="mercedes -benz GLA">mercedes -benz GLA</option>
  <option value="mercedes -benz C-class">mercedes -benz C-class</option>
  <option value="mercedes -benz G class">mercedes -benz G class</option>
  <option value="mercedes -benz S class">mercedes -benz S class</option>
  <option value="mercedes -benz GLS">mercedes -benz GLS</option>
  <option value="AMG GT">AMG GT</option>
  <option value="mercedes -benz CLS class">mercedes -benz CLS class</option>
  <option value="mercedes benz CLA">mercedes benz CLA</option>
  <option value="mercedes benz -V class">mercedes benz -V class</option>
  <option value="mercedes benz EQC">mercedes benz EQC</option>
  <option value="mercedes benz GLC-coupe">mercedes benz GLC-coupe</option>
  <option value="mercedes benz -B klass">mercedes benz -B klass</option>
  <option value="mercedes -benz maybach GIS">mercedes -benz maybach GIS</option>
  <option value="mercedes -benz C-klass cabriolet">mercedes -benz C-klass cabriolet</option>
  <option value="mercedes -benz GLE coupe">mercedes -benz GLE coupe</option>
  <option value="mercedes benz SLS AMG">mercedes benz SLS AMG</option>
  <option value="mercedes benz class C-coupe">mercedes benz class C-coupe</option>
  <option value="mercedes benz SLC--class">mercedes benz SLC--class</option>
  <option value="mercedes benz GLB">mercedes benz GLB</option>
  <option value="mercedes benz EQS">mercedes benz EQS</option>
`,
Mitsubishi: `<option value="mitsubishi outlander">mitsubishi outlander</option>
  <option value="mitsubishi montero">mitsubishi montero</option>
  <option value="mitsubishi pajero sport">mitsubishi pajero sport</option>
  <option value="mitsubishi mirage">mitsubishi mirage</option>
  <option value="mitsubishi lancer">mitsubishi lancer</option>
  <option value="mitsubishi ASX">mitsubishi ASX</option>
  <option value="mitsubishi eclipse cross">mitsubishi eclipse cross</option>
  <option value="mitsubishi galant">mitsubishi galant</option>
  <option value="mitsubishi lancer-evolution">mitsubishi lancer-evolution</option>
  <option value="mitsubishi outlander-PHEV">mitsubishi outlander-PHEV</option>
  <option value="mitsubishi xpander">mitsubishi xpander</option>
  <option value="mitsubishi eclipes">mitsubishi eclipes</option>
  <option value="mitsubishi GTO">mitsubishi GTO</option>
  <option value="mitsubishi colt">mitsubishi colt</option>
  <option value="mitsubishi L 300">mitsubishi L 300</option>
  <option value="mitsubishi mirage G 4">mitsubishi mirage G 4</option>
  <option value="mitsubishi diamante">mitsubishi diamante</option>
  <option value="mitsubishi stsrion">mitsubishi stsrion</option>
  <option value="mitsubishi space star">mitsubishi space star</option>
  <option value="mitsubishi endeavor">mitsubishi endeavor</option>
  <option value="mitsubishi sigma">mitsubishi sigma</option>
  <option value="mitsubishi i-miEV">mitsubishi i-miEV</option>
  <option value="mitsubishi grandis">mitsubishi grandis</option>
  <option value="mitsubishi galant GTO">mitsubishi galant GTO</option>`,
Skoda: `<option value="skoda-octavia">Skoda Octavia</option>
  <option value="skoda-kodiaq">Skoda Kodiaq</option>
  <option value="skoda-superb">Skoda Superb</option>
  <option value="skoda-kushaq">Skoda Kushaq</option>
  <option value="skoda-slavia">Skoda Slavia</option>`,
Chevrolet: `<option value="chevrolet spark">Chevrolet Spark</option>
  <option value="chevrolet cruze">Chevrolet Cruze</option>
  <option value="chevrolet trailblazer">Chevrolet Trailblazer</option>
  <option value="chevrolet aveo">Chevrolet Aveo</option>
  <option value="chevrolet camaro">Chevrolet Camaro</option>
  <option value="chevrolet sail">Chevrolet Sail</option>
  <option value="chevrolet tavera">Chevrolet Tavera</option>
  <option value="chevrolet trax">Chevrolet Trax</option>
  <option value="chevrolet colorada">Chevrolet Colorada</option>
  <option value="chevrolet tahoe">Chevrolet Tahoe</option>
  <option value="chevrolet suburban">Chevrolet Suburban</option>
  <option value="chevrolet equinox">Chevrolet Equinox</option>
  <option value="chevrolet corvette">Chevrolet Corvette</option>
  <option value="chevrolet traverse">Chevrolet Traverse</option>
  <option value="chevrolet captiva">Chevrolet Captiva</option>
  <option value="chevrolet malibu">Chevrolet Malibu</option>
  <option value="chevrolet bolt">Chevrolet Bolt</option>
  <option value="chevrolet silverado">Chevrolet Silverado</option>
  <option value="chevrolet impala">Chevrolet Impala</option>
  <option value="chevrolet sonic">Chevrolet Sonic</option>
  <option value="chevrolet volt">Chevrolet Volt</option>
  <option value="chevrolet blazer">Chevrolet Blazer</option>
  <option value="chevrolet maxx">Chevrolet MAXX</option>
  <option value="chevrolet corvette stingray">Chevrolet Corvette Stingray</option>`,
};

const add_part_selectoptions = {
  air_conditioning: [
    "ac-compressor-clutch",
    "ac-compressor-oil",
    "ac-compressor-valve",
    "ac-control-unit",
    "ac-pressure switch",
    "ac-repair-kit",
    "ac-compressor",
    "air-duct",
    "air-vent",
    "blower-motor",
    "blower-motor-resistor",
    "cabin-filter",
    "cabin-temperature sensor",
    "condenser",
    "condenser-fan",
    "condenser-fan-cowling",
    "defroster-hose",
    "evaporator",
    "expansion-valve",
    "HVAC-hose",
    "heat-exchanger",
    "receiver-drier",
    "refrigerant",
    "v-belt",
  ],
  belts_chains_rollers: [
    "Part-Details",
    "Alternator-pulley",
    "belt-pulley",
    "crankshaft-pulley",
    "deflection-pulley",
    "timing-belt",
    "timing-belt-kit",
    "timing-chain",
    "timing-chain-gaide",
    "v-belts",
  ],
  body: [
    "Part-Details",
    "automotive tape",
    "beam-axle",
    "body-frame",
    "body-shell",
    "chassis",
    "support-frame",
    "body-rubber-stop",
    "Bonnet",
    "bonnet-hinge",
    "bonnet-lid",
    "bonnet-lock",
    "bonnet-release lever",
    "bonnet-seal",
    "bonnet-silencing-material",
    "bonnet-stay-rod-holder",
    "bonnet-strut",
    "bonnet-support-bracket",
    "bonnet-trim",
    "Boot",
    "boot-lid",
    "boot-lid-hinge spring",
    "boot-lid-seal",
    "boot-lock",
    "bumper",
    "front-bumper",
    "rear-bumper",
    "bumper-bracket",
    "bumper-trim",
    "canopy",
    "central-locking-system",
    "cowl-trim",
    "door-components",
    "door-catch",
    "door-check-arm",
    "door-glass",
    "door-handle",
    "door-handle-bracket",
    "door-hinge",
    "door-hinge-cover",
    "door-latch",
    "door-lock",
    "door-lock-cylinder",
    "door-lock-knob",
    "door-lock-link",
    "door-membrane",
    "door-seal",
    "door-trim-cap",
    "door-handle-trim",
    "emblem",
    "engine-cover",
    "fender",
    "fender-bracket",
    "fender-trim",
    "fog-lamp-cover",
    "foot-step",
    "front-grill",
    "front-grill-trim",
    "fuel-tank",
    "glove-box-lock",
    "hook",
    "horn-bracket",
    "impact-absorber",
    "indicator",
    "inner-wing-panel",
    "interior-mirror",
    "licence-plate-holder",
    "mirror-glass",
    "mirror-trim",
    "noise-insulator",
    "outside-mirror",
    "outside-mirror-cover",
    "panels",
    "door-panel",
    "engine-under-cover",
    "floor-panel",
    "front-body-panel",
    "radiator-support",
    "roof-panel",
    "side-panel",
    "Radiator-mounting",
    "roof-rail",
    "roof-trim",
    "side-body-trim",
    "sill-trim",
    "spare-wheel-carrier",
    "speaker-grill",
    "spoiler",
    "sunroof",
    "sunroof-drain-hose",
    "tailgate-strut",
    "tow-hook-cover",
    "wheel-arch-trim",
    "window-guide-rail",
    "window-seal",
    "windshield",
    "front-windshield",
    "rear-windshield",
    "windshield-seal",
  ],
  brake_system: [
    "accessary-kit-brake-pads",
    "accessary-kit-brake-shoes",
    "anti-lock-braking-system",
    "ABS-pump",
    "ABS-ring",
    "ABS-sensor",
    "brake-booster",
    "brake-cable",
    "brake-caliper",
    "brake-caliper-piston",
    "brake-caliper-repair-kit",
    "brake-disc",
    "front-brake-disc",
    "rear-brake-disc",
    "brake-disc-back-plate",
    "brake-disc-bolt",
    "brake-drum-back-plate",
    "brake-fluid-reservoir",
    "brake-hose",
    "brake-hose-connector",
    "brake-light-switch",
    "brake-master-cylinder",
    "brake-master-cylinder-repair-kit",
    "brake-pads",
    "front-brake-pads",
    "rear-brake-pads",
    "brake-pad-wear-sensor",
    "brake-pedal",
    "brake-pipe",
    "brake-power-regulator",
    "brake-proportioning-valve",
    "brake-shoe-lining",
    "brake-shoes",
    "brake-system-bracket",
    "caliper-bracket",
    "drum-brake",
    "drum-brake-adjuster",
    "handbrake",
    "handbrake-repair-kit",
    "handbrake-warning-light-switch",
    "vacuum-hose",
    "vacuum-pump",
    "wheel-brake-cylinder",
    "wheel-brake-cylinder-repair-kit",
  ],
  car_accessories: [
    "brakup-camera",
    "car-decal-stieker",
    "car-exterior-accessories",
    "car-cover",
    "door-guard",
    "mirror-accessories",
    "mudguard",
    "rain-guard",
    "tubeless-tyre-puncture-repair-kit",
    "tyre-inflator",
    "tyre-valve-cap",
    "car-interior-accessories",
    "armrest",
    "ashtray",
    "back-rest",
    "car-dustbin",
    "car-mats",
    "car-mobils-accessories",
    "dashboard-idol",
    "dashboard-mats",
    "floor-mat-liners",
    "gear-lever-knod",
    "inflatable-bed",
    "pillow",
    "seat-cover",
    "steering-cover",
    "steering-wheel-knod",
    "sun-shade",
    "tissue-box holder",
    "emergency-breakdown",
    "car-first-aid-kit",
    "car-jack",
    "car-jack support-plate",
    "fire-extinguisher",
    "sefety-hammer",
    "tool",
    "tow-cable",
    "warning-triangle",
    "mobile-holder",
    "other-accessories",
    "air-freshener",
    "anti-rust-spray",
    "bettery-charger",
    "bug-tar-remover",
    "car-interior-cleaner",
    "car-polish",
    "car-sanitizer",
    "car-shampoo",
    "car-vacuum-cleaner",
    "car-wax",
    "cleaning-kit",
    "duster",
    "glass-cleaner",
    "HID-conversion-kit",
    "headight-restorer",
    "jumper-cable",
    "key-cover",
    "key-chain",
    "micrafiber-cloth",
    "pressure-washer",
    "scratch-remover",
    "seat-gap-filler",
    "sponge",
    "spray-paint",
    "tyre-cleaner",
  ],

  control_cables: [
    "accelerator-cable",
    "bonnet-release-cable",
    "brake-cable",
    "clutch-cable",
    "door-lock-link",
    "fuel-lid-cable",
    "gear-shift-cable",
    "seat-cable",
    "temperature-control-cable",
  ],
  clutch_system: [
    "clutch-system",
    "clutch-cable",
    "clutch-control-switch",
    "clutch-disc",
    "clutch-hose",
    "clutch-master-cylinder",
    "clutch-master-cylinder-reservoir",
    "clutch-pedal",
    "clutch-pressure-plate",
    "clutch-release-bearing",
    "clutch-release-fork",
    "clutch-release-lever",
    "clutch-release-shift",
    "clutch-repair-kit",
    "clutch-slave-cylinder",
    "clutch-sleeve",
    "flywheel",
    "pilot-bearing",
  ],
  electric_components: [
    "alternator",
    "alternator-assembly",
    "alternator-bearing",
    "alternator-bracket",
    "alternator-carbon-brush-holder",
    "alternator-carbon-brush",
    "alternator-cover",
    "alternator-pulley",
    "alternator-rectifier",
    "alternator-regulator",
    "alternator-rotor",
    "alternator-stator",
    "antenna-cable",
    "audio-system",
    "amplifier",
    "bass-tube",
    "speaker",
    "battery",
    "battery-cable",
    "battery-cover",
    "battery-holder",
    "battery-terminal",
    "battery-terminal-cap",
    "bonnet-release-cable",
    "boot-release-cable",
    "central-locking-system",
    "control-unit",
    "control-unit-bracket",
    "electric-drive",
    "fuse",
    "fuse-box",
    "glow-plug",
    "horn",
    "information-and-communication-system",
    "antenna",
    "clock",
    "infotainment-system",
    "instrument-cluster",
    "microphone",
    "intake-air-temperature-sender-unit",
    "light",
    "auxiliary-stop light",
    "brake-light-switch",
    "bulb-socket",
    "cargo-area-light",
    "daytime-running-light",
    "fog-lamp",
    "fog-lamp-bulb",
    "fog-lamp-switch",
    "hazard-light-switch",
    "headlight",
    "headlight-bulb",
    "headlight-component",
    "headlight-leveling-switch",
    "headlight-motor",
    "indicator",
    "indicator-bulb",
    "light-lens",
    "number-plate-light",
    "number-plate-light-bulb",
    "passenger-compartment-light",
    "reverse-light-switch",
    "stop light-bulb",
    "tail-light",
    "mirror-actuator",
    "power-window motor",
    "printed-circuit-board",
    "radiator-fan-motor",
    "reflector",
    "relay",
    "seat-cable",
    "security-system",
    "sensor",
    "ABS-sensor",
    "accelerator-position-sensor",
    "battery-sensor",
    "brake-pad-wear-sensor",
    "fuel-sensor",
    "impact-sensor",
    "lambda-sensor",
    "mass-air-flow sensor",
    "parking-sensor",
    "spark plug",
    "speedometer-cable",
    "starter",
    "starter-motor-armature",
    "starter-motor-assembly",
    "starter-motor-brush-holder",
    "starter-motor-carbon-brush",
    "starter-motor-commutation-shield",
    "starter-motor-freewheel-gear",
    "starter-motor-lever",
    "starter-motor-repair-kit",
    "starter-motor-solenoid-switch",
    "starter-motor-yoke",
    "starter-relay",
    "sunroof-motor-switch",
    "brake-light-switch",
    "clutch-control-switch",
    "dashboard-switch",
    "door-switch",
    "fog-lamp-switch",
    "hazard-light-switch",
    "headlight-leveling-switch",
    "ignition-switch",
    "mirror-adjustment-switch",
    "oil-pressure-switch",
    "reverse-light-switch",
    "steering-column-switch",
    "steering-wheel-switch",
    "sunroof-switch",
    "window-switch",
    "temperature-control-cable",
    "v-belt",
    "voltage-stabilizer",
    "windscreen-cleaning-parts",
    "windshield-washer-pump",
    "wiper-blade",
    "wiper-blade-set",
    "wiper-motor",
    "wiring-cover",
    "wiring-harness",
    "wiring-harness-brackert",
  ],
  engine: [
    "adjusting-potentiometer",
    "air-supply",
    "air-filter",
    "air-filter-bracket",
    "air-filter-housing",
    "air-filter-housing-holder",
    "air-filter-pipe",
    "air-intake-control-valve",
    "intercooler",
    "turbocharger",
    "turbocharger-gasket",
    "turbocharger-hose",
    "belt-and-chain-brive",
    "belt-pulley",
    "crankshaft-pulley",
    "deflection-pulley",
    "oil-pump chain",
    "timing-belt",
    "timing-belt-kit",
    "timing-case-cover",
    "timing-chain",
    "timing-chain-guide",
    "timing-chain-kit",
    "v-belt",
    "big-end-bearing",
    "camshaft-bush",
    "camshaft-gear",
    "camshaft-seal",
    "carbutrettor",
    "carbutrettor-flange",
    "connecting-rod",
    "control-unit-glow-plug-system",
    "cooler-EGR",
    "cooling-system",
    "coolant",
    "coolant-control-valve",
    "coolant-flange",
    "coolant-pipe-seal",
    "coolant-tank",
    "coolant-tank cap",
    "cooling-fan",
    "radiator",
    "radiator-air-guard",
    "radiator-fan-cowling",
    "radiator-fan-motor",
    "radiator-fan-motor",
    "radiator-fan-resister",
    "thermostat",
    "water-pump",
    "crankcase-gasket",
    "crankshaft-bearing",
    "crankshaft-gear",
    "crankshaft-seal",
    "cylinder-block",
    "crankshaft",
    "cylinder-sleeve",
    "gudgeon-pin",
    "piston",
    "piston-ring",
    "cylinder-head",
    "camshaft",
    "camshaft-kit",
    "cylinder-head-assembly",
    "exhaust-valve",
    "intake-valve",
    "rocker-arm",
    "valve-stem-seal",
    "cylinder-head-cover-gasket",
    "cylinder-head-gasket",
    "cylinder-head-gasket-set",
    "distributor",
    "distributor-cap",
    "distributor-rotor",
    "drain-plug",
    "EGR-valve-gasket",
    "engine-block",
    "engine-bracket",
    "engine-full-gasket-set",
    "engine-manifold",
    "exhaust-manifold",
    "intake-manifold",
    "exhaust-gas recirculation-valve",
    "exhaust-manifold-gasket",
    "fan-clutch",
    "flywheel",
    "fuel-rail",
    "head-shield",
    "idle-control-valve-air-supply",
    "ignition",
    "glow-plug",
    "spark-plug",
    "ignition-cable",
    "ignition-capacitor",
    "ignition-coil",
    "ignition-module",
    "ignition-plug-sleeve-connector",
    "injector-seal",
    "intake-manifold-gasket",
    "intercooler-mounting-bracket",
    "lubrication",
    "engine-oil",
    "engine-oil-sump",
    "oil-baffle-plate",
    "oil-cooler",
    "oil-filter",
    "oil-filter-housing",
    "oil-pump",
    "oil-pump-rotor",
    "oil-pump-strainer",
    "o-ring-set-cylinder-sleeve",
    "oil-cooler-gasket",
    "oil-dipstick",
    "oil-dipstick-funnel",
    "oil-filler-cap-and-seal",
    "OIL-HOSE",
    "OIL-PRESSURE-SWITCH",
    "OIL-PUMP-SEAL-GASKET",
    "OIL-SEPARATOR",
    "OIL-SPRAY-NOZZLE",
    "OIL-SUMP-GASKET",
    "PCV-BREATHER-HOSE",
    "PCV-VALVE",
    "RADIATOR-CAP",
    "RADIATOR-HOSE",
    "SENSOR",
    "CAMSHAFT-SENSOR",
    "COOLANT-TEMPERATURE-SENSOR",
    "CRANKSHAFT-RPM-SENSOR",
    "KNOCK-SENSOR",
    "LAMBDA-SENSOR",
    "MASS-AIR-FLOW-SENSOR",
    "INTAKE-MANIFOLD-PRESSURE-SENSOR",
    "THROTTLE-POSITION-SENSOR",
    "STARTER-MOTOR-ASSEMBLY",
    "THERMOSTAT-GASKET",
    "THROTTLE-BODY-SEAL",
    "TIMING-CASE-GASKET",
    "VACUUM-HOSE",
    "VACUUM-MODULATOR",
    "VACUUM-PUMP",
  ],
  engine_cooling_system: [
    "COOLANT",
    "COOLANT-CONTROL-VALVE",
    "COOLANT-FLANGE",
    "COOLANT-PIP SEAL",
    "COOLANT-TANK",
    "COOLANT-TANK CAP",
    "COOLANT-TEMPERATURE-SENSOR",
    "COOLING-FAN",
    "FAN-CLUTCH",
    "RADIATOR",
    "RADIATOR-CAP",
    "RADIATOR-FAN-COWLING",
    "RADIATOR-FAN-MOTOR",
    "RADIATOR-HOSE",
    "RADIATOR-MOUNTING",
    "THERMOSTAT",
    "THERMOSTAT-GASKET",
    "WATER-PUMP",
    "WATER-PUMP-GASKET",
  ],
  exhaust_system: [
    "catalytic-converter",
    "cooler-EGR",
    "EGR-pipe",
    "EGR-valve",
    "EGR-valve-gasket",
    "exhaust-gas-temperature-sensor",
    "exhaust-manifold",
    "exhaust-manifold-gasket",
    "exhaust-pipe",
    "exhaust-pipe-gasket",
    "exhaust-system-bracket",
    "exhaust-system-rubber-strip",
    "exhaust-tip",
    "intercooler",
    "lambda-sensor",
    "resonator",
    "silencer",
    "turbocharger",
    "turbocharger-gasket",
    "turbocharger-hose",
  ],
  filters: [
    "Air-filter",
    "Automatic-transmission-filter",
    "Cabin-air-filter",
    "Filter-set",
    "Fuel-filter",
    "Fuel-pump-filter",
    "Oil-filter",
    "Receiver-drier",
  ],
  fuel_supply_system: [
    "accelerator-cable",
    "accelerator-pedal",
    "carburettor",
    "carburettor-flange",
    "carburettor-repair-kit",
    "carburettor-solenoid-valve",
    "charcoal-canister",
    "fuel-cap",
    "fuel-filler-door-housing",
    "fuel-filler-hose",
    "fuel-filter",
    "fuel-lid-cable",
    "fuel-lid-opener-lever",
    "fuel-line",
    "fuel-pressure-regulator",
    "fuel-pump",
    "fuel-pump-filter",
    "fuel-pump-seal",
    "fuel-rail",
    "fuel-sensor",
    "fuel-system-bracket",
    "fuel-system-connector",
    "fuel-system-cover",
    "fuel-tank",
    "fuel-valve",
    "injection-system",
    "injection-pump",
    "injector",
    "LPG-and-CNG-system",
    "throttle-body",
  ],
  gaskets_sealing_rings: [
    "Part-Details",
    "bonnet-seal",
    "camshaft-seal",
    "coolant-pipe-seal",
    "crankcase-gasket",
    "crankshaft-seal",
    "cylinder-head-cover-gasket",
    "cylinder-head-gasket",
    "cylinder-head-gasket-set",
    "door-seal",
    "EGR-valve-gasket",
    "engine-full-gasket-set",
    "exhaust-manifold-gasket",
    "exhaust-pipe-gasket",
    "injector-seal",
    "intake-manifold-gasket",
    "o-ring-set-cylinder",
    "sleeve",
    "oil-cooler-gasket",
    "oil-pump-seal-gasket",
    "oil-sump-gasket",
    "seal-fuel-filter",
    "seal-injection-pump",
    "shaft-seal-wheel-hub",
    "thermostat-gasket",
    "throttle-body-seal",
    "timing-case-gasket",
    "transmission-gasket",
    "turbocharger-gasket",
    "water-pump-gasket",
    "window-seal",
  ],
  ignition_glowplug_system: [
    "contact-breaker",
    "control-unit-glow-plug-system",
    "distributor",
    "distributor-cap",
    "distributor-rotor",
    "glow-plug",
    "ignition-cable",
    "ignition-coil",
    "ignition-module",
    "ignition-plug-sleeve-connector",
    "ignition-switch",
    "spark-plug",
  ],
  interior_comfort: [
    "AC-control-unit",
    "accelerator-pedal",
    "air-bag-system",
    "air-vent",
    "armrest",
    "ashtray",
    "brake-light-switch",
    "brake-pedal",
    "cargo area-light",
    "central-locking-system",
    "centre-console",
    "clutch-pedal",
    "cup-holder",
    "dashboard",
    "dashboard-trim",
    "door-handle",
    "door-lock",
    "door-lock-knob",
    "fog-lamp-switch",
    "fuel-lid-opener-lever",
    "gear-selector-mechanism",
    "gear-lever",
    "gear-lever-bellow",
    "gear-lever-knob",
    "glove-box",
    "glove-box-lock",
    "handbrake-warning-light-switch",
    "hazard-light-switch",
    "headliner",
    "headrest",
    "interior-attachment",
    "interior-door-panel",
    "interior-grab handle",
    "interior-mirror",
    "mirror-adjustment-switch",
    "parcel-tray",
    "passenger-compartment-light",
    "pedal",
    "pedal-pad",
    "pedal-repair-kit",
    "power-window motor",
    "seating-system",
    "headrest",
    "seat",
    "seat-adjuster",
    "seat-adjuster-rod",
    "seat-belt",
    "seat-control-switch",
    "seat-cushion",
    "seat-frame",
    "seat-hinge",
    "seat-latch",
    "seat-motor",
    "seat-trim",
    "speedometer-cable",
    "steering-column-switch",
    "sun-visor",
    "sun-visor-holder",
    "window-crank",
    "window-regulator-sliding-shoe",
    "window-switch",
    "window-regulator",
  ],
  lighting: [
    "auxiliary-exterior-light",
    "auxiliary-stop light",
    "bulb",
    "fog-lamp-bulb",
    "H1-bulb",
    "H4-bulb",
    "H7-bulb",
    "headlight-bulb",
    "indicator-bulb",
    "interior-light-bulb",
    "stop-light-bulb",
    "cargo-area-light",
    "daytime-running-light",
    "fog-lamp",
    "fog-lamp components",
    "headlight",
    "headlight-components",
    "indicator",
    "indicator-components",
    "interior-light-components",
    "number-plate-light",
    "passenger-components",
    "tail-light",
  ],
  oils_fluids: [
    "AC-compressor-oil",
    "Additives",
    "Fuel-system-additives",
    "Oil-additives",
    "Brake-fluid",
    "Coolant",
    "Coolant-blue",
    "Coolant-green",
    "Coolant-red",
    "Engine-oil",
    "0W-16_engine-oil",
    "0W-20_engine-oil",
    "0W-30_engine-oil",
    "0W-40_engine-oil",
    "10W-30_engine-oil",
    "10W-40_engine-oil",
    "15W-40_engine-oil",
    "15W-50_engine-oil",
    "20W-40_engine-oil",
    "20W-50_engine-oil",
    "5W-30_engine-oil",
    "5W-40_engine-oil",
    "Exhaust-fluid",
    "Steering-oil",
    "Transmission-oil",
    "Windshield-washer-fluid",
  ],
  pipes_hoses: [
    "Part-Details",
    "air-filter-pipe",
    "brake-hose",
    "brake-pipe",
    "fuel-line",
    "HVAC-hose",
    "oil-hose",
    "PCV-breather-hose",
    "radiator-hose",
    "steering-hose",
    "transmission-hose",
    "turbocharger-hose",
    "vacuum-hose",
  ],
  repair_kits: [
    "Part-Details",
    "AC-repair-kit",
    "accessory-kit-brake-pad",
    "accessory-kit-brake-shoes",
    "brake-caliper-repair-kit",
    "brake-master-cylinder-repair-kit",
    "carburetor-repair-kit",
    "gear-shifter-repair-kit",
    "handbrake-repair-kit",
    "pedal-repair-kit",
    "power-steering-pump repair-kit",
    "steering-motor-repair-kit",
    "steering-gear-repair-kit",
    "suspension-kit",
    "timing-belt-kit",
    "wheel-brake-cylinder-repair-kit",
  ],
  sensors_relays_control_units: [
    "ABS-sensor",
    "AC-control-unit",
    "blower-motor-resistor",
    "brake-light-switch",
    "brake-pad-wear-sensor",
    "cabin-temperature-sensor",
    "camshaft-sensor",
    "control-unit-glow-plug-system",
    "coolant-temperature-sensor",
    "crankshaft-RPM-sensor",
    "exhaust-gas-temperature-sensor",
    "fuel-pressure-regulator",
    "fuel-sensor",
    "horn-relay",
    "knock-sensor",
    "lambda-sensor",
    "mass-air-flow-sensor",
    "oil-pressure-switch",
    "parking-sensor",
    "power-window-motor",
    "intake-manifold-pressure-sensor",
    "starter-motor-solenoid-switch",
    "starter-relay",
    "throttle-position-sensor",
    "transmission-RPM-sensor",
    "window-switch",
  ],
  steering: [
    "centre-rod-assembly",
    "horn-pad",
    "idler-arm",
    "inner-tie-rod",
    "king-pin",
    "pitman-arm",
    "power-steering-motor",
    "power-steering-pump",
    "power-steering-pump repair-kit",
    "power-steering-reservoir",
    "power-steering-reseroir-cap",
    "steering-angle-sensor",
    "steering-bracket",
    "steering-column",
    "steering-column-coupler",
    "steering-column-cover",
    "steering-column-switch",
    "steering-damper",
    "steering-gear",
    "steering-gear-assembly",
    "steering-gear-repair-kit",
    "steering-hose",
    "steering-knuckle",
    "steering-mounting",
    "steering-oil",
    "steering-rack boot",
    "steering-wheel",
    "tie-rod-end",
  ],
  suspension_arms: [
    "air-suspension-boot",
    "arm-bush",
    "beam-axle",
    "compressed-air-system",
    "inner-tim-rod",
    "leaf-spring-shackle",
    "shaft-seal-wheel-hub",
    "shock-absorber-and-strut",
    "front-shock-absorber",
    "front-suspension-strut-assembly",
    "rear-shock-absorber",
    "rear-suspension-strut-assembly",
    "shock-absorber-bearing",
    "shock-absorber-boot",
    "shock-absorber-bump stop",
    "shock-absorber-cap",
    "shock-absorber-mount",
    "shock-absorber-spring",
    "seat",
    "spring",
    "coil-spring-buffer",
    "front-coil-spring",
    "leaf-spring",
    "rear-coil-spring",
    "stabilizer-components",
    "stabilizer",
    "stabilizer-bush",
    "stabilizer-link",
    "steering-knuckle",
    "suspension-bracket",
    "suspension-kit",
    "suspension-links",
    "ball-joint",
    "control-arm",
    "suspension-control-link",
    "suspension-nut-bolt",
    "suspension-seal",
    "tie-rod-end",
  ],
  towbar_parts: ["Towbar", "Towbar-Cover"],
  transmission: [
    "autometic-transmission-filter",
    "autometic-transmission-lining-disc",
    "autometic-transmission-oil-cooler",
    "axle-driveshaft",
    "axle-repair-kit",
    "beam-axle",
    "differential",
    "drive-shaft",
    "drive-shaft-boot",
    "propeller-shaft",
    "stub-axle",
    "clutch",
    "clutch-cable",
    "clutch-disc",
    "clutch-kit",
    "clutch-master-cylinder-reservoir",
    "clutch-pedal",
    "clutch-pressure-plate",
    "clutch-release-bearing",
    "flywheel",
    "gear-selector-mechanism",
    "gear-lever",
    "gear-lever-bellow",
    "gear-lever-knob",
    "gear-shift-cable",
    "gear-shift-fork",
    "gear-shift-shaft",
    "gear-shifter-repair-kit",
    "gearbox",
    "automatic-transmission",
    "manual-transmission",
    "transmission-oil-pump",
    "synchronizer-hub",
    "synchronizer-ring",
    "transaxle",
    "transmission-bracket",
    "transmission-gear",
    "transmission-housing",
    "transmission-shaft",
    "transmission-sleeve",
    "reverse-light-switch",
    "torque-converter",
    "transfer-case-repair-kit",
    "transmission-bearing",
    "transmission-cooler",
    "transmission-gasket",
    "transmission-hose",
    "transmission-oil-sump",
    "transmission-RPM-sensor",
    "transmission-seal",
    "universal-joint",
  ],
  trims: [
    "bumper",
    "front-bumper",
    "rear-bumper",
    "bumper-trim",
    "emblem",
    "front-grill",
    "inner-wiring-panel",
    "interior-mirror",
    "outside-mirror",
    "sill-trim",
    "spoiler",
  ],
  tyres_alloys: [
    "passenger-car-tyres",
    "tubeless-tyres",
    "tyre-valve",
    "13-inch-wheel-cover",
    "14-inch-wheel-cover",
    "15-inch-wheel-cover",
    "16-inch-wheel-cover",
    "17-inch-wheel-cover",
    "14-inch-wheel-rim",
    "15-inch-wheel-rim",
    "16-inch-wheel-rim",
  ],
  universal: [
    "bolt",
    "cable-strop",
    "circlip",
    "clamp",
    "clip",
    "grease",
    "grommet",
    "nut",
    "o-ring",
    "plug",
    "rivet",
    "screw",
    "sealing-substance",
    "spacer",
    "stud",
    "tightening-strap",
    "washer",
  ],
  wheels: [
    "ABS-ring",
    "Drive-shaft",
    "Drive-shaft-boot",
    "Propeller-shaft",
    "Rim",
    "Tyre-valve",
    "Wheel-cap",
    "Wheel-cover",
    "Wheel-nut-bolt",
    "Wheel-rim",
    "Spare-wheel-cover",
    "Wheel-balancing-weight",
    "Wheel-bearing",
    "Front-wheel-bearing",
    "Rear-wheel-bearing",
    "Wheel-hubs",
    "Front-wheel-hub",
    "Rear-wheel-hub",
  ],
  windscreen_cleaning_system: [
    "connector-washer-fluid-pipe",
    "rain-sensor",
    "washer-fluid-pipe",
    "windshield-washer-fluid",
    "wind-shield-washer-jet",
    "windshield-washer-pump",
    "windshield-washer-reservoir",
    "windshield-washer-reservoir-cap",
    "wiper-arm",
    "wiper-arm-cap",
    "wiper-blade",
    "wiper-blade-headlight-cleaning",
    "wiper-blade-rubber",
    "wiper-blade-set",
    "wiper-linkage",
    "wiper-motor",
    "wiper-system-seal",
  ],
};

// manne-pata-hai array-use-kr-skte-hai pr-yahyi mila-hai 😶‍🌫️

add_company_select.addEventListener("change", function () {
  const selectedValue = add_company_select.value;
  add_model_select.innerHTML = add_model_selectOptions[selectedValue];
});

add_partname_select.addEventListener("change", function () {
  const selectedValue = add_partname_select.value;

  let temptattioptions = ``;

  // console.log(add_part_selectoptions[selectedValue]);

  add_part_selectoptions[selectedValue].forEach((string) => {
    const optionn = `<option value=${string}>${string}</option>`;
    temptattioptions += optionn;
  });

  document.querySelector(".add-partcode-select").innerHTML = temptattioptions;

  // add_model_select.innerHTML-= add_model_selectOptions[selectedValue];
});

// _______________________ Job Card _________________________

const abjobCardVehicleMake = document.querySelector("#jobCardVehicleMake");
const abjobCardVehiclemodel = document.querySelector("#jobCardVehicleModel");
const partAB = document.querySelector("#partAB");

abjobCardVehicleMake.addEventListener("change", function () {
  const selectedValue = abjobCardVehicleMake.value;
  abjobCardVehiclemodel.innerHTML = add_model_selectOptions[selectedValue];
});

partAB.addEventListener("change", () => {
  let tempoptions = ``;

  add_part_selectoptions[partAB.value].forEach((string) => {
    const optionns = `<option value=${string}>${string}</option>`;
    tempoptions += optionns;
  });

  document.querySelector("#partJobCard").innerHTML = tempoptions;
});
