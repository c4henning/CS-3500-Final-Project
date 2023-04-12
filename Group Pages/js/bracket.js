const eastSeeds = [
    "Albany Firewolves",
    "Buffalo Bandits",
    "Georgia Swarm",
    "Halifax Thunderbirds",
    "New York Riptide",
    "Philadelphia Wings",
    "Rochester Knighthawks",
    "Toronto Rock"
];

const westSeeds = [
    "Calgary Roughnecks",
    "Colorado Mammoth",
    "Las Vegas Desert Dogs",
    "Panther City Lacrosse Club",
    "San Diego Seals",
    "Saskatchewan Rush",
    "Vancouver Warriors"
];

const wildSeed = eastSeeds.concat(westSeeds).sort();

// Get the select elements
const eastSeed1 = $('#eastSeed1');
const eastSeed2 = $('#eastSeed2');
const eastSeed3 = $('#eastSeed3');
const eastSeed4 = $('#eastSeed4');

const westSeed1 = $('#westSeed1');
const westSeed2 = $('#westSeed2');
const westSeed3 = $('#westSeed3');
const wildCard = $('#wildCard');

const $eastSemifinal1 = $('#eastSemifinal1');
const $eastSemifinal2 = $('#eastSemifinal2');
const $westSemifinal1 = $('#westSemifinal1');
const $westSemifinal2 = $('#westSemifinal2');

const $eastFinal = $('#eastFinal');
const $westFinal = $('#westFinal');
const $champion = $('#champion');

// Populate the select elements with the eastSeeds options
eastSeeds.forEach(seed => {
    eastSeed1.append($('<option>', { value: seed, text: seed }));
    eastSeed2.append($('<option>', { value: seed, text: seed }));
    eastSeed3.append($('<option>', { value: seed, text: seed }));
    eastSeed4.append($('<option>', { value: seed, text: seed }));
});

// Populate the select elements with the westSeeds options
westSeeds.forEach(seed => {
    westSeed1.append($('<option>', { value: seed, text: seed }));
    westSeed2.append($('<option>', { value: seed, text: seed }));
    westSeed3.append($('<option>', { value: seed, text: seed }));
});

wildSeed.forEach(seed => {
    wildCard.append($('<option>', { value: seed, text: seed }));
});

// Populate East Conference Finals dropdowns based on East Conference Semifinals dropdowns
$('#eastSeed1, #eastSeed4').change(function() {
    if (eastSeed1.val() !== '' && eastSeed4.val() !== '') {
        let eastSemifinalists1 = [
            eastSeed1.val(),
            eastSeed4.val()
        ];
        $eastSemifinal1.find('option').remove();
        $eastSemifinal1.append($('<option>', { value: '', text: 'Select a team' }));
        eastSemifinalists1.forEach(seed => {
            $eastSemifinal1.append($('<option>', { value: seed, text: seed }));
        });
        $('#eastSemifinal1').prop('disabled', false);
    } else {
        $('#eastSemifinal1').prop('disabled', true);
        $eastSemifinal1.find('option').remove();
        $eastSemifinal1.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});
$('#eastSeed2, #eastSeed3').change(function() {
    if (eastSeed2.val() !== '' && eastSeed3.val() !== '') {
        let eastSemifinalists1 = [
            eastSeed2.val(),
            eastSeed3.val()
        ];
        $eastSemifinal2.find('option').remove();
        $eastSemifinal2.append($('<option>', { value: '', text: 'Select a team' }));
        eastSemifinalists1.forEach(seed => {
            $eastSemifinal2.append($('<option>', { value: seed, text: seed }));
        });
        $('#eastSemifinal2').prop('disabled', false);
    } else {
        $('#eastSemifinal2').prop('disabled', true);
        $eastSemifinal2.find('option').remove();
        $eastSemifinal2.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});

// Populate West Conference Finals dropdowns based on West Conference Semifinals dropdowns
$('#westSeed1, #wildCard').change(function() {
    if (westSeed1.val() !== '' && wildCard.val() !== '') {
        let westSemifinalists1 = [
            westSeed1.val(),
            wildCard.val()
        ];
        $westSemifinal1.find('option').remove();
        $westSemifinal1.append($('<option>', { value: '', text: 'Select a team' }));
        westSemifinalists1.forEach(seed => {
            $westSemifinal1.append($('<option>', { value: seed, text: seed }));
        });
        $('#westSemifinal1').prop('disabled', false);
    } else {
        $('#westSemifinal1').prop('disabled', true);
        $westSemifinal1.find('option').remove();
        $westSemifinal1.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});
$('#westSeed2, #westSeed3').change(function() {
    if (westSeed2.val() !== '' && westSeed3.val() !== '') {
        let westSemifinalists1 = [
            westSeed2.val(),
            westSeed3.val()
        ];
        $westSemifinal2.find('option').remove();
        $westSemifinal2.append($('<option>', { value: '', text: 'Select a team' }));
        westSemifinalists1.forEach(seed => {
            $westSemifinal2.append($('<option>', { value: seed, text: seed }));
        });
        $('#westSemifinal2').prop('disabled', false);
    } else {
        $('#westSemifinal2').prop('disabled', true);
        $westSemifinal2.find('option').remove();
        $westSemifinal2.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});

// Populate NLL Finals dropdowns based on Conference Finals dropdowns
$('#eastSemifinal1, #eastSemifinal2').change(function() {
    if ($eastSemifinal1.val() !== '' && $eastSemifinal2.val() !== '') {
        let eastFinalists = [
            $eastSemifinal1.val(),
            $eastSemifinal2.val()
        ];
        $eastFinal.find('option').remove();
        $eastFinal.append($('<option>', { value: '', text: 'Select a team' }));
        eastFinalists.forEach(seed => {
            $eastFinal.append($('<option>', { value: seed, text: seed }));
        });
        $('#eastFinal').prop('disabled', false);
    } else {
        $('#eastFinal').prop('disabled', true);
        $eastFinal.find('option').remove();
        $eastFinal.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});
$('#westSemifinal1, #westSemifinal2').change(function() {
    if ($westSemifinal1.val() !== '' && $westSemifinal2.val() !== '') {
        let westFinalists = [
            $westSemifinal1.val(),
            $westSemifinal2.val()
        ];
        $westFinal.find('option').remove();
        $westFinal.append($('<option>', { value: '', text: 'Select a team' }));
        westFinalists.forEach(seed => {
            $westFinal.append($('<option>', { value: seed, text: seed }));
        });
        $('#westFinal').prop('disabled', false);
    } else {
        $('#westFinal').prop('disabled', true);
        $westFinal.find('option').remove();
        $westFinal.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});
$('#eastFinal, #westFinal').change(function() {
    if ($eastFinal.val() !== '' && $westFinal.val() !== '') {
        let nllFinalists = [
            $eastFinal.val(),
            $westFinal.val()
        ];
        $champion.find('option').remove();
        $champion.append($('<option>', { value: '', text: 'Select a team' }));
        nllFinalists.forEach(seed => {
            $champion.append($('<option>', { value: seed, text: seed }));
        });
        $('#champion').prop('disabled', false);
    } else {
        $('#champion').prop('disabled', true);
        $champion.find('option').remove();
        $champion.append($('<option>', { value: '', text: 'Select previous round' }));
    }
});

// Enable submit button if form is completed
$champion.change(function() {
    if ($champion.val() !== '') {
        $('#submitBtn').prop('disabled', false);
        $('#submitPopover').popover('disable');
    } else {
        $('#submitBtn').prop('disabled', true);
        $('#submitPopover').popover('enable');
    }
});
