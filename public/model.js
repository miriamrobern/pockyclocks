var clocks = [];

function clockOfType(type) {
  clock = new Clock()

  switch (type) {
  case "PCHarm":
    clock.name = 'Click to name PC';
    clock.labels = [
      "Unhurt",
      "Less Serious, will heal",
      "Less Serious, will heal",
      "Less Serious, needs attention",
      "More Serious, will deteriorate",
      "More Serious, will deteriorate",
      "Life has become untenable"
    ];
    break;
  case "NPCHarm":
    this.name = 'Click to name NPC';
    this.labels = [
      "Unhurt",
      "Cosmetic Damage, Pain",
      "Wounds, likely fatal",
      "Terrible wounds, fatal",
      "Immediately Fatal, mangling",
      "Bodily Destructive",
      "Chunky Salsa"
    ];
    break;
  case "GangHarm":
    this.name = 'Click to name Gang';
    this.labels = [
      "Fighting Ready",
      "Injuries, some serious",
      "Many injuries, some fatalities",
      "Serious injuries, fatalities",
      "Many fatalities",
      "Few Survivors",
      "No Survivors"
    ];
    break;
  case "VehicleHarm":
    this.name = 'Click to name Vehicle';
    this.labels = [
      "Undamaged",
      "Cosmetic Damage, 0-harm through",
      "Functional Damage, 1-harm through",
      "Serious Damage, 2-harm through",
      "Breakdown, 3-harm through",
      "Total Destruction, full harm through",
      "Total Destruction, full harm through",
    ];
    break;
  case "Legwork":
    this.name = 'Click to name Mission Legwork';
    this.labels = [
      "Everything's Cool",
      "The team is making some noise",
      "The target hears vague rumours",
      "Target hears clear but unconfirmed rumors",
      "Target has reliable intel about the run",
      "Target has reliable intel about the team",
      "The team is precisely identified."
    ];
    break;
  case "Mission":
    this.name = 'Click to name Mission Clock';
    this.labels = [
      "Everything's Cool",
      "Target is wary and suspicious",
      "Target is on edge and alerted",
      "Target takes precautions",
      "Target doubles down",
      "Target plans evacuation",
      "Target evacuates"
    ];
  };
  return clock;
}

function Clock() {
  this.name = 'Click Here to Rename';
  this.labels = [
    "Noon",
    "3 o'clock",
    "6 o'clock",
    "9 o'clock",
    "10 o'clock",
    "11 o'clock",
    "midnight!"
  ];

	this.position = {
		x: 10 + clocks.length * 0.01 * document.documentElement.clientWidth,
		y: 10 + clocks.length * 0.01 * document.documentElement.clientWidth,
	};

	this.colors = {
		fill: 'black',
		empty: 'white',
		stroke: 'black',
		background: 'gray',
		headerBackground: 'black',
		header: 'white',
		text: 'black',
	};

	this.currentSegment = 0;

// 	Random Colors (they look terrible!)
// 	for (i in this.colors) {
// 			var red = Math.random() * 255 << 0;
// 			var green = Math.random() * 255  << 0;
// 			var blue = Math.random() * 255 << 0;
// 			this.colors[i] = "#" + ("0" + red.toString(16)).substr(-2) + ("0" + green.toString(16)).substr(-2) + ("0" + blue.toString(16)).substr(-2);
// 	};
};


Clock.prototype = {
	advance: function() {
		this.currentSegment = Math.min(this.currentSegment + 1,this.labels.length-1)
	},

	rewind: function() {
		this.currentSegment = Math.max(this.currentSegment - 1,0)
	},

	updateLabel: function(segment,newLabel) {
		this.labels[segment] = newLabel;
	},

	updateName: function(newName) {
		this.name = newName;
	},

  setFrom: function(data) {
    this.name = data.name;
    this.currentSegment = data.currentSegment;
    this.labels = data.labels;
    this.position = data.position;
    this.colors = data.colors;
    return this;
  },
};
